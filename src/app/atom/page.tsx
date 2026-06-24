"use client";

import { motion } from "framer-motion";
import { Sparkles, Music, Film, ArrowRight, Building2, Heart, Stethoscope, MoreHorizontal, Check, AtomIcon, Volume2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Premium Atom Theme — Blue → Orange gradient signature
const atomStyles = `
.atom-orbits { position: fixed; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
.atom-orbit { position: absolute; top: 50%; left: 50%; border: 1px solid rgba(0, 110, 254, 0.06); border-radius: 50%; transform-origin: center; animation: atom-spin linear infinite; }
.atom-orbit-1 { width: 600px; height: 200px; margin: -100px 0 0 -300px; animation-duration: 30s; }
.atom-orbit-2 { width: 200px; height: 600px; margin: -300px 0 0 -100px; animation-duration: 40s; animation-direction: reverse; }
.atom-orbit-3 { width: 500px; height: 350px; margin: -175px 0 0 -250px; animation-duration: 35s; transform: rotate(45deg); }
.atom-particle { position: absolute; width: 4px; height: 4px; background: #006efe; border-radius: 50%; box-shadow: 0 0 8px 2px rgba(0, 110, 254, 0.5); animation: atom-drift linear infinite; }
.atom-particle:nth-child(1) { top: 0; left: 50%; animation-duration: 30s; }
.atom-particle:nth-child(2) { top: 50%; left: 0; animation-duration: 40s; animation-delay: -10s; }
.atom-particle:nth-child(3) { bottom: 0; left: 50%; animation-duration: 35s; animation-delay: -20s; }
@keyframes atom-spin { to { transform: rotate(360deg); } }
@keyframes atom-drift {
  0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
  25% { transform: translate(150px, -80px) scale(1.5); opacity: 1; }
  50% { transform: translate(0, -160px) scale(0.8); opacity: 0.6; }
  75% { transform: translate(-150px, -80px) scale(1.2); opacity: 1; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
}

/* Card orbital hover */
.atom-card { position: relative; transition: all 0.3s ease; }
.atom-card::before { content: ''; position: absolute; inset: -1px; border-radius: inherit; background: conic-gradient(from 0deg, transparent, rgba(0,110,254,0.25), transparent, rgba(232,100,44,0.15), transparent); opacity: 0; transition: opacity 0.4s ease; mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask-composite: exclude; padding: 1px; }
.atom-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,110,254,0.08); }
.atom-card:hover::before { opacity: 1; animation: atom-spin 3s linear infinite; }

/* Orange-accented card variant */
.atom-card-orange { position: relative; transition: all 0.3s ease; }
.atom-card-orange::before { content: ''; position: absolute; inset: -1px; border-radius: inherit; background: conic-gradient(from 0deg, transparent, rgba(232,100,44,0.25), transparent, rgba(0,110,254,0.15), transparent); opacity: 0; transition: opacity 0.4s ease; mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask-composite: exclude; padding: 1px; }
.atom-card-orange:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(232,100,44,0.08); }
.atom-card-orange:hover::before { opacity: 1; animation: atom-spin 3s linear infinite; }

.atom-btn { position: relative; overflow: hidden; }
.atom-btn::after { content: ''; position: absolute; inset: -50%; background: conic-gradient(from 0deg, transparent, rgba(0,110,254,0.12), transparent, rgba(232,100,44,0.08), transparent); animation: atom-spin 4s linear infinite; opacity: 0; transition: opacity 0.3s; }
.atom-btn:hover::after { opacity: 1; }

/* Gradient text utility */
.atom-gradient-text { background: linear-gradient(135deg, #006efe, #4a8eff, #e8642c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

/* Video ring decoration */
.atom-video-ring { position: relative; }
.atom-video-ring::after { content: ''; position: absolute; inset: -3px; border-radius: inherit; border: 1px solid rgba(0,110,254,0.12); animation: atom-spin 20s linear infinite; clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%); }
`;

const templates = [
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    description: "Turn property listings into cinematic 60-second videos. For sale, rent, and development.",
    accent: "blue",
    status: "active" as const,
    href: "/atom/real-estate",
    badge: "New",
  },
  {
    id: "wellness",
    name: "Wellness",
    icon: Heart,
    description: "Brand promos for reiki, yoga, massage, and holistic health practitioners.",
    accent: "orange",
    status: "active" as const,
    href: "/atom/wellness",
    badge: "New",
  },
  {
    id: "healthcare",
    name: "Health Education",
    icon: Stethoscope,
    description: "Patient-friendly explainer videos for clinics, hospitals, and health services.",
    accent: "blue",
    status: "active" as const,
    href: "/atom/healthcare",
    badge: "",
  },
  {
    id: "more",
    name: "More Templates",
    icon: MoreHorizontal,
    description: "E-commerce, events, food & bev — more industry templates on the way.",
    accent: "muted",
    status: "coming" as const,
    href: "#",
    badge: "Coming Soon",
  },
];

const steps = [
  {
    icon: Sparkles,
    title: "Pick a Template",
    desc: "Choose your industry — real estate, wellness, healthcare, or more. Each template has fields tailored to your needs.",
  },
  {
    icon: Volume2,
    title: "Fill the Form",
    desc: "Enter your details and upload assets in about 2 minutes. Industry-specific fields make it fast.",
  },
  {
    icon: Film,
    title: "AI Generates Your Video",
    desc: "Atom assembles a cinematic 60-second video with matched music, motion, and branding. Delivered to your inbox within 24 hours.",
  },
];

const tiers = [
  {
    name: "Basic",
    price: 19,
    desc: "Template visuals + generated music. 60-second MP4 delivered in 24h.",
    features: [
      "Any industry template",
      "Template motion graphics",
      "AI-generated background music",
      "1080×1920 vertical MP4",
      "Email delivery",
    ],
    priceId: "basic",
  },
  {
    name: "Premium",
    price: 39,
    desc: "Custom artwork + genre-matched music + 4-scene cinematic structure.",
    features: [
      "Everything in Basic, plus:",
      "Custom artwork direction",
      "Genre-matched soundtrack",
      "4-scene cinematic arc",
      "Title cards + transitions",
    ],
    priceId: "premium",
    popular: true,
  },
  {
    name: "Pro",
    price: 69,
    desc: "Two 60-second shorts + still frames + captions + social copy.",
    features: [
      "Everything in Premium, plus:",
      "2× 60-second videos",
      "3 additional still frames per video",
      "Auto-generated captions",
      "Social media copy (TikTok, IG, YT)",
      "Priority 12h delivery",
    ],
    priceId: "pro",
  },
];

export default function AtomPage() {
  const [videoTab, setVideoTab] = useState("promo");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [tier, setTier] = useState("premium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Atom — AI Video Generator | Real Estate, Wellness & Healthcare Templates";
  }, []);

  const handleCheckout = async () => {
    if (!email) { setError("Email is required"); return; }
    if (!product) { setError("Product description is required"); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/create-atom-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product, tier }),
      });
      const data = await res.json();
      if (data.url) { window.location.href = data.url; }
      else { setError(data.error || "Something went wrong"); }
    } catch { setError("Failed to create checkout session"); }
    finally { setLoading(false); }
  };

  return (
    <>
      <style>{atomStyles}</style>
      <div className="atom-orbits">
        <div className="atom-orbit atom-orbit-1"><div className="atom-particle"></div></div>
        <div className="atom-orbit atom-orbit-2"><div className="atom-particle"></div></div>
        <div className="atom-orbit atom-orbit-3"><div className="atom-particle"></div></div>
      </div>

      <main className="min-h-screen bg-background flex flex-col items-center px-4 relative overflow-hidden">
        <div className="max-w-5xl w-full relative z-10 pt-20">
          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-20"
          >
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
              ← NaSy Hub
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/atom#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/atom#templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Templates</Link>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <AtomIcon className="w-3.5 h-3.5" style={{ color: '#e8642c' }} /> atom.nasyhub.com
              </span>
            </div>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium mb-6">
              <AtomIcon className="w-3.5 h-3.5" /> The smallest unit of marketing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 leading-tight">
              Your content.
              <br />
              <span className="atom-gradient-text">60 seconds. Any industry.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Pick a template, fill a form, and let AI generate a cinematic 60-second video
              with matched music, motion, and branding. No editing. No studio. Just results.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-card/80 border border-border/60 text-sm text-muted-foreground">
              <span className="text-blue-400 text-lg">⚡</span>
              <span>
                How do I know? Because <strong className="text-foreground">this page was built by AI</strong>.
                Atom eats its own dogfood.
              </span>
            </div>
          </motion.div>

          {/* —— Template Grid —— */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-24 scroll-mt-20"
            id="templates"
          >
            <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Choose Your Template</h2>
            <p className="text-muted-foreground text-sm text-center mb-10">Each template has fields tailored to your industry.</p>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {templates.map((template, i) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  {template.status === "active" ? (
                    <Link
                      href={template.href}
                      className={`block relative p-6 rounded-2xl border transition-all ${
                        template.accent === "orange"
                          ? "border-orange-500/20 bg-card hover:border-orange-500/40 atom-card-orange"
                          : "border-blue-500/15 bg-card hover:border-blue-500/35 atom-card"
                      }`}
                    >
                      {template.badge && (
                        <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg">
                          {template.badge}
                        </div>
                      )}
                      <template.icon
                        className="w-8 h-8 mb-3"
                        style={{ color: template.accent === "orange" ? '#e8642c' : '#006efe' }}
                      />
                      <h3 className="text-lg font-semibold text-foreground mb-1">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium"
                        style={{ color: template.accent === "orange" ? '#e8642c' : '#006efe' }}
                      >
                        Create a video <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ) : (
                    <div className="relative p-6 rounded-2xl border border-border bg-card/30 opacity-50 cursor-not-allowed">
                      <template.icon className="w-8 h-8 mb-3 text-muted-foreground" />
                      <h3 className="text-lg font-semibold text-foreground mb-1">{template.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                      <span className="inline-block text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {template.badge}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* —— How It Works —— */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold text-center mb-2 text-foreground">How It Works</h2>
            <p className="text-muted-foreground text-sm text-center mb-10">Three steps from template to video.</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
                  className="atom-card relative p-6 rounded-2xl border border-blue-500/10 bg-card/60 backdrop-blur-sm text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(0,110,254,0.1)] to-[rgba(232,100,44,0.1)] flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-sm font-bold mb-1 atom-gradient-text">STEP {i + 1}</div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* —— Made By Atom (Demo Videos) —— */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-24 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">Made By Atom</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
              The music, the visuals, the motion — all AI, all Atom. These demos were generated
              by the same pipeline that makes yours.
            </p>

            {/* Video Tabs */}
            <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
              <button
                onClick={() => setVideoTab("promo")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  videoTab === "promo"
                    ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                🎬 Full Promo — 60s
              </button>
              <button
                onClick={() => setVideoTab("ai")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  videoTab === "ai"
                    ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                ✨ AI Motion — 8s
              </button>
              <button
                onClick={() => setVideoTab("reiki-hi")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  videoTab === "reiki-hi"
                    ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                🧘 Client: Reiki (हिन्दी)
              </button>
              <button
                onClick={() => setVideoTab("reiki-en")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  videoTab === "reiki-en"
                    ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                🧘 Client: Reiki (English)
              </button>
            </div>

            <div className="atom-video-ring max-w-sm mx-auto rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/5">
              {videoTab === "promo" ? (
                <video key="promo" className="w-full h-auto" controls playsInline poster="/atom-brand-card.jpg">
                  <source src="/atom-promo.mp4" type="video/mp4" />
                </video>
              ) : videoTab === "ai" ? (
                <video key="ai-motion" className="w-full h-auto" controls playsInline poster="/atom-brand-card.jpg">
                  <source src="/atom-ai-motion.mp4" type="video/mp4" />
                </video>
              ) : videoTab === "reiki-hi" ? (
                <video key="reiki-hi" className="w-full h-auto" controls playsInline>
                  <source src="/reiki-promo-hindi.mp4" type="video/mp4" />
                </video>
              ) : (
                <video key="reiki-en" className="w-full h-auto" controls playsInline>
                  <source src="/reiki-promo-english.mp4" type="video/mp4" />
                </video>
              )}
            </div>

            {videoTab !== "reiki-en" ? (
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-[rgba(0,110,254,0.1)] to-[rgba(232,100,44,0.1)] text-blue-400">
                🥩 Eating our own dogfood — Atom made this
              </div>
            ) : (
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-[rgba(0,110,254,0.1)] to-[rgba(232,100,44,0.1)] text-blue-400">
                🤝 Real client work — Atom delivered
              </div>
            )}
          </motion.div>

          {/* —— Pricing —— */}
          <motion.div
            id="pricing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-24 scroll-mt-20"
          >
            <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Simple Pricing</h2>
            <p className="text-muted-foreground text-sm text-center mb-10">
              One product. One short. One price. No subscription. Same price for any template.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {tiers.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.6 }}
                  className={`atom-card relative p-6 rounded-2xl border transition-all ${
                    t.popular
                      ? "border-blue-500/30 bg-card shadow-xl shadow-blue-500/5"
                      : "border-border bg-card/60 hover:border-blue-500/20"
                  }`}
                >
                  {t.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-foreground mb-1">{t.name}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-foreground">${t.price}</span>
                    <span className="text-muted-foreground text-sm"> / short</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: t.popular ? '#e8642c' : '#006efe' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {t.popular ? (
                    <button
                      onClick={() => { setTier(t.priceId); document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="atom-btn w-full py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 transition-all shadow-lg"
                    >
                      Get Started
                    </button>
                  ) : (
                    <button
                      onClick={() => { setTier(t.priceId); document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="w-full py-2.5 rounded-lg text-sm font-medium border border-border text-foreground hover:bg-card transition-all"
                    >
                      Get Started
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* —— Checkout —— */}
          <motion.div
            id="checkout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mb-24 max-w-lg mx-auto w-full"
          >
            <div className="atom-card p-8 rounded-2xl border border-blue-500/15 bg-card/80 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-foreground mb-1">Order Your Short</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill this in. Atom does the rest. Choose any template — same price.
              </p>

              {/* Tier selector */}
              <div className="flex gap-2 mb-6">
                {tiers.map((t) => (
                  <button
                    key={t.priceId}
                    onClick={() => setTier(t.priceId)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all ${
                      tier === t.priceId
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t.name} ${t.price}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Your email *</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Product description *</label>
                  <textarea
                    placeholder="Describe what you need a video for — property address, service name, condition, etc."
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="atom-btn w-full mt-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 disabled:opacity-50 transition-all shadow-lg"
              >
                {loading
                  ? "Redirecting to Stripe..."
                  : `Pay $${tiers.find((t) => t.priceId === tier)?.price} — Get Your Short`
                }
              </button>

              <p className="text-xs text-muted-foreground text-center mt-3">
                Delivered within 24 hours. No subscription. Cancel anytime before delivery.
              </p>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-center pb-12"
          >
            <p className="text-muted-foreground text-xs mb-2">
              Atom is a NaSy Hub product. Made with AI, for everyone.
            </p>
            <Link href="/" className="text-xs hover:underline" style={{ color: '#e8642c' }}>
              ← Back to NaSy Hub
            </Link>
          </motion.footer>
        </div>
      </main>
    </>
  );
}