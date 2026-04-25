"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Zap, Brain, Search, Shield, BarChart3, Clock } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "Tender Intelligence",
    description: "Automated opportunity discovery and analysis. Turn 20 hours of manual research into 2.",
    metrics: "10x faster discovery",
  },
  {
    icon: Brain,
    title: "Knowledge Systems",
    description: "SharePoint RAG implementation. Your documents, searchable and intelligent.",
    metrics: "Enterprise-grade security",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Custom AI agents for your specific processes. Built, deployed, maintained.",
    metrics: "80% time reduction",
  },
  {
    icon: Shield,
    title: "Quality Inspection",
    description: "AI-powered visual inspection for manufacturing and healthcare.",
    metrics: "99.2% accuracy",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We analyze your workflows and identify AI opportunities" },
  { step: "02", title: "Implementation", desc: "Build and deploy custom solutions integrated with your stack" },
  { step: "03", title: "Optimization", desc: "Continuous improvement based on real usage and feedback" },
];

export default function AIPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <span className="font-semibold">AI Solutions</span>
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
            <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">Managed AI Services</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Your AI Department,
              <br />
              <span className="text-muted-foreground">Without the Headcount</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              One person + AI = team-level output. Deep domain expertise meets technology leverage.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />15 years enterprise experience</span>
              <span className="flex items-center"><BarChart3 className="w-4 h-4 mr-2" />Retainer model: $2K-5K/month</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground">End-to-end AI implementation, managed for you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <service.icon className="w-10 h-10 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="text-sm text-blue-400 font-medium">{service.metrics}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Not SaaS. Not consulting. Managed service.</p>
          </motion.div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-6"
              >
                <span className="text-4xl font-bold text-muted-foreground/30">{item.step}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to augment your team?</h2>
            <p className="text-muted-foreground mb-8">
              Book a free 30-minute discovery call to discuss your AI opportunities.
            </p>
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
              Schedule Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center text-muted-foreground text-sm">
        <Link href="/" className="hover:text-foreground transition-colors">← Back to NaSy Hub</Link>
      </footer>
    </main>
  );
}
