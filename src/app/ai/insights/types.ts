export interface NewsItem {
  date: string;
  headline: string;
  summary: string;
  category: "LLM" | "Market" | "Agent" | "Security" | "Hardware" | "Tool Launch";
  sourceUrl?: string;
}