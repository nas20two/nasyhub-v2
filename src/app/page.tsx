"use client";

import { motion } from "framer-motion";
import { Cpu, Music, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8"
      >
        <h1 className="text-2xl font-bold tracking-tight">NaSy Hub</h1>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl w-full text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground mb-4 text-sm tracking-widest uppercase"
        >
          Choose your path
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
        >
          Two worlds, one creator
        </motion.h2>

        {/* Path Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Path */}
          <Link href="/ai">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl border border-border bg-muted/50 hover:bg-muted transition-all cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Cpu className="w-12 h-12 mb-6 text-blue-400" />
              <h3 className="text-2xl font-semibold mb-3">AI Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Your AI Department, Without the Headcount. Managed services for enterprise automation and intelligence.
              </p>
              <div className="flex items-center justify-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                Explore services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          {/* Music Path */}
          <Link href="/music">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl border border-border bg-muted/50 hover:bg-muted transition-all cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Music className="w-12 h-12 mb-6 text-pink-400" />
              <h3 className="text-2xl font-semibold mb-3">Electronic Music</h3>
              <p className="text-muted-foreground mb-6">
                ACE Step productions. Atmospheric electronic music for creators, media, and immersive experiences.
              </p>
              <div className="flex items-center justify-center text-sm font-medium text-pink-400 group-hover:text-pink-300 transition-colors">
                Listen on SoundCloud
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-8 text-muted-foreground text-sm"
      >
        © 2026 NaSy Hub. Built with AI.
      </motion.footer>
    </main>
  );
}
