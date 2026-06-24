"use client";

import { motion } from "framer-motion";
import { Cpu, Music, Smartphone, Mail, ArrowRight, Newspaper, FileCheck, AtomIcon, Heart } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    href: "/ai",
    icon: Cpu,
    title: "AI Solutions",
    description: "Your AI Department, Without the Headcount. Managed services for enterprise automation.",
    color: "primary",
  },
  {
    href: "/atom",
    icon: AtomIcon,
    title: "Atom",
    description: "Your product. 60 seconds. Done. AI-generated promo videos from a single product description.",
    color: "primary",
  },
  {
    href: "#",
    icon: Heart,
    title: "AI Health",
    description: "AI-powered fertility patient education and healthcare automation. Coming soon.",
    color: "primary",
    badge: "Coming Soon",
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
    href: "/contact",
    icon: Mail,
    title: "Contact",
    description: "Have a project in mind? Let's discuss how AI can help your business.",
    color: "primary",
  },
  {
    href: "/ai/insights",
    icon: Newspaper,
    title: "AI Insights",
    description: "Curated AI news, tool launches, LLM releases, and market trends. Updated weekly.",
    color: "primary",
  },
  {
    href: "/marketplace",
    icon: FileCheck,
    title: "Agent Marketplace",
    description: "Our Tender Intelligence agent sells services on Daydreams/TaskMarket and available for direct purchase via Stripe.",
    color: "primary",
  },
];

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

        {/* Marketplace Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/marketplace"
            className="group block relative p-4 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3 text-sm">
              <span className="text-lg">🤖</span>
              <div className="flex-1 text-left">
                <span className="font-medium text-foreground">
                  Live on Daydreams/TaskMarket
                </span>
                <span className="text-muted-foreground ml-2 hidden sm:inline">
                  — Our Tender Intelligence agent now sells services on the agent commerce marketplace
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </Link>
        </motion.div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <Link key={section.title} href={section.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card transition-all cursor-pointer shadow-lg hover:shadow-xl text-left"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <section.icon className={`w-10 h-10 mb-4 ${section.color === "amber" ? "text-amber-600" : "text-primary"}`} />
                <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-3">
                  {section.title}
                  {section.badge && (
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-600 border border-amber-500/30">
                      {section.badge}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                <div className={`flex items-center text-sm font-medium ${section.color === "amber" ? "text-amber-600" : "text-primary"} group-hover:opacity-80 transition-colors`}>
                  {section.badge ? "Coming Soon" : "Explore"}
                  {!section.badge && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative mt-16 mb-8 text-muted-foreground text-sm"
      >
        © 2026 NaSy Hub. Built with creativity.
      </motion.footer>
    </main>
  );
}
