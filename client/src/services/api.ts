import axios from 'axios';
import type { Company, Article, CompanySummary, TrendData, Stats, ApiResponse } from '../types';

const API_BASE = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Companies
export async function getCompanies(): Promise<Company[]> {
  const response = await api.get<ApiResponse<Company[]>>('/companies');
  return response.data.data;
}

export async function getCompany(name: string): Promise<Company> {
  const response = await api.get<ApiResponse<Company>>(`/companies/${name}`);
  return response.data.data;
}

// Articles
export async function getCompanyNews(
  companyName: string,
  options?: { category?: string; sentiment?: string; limit?: number }
): Promise<Article[]> {
  const params = new URLSearchParams();
  if (options?.category) params.append('category', options.category);
  if (options?.sentiment) params.append('sentiment', options.sentiment);
  if (options?.limit) params.append('limit', options.limit.toString());
  
  const response = await api.get<ApiResponse<Article[]>>(
    `/companies/${companyName}/news?${params.toString()}`
  );
  return response.data.data;
}

export async function getAllArticles(
  options?: { category?: string; sentiment?: string; limit?: number }
): Promise<Article[]> {
  const params = new URLSearchParams();
  if (options?.category) params.append('category', options.category);
  if (options?.sentiment) params.append('sentiment', options.sentiment);
  if (options?.limit) params.append('limit', options.limit.toString());
  
  const response = await api.get<ApiResponse<Article[]>>(`/articles?${params.toString()}`);
  return response.data.data;
}

export async function getArticle(id: string): Promise<Article> {
  const response = await api.get<ApiResponse<Article>>(`/articles/${id}`);
  return response.data.data;
}

// AI Analysis
export async function analyzeArticle(id: string): Promise<{
  articleId: string;
  title: string;
  sentiment: { sentiment: string; confidence: number; reasoning: string };
  esgCategory: { primary_category: string; secondary_categories: string[]; reasoning: string };
}> {
  const response = await api.post<ApiResponse<any>>(`/articles/${id}/analyze`);
  return response.data.data;
}

export async function getCompanySummary(companyName: string): Promise<CompanySummary> {
  const response = await api.get<ApiResponse<CompanySummary>>(`/companies/${companyName}/summary`);
  return response.data.data;
}

// Trends & Stats
export async function getCompanyTrends(companyName: string): Promise<TrendData> {
  const response = await api.get<ApiResponse<TrendData>>(`/companies/${companyName}/trends`);
  return response.data.data;
}

export async function getStats(): Promise<Stats> {
  const response = await api.get<ApiResponse<Stats>>('/stats');
  return response.data.data;
}

export default api;
