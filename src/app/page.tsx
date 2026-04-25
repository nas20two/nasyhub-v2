"use client";

import { motion } from "framer-motion";
import { Cpu, Music, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative elements - warm tones */}
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
          Your Creative Digital Space
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground"
        >
          <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Two worlds, one creator
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Explore AI-powered services and electronic music production. 
          A warm corner of the internet where creativity meets technology.
        </motion.p>

        {/* Path Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Path */}
          <Link href="/ai">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card transition-all cursor-pointer shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Cpu className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">AI Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Your AI Department, Without the Headcount. Managed services for enterprise automation.
              </p>
              <div className="flex items-center justify-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
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
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card transition-all cursor-pointer shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/5 to-orange-300/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Music className="w-12 h-12 mb-6 text-amber-600" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Electronic Music</h3>
              <p className="text-muted-foreground mb-6">
                ACE Step productions. Atmospheric electronic music for creators and media.
              </p>
              <div className="flex items-center justify-center text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-colors">
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
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 text-muted-foreground text-sm"
      >
        © 2026 NaSy Hub. Built with creativity.
      </motion.footer>
    </main>
  );
}
