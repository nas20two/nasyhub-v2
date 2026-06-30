import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = process.env.INSIGHTS_WEBHOOK_URL || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, industry } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const payload = {
      email: email.trim(),
      industry: industry || "",
      source: "ai-insights",
      timestamp: new Date().toISOString(),
    };

    console.log(`[Insights Signup] New lead: ${payload.email} (industry: ${payload.industry || "none"})`);

    // Send email notification via Resend
    if (RESEND_API_KEY) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "AI Insights <leads@nasyhub.com>",
            to: "nasir418ece@gmail.com",
            subject: `🔔 New AI Insights Lead: ${payload.email}`,
            html: `
              <h2>New AI Insights Subscriber</h2>
              <table style="border-collapse:collapse;width:100%;max-width:500px;">
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${payload.email}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Industry</td><td style="padding:8px;border:1px solid #ddd;">${payload.industry || "Not specified"}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Source</td><td style="padding:8px;border:1px solid #ddd;">${payload.source}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Time</td><td style="padding:8px;border:1px solid #ddd;">${payload.timestamp}</td></tr>
              </table>
              <p style="margin-top:16px;color:#666;font-size:13px;">
                Follow up: <a href="mailto:${payload.email}">${payload.email}</a>
              </p>
            `,
          }),
          signal: AbortSignal.timeout(15000),
        });
        if (res.ok) {
          console.log(`[Insights Signup] Email notification sent for: ${payload.email}`);
        } else {
          const err = await res.text();
          console.error(`[Insights Signup] Resend failed (${res.status}):`, err);
        }
      } catch (emailErr) {
        console.error(`[Insights Signup] Resend error:`, emailErr);
      }
    }

    // Forward to n8n webhook (best-effort, if configured)
    if (WEBHOOK_URL) {
      try {
        const wh = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(15000),
        });
        if (wh.ok) {
          console.log(`[Insights Signup] Webhook forwarded: ${payload.email}`);
        } else {
          console.error(`[Insights Signup] Webhook failed: ${wh.status}`);
        }
      } catch (whErr) {
        console.error(`[Insights Signup] Webhook error:`, whErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed! Check your inbox for the next briefing.",
    });
  } catch (err) {
    console.error("[Insights Signup] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
