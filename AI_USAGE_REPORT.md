# AI Usage Report

## Overview

This document explains how we integrated AI into the ESG News Analyzer application. We used Google's Gemini API for all AI-related features.

## AI Model Used

**Model:** Gemini 2.5 Flash  
**Provider:** Google AI  
**Why this model:** It's fast (responses in 1-2 seconds), works well with structured prompts, and has good accuracy for text classification tasks. Also, it has a generous free tier which was important for development.

## Where AI is Used

### 1. Sentiment Analysis

Every news article goes through sentiment analysis to determine if the coverage is positive, negative, or neutral.

**How it works:**

- We send the article text to Gemini with a prompt asking it to classify sentiment
- The model returns: sentiment type, confidence score (0-1), and brief reasoning
- Results are displayed as color-coded badges on each article

**Sample prompt we use:**

```
Analyze the sentiment of this ESG news article about [Company]:
"[article text]"

Respond with JSON: sentiment, confidence, reasoning
```

The confidence score helps users understand how sure the AI is about its classification.

### 2. ESG Categorization

Articles are automatically tagged as Environmental (E), Social (S), or Governance (G).

**How it works:**

- Same approach - send article to Gemini with category definitions
- Model picks primary category and optionally secondary categories
- Each category has clear criteria (e.g., Environmental = climate, emissions, pollution, etc.)

This saves manual tagging effort and provides consistent categorization.

### 3. Summary Generation

For each company, we generate an AI summary covering:

- Overall ESG assessment
- Key concerns identified in recent coverage
- Positive developments
- Trending ESG topics

**How it works:**

- We collect all articles for a company (limited to 10 most recent)
- Send them together to Gemini asking for a summary
- Model extracts themes, concerns, and positives
- Result is displayed in a dedicated section on the dashboard

## Error Handling

If the AI API fails (rate limits, network issues, etc.), we have fallback behavior:

- Sentiment defaults to "Neutral" with 0.5 confidence
- ESG category defaults to "Governance"
- Summary shows pre-written fallback for known companies like Tesla, Microsoft

This ensures the app doesn't break if the API is unavailable.

## Code Implementation

All AI code lives in `server/src/services/aiService.js`. Main functions:

| Function             | Purpose                     |
| -------------------- | --------------------------- |
| `analyzeSentiment()` | Classify article sentiment  |
| `categorizeESG()`    | Tag article with E/S/G      |
| `generateSummary()`  | Create company ESG overview |

Each function uses try-catch and logs errors for debugging.

## API Configuration

- API key stored in `.env` file (not committed to git)
- Using `@google/generative-ai` npm package
- Model initialized once at startup for efficiency

## Challenges We Faced

1. **Rate limits** - Free tier has limits per minute. We added caching for summaries.
2. **JSON parsing** - Sometimes model returns markdown-wrapped JSON. We strip those tags.
3. **Model availability** - Had to try different model names to find one that worked consistently.

## Accuracy Considerations

The AI isn't perfect. Its accuracy depends on:

- Quality and length of input article
- How clearly the article discusses ESG topics
- Language complexity

For production use, you'd want to validate AI results periodically against human judgment.

## Cost Analysis

Currently using free tier. For production:

- Estimated 60 requests/minute limit
- Would need paid tier for heavy usage
- Could optimize by caching more aggressively

---

_This report documents our AI implementation approach and the decisions we made along the way._
