import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const JOBS_DIR = path.join("/tmp", "atom-jobs");

interface AtomJob {
  id: string;
  template: string;
  data: Record<string, unknown>;
  email: string;
  tier?: string;
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

    // Create jobs directory
    if (!existsSync(JOBS_DIR)) {
      await mkdir(JOBS_DIR, { recursive: true });
    }

    const job: AtomJob = {
      id: `atom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      template,
      data,
      email,
      tier: tier || "basic",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await writeFile(
      path.join(JOBS_DIR, `${job.id}.json`),
      JSON.stringify(job, null, 2)
    );

    console.log(`[Atom] New job created: ${job.id} — ${template} — ${email}`);

    return NextResponse.json({
      success: true,
      jobId: job.id,
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
    const jobPath = path.join(JOBS_DIR, `${jobId}.json`);
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