import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const JOBS_DIR = path.join(process.env.ATOM_JOBS_DIR || "/tmp", "atom-jobs");
const WEBHOOK_URL = process.env.ATOM_WEBHOOK_URL || "";

interface AtomJob {
  id: string;
  template: string;
  data: Record<string, unknown>;
  email: string;
  tier?: string;
  photos: string[]; // paths to saved photo files
  status: "pending" | "processing" | "completed" | "failed";
  createdAt: string;
  completedAt?: string;
  downloadUrl?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { template, data, email, tier } = body;

    if (!template || !data || !email) {
      return NextResponse.json({ error: "template, data, and email are required" }, { status: 400 });
    }

    // Validate photos
    const photos: string[] = data.photos || [];
    if (!Array.isArray(photos) || photos.length < 4) {
      return NextResponse.json({ error: "At least 4 photos are required" }, { status: 400 });
    }

    // Create jobs directory
    if (!existsSync(JOBS_DIR)) {
      await mkdir(JOBS_DIR, { recursive: true });
    }

    const jobId = `atom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const jobDir = path.join(JOBS_DIR, jobId);
    await mkdir(jobDir, { recursive: true });

    // Save each photo as a separate file (strip base64 prefix)
    const photoPaths: string[] = [];
    for (let i = 0; i < photos.length; i++) {
      const b64 = photos[i].replace(/^data:image\/\w+;base64,/, "");
      const ext = photos[i].startsWith("data:image/png") ? "png" : "jpg";
      const photoPath = path.join(jobDir, `photo-${i + 1}.${ext}`);
      await writeFile(photoPath, Buffer.from(b64, "base64"));
      photoPaths.push(photoPath);
    }

    // Strip photos from data before saving clean job JSON
    const { photos: _, ...cleanData } = data;

    const job: AtomJob = {
      id: jobId,
      template,
      data: cleanData,
      email,
      tier: tier || "basic",
      photos: photoPaths,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await writeFile(
      path.join(jobDir, "job.json"),
      JSON.stringify(job, null, 2)
    );

    console.log(`[Atom] New job created: ${jobId} — ${template} — ${email} — ${photoPaths.length} photos`);

    // Forward to local processor via webhook
    if (WEBHOOK_URL) {
      try {
        const webhookPayload = {
          jobId,
          template,
          data: cleanData,
          email,
          photos: data.photos.slice(0, 10), // send base64 photos (max 10)
        };
        const wh = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(webhookPayload),
          signal: AbortSignal.timeout(15000),
        });
        if (wh.ok) {
          console.log(`[Atom] Webhook forwarded: ${jobId}`);
        } else {
          console.error(`[Atom] Webhook failed: ${wh.status}`);
        }
      } catch (whErr) {
        console.error(`[Atom] Webhook error for ${jobId}:`, whErr);
        // Don't fail the request — webhook is best-effort
      }
    }

    return NextResponse.json({
      success: true,
      jobId,
      message: "Your video is being processed. You'll receive an email within 24 hours with your download link.",
    });
  } catch (err) {
    console.error("[Atom] Submit error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const jobId = searchParams.get("id");

  if (!jobId) {
    return NextResponse.json({ error: "Job ID required" }, { status: 400 });
  }

  try {
    const jobPath = path.join(JOBS_DIR, jobId, "job.json");
    if (!existsSync(jobPath)) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const { readFile } = await import("fs/promises");
    const job: AtomJob = JSON.parse(await readFile(jobPath, "utf-8"));

    return NextResponse.json({ job });
  } catch (err) {
    console.error("[Atom] Get job error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}