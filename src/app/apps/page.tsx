"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Utensils, Calculator } from "lucide-react";
import Link from "next/link";

const apps = [
  {
    icon: Calculator,
    title: "Pocket CGT",
    description: "Capital Gains Tax calculator for Australian investors. Simple, accurate, mobile-friendly.",
    url: "https://pocket-cgt-clean.vercel.app",
    tags: ["Finance", "Tax", "Mobile App"],
  },
  {
    icon: Utensils,
    title: "Fridge Feast Finder",
    description: "AI-powered recipe discovery. Enter ingredients you have, get recipes you can make.",
    url: "https://fridge-feast-finder.vercel.app",
    tags: ["AI", "Recipes", "Food"],
  },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <span className="font-semibold text-foreground">Apps</span>
          <div className="w-16" />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Smartphone className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Apps
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical tools built for real problems. Available on web and mobile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {apps.map((app, index) => (
              <motion.a
                key={app.title}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all shadow-sm hover:shadow-md cursor-pointer block"
              >
                <app.icon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{app.title}</h3>
                <p className="text-muted-foreground mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center text-muted-foreground text-sm">
        <Link href="/" className="hover:text-foreground transition-colors">← Back to NaSy Hub</Link>
      </footer>
    </main>
  );
}
