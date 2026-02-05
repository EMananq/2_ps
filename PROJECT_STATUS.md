# Project Requirements Analysis

## ✅ Completed Requirements

| Category                    | Status | Details                                                                             |
| :-------------------------- | :----: | :---------------------------------------------------------------------------------- |
| **1. Search & Aggregation** |   ✅   | Company search and news display working.                                            |
| **2. Sentiment Analysis**   |   ✅   | **Gemini AI integrated**, showing Positive/Negative/Neutral with confidence scores. |
| **3. ESG Categorization**   |   ✅   | **Gemini AI integrated**, auto-tagging E, S, or G categories.                       |
| **4. Visualizations**       |   ✅   | Sentiment trend charts and ESG distribution charts implemented.                     |
| **5. AI Summaries**         |   ✅   | Generates concise company ESG summaries using AI.                                   |
| **7. Data Source**          |   ✅   | Using "Mock Data" (Option 2) with 25+ curated articles from `mockNews.js`.          |
| **Tech Stack**              |   ✅   | React, Node.js/Express, Gemini API, Chart.js used.                                  |

## ❌ Missing / Incomplete Requirements

| Category             | Status | Details                                                                                                                                                                                                                                                                      |
| :------------------- | :----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Database Storage** |   ⚠️   | **Partially Done.** Firebase is _configured_ (connected), but the app currently reads from the `mockNews.js` file, **not** from Firestore. To fully meet "Store news data in database", the mock data needs to be seeded into Firestore and the API updated to read from it. |
| **Documentation**    |   ❌   | `PROBLEM_STATEMENT.pdf` is missing.                                                                                                                                                                                                                                          |
| **AI Report**        |   ❌   | `AI_USAGE_REPORT.pdf` is missing.                                                                                                                                                                                                                                            |
| **Submission**       |   ❌   | `SUBMISSION.txt` is missing.                                                                                                                                                                                                                                                 |
| **Video Demo**       |   ❌   | You need to record this.                                                                                                                                                                                                                                                     |
| **Alerts (Bonus)**   |   ❌   | Optional watchlist/email alerts not implemented.                                                                                                                                                                                                                             |

## 🎯 Recommendation

To technically fulfill the "Database" requirement strictly (since you asked for Firebase):

1.  **Seed the mock data to Firestore.**
2.  **Update the API to read from Firestore.**
