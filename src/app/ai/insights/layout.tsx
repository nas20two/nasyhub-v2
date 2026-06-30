import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Insights — Curated AI News & Market Trends | NaSy Hub",
  description:
    "Weekly AI news, LLM releases, tool launches, and market trends. Curated by a practising AI Solutions Engineer. Free weekly briefing.",
  openGraph: {
    title: "AI Insights by NaSy Hub",
    description: "Weekly AI news, LLM releases, tool launches, and market trends — curated by a practising AI Solutions Engineer.",
    url: "https://www.nasyhub.com/ai/insights",
    siteName: "NaSy Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Insights by NaSy Hub",
    description: "Weekly AI news, LLM releases, tool launches, and market trends.",
  },
  alternates: {
    canonical: "https://www.nasyhub.com/ai/insights",
  },
};

export default function AIInsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
