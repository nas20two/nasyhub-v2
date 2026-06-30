"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Newspaper,
  Cpu,
  TrendingUp,
  Target,
  Star,
  Sparkles,
  Clock,
  Zap,
  Globe,
  MessageSquare,
  Copy,
  Check,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { newsItems } from "./news-data";

const tools = [
  {
    title: "AI Explainy",
    url: "https://ai-explainy-v2.vercel.app",
    description: "Jargon Buster, Dev Companion, Repo Explainer — three free AI developer tools in one.",
  },
  {
    title: "AI Readiness Audit",
    url: "https://ai-audit-now.com",
    description: "Free AI maturity assessment. Discover your organisation's readiness and get a personalised roadmap.",
  },
  {
    title: "Tender Intelligence",
    url: "https://tenders.nasyhub.com",
    description: "Government tender monitoring powered by AI. Never miss a relevant opportunity again.",
  },
  {
    title: "Agent Builder",
    url: "https://agent-builder.nasyhub.com",
    description: "Build custom AI agents without code. For members and enterprise clients.",
  },
];

const models = [
  { name: "GPT-5.5 Instant", provider: "OpenAI", status: "Live", color: "text-green-600 dark:text-green-400" },
  { name: "Gemini 3.1 Pro", provider: "Google", status: "Live", color: "text-green-600 dark:text-green-400" },
  { name: "Claude 4 Sonnet", provider: "Anthropic", status: "Live", color: "text-green-600 dark:text-green-400" },
  { name: "DeepSeek V4 Flash", provider: "DeepSeek", status: "Live (via OpenRouter)", color: "text-green-600 dark:text-green-400" },
  { name: "Gemini 3.1 Flash-Lite", provider: "Google", status: "New", color: "text-amber-600 dark:text-amber-400" },
];

const marketStats = [
  { label: "AI Market", value: "$1.3T by 2030", icon: TrendingUp },
  { label: "Top Skill", value: "Agent Orchestration", icon: Target },
  { label: "Hot Role", value: "AI Solutions Engineer", icon: Star },
];

const categoryColors: Record<string, string> = {
  LLM: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Market: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  Agent: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Security: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  Hardware: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "Tool Launch": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
};

function ShareButton() {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "https://www.nasyhub.com/ai/insights";
  const text = "AI Insights — curated AI news, tool launches, and market trends";

  const shareLinkedIn = useCallback(() => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank", "width=600,height=400");
  }, [url]);

  const shareTwitter = useCallback(() => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank", "width=600,height=400");
  }, [url, text]);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [url]);

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={shareLinkedIn}
        className="p-2 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        <Globe className="w-4 h-4" />
      </button>
      <button
        onClick={shareTwitter}
        className="p-2 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
        title="Share on Twitter/X"
        aria-label="Share on Twitter/X"
      >
        <MessageSquare className="w-4 h-4" />
      </button>
      <button
        onClick={copyLink}
        className="p-2 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
        title={copied ? "Copied!" : "Copy link"}
        aria-label="Copy page link"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}

const industries = [
  { value: "", label: "Your industry (optional)" },
  { value: "government", label: "Government" },
  { value: "healthcare", label: "Healthcare" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "finance", label: "Finance & Insurance" },
  { value: "technology", label: "Technology" },
  { value: "education", label: "Education" },
  { value: "other", label: "Other" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.nasyhub.com/ai/insights",
      "name": "AI Insights — Curated AI News & Market Trends",
      "description": "Weekly AI news, LLM releases, tool launches, and market trends — curated by a practising AI Solutions Engineer.",
    },
    ...newsItems.map((item) => ({
      "@type": "NewsArticle",
      "headline": item.headline,
      "description": item.summary,
      "datePublished": item.date,
      "author": { "@type": "Person", "name": "NaSy Hub" },
    })),
  ],
};

export default function AIInsightsPage() {
  const [leadEmail, setLeadEmail] = useState("");
  const [leadIndustry, setLeadIndustry] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setLeadStatus("loading");
    try {
      const res = await fetch("/api/insights-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: leadEmail, industry: leadIndustry }),
      });
      if (!res.ok) throw new Error("Failed");
      setLeadStatus("success");
    } catch {
      setLeadStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/ai" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            AI Solutions
          </Link>
          <span className="font-semibold text-foreground">AI Insights</span>
          <ShareButton />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/3" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-foreground">
              AI Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Curated AI news, tool launches, and market trends — handpicked weekly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center bg-secondary/50 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />Updated weekly
              </span>
              <span className="flex items-center bg-secondary/50 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 mr-2" />5+ sources tracked
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live AI Tools */}
      <section className="py-20 px-4 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              <Zap className="w-6 h-6 inline-block mr-2 -mt-1 text-primary" />
              Live AI Tools
            </h2>
            <p className="text-muted-foreground">Free tools built and maintained by NaSy Hub</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.a
                key={tool.title}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all shadow-sm hover:shadow-md cursor-pointer block group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{tool.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground text-sm">{tool.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest AI News Feed */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              <Newspaper className="w-6 h-6 inline-block mr-2 -mt-1 text-primary" />
              Latest AI News
            </h2>
            <p className="text-muted-foreground">Top stories from the past week</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <motion.a
                key={item.headline}
                href={`https://www.google.com/search?q=${encodeURIComponent(item.headline)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors shadow-sm hover:shadow-md cursor-pointer block group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      categoryColors[item.category] || "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground leading-snug">
                  {item.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Model Watch */}
      <section className="py-20 px-4 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              <Cpu className="w-6 h-6 inline-block mr-2 -mt-1 text-primary" />
              LLM Model Watch
            </h2>
            <p className="text-muted-foreground">Track the latest frontier models and their status</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl border border-border overflow-hidden shadow-sm">
              {/* Header row */}
              <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-muted/50 border-b border-border text-sm font-semibold text-muted-foreground">
                <div>Model</div>
                <div>Provider</div>
                <div className="text-right">Status</div>
              </div>
              {/* Data rows */}
              {models.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className={`grid grid-cols-3 gap-4 px-6 py-4 ${
                    index % 2 === 0 ? "bg-card/30" : "bg-card/60"
                  } ${
                    index < models.length - 1 ? "border-b border-border" : ""
                  } hover:bg-card/80 transition-colors`}
                >
                  <div className="font-medium text-foreground text-sm">{model.name}</div>
                  <div className="text-muted-foreground text-sm">{model.provider}</div>
                  <div className={`text-right text-sm font-medium ${model.color}`}>{model.status}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Pulse */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              <TrendingUp className="w-6 h-6 inline-block mr-2 -mt-1 text-primary" />
              Market Pulse
            </h2>
            <p className="text-muted-foreground">Key signals and trends shaping the AI landscape</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 rounded-xl border border-border bg-card/50 hover:bg-card transition-all shadow-sm hover:shadow-md text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-20 px-4 border-t border-border bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Get AI Briefing in Your Inbox
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Weekly curated AI news, LLM releases, and market trends.
              Zero spam. Unsubscribe anytime.
            </p>
            {leadStatus === "success" ? (
              <p className="text-lg text-green-600 font-medium">
                ✓ Subscribed! Check your inbox for the next briefing.
              </p>
            ) : (
              <form
                onSubmit={handleLeadSubmit}
                className="max-w-md mx-auto flex flex-col gap-3"
              >
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                    required
                    disabled={leadStatus === "loading"}
                  />
                  <button
                    type="submit"
                    disabled={leadStatus === "loading" || !leadEmail}
                    className="shrink-0 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
                  >
                    {leadStatus === "loading" ? "..." : "Subscribe"}
                  </button>
                </div>
                <select
                  value={leadIndustry}
                  onChange={(e) => setLeadIndustry(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  disabled={leadStatus === "loading"}
                >
                  {industries.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {leadStatus === "error" && (
                  <p className="text-sm text-red-500">Something went wrong. Try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-secondary/30 text-center text-muted-foreground text-sm">
        <Link href="/ai" className="hover:text-foreground transition-colors">
          ← Back to AI Solutions
        </Link>
      </footer>
    </main>
  );
}