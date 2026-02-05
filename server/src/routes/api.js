import express from 'express';
import { getCompanies, getCompanyByName, getArticlesByCompany, getArticleById, getAllArticles } from '../data/mockNews.js';
import { analyzeSentiment, categorizeESG, generateSummary, analyzeArticle } from '../services/aiService.js';

const router = express.Router();

// Cache for AI-generated summaries
const summaryCache = new Map();

/**
 * GET /api/companies
 * List all companies
 */
router.get('/companies', (req, res) => {
  try {
    const companies = getCompanies();
    res.json({ success: true, data: companies });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * GET /api/companies/:name
 * Get a specific company
 */
router.get('/companies/:name', (req, res) => {
  try {
    const company = getCompanyByName(req.params.name);
    if (!company) {
      return res.status(404).json({ success: false, error: 'Company not found' });
    }
    res.json({ success: true, data: company });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * GET /api/companies/:name/news
 * Get news articles for a company with optional filtering
 */
router.get('/companies/:name/news', (req, res) => {
  try {
    const { category, sentiment, limit } = req.query;
    let articles = getArticlesByCompany(req.params.name);

    if (!articles.length) {
      return res.status(404).json({ success: false, error: 'No articles found for this company' });
    }

    // Filter by ESG category
    if (category && ['E', 'S', 'G'].includes(category.toUpperCase())) {
      articles = articles.filter(a => 
        a.esgCategory?.primary?.toUpperCase() === category.toUpperCase() ||
        a.esgCategory?.secondary?.includes(category.toUpperCase())
      );
    }

    // Filter by sentiment
    if (sentiment && ['positive', 'negative', 'neutral'].includes(sentiment.toLowerCase())) {
      articles = articles.filter(a => 
        a.sentiment?.type?.toLowerCase() === sentiment.toLowerCase()
      );
    }

    // Sort by date (newest first)
    articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Limit results
    if (limit && !isNaN(parseInt(limit))) {
      articles = articles.slice(0, parseInt(limit));
    }

    res.json({ success: true, data: articles, count: articles.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * GET /api/articles
 * Get all articles with optional filtering
 */
router.get('/articles', (req, res) => {
  try {
    const { category, sentiment, limit } = req.query;
    let articles = getAllArticles();

    // Filter by ESG category
    if (category && ['E', 'S', 'G'].includes(category.toUpperCase())) {
      articles = articles.filter(a => 
        a.esgCategory?.primary?.toUpperCase() === category.toUpperCase()
      );
    }

    // Filter by sentiment
    if (sentiment && ['positive', 'negative', 'neutral'].includes(sentiment.toLowerCase())) {
      articles = articles.filter(a => 
        a.sentiment?.type?.toLowerCase() === sentiment.toLowerCase()
      );
    }

    // Sort by date (newest first)
    articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Limit results
    if (limit && !isNaN(parseInt(limit))) {
      articles = articles.slice(0, parseInt(limit));
    }

    res.json({ success: true, data: articles, count: articles.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * GET /api/articles/:id
 * Get a specific article by ID
 */
router.get('/articles/:id', (req, res) => {
  try {
    const article = getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * POST /api/articles/:id/analyze
 * Analyze an article with AI (sentiment + ESG categorization)
 */
router.post('/articles/:id/analyze', async (req, res) => {
  try {
    const article = getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }

    const analysis = await analyzeArticle(article);
    
    res.json({ 
      success: true, 
      data: {
        articleId: article.id,
        title: article.title,
        ...analysis
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * GET /api/companies/:name/summary
 * Generate AI summary for a company's ESG performance
 */
router.get('/companies/:name/summary', async (req, res) => {
  try {
    const companyName = req.params.name;
    const company = getCompanyByName(companyName);
    
    if (!company) {
      return res.status(404).json({ success: false, error: 'Company not found' });
    }

    // Check cache first
    const cacheKey = companyName.toLowerCase();
    if (summaryCache.has(cacheKey)) {
      const cached = summaryCache.get(cacheKey);
      // Cache for 10 minutes
      if (Date.now() - cached.timestamp < 10 * 60 * 1000) {
        return res.json({ success: true, data: cached.summary, cached: true });
      }
    }

    const articles = getArticlesByCompany(companyName);
    if (!articles.length) {
      return res.status(404).json({ success: false, error: 'No articles found for this company' });
    }

    const summary = await generateSummary(articles, companyName);
    
    // Cache the result
    summaryCache.set(cacheKey, { summary, timestamp: Date.now() });

    res.json({ success: true, data: summary });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * GET /api/companies/:name/trends
 * Get trend data for charts
 */
router.get('/companies/:name/trends', (req, res) => {
  try {
    const articles = getArticlesByCompany(req.params.name);
    
    if (!articles.length) {
      return res.status(404).json({ success: false, error: 'No articles found' });
    }

    // Calculate sentiment distribution
    const sentimentCounts = { Positive: 0, Negative: 0, Neutral: 0 };
    articles.forEach(a => {
      const type = a.sentiment?.type || 'Neutral';
      sentimentCounts[type]++;
    });

    // Calculate ESG distribution
    const esgCounts = { E: 0, S: 0, G: 0 };
    articles.forEach(a => {
      const primary = a.esgCategory?.primary || 'G';
      esgCounts[primary]++;
    });

    // Generate timeline data (sentiment over time)
    const timeline = articles
      .sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
      .map(a => ({
        date: a.publishedAt,
        sentiment: a.sentiment?.type || 'Neutral',
        sentimentScore: a.sentiment?.type === 'Positive' ? 1 : a.sentiment?.type === 'Negative' ? -1 : 0,
        category: a.esgCategory?.primary || 'G',
        title: a.title
      }));

    res.json({
      success: true,
      data: {
        sentimentDistribution: sentimentCounts,
        esgDistribution: esgCounts,
        timeline,
        totalArticles: articles.length
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * GET /api/stats
 * Get overall statistics
 */
router.get('/stats', (req, res) => {
  try {
    const articles = getAllArticles();
    const companies = getCompanies();

    const sentimentCounts = { Positive: 0, Negative: 0, Neutral: 0 };
    const esgCounts = { E: 0, S: 0, G: 0 };

    articles.forEach(a => {
      sentimentCounts[a.sentiment?.type || 'Neutral']++;
      esgCounts[a.esgCategory?.primary || 'G']++;
    });

    res.json({
      success: true,
      data: {
        totalCompanies: companies.length,
        totalArticles: articles.length,
        sentimentDistribution: sentimentCounts,
        esgDistribution: esgCounts
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
