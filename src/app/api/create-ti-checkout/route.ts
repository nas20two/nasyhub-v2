import { NextRequest, NextResponse } from "next/server";

const STRIPE_API = "https://api.stripe.com/v1";

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }

  const body = await req.json();
  const { email, company } = body;
  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  try {
    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("success_url", `${req.nextUrl.origin}/ti-payment/success?session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", `${req.nextUrl.origin}/ti-payment`);
    params.append("line_items[0][price_data[currency]]", "usd");
    params.append("line_items[0][price_data[product_data[name]]", "Tender Intelligence — Evaluation");
    params.append("line_items[0][price_data[product_data[description]]", "Automated RFT/submission assessment with fraud risk cross-reference");
    params.append("line_items[0][price_data[unit_amount]]", "4900");
    params.append("line_items[0][quantity]", "1");
    params.append("customer_email", email);
    params.append("metadata[type]", "ti_evaluation");
    params.append("metadata[company]", company || "");
    params.append("metadata[source]", "nasyhub_payment_page");

    const response = await fetch(`${STRIPE_API}/checkout/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || "Stripe API error");
    }

    const session = await response.json();
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("TI checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}