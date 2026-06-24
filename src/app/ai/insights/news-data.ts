// News data — auto-updated by AI News Updater cron
// Last updated: 16 June 2026 (09:00 AEST)
// SOURCE POLICY: Only include what's verified by multiple credible outlets.

export interface NewsItem {
  date: string;
  headline: string;
  summary: string;
  category: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "1 June 2026",
    headline: "Anthropic Confidentially Files S-1 for IPO at $965 Billion Valuation",
    summary: "Anthropic filed a confidential draft S-1 registration statement with the SEC on June 1, 2026, initiating the formal IPO process. The filing follows a $65 billion Series H round that valued the company at $965 billion, making it the first major AI lab to begin the public listing process.",
    category: "Market",
  },
  {
    date: "3 June 2026",
    headline: "Meta Launches Business Agent Globally Across WhatsApp, Messenger, and Instagram",
    summary: "Meta debuted its Business Agent platform on June 3, enabling AI-driven customer service, sales support, and lead qualification across its messaging apps with over 2 billion users. The launch includes a Business Agent Platform for custom enterprise deployments with Shopify and Zendesk integrations.",
    category: "Agent",
  },
  {
    date: "8 June 2026",
    headline: "OpenAI Confidentially Files S-1 for IPO Hours After Hitting 900M Weekly Users",
    summary: "OpenAI submitted a confidential draft S-1 to the SEC on June 8, joining Anthropic in the IPO race with an $852 billion private valuation. The company disclosed 900 million weekly active ChatGPT users and plans a tender offer for employee liquidity ahead of a potential Q4 2026 listing.",
    category: "Market",
  },
  {
    date: "9 June 2026",
    headline: "Anthropic Unveils Claude Fable 5 and Mythos 5 — Its Most Powerful Models Yet",
    summary: "Anthropic launched its new Mythos-class tier with Claude Fable 5 for general public use and Claude Mythos 5 restricted to vetted cyberdefenders and critical infrastructure partners. The release introduces a new model tier above Opus with enhanced safeguards on Fable 5 and reduced restrictions on Mythos 5 for security professionals.",
    category: "LLM",
  },
  {
    date: "12 June 2026",
    headline: "U.S. Government Orders Anthropic to Disable Fable 5 and Mythos 5 Globally Over Export Controls",
    summary: "The U.S. Department of Commerce issued an export-control directive at 5:21 p.m. ET on June 12 requiring Anthropic to suspend access to Fable 5 and Mythos 5 for all foreign nationals on national security grounds. Anthropic disabled both models for all users worldwide, citing inability to practically restrict access by nationality alone.",
    category: "Security",
  },
  {
    date: "13 June 2026",
    headline: "42 U.S. State Attorneys General Launch Investigation Into OpenAI",
    summary: "A coalition of 42 state attorneys general opened a formal investigation into OpenAI, with New York issuing a subpoena seeking documents on advertising practices, user safety, data handling, and protections for minors and seniors. The probe was confirmed by the Wall Street Journal, New York Times, Bloomberg, and TechCrunch.",
    category: "Security",
  },
  {
    date: "14 June 2026",
    headline: "European Commission Launches Urgent Assessment of U.S. Export Controls on Anthropic's Models",
    summary: "The European Commission formally confirmed it is assessing the practical consequences of the U.S. export directive blocking Anthropic's Fable 5 and Mythos 5 for EU users. Commission spokesperson Thomas Regnier warned the measures should not be 'discriminatory against partners' and linked the review to Europe's push for AI technological sovereignty.",
    category: "Security",
  },
];