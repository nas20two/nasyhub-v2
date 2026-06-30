"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Cpu, Music, Smartphone, Mail, ArrowRight, Newspaper, FileCheck, AtomIcon,
} from "lucide-react";
import Link from "next/link";
import { newsItems } from "./ai/insights/news-data";

const sections = [
  {
    href: "/atom",
    icon: AtomIcon,
    title: "Atom",
    description: "Your product. 60 seconds. Done. AI-generated promo videos from a single product description.",
    color: "primary",
  },
  {
    href: "/marketplace",
    icon: FileCheck,
    title: "Agent Marketplace",
    description: "Our Tender Intelligence agent sells services on Daydreams/TaskMarket and available for direct purchase via Stripe.",
    color: "primary",
  },
  {
    href: "/ai/insights",
    icon: Newspaper,
    title: "AI Insights",
    description: "Curated AI news, tool launches, LLM releases, and market trends. Updated weekly.",
    color: "primary",
    leadGen: true,
  },
  {
    href: "/apps",
    icon: Smartphone,
    title: "Apps",
    description: "Practical tools built for real problems. Pocket CGT, Fridge Feast Finder, and more.",
    color: "primary",
  },
  {
    href: "/music",
    icon: Music,
    title: "Electronic Music",
    description: "ACE Step productions. Atmospheric electronic music for creators and media.",
    color: "amber",
  },
  {
    href: "/ai",
    icon: Cpu,
    title: "AI Solutions",
    description: "Your AI Department, Without the Headcount. Managed services for enterprise automation.",
    color: "primary",
  },
];

function AIInsightsCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const latestHeadline = newsItems[0]?.headline ?? "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/insights-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Link href="/ai/insights" className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + 6 * 0.1, duration: 0.6 }}
        className="group relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card transition-all cursor-pointer shadow-lg hover:shadow-xl text-left"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Newspaper className="w-10 h-10 mb-4 text-primary" />
        <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-3">
          AI Insights
        </h3>
        {latestHeadline && (
          <p className="text-xs text-muted-foreground/70 mb-4 italic line-clamp-2">
            Latest: {latestHeadline}
          </p>
        )}
        {status === "success" ? (
          <p className="text-sm text-green-600 font-medium">✓ Subscribed! Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            <input
              type="email"
              placeholder="Get weekly AI briefing"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading" || !email}
              className="shrink-0 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-xs text-red-500 mt-2">Something went wrong. Try again.</p>
        )}
        <div className="flex items-center text-sm font-medium text-primary mt-3 group-hover:opacity-80 transition-colors">
          Explore
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 z-10"
      >
        <h1 className="text-2xl font-bold tracking-tight text-foreground">NaSy Hub</h1>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground mb-4 text-sm tracking-widest uppercase"
        >
          My Creative Digital Space
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground"
        >
          <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            NaSy Hub
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          AI Solutions Engineer & Electronic Music Producer. 
          Bridging enterprise experience with cutting-edge AI implementation.
        </motion.p>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) =>
            section.leadGen ? (
              <AIInsightsCard key={section.title} />
            ) : (
              <Link key={section.title} href={section.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card transition-all cursor-pointer shadow-lg hover:shadow-xl text-left"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <section.icon
                    className={`w-10 h-10 mb-4 ${section.color === "amber" ? "text-amber-600" : "text-primary"}`}
                  />
                  <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-3">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                  <div
                    className={`flex items-center text-sm font-medium ${
                      section.color === "amber" ? "text-amber-600" : "text-primary"
                    } group-hover:opacity-80 transition-colors`}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ),
          )}
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative mt-16 mb-8 text-muted-foreground text-sm text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-3">
          <a href="mailto:nasiruddin.syed@hotmail.com" className="hover:text-foreground transition-colors">
            Email
          </a>
          <span className="text-muted-foreground/30">·</span>
          <a href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        <p>© 2026 NaSy Hub. Built with creativity.</p>
      </motion.footer>
    </main>
  );
}
