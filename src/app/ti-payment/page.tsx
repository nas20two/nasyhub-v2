"use client";
import { useState } from "react";

export default function TiPaymentPage() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/create-ti-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Failed to create checkout session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#F7F3EE" }}>
      <div className="w-full max-w-lg bg-white rounded-xl shadow-sm p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold" style={{ color: "#316263" }}>
            Tender Intelligence
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Automated RFT/submission assessment with fraud risk cross-reference.
            One evaluation, one payment. No subscription.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
          🎉 <strong>Early Bird Offer</strong> — $49 USD per evaluation (usual $99)
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#316263] focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              placeholder="Your company name (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#316263] focus:border-transparent"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="text-xs text-gray-500 space-y-1 bg-gray-50 rounded-lg p-3">
            <p>✅ Compliance matrix — mandatory gate check against RFT criteria</p>
            <p>✅ Deviation register — conditional offers, exceptions, substitutions</p>
            <p>✅ Scoring — weighted evaluation with breakdown</p>
            <p>🔍 Risk layer — Reckoner cross-reference against $404.6B tracked waste/fraud</p>
            <p>📬 Delivery within 24 hours via email</p>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        <button
          className="w-full py-3 rounded-lg text-white font-medium disabled:opacity-50"
          style={{ backgroundColor: "#316263" }}
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? "Redirecting to Stripe..." : "Pay $49 — Get Your Evaluation"}
        </button>
      </div>
    </div>
  );
}