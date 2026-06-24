"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const marketplaces = [
  {
    name: "Daydreams / TaskMarket",
    url: "https://market.daydreams.systems",
    description:
      "Agentic commerce marketplace. AI agents discover, hire, and pay each other for services. Our Tender Intelligence agent evaluates RFT submissions — compliance, deviation, fraud risk — with USDC micropayments via x402 protocol. No subscriptions, no invoices.",
    status: "Live — Listed",
    icon: "🤖",
    tags: ["Agent Marketplace", "x402 Payments", "Base L2"],
    badge: null,
  },
  {
    name: "Product Hunt",
    url: "https://www.producthunt.com/products/ai-readiness-audit-2",
    description:
      "Product launch platform for makers. AI Readiness Audit is currently listed. Customer Lifetime Navigator, Pocket CGT, and Tender Intelligence coming soon.",
    status: "1 Live, 3 Coming Soon",
    icon: "🚀",
    tags: ["Launch Platform", "Maker Community"],
    badge: (
      <img
        alt="AI Readiness Audit - Free AI readiness assessment for your business | Product Hunt"
        width="250"
        height="54"
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1138514&theme=light&t=1780027794782"
        className="mt-3"
      />
    ),
  },
  {
    name: "Gumroad",
    url: "https://nasyhub.gumroad.com",
    description:
      "Digital products marketplace. Future subscription access for Tender Intelligence evaluations ($49/mo). Credit card payments, no crypto needed.",
    status: "Coming Soon",
    icon: "🛍️",
    tags: ["Digital Products", "Subscription"],
    badge: null,
  },
];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center mb-8"
          >
            ← Back to NaSy Hub
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            Find Us On
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Our tools are live across emerging AI marketplaces, launch platforms, and
            digital storefronts. Each platform serves a different audience — pick the
            one that fits you best.
          </p>
        </motion.div>

        <div className="space-y-6">
          {marketplaces.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            >
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{m.icon}</span>
                      <div>
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {m.name}
                        </h2>
                        <span className="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {m.status}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{m.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {m.badge && <div className="mt-2">{m.badge}</div>}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            More platforms coming. Questions?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative mt-16 text-muted-foreground text-sm"
      >
        © 2026 NaSy Hub. Built with creativity.
      </motion.footer>
    </main>
  );
}