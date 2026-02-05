# ESG News Analyzer & Sentiment Tracker

A web application that aggregates ESG-related news about companies and uses AI to analyze sentiment and categorize issues into Environmental, Social, or Governance categories.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![AI](https://img.shields.io/badge/AI-Gemini%202.5-purple)

## Features

### Core Functionality

- **Company Search** - Search for any company and view their ESG news
- **AI Sentiment Analysis** - Each article analyzed as Positive/Negative/Neutral with confidence scores
- **ESG Categorization** - Articles auto-tagged as Environmental, Social, or Governance
- **Trend Dashboard** - Visual charts showing sentiment trends over time
- **AI Summaries** - Generated insights highlighting key concerns and developments

### Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** Node.js + Express
- **Database:** Firebase
- **AI:** Google Gemini 2.5 Flash
- **Charts:** Chart.js + react-chartjs-2

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Gemini API key

### Installation

1. Clone the repository

```bash
git clone https://github.com/EMananq/2_ps.git
cd 2_ps
```

2. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

3. Configure environment variables

```bash
# In server/.env
PORT=3001
GEMINI_API_KEY=your_api_key_here
```

4. Start the application

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

5. Open http://localhost:5173 in your browser

## Project Structure

```
2_ps/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page views
│   │   └── App.tsx         # Main app
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── services/       # AI service
│   │   └── data/           # Mock news data
│   └── package.json
├── PROBLEM_STATEMENT.md    # Problem definition
├── AI_USAGE_REPORT.md      # AI implementation details
└── README.md               # This file
```

## API Endpoints

| Endpoint                | Method | Description          |
| ----------------------- | ------ | -------------------- |
| `/api/companies/search` | GET    | Search companies     |
| `/api/news/:company`    | GET    | Get news for company |
| `/api/ai/sentiment`     | POST   | Analyze sentiment    |
| `/api/ai/categorize`    | POST   | Categorize ESG       |
| `/api/ai/summary`       | POST   | Generate summary     |

## AI Integration

This project uses Google's Gemini 2.5 Flash for:

1. **Sentiment Analysis** - Classifies article sentiment with confidence scores
2. **ESG Categorization** - Tags articles with Environmental, Social, or Governance
3. **Summary Generation** - Creates concise summaries of ESG issues

See `AI_USAGE_REPORT.md` for detailed implementation.

## Sample Companies

The app includes mock data for: Tesla, Microsoft, Amazon, BP, Unilever

## Screenshots

- Home page with company search
- Dashboard with sentiment charts
- News cards with AI analysis badges
- AI-generated summary section

## Author

Manan - [GitHub](https://github.com/EMananq)

## License

This project is for educational purposes.
