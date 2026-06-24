import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import Stripe from "stripe";

const JOBS_DIR = path.join("/tmp", "atom-jobs");

export async function POST(req: NextRequest) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

    if (!secretKey || !webhookSecret) {
      console.error("[Stripe Webhook] Keys not configured");
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
    }

    const stripe = new Stripe(secretKey, { apiVersion: "2026-05-27.dahlia" });
    const rawBody = await req.text();
    const sig = req.headers.get("stripe-signature");

    if (!sig) {
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err: any) {
      console.error("[Stripe Webhook] Signature verification failed:", err.message);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const email = session.customer_email || session.metadata?.customer_email || "unknown@checkout.com";
        const tier = session.metadata?.tier || "premium";
        const product = session.metadata?.product || "Atom Video";
        const template = session.metadata?.template || "custom";
        const formDataRaw = session.metadata?.form_data;
        const formData = formDataRaw ? JSON.parse(formDataRaw) : {};

        // Ensure jobs directory exists
        if (!existsSync(JOBS_DIR)) {
          await mkdir(JOBS_DIR, { recursive: true });
        }

        const job = {
          id: `atom-${session.id.slice(-8)}-${Date.now().toString(36)}`,
          template,
          data: formData,
          email,
          tier,
          status: "pending" as const,
          stripeSessionId: session.id,
          amountPaid: session.amount_total,
          createdAt: new Date().toISOString(),
        };

        await writeFile(
          path.join(JOBS_DIR, `${job.id}.json`),
          JSON.stringify(job, null, 2)
        );

        console.log(`[Stripe Webhook] Job created: ${job.id} — ${tier} — ${email}`);
        break;
      }

      case "checkout.session.expired": {
        console.log(`[Stripe Webhook] Session expired: ${event.data.object.id}`);
        break;
      }

      default: {
        console.log(`[Stripe Webhook] Unhandled event: ${event.type}`);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[Stripe Webhook] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}