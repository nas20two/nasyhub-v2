"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Music, Headphones, Radio, ExternalLink } from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/nasyhub",
    description: "Full discography and latest releases",
    icon: Radio,
  },
];

const releases = [
  {
    title: "ACE Step",
    type: "Production Workflow",
    description: "AI-assisted electronic music production. 20+ tracks created with custom workflow.",
  },
  {
    title: "Atmospheric",
    type: "Genre Focus",
    description: "Ambient and cinematic soundscapes for media and immersive experiences.",
  },
  {
    title: "Licensing",
    type: "Available",
    description: "Custom music for creators, podcasts, videos, and commercial projects.",
  },
];

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <span className="font-semibold text-foreground">Electronic Music</span>
          <div className="w-16" />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-600 text-sm tracking-widest uppercase mb-4">NaSy Hub</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Electronic Music
              <br />
              <span className="text-muted-foreground">Production & Sound Design</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              ACE Step productions. Atmospheric electronic music for creators, media, and immersive experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-xl transition-colors text-amber-800 font-medium"
                >
                  <platform.icon className="w-4 h-4" />
                  {platform.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Releases */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Production</h2>
            <p className="text-muted-foreground">Music created with AI-assisted workflow</p>
          </motion.div>

          <div className="space-y-6">
            {releases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{release.title}</h3>
                  <span className="text-xs px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
                    {release.type}
                  </span>
                </div>
                <p className="text-muted-foreground">{release.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACE Step */}
      <section className="py-20 px-4 border-t border-border bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground">ACE Step Workflow</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              AI-assisted music production combining human creativity with generative tools
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "Generate", desc: "AI creates base patterns and melodies" },
                { step: "Curate", desc: "Select and refine the best ideas" },
                { step: "Produce", desc: "Mix, master, and finalize tracks" },
              ].map((item, index) => (
                <div key={item.step} className="text-center p-6 rounded-xl bg-card/50 border border-border">
                  <span className="text-4xl font-bold text-amber-400/40 block mb-4">0{index + 1}</span>
                  <h3 className="font-semibold mb-2 text-foreground">{item.step}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
            <Headphones className="w-12 h-12 mx-auto mb-6 text-amber-600" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Need music for your project?</h2>
            <p className="text-muted-foreground mb-8">
              Custom tracks, licensing, and sound design available.
            </p>
            <a
              href="mailto:contact@nasyhub.com"
              className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
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
