// TypeScript interfaces for ESG News Analyzer

export interface Company {
  name: string;
  symbol: string;
  sector: string;
  description: string;
}

export interface Sentiment {
  type: 'Positive' | 'Negative' | 'Neutral';
  confidence: number;
  reasoning: string;
}

export interface ESGCategory {
  primary: 'E' | 'S' | 'G';
  secondary: ('E' | 'S' | 'G')[];
  reasoning: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  summary: string;
  company: string;
  source: string;
  url: string;
  publishedAt: string;
  sentiment?: Sentiment;
  esgCategory?: ESGCategory;
  analyzed: boolean;
}

export interface CompanySummary {
  summary: string;
  keyConcerns: string[];
  positives: string[];
  trendingTopics: string[];
}

export interface TrendData {
  sentimentDistribution: {
    Positive: number;
    Negative: number;
    Neutral: number;
  };
  esgDistribution: {
    E: number;
    S: number;
    G: number;
  };
  timeline: {
    date: string;
    sentiment: string;
    sentimentScore: number;
    category: string;
    title: string;
  }[];
  totalArticles: number;
}

export interface Stats {
  totalCompanies: number;
  totalArticles: number;
  sentimentDistribution: {
    Positive: number;
    Negative: number;
    Neutral: number;
  };
  esgDistribution: {
    E: number;
    S: number;
    G: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  count?: number;
  cached?: boolean;
}
