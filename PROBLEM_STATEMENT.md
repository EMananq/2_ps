# Problem Statement: ESG News Analyzer

## Background

Environmental, Social, and Governance (ESG) factors have become really important for investors and companies over the past few years. With so much news coming out daily about different companies and their ESG practices, it's become almost impossible to manually track everything.

## The Problem

Right now, if you want to understand how a company is doing on ESG front, you have to:

1. Manually search for news articles across multiple sources
2. Read through each article and figure out if it's positive or negative
3. Decide whether the article is about Environmental issues, Social issues, or Governance
4. Try to spot patterns and trends over time
5. Remember all this information to make decisions

This takes way too much time and is prone to human bias. Two people reading the same article might classify it differently.

## Our Solution

We built an ESG News Analyzer that automates this entire process using AI. The app:

- Pulls ESG-related news for any company you search
- Uses Google's Gemini AI to automatically determine sentiment (positive/negative/neutral)
- Categorizes each article into E, S, or G buckets using NLP
- Shows visual charts for trends and distribution
- Generates AI summaries highlighting key concerns and positive developments

## Who Would Use This?

- **Investment analysts** who need to evaluate companies before investing
- **ESG compliance teams** tracking their own company's media coverage
- **Researchers** studying corporate sustainability trends
- **Asset managers** building ESG-focused portfolios

## Technical Approach

We went with a modern stack:

- React frontend because it's fast and component-based
- Node.js backend for API handling
- Firebase for data storage
- Gemini 2.5 Flash for AI capabilities (it's fast and accurate)
- Chart.js for visualizations

The AI does the heavy lifting - analyzing sentiment, categorizing articles, and generating summaries. This removes human bias and provides consistent results.

## Expected Outcomes

With this tool, users can:

- Save hours of manual research time
- Get consistent, unbiased sentiment analysis
- Quickly identify ESG risks and opportunities
- Track how a company's ESG perception changes over time

## Limitations

- Currently works with pre-loaded news data (no live feed integration yet)
- AI accuracy depends on article quality
- Rate limits on free Gemini API tier

## Future Scope

If we had more time, we'd add:

- Real-time news feed integration
- Email alerts for negative ESG coverage
- Custom watchlists for multiple companies
- Export reports to PDF

---

_This document outlines the problem we set out to solve and how our application addresses it._
