"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle, Dumbbell } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "atom-f…form";

interface FormData {
  businessName: string;
  businessType: string;
  speciality: string;
  location: string;
  style: string;
  offer1: string;
  offer2: string;
  offer3: string;
  phone: string;
  email: string;
  language: string;
  ctaText: string;
  ctaLink: string;
}

const defaultForm: FormData = {
  businessName: "",
  businessType: "Personal Training",
  speciality: "",
  location: "",
  style: "High Energy",
  offer1: "",
  offer2: "",
  offer3: "",
  phone: "",
  email: "",
  language: "English",
  ctaText: "Book a Free Session",
  ctaLink: "",
};

const businessTypes = ["Personal Training", "Gym", "Yoga Studio", "Pilates Studio", "CrossFit Box", "Martial Arts", "Dance Studio", "Bootcamp", "Online Coaching", "Nutrition Coach", "Physiotherapy", "Other"];
const styles = ["High Energy", "Mindful & Calm", "Community Focused", "Premium & Exclusive", "Outdoor & Adventure", "Rehab & Wellness"];

export default function FitnessPage() {
  const [form, setForm] = useState<FormData>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return { ...defaultForm, ...JSON.parse(saved) };
      } catch { /* ignore */ }
    }
    return defaultForm;
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [jobId, setJobId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Fitness & Gym Promo Template | Atom";
  }, []);

  const updateField = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/atom-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ template: "fitness", data: form, email: form.email, tier: "basic" }),
      });
      const result = await res.json();
      if (result.success) {
        setJobId(result.jobId);
        setDone(true);
        localStorage.removeItem(STORAGE_KEY);
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const labelClass = "block text-sm font-medium text-foreground mb-1.5";
  const inputClass = "w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-foreground placeholder:text-muted-foreground placeholder:text-sm transition-shadow";
  const selectClass = "w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-foreground transition-shadow appearance-none";

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="fixed top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsla(var(--atom-orange, 15 65% 55%), 0.08) 0%, transparent 70%)' }}
        />
        <nav className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/atom" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
              <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Back to Templates
            </Link>
            <span className="text-xs text-muted-foreground">Fitness</span>
          </div>
        </nav>
        <div className="max-w-3xl mx-auto px-4 pt-8 pb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Fitness &amp; Gym <span className="atom-gradient-text">Promo</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-3">
            A 60-second high-energy promo for your gym, studio, or coaching business.
            Transformations, energy, and your best offer — all AI-generated.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>⏱️ Ready in 24h</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>🎵 Music included</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>🎬 $19 — $69</span>
          </div>
        </div>
      </section>

      {!done ? (
        <section className="max-w-2xl mx-auto px-4 pb-24 -mt-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Details */}
              <div className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Business Details</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className={labelClass}>Business / Studio Name</label>
                    <input type="text" value={form.businessName} onChange={(e) => updateField("businessName", e.target.value)}
                      placeholder="Iron Haven Gym" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Business Type</label>
                    <select value={form.businessType} onChange={(e) => updateField("businessType", e.target.value)} className={selectClass}>
                      {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Speciality</label>
                    <input type="text" value={form.speciality} onChange={(e) => updateField("speciality", e.target.value)}
                      placeholder="Strength & conditioning, weight loss, flexibility" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Location</label>
                    <input type="text" value={form.location} onChange={(e) => updateField("location", e.target.value)}
                      placeholder="Parramatta, Sydney" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Vibe / Style</label>
                    <select value={form.style} onChange={(e) => updateField("style", e.target.value)} className={selectClass}>
                      {styles.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Offers */}
              <div className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm space-y-4">
                <h2 className="text-lg font-semibold text-foreground">What You Offer</h2>
                <div className="space-y-3">
                  <div>
                    <label className={labelClass}>Offer / Program 1</label>
                    <input type="text" value={form.offer1} onChange={(e) => updateField("offer1", e.target.value)}
                      placeholder="1-on-1 personal training sessions" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Offer / Program 2</label>
                    <input type="text" value={form.offer2} onChange={(e) => updateField("offer2", e.target.value)}
                      placeholder="12-week transformation challenge" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Offer / Program 3</label>
                    <input type="text" value={form.offer3} onChange={(e) => updateField("offer3", e.target.value)}
                      placeholder="Free trial week for new members" className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Contact &amp; Language</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(02) 9123 4567" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Video Language</label>
                    <select value={form.language} onChange={(e) => updateField("language", e.target.value)} className={selectClass}>
                      {["English", "Arabic", "Vietnamese", "Mandarin", "Spanish", "Korean"].map((l) => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Your Email <span className="text-red-500">*</span></label>
                    <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)}
                      placeholder="info@ironhaven.com.au" className={inputClass} required />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Call to Action</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Button Text</label>
                    <input type="text" value={form.ctaText} onChange={(e) => updateField("ctaText", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Link (URL)</label>
                    <input type="url" value={form.ctaLink} onChange={(e) => updateField("ctaLink", e.target.value)}
                      placeholder="https://ironhaven.com.au/free-trial" className={inputClass} />
                  </div>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <div className="text-center pt-2">
                <button type="submit" disabled={submitting}
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed text-lg text-white"
                  style={{ backgroundColor: submitting ? 'hsla(var(--atom-orange, 15 65% 55%), 0.6)' : 'hsl(var(--atom-orange, 15 65% 55%))' }}
                >
                  {submitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Generating your video...</>
                    : <><Dumbbell className="w-5 h-5" /> Generate Fitness Video</>}
                </button>
              </div>
            </form>
          </motion.div>
        </section>
      ) : (
        <section className="max-w-2xl mx-auto px-4 pb-24 -mt-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="text-center p-12 rounded-2xl border border-border bg-card/80 backdrop-blur-sm"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">Video queued for generation!</h2>
            <p className="text-muted-foreground mb-2">We&apos;ll deliver your 60-second video to <strong>{form.email}</strong> within 24 hours.</p>
            <p className="text-xs text-muted-foreground mb-8">Job ID: {jobId}</p>
            <Link href="/atom"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium rounded-xl transition-colors border border-border"
            >
              Create another video
            </Link>
          </motion.div>
        </section>
      )}
    </main>
  );
}