# ESG News Analyzer & Sentiment Tracker

AI-powered platform for analyzing ESG (Environmental, Social, Governance) news with sentiment analysis and intelligent categorization.

![ESG News Analyzer](https://img.shields.io/badge/ESG-News%20Analyzer-667eea?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-ffca28?style=flat-square&logo=firebase)
![Gemini AI](https://img.shields.io/badge/Google-Gemini%20AI-4285f4?style=flat-square&logo=google)

## 🌟 Features

### Core Features

- **Company Search** - Search and explore 10 major companies with ESG news coverage
- **AI Sentiment Analysis** - Real-time sentiment analysis (Positive/Negative/Neutral) using Google Gemini
- **ESG Categorization** - Auto-categorize news into Environmental, Social, or Governance
- **Interactive Dashboard** - View company ESG performance with charts and visualizations
- **AI-Generated Summaries** - Get intelligent ESG summaries with key concerns and positives

### Visualizations

- Sentiment trend charts over time
- ESG category distribution (pie chart)
- Sentiment distribution statistics

## 🛠️ Tech Stack

| Layer    | Technology                   |
| -------- | ---------------------------- |
| Frontend | React 18 + Vite + TypeScript |
| Styling  | Vanilla CSS (Glassmorphism)  |
| Backend  | Node.js + Express.js         |
| Database | Firebase Firestore           |
| AI/NLP   | Google Gemini API            |
| Charts   | Chart.js                     |

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Gemini API key ([Get free key](https://ai.google.dev))
- Firebase project (optional, uses mock data by default)

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "ESG News Analyzer"
   ```

2. **Install dependencies**

   ```bash
   # Backend
   cd server
   npm install

   # Frontend
   cd ../client
   npm install
   ```

3. **Configure environment**

   ```bash
   # In server directory, create .env file
   cd server
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   ```

4. **Start the application**

   ```bash
   # Terminal 1: Start backend
   cd server
   npm run dev

   # Terminal 2: Start frontend
   cd client
   npm run dev
   ```

5. **Open the app**
   Navigate to http://localhost:5173

## 📁 Project Structure

```
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API client
│   │   └── types/          # TypeScript types
│   └── ...
├── server/                 # Express Backend
│   ├── src/
│   │   ├── config/         # Firebase config
│   │   ├── routes/         # API routes
│   │   ├── services/       # AI service
│   │   └── data/           # Mock news data
│   └── ...
└── docs/                   # Documentation
```

## 🔌 API Endpoints

| Endpoint                       | Method | Description          |
| ------------------------------ | ------ | -------------------- |
| `/api/companies`               | GET    | List all companies   |
| `/api/companies/:name/news`    | GET    | Get company news     |
| `/api/companies/:name/summary` | GET    | AI-generated summary |
| `/api/companies/:name/trends`  | GET    | Chart data           |
| `/api/articles/:id/analyze`    | POST   | Analyze article      |
| `/api/stats`                   | GET    | Overall statistics   |

## 🎨 ESG Categories

- **Environmental (E)** 🌿 - Climate, emissions, pollution, renewable energy
- **Social (S)** 👥 - Labor, diversity, human rights, community
- **Governance (G)** ⚖️ - Board structure, ethics, transparency

## 📊 Sample Companies

Tesla, Amazon, Microsoft, BP, Unilever, Patagonia, Nike, Nestlé, Google, Walmart

## 📝 License

MIT License
