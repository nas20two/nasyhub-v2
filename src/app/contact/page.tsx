"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <span className="font-semibold text-foreground">Contact</span>
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
            <MessageSquare className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Have a project in mind? Let&apos;s discuss how AI can help your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact@nasyhub.com"
                className="flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                contact@nasyhub.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-foreground">Response Time</h2>
            <p className="text-muted-foreground">
              I typically respond within 24 hours. For urgent inquiries, please mention it in the subject line.
            </p>
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
