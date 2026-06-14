// News data — auto-updated by AI News Updater cron
// Last updated: 15 June 2026 (09:00 AEST)
// SOURCE POLICY: Only include what's verified by multiple credible outlets.

export interface NewsItem {
  date: string;
  headline: string;
  summary: string;
  category: string;
  sourceUrl: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "14 June 2026",
    headline: "U.S. Government Forces Anthropic to Shut Down Fable 5 and Mythos 5 Models Globally",
    summary:
      "The U.S. Commerce Department issued an emergency export-control directive ordering Anthropic to block access to its most powerful frontier models, Fable 5 and Mythos 5, for foreign nationals over national security concerns. Unable to reliably verify user citizenship at scale, Anthropic disabled both models worldwide for all users — including its own non-citizen employees. The trigger was a reported jailbreak that demonstrated Fable 5 could identify software vulnerabilities at a level the government deemed sensitive. Anthropic called it a 'narrow, non-universal jailbreak' and noted similar capabilities exist in other advanced models. The move marks the first time a U.S. export-control order has forced a full commercial LLM shutdown.",
    category: "Security",
    sourceUrl: "https://www.anthropic.com/news/fable-mythos-access",
  },
  {
    date: "13 June 2026",
    headline: "Coalition of U.S. State Attorneys General Launches Investigation into OpenAI",
    summary:
      "A coalition of U.S. state attorneys general, led by New York and Colorado, issued subpoenas to OpenAI investigating its advertising practices, user retention tactics, model sycophancy, handling of consumer and health data, and protections for minors and seniors. The probe comes as OpenAI moves toward a potential public listing and expands monetisation through new ad platforms inside ChatGPT. OpenAI said it takes the concerns seriously and will engage constructively. The investigation signals intensifying regulatory scrutiny of AI companies at the state level ahead of potential federal AI legislation.",
    category: "Security",
    sourceUrl: "https://techcrunch.com/2026/06/13/openai-faces-investigation-from-state-attorneys-general/",
  },
  {
    date: "12 June 2026",
    headline: "SpaceX Debuts on Nasdaq in Record-Breaking $75B IPO, Funding xAI Compute Ambitions",
    summary:
      "SpaceX began trading on the Nasdaq under ticker SPCX, raising $75 billion at a ~$1.75 trillion valuation — more than double the previous IPO record set by Saudi Aramco in 2019. The listing is widely viewed as an AI infrastructure play: the xAI division, bundled into the offering, is described as a $14 billion cash drain that the IPO proceeds will fund directly. MSCI confirmed early inclusion in its large-cap indices. Analysts noted the IPO signals public markets are now willing to underwrite AI compute buildouts at a scale previously reserved for sovereign wealth funds.",
    category: "Market",
    sourceUrl: "https://promptailearning.com/ai-news/daily/top-5-ai-news-june-14-2026",
  },
  {
    date: "9 June 2026",
    headline: "Google Slashes AI Plus Subscription Price to $4.99/Month in Subscription Price War Escalation",
    summary:
      "Google cut the monthly price of its Google AI Plus subscription from $7.99 to $4.99 while doubling included storage from 200GB to 400GB. The move brings a consumer AI pricing war that has been brewing in emerging markets squarely to the U.S. market. Goodwater Capital co-founder Chi-Hua Chien called it the next salvo in the commoditisation era for AI infrastructure, noting Google's vertical integration, massive distribution, and ability to bundle — structural advantages likely to erode margins for pure-play AI providers. The subscription includes Gemini Omni Flash video generation, Google Flow creative studio, and NotebookLM.",
    category: "Market",
    sourceUrl: "https://techcrunch.com/2026/06/09/google-just-fired-a-warning-shot-in-the-ai-subscription-price-wars/",
  },
  {
    date: "9 June 2026",
    headline: "Anthropic Launches Claude Fable 5 — Its Most Capable Public Model with New Safety Guardrails",
    summary:
      "Anthropic released Claude Fable 5 as a general-purpose model and Claude Mythos 5 for high-risk domains, built on the same foundation as its previously restricted Mythos-class systems. Anthropic said new safeguards allow broader deployment by automatically redirecting certain high-risk requests (cyber, biology, chemistry, model distillation) to less capable models. The release was described as Anthropic's most capable public model to date with strong performance across software engineering, research, and knowledge-work tasks, marking a shift from the company's earlier position that Mythos-class systems required substantially tighter access controls.",
    category: "LLM",
    sourceUrl: "https://www.axios.com/2026/06/09/anthropic-mythos-class-safeguards",
  },
  {
    date: "8 June 2026",
    headline: "Apple Unveils Siri AI — a Completely Rebuilt Conversational Assistant with On-Screen Awareness",
    summary:
      "Apple unveiled Siri AI at WWDC 2026, an entirely rebuilt version of its virtual assistant powered by Apple Intelligence. The new system supports multi-turn conversation, on-screen awareness of app content, personal context across messages and photos, broad world knowledge via web access, and multi-step actions spanning apps. A dedicated Siri app lets users revisit past conversations. The assistant runs on-device for privacy with Apple's Private Cloud Compute handling complex requests. Developer testing began immediately, with a public beta planned later this year. The launch reflects Apple's effort to compete with ChatGPT, Claude, and Gemini after delays and criticism of earlier AI announcements.",
    category: "Agent",
    sourceUrl: "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/",
  },
  {
    date: "8 June 2026",
    headline: "OpenAI Confidentially Files for IPO with SEC, Setting Up Mega AI Market Debut",
    summary:
      "OpenAI confidentially submitted a draft S-1 registration statement to the U.S. SEC, formally initiating the pre-IPO regulatory process. The company, valued at over $850 billion after its March 2026 funding round, is working with Goldman Sachs and Morgan Stanley as lead underwriters. OpenAI CFO Sarah Friar previously said it's 'good hygiene' for a company of OpenAI's size to operate like a public company. While no IPO date has been set — OpenAI said it may be a while as some goals are easier as a private company — market expectations centre on a potential late 2026 listing that could approach or exceed a $1 trillion valuation. The filing follows Anthropic's IPO submission a week earlier.",
    category: "Market",
    sourceUrl: "https://www.cnbc.com/2026/06/08/openai-confidentially-files-for-ipo-prepping-wall-street-for-ai-debut.html",
  },
];