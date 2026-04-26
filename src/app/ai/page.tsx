"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Zap, Brain, Search, Shield, BarChart3, Clock } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "Tender Intelligence",
    description: "Automated opportunity discovery and analysis. Turn 20 hours of manual research into 2. Coming soon.",
    metrics: "Coming soon",
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
    description: "AI-powered visual inspection for manufacturing and healthcare. Coming soon.",
    metrics: "Coming soon",
  },
];

const tools = [
  {
    title: "AI Readiness Audit",
    description: "Free assessment tool. Discover your organization's AI maturity and get a personalized roadmap.",
    url: "https://ai-readiness-audit-orpin.vercel.app",
    cta: "Take the Audit",
  },
  {
    title: "Agent Builder",
    description: "Build custom AI agents without code. For members and enterprise clients.",
    url: "https://agent-builder-v1.vercel.app",
    cta: "Build an Agent",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We analyze your workflows and identify AI opportunities" },
  { step: "02", title: "Implementation", desc: "Build and deploy custom solutions integrated with your stack" },
  { step: "03", title: "Optimization", desc: "Continuous improvement based on real usage and feedback" },
];

const automationExamples = [
  {
    title: "Multi-Agent Intelligence System",
    description: "5 specialized agents (Rates Watch, AI Watch, Token Audit, Security, Backup) running daily on automated schedule.",
    result: "20+ hours/week saved",
    tech: "OpenClaw, crontab, DeepSeek",
  },
  {
    title: "Music Distribution Pipeline",
    description: "End-to-end automation: ACE Step music generation → n8n orchestration → YouTube (full + Shorts) → SoundCloud → X.",
    result: "40+ tracks queued, 4 Shorts/day",
    tech: "n8n, Telegram Bot, YouTube API, Pexels",
  },
  {
    title: "AI Audit Lead Capture",
    description: "Webhook-driven lead generation: User completes audit → Supabase storage → Email notification → Calendly booking.",
    result: "100% automated lead flow",
    tech: "Next.js, n8n, Supabase, Calendly",
  },
  {
    title: "GitHub Issue Automation",
    description: "Auto PR creation from labeled issues. Spawn subagent → Implement fix → Create PR → Monitor reviews → Merge.",
    result: "Zero-touch code contributions",
    tech: "gh-issues skill, OpenClaw subagents",
  },
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
          <span className="font-semibold text-foreground">AI Solutions</span>
          <div className="w-16" />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Managed AI Services</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Your AI Department,
              <br />
              <span className="text-muted-foreground">Without the Headcount</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              One person + AI = team-level output. Deep domain expertise meets technology leverage.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center bg-secondary/50 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />15 years enterprise experience
              </span>
              <span className="flex items-center bg-secondary/50 px-4 py-2 rounded-full">
                <BarChart3 className="w-4 h-4 mr-2" />Retainer model: $2K-5K/month
              </span>
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Services</h2>
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
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors shadow-sm hover:shadow-md"
              >
                <service.icon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{service.metrics}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-4 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Try Our Tools</h2>
            <p className="text-muted-foreground">Free tools to explore your AI opportunities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
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
                className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all shadow-sm hover:shadow-md cursor-pointer block"
              >
                <h3 className="text-xl font-semibold mb-2 text-foreground">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  {tool.cta}
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="py-20 px-4 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Automation Examples</h2>
            <p className="text-muted-foreground">Real systems we&apos;ve built. Customized for your needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {automationExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">{example.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{example.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{example.result}</span>
                  <span className="text-xs text-muted-foreground">{example.tech}</span>
                </div>
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">How It Works</h2>
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
                className="flex items-start gap-6 p-6 rounded-xl bg-card/50 border border-border"
              >
                <span className="text-4xl font-bold text-primary/30">{item.step}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to augment your team?</h2>
            <p className="text-muted-foreground mb-8">
              Book a free 30-minute discovery call to discuss your AI opportunities.
            </p>
            <a
              href="mailto:contact@nasyhub.com?subject=AI%20Discovery%20Call%20Request"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule Call
            </a>
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
