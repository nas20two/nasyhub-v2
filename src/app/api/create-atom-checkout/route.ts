import { NextRequest, NextResponse } from "next/server";

const STRIPE_API = "https://api.stripe.com/v1";

const TIER_PRICES: Record<string, { amount: number; name: string; desc: string }> = {
  basic: { amount: 1900, name: "Atom Basic", desc: "Template visuals + generated music. 60-second MP4 delivered in 24h." },
  premium: { amount: 3900, name: "Atom Premium", desc: "Custom artwork + genre-matched music + 4-scene cinematic." },
  pro: { amount: 6900, name: "Atom Pro", desc: "Two 60-second shorts + still frames + captions + social copy." },
};

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }

  const body = await req.json();
  const { email, product, tier, template, formData } = body;

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }
  if (!product) {
    return NextResponse.json({ error: "Product description required" }, { status: 400 });
  }

  const tierConfig = TIER_PRICES[tier || "premium"] || TIER_PRICES.premium;

  try {
    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("success_url", `${req.nextUrl.origin}/atom/success?session_id={CHECKOUT_SESSION_ID}&tier=${tier || "premium"}`);
    params.append("cancel_url", `${req.nextUrl.origin}/atom`);
    params.append("line_items[0][price_data[currency]]", "usd");
    params.append("line_items[0][price_data[product_data[name]]", `Atom — ${tierConfig.name}`);
    params.append("line_items[0][price_data[product_data[description]]", `"${product}" — ${tierConfig.desc}`);
    params.append("line_items[0][price_data[unit_amount]]", String(tierConfig.amount));
    params.append("line_items[0][quantity]", "1");
    params.append("customer_email", email);
    params.append("metadata[type]", "atom_short");
    params.append("metadata[tier]", tier || "premium");
    params.append("metadata[product]", product);
    params.append("metadata[template]", template || "custom");
    params.append("metadata[source]", "atom_landing_page");

    // Pass form data if provided (limit to 1000 chars to avoid Stripe metadata limits)
    if (formData) {
      const formDataStr = JSON.stringify(formData);
      params.append("metadata[form_data]", formDataStr.slice(0, 1000));
    }

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
    console.error("Atom checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}