"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AtomSuccessPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Payment Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Your product short is being processed. Atom will deliver your 60-second MP4
          to your email within 24 hours.
        </p>
        <div className="p-4 rounded-xl bg-card/80 border border-border mb-6 text-left text-sm text-muted-foreground space-y-1">
          <p>✅ Payment received</p>
          <p>🎵 AI-generated soundtrack composing</p>
          <p>🎬 Motion visuals rendering via HyperFrames</p>
          <p>📬 Delivery queued to your inbox</p>
        </div>
        <p className="text-xs text-muted-foreground mb-6">
          Didn't receive an email? Check your spam folder or{" "}
          <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          Back to NaSy Hub <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </main>
  );
}