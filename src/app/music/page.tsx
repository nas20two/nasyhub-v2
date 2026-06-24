"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Headphones, Radio, ExternalLink } from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/6cf6Qio0bSEZ0eEuHe6XKL",
    description: "Stream on Spotify",
    color: "bg-emerald-100 hover:bg-emerald-200 border-emerald-300 text-emerald-800",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/au/artist/nasy/1895660215",
    description: "Listen on Apple Music",
    color: "bg-rose-100 hover:bg-rose-200 border-rose-300 text-rose-800",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/nasyhub",
    description: "Full discography and latest releases",
    color: "bg-amber-100 hover:bg-amber-200 border-amber-300 text-amber-800",
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

const SpotifyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleMusicIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 0H6.4A6.4 6.4 0 000 6.4v11.2A6.4 6.4 0 006.4 24h11.2a6.4 6.4 0 006.4-6.4V6.4A6.4 6.4 0 0017.6 0zm-2.3 18.247c-.272.444-.811.585-1.202.315-.273-.18-.36-.538-.197-.83.528-.99 1.157-2.67 1.157-3.66 0-.4-.106-1.013-.239-1.44-.106-.347-.023-.667.208-.874l.08-.063c.432-.335 1.155-.224 1.383.28.307.69.5 1.502.5 2.254 0 1.62-.836 3.204-1.69 4.018zm2.343-5.778c-.347.503-.967.688-1.397.427-2.495-1.568-5.674-1.99-9.437-.925-.456.13-.905-.15-.998-.62-.092-.475.18-.96.639-1.101 4.24-1.226 7.845-.731 10.727 1.134.4.26.51.807.163 1.31v-.225zm0-3.322c-.41.602-1.14.823-1.642.502-2.988-1.78-7.317-2.36-10.702-1.36-.55.164-1.12-.153-1.284-.698-.164-.55.148-1.13.694-1.296 3.886-1.163 8.667-.513 12.114 1.54.402.257.533.905.123 1.507v-.595zm-3.02-2.26c-2.684-1.644-7.556-1.97-10.654-.94-.532.178-1.11-.102-1.294-.625-.183-.526.09-1.102.62-1.282 3.553-1.185 9-1.034 12.08.868.465.288.61.905.322 1.37-.29.46-.902.61-1.364.325v-.284z"/>
  </svg>
);

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
                  className={"flex items-center gap-2 px-6 py-3 rounded-xl transition-colors font-medium border " + platform.color}
                >
                  {platform.name === "Spotify" && <SpotifyIcon />}
                  {platform.name === "Apple Music" && <AppleMusicIcon />}
                  {platform.name === "SoundCloud" && <Radio className="w-4 h-4" />}
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