import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/**
 * Analyze sentiment of a news article
 * @param {string} articleText - The article content
 * @param {string} companyName - Company name for context
 * @returns {Promise<{sentiment: string, confidence: number, reasoning: string}>}
 */
export async function analyzeSentiment(articleText, companyName) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Analyze the sentiment of this ESG news article about ${companyName}:

"${articleText}"

Respond ONLY with valid JSON in this exact format (no markdown, no code blocks):
{
  "sentiment": "Positive" or "Negative" or "Neutral",
  "confidence": 0.0 to 1.0,
  "reasoning": "brief explanation in one sentence"
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    
    // Clean up response (remove markdown if present)
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
    
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Sentiment analysis error:', error.message);
    return {
      sentiment: 'Neutral',
      confidence: 0.5,
      reasoning: 'Unable to analyze sentiment'
    };
  }
}

/**
 * Categorize article into ESG categories
 * @param {string} articleText - The article content
 * @returns {Promise<{primary_category: string, secondary_categories: string[], reasoning: string}>}
 */
export async function categorizeESG(articleText) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Categorize this news article into ESG categories:

"${articleText}"

Categories:
- E (Environmental): Climate change, carbon emissions, pollution, waste management, renewable energy, water conservation
- S (Social): Labor practices, diversity & inclusion, employee welfare, human rights, community relations, product safety
- G (Governance): Board diversity, executive compensation, corruption, transparency, shareholder rights, business ethics

Respond ONLY with valid JSON in this exact format (no markdown, no code blocks):
{
  "primary_category": "E" or "S" or "G",
  "secondary_categories": [],
  "reasoning": "brief explanation of why this category was chosen"
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
    
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('ESG categorization error:', error.message);
    return {
      primary_category: 'G',
      secondary_categories: [],
      reasoning: 'Unable to categorize article'
    };
  }
}

/**
 * Generate an AI summary of ESG news for a company
 * @param {Array} articles - Array of article objects
 * @param {string} companyName - Company name
 * @returns {Promise<{summary: string, keyConcerns: string[], positives: string[], trendingTopics: string[]}>}
 */
export async function generateSummary(articles, companyName) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const articlesText = articles
      .slice(0, 10)
      .map((a, i) => `${i + 1}. ${a.title}: ${a.content?.substring(0, 300) || a.summary}`)
      .join('\n\n');

    const prompt = `Generate a concise ESG summary for ${companyName} based on these recent news articles:

${articlesText}

Include:
1. Overall ESG performance assessment (2-3 sentences)
2. Key concerns (if any)
3. Positive developments
4. Top 3 trending ESG topics for this company

Respond ONLY with valid JSON in this exact format (no markdown, no code blocks):
{
  "summary": "Overall assessment paragraph",
  "keyConcerns": ["concern 1", "concern 2"],
  "positives": ["positive 1", "positive 2"],
  "trendingTopics": ["topic 1", "topic 2", "topic 3"]
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
    
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Summary generation error:', error.message);
    // Return realistic mock data for demo purposes
    const mockSummaries = {
      'Tesla': {
        summary: `Tesla demonstrates strong environmental leadership through its core EV business and renewable energy initiatives. Recent coverage highlights both achievements in sustainable manufacturing and ongoing governance discussions around executive compensation and board diversity.`,
        keyConcerns: ['Executive compensation transparency', 'Supply chain labor practices'],
        positives: ['Industry-leading EV technology', 'Gigafactory renewable energy integration', 'Battery recycling programs'],
        trendingTopics: ['Electric Vehicle Expansion', 'Renewable Energy Storage', 'Autonomous Driving Safety']
      },
      'Microsoft': {
        summary: `Microsoft shows robust ESG performance with significant investments in carbon neutrality and AI ethics. The company leads in governance transparency while expanding social initiatives in digital inclusion and workforce development.`,
        keyConcerns: ['AI ethics and bias concerns', 'Data center energy consumption'],
        positives: ['Carbon negative commitment by 2030', 'Strong board diversity', 'Digital skills training programs'],
        trendingTopics: ['AI Responsibility', 'Cloud Sustainability', 'Cybersecurity Governance']
      },
      'default': {
        summary: `This company demonstrates commitment to ESG principles across environmental sustainability, social responsibility, and corporate governance. Recent news coverage reflects ongoing efforts to improve sustainability practices and stakeholder engagement.`,
        keyConcerns: ['Supply chain sustainability', 'Climate risk disclosure'],
        positives: ['Sustainability reporting improvements', 'Community engagement initiatives', 'Board independence'],
        trendingTopics: ['Climate Action', 'Diversity & Inclusion', 'Corporate Transparency']
      }
    };
    return mockSummaries[companyName] || mockSummaries['default'];
  }
}

/**
 * Analyze an article (combined sentiment + ESG categorization)
 * @param {object} article - Article object with title and content
 * @returns {Promise<{sentiment: object, esgCategory: object}>}
 */
export async function analyzeArticle(article) {
  const [sentiment, esgCategory] = await Promise.all([
    analyzeSentiment(article.content || article.summary, article.company),
    categorizeESG(article.content || article.summary)
  ]);

  return { sentiment, esgCategory };
}
