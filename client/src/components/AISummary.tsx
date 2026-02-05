import { useState, useEffect } from 'react';
import type { CompanySummary } from '../types';
import './AISummary.css';

interface AISummaryProps {
  summary: CompanySummary | null;
  loading: boolean;
  companyName: string;
}

export default function AISummary({ summary, loading, companyName }: AISummaryProps) {
  const [expanded, setExpanded] = useState(true);

  if (loading) {
    return (
      <div className="ai-summary loading">
        <div className="ai-summary-header">
          <span className="ai-icon">✨</span>
          <h3>AI Analysis</h3>
        </div>
        <div className="loading-content">
          <div className="spinner"></div>
          <p>Generating ESG insights for {companyName}...</p>
        </div>
      </div>
    );
  }

  if (!summary) {
    return null;
  }

  return (
    <div className={`ai-summary ${expanded ? 'expanded' : ''}`}>
      <div className="ai-summary-header" onClick={() => setExpanded(!expanded)}>
        <div className="header-left">
          <span className="ai-icon">✨</span>
          <h3>AI ESG Summary</h3>
        </div>
        <button className="expand-btn">{expanded ? '−' : '+'}</button>
      </div>

      {expanded && (
        <div className="ai-summary-content">
          <p className="summary-text">{summary.summary}</p>

          {summary.keyConcerns.length > 0 && (
            <div className="summary-section concerns">
              <h4>⚠️ Key Concerns</h4>
              <ul>
                {summary.keyConcerns.map((concern, i) => (
                  <li key={i}>{concern}</li>
                ))}
              </ul>
            </div>
          )}

          {summary.positives.length > 0 && (
            <div className="summary-section positives">
              <h4>✓ Positive Developments</h4>
              <ul>
                {summary.positives.map((positive, i) => (
                  <li key={i}>{positive}</li>
                ))}
              </ul>
            </div>
          )}

          {summary.trendingTopics.length > 0 && (
            <div className="summary-section topics">
              <h4>📈 Trending Topics</h4>
              <div className="topic-tags">
                {summary.trendingTopics.map((topic, i) => (
                  <span key={i} className="topic-tag">{topic}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
