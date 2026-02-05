import type { Sentiment } from '../types';
import './SentimentBadge.css';

interface SentimentBadgeProps {
  sentiment: Sentiment | undefined;
  showConfidence?: boolean;
}

export default function SentimentBadge({ sentiment, showConfidence = false }: SentimentBadgeProps) {
  if (!sentiment) {
    return <span className="sentiment-badge neutral">Not Analyzed</span>;
  }

  const type = sentiment.type?.toLowerCase() || 'neutral';
  const icon = type === 'positive' ? '↑' : type === 'negative' ? '↓' : '→';

  return (
    <span className={`sentiment-badge ${type}`} title={sentiment.reasoning}>
      <span className="sentiment-icon">{icon}</span>
      <span className="sentiment-text">{sentiment.type}</span>
      {showConfidence && (
        <span className="sentiment-confidence">
          {Math.round((sentiment.confidence || 0) * 100)}%
        </span>
      )}
    </span>
  );
}
