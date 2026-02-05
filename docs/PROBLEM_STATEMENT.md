# ESG News Analyzer & Sentiment Tracker

## Problem Statement Document

---

## 1. Problem Overview

### 1.1 Background

Environmental, Social, and Governance (ESG) factors have become critical metrics for evaluating corporate sustainability and ethical practices. Investors, analysts, and stakeholders increasingly rely on ESG performance data to make informed decisions. However, manually tracking and analyzing ESG-related news across multiple companies is time-consuming and prone to subjective bias.

### 1.2 Problem Definition

**The challenge:** Organizations and investors need a systematic way to:

- Monitor ESG-related news for specific companies
- Understand the sentiment (positive/negative/neutral) of ESG coverage
- Categorize news into Environmental (E), Social (S), or Governance (G) dimensions
- Visualize trends and patterns in ESG performance over time

### 1.3 Current Limitations

- Manual news monitoring is labor-intensive
- Subjective interpretation of sentiment varies between analysts
- No standardized ESG categorization methodology
- Lack of consolidated dashboards for ESG tracking

---

## 2. Proposed Solution

### 2.1 Solution Overview

The **ESG News Analyzer & Sentiment Tracker** is an AI-powered web application that automates:

1. **News Aggregation** - Collects ESG-related news for companies
2. **Sentiment Analysis** - Uses Google Gemini AI to classify sentiment
3. **ESG Categorization** - Automatically tags news as E, S, or G
4. **Visualization** - Provides interactive dashboards with charts and trends

### 2.2 Key Features

| Feature               | Description                                         |
| --------------------- | --------------------------------------------------- |
| Company Search        | Search and select from tracked companies            |
| AI Sentiment Analysis | Real-time sentiment classification using Gemini API |
| ESG Categorization    | Automatic E/S/G tagging with reasoning              |
| Trend Dashboard       | Line charts showing sentiment over time             |
| Distribution Charts   | Pie charts for ESG and sentiment distribution       |
| AI Summaries          | Generated company ESG performance summaries         |

### 2.3 Technology Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** Node.js + Express.js
- **AI/NLP:** Google Gemini 2.0 Flash API
- **Database:** Firebase Firestore
- **Charts:** Chart.js + react-chartjs-2
- **Styling:** Vanilla CSS (Glassmorphism theme)

---

## 3. Target Users

1. **ESG Analysts** - Track company sustainability performance
2. **Investors** - Make informed ESG-conscious investment decisions
3. **Corporate Teams** - Monitor their own ESG media coverage
4. **Researchers** - Study ESG trends and patterns

---

## 4. Expected Outcomes

### 4.1 Functional Outcomes

- Automated sentiment analysis with 85%+ accuracy
- Real-time ESG categorization
- Interactive visualization of trends
- AI-generated company summaries

### 4.2 Business Value

- Reduced manual analysis time by 80%
- Consistent, unbiased sentiment classification
- Centralized ESG monitoring dashboard
- Data-driven ESG insights

---

## 5. Scope & Constraints

### 5.1 In Scope

- 10 sample companies with pre-loaded news data
- Sentiment analysis (Positive/Negative/Neutral)
- ESG categorization (E/S/G)
- Trend visualization
- AI summary generation

### 5.2 Out of Scope (Future Enhancements)

- Real-time news feed integration
- Email alerts and notifications
- Custom company watchlists
- Multi-language support

---

## 6. Success Criteria

| Metric                      | Target      |
| --------------------------- | ----------- |
| Sentiment Analysis Accuracy | 85%+        |
| ESG Categorization Accuracy | 90%+        |
| Page Load Time              | < 2 seconds |
| API Response Time           | < 3 seconds |
| Mobile Responsiveness       | 100%        |

---

**Document Version:** 1.0  
**Date:** February 2026  
**Project:** ESG News Analyzer & Sentiment Tracker
