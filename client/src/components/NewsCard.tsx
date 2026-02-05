import type { Article } from '../types';
import SentimentBadge from './SentimentBadge';
import './NewsCard.css';

interface NewsCardProps {
  article: Article;
  onClick?: () => void;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function getESGLabel(category: string): { label: string; full: string } {
  switch (category?.toUpperCase()) {
    case 'E':
      return { label: 'E', full: 'Environmental' };
    case 'S':
      return { label: 'S', full: 'Social' };
    case 'G':
      return { label: 'G', full: 'Governance' };
    default:
      return { label: '?', full: 'Unknown' };
  }
}

export default function NewsCard({ article, onClick }: NewsCardProps) {
  const esg = getESGLabel(article.esgCategory?.primary || '');

  return (
    <article className="news-card" onClick={onClick}>
      <div className="news-card-header">
        <div className="news-badges">
          <SentimentBadge sentiment={article.sentiment} />
          <span 
            className={`esg-badge esg-${esg.label.toLowerCase()}`} 
            title={`${esg.full}: ${article.esgCategory?.reasoning || ''}`}
          >
            {esg.label}
          </span>
        </div>
        <span className="news-date">{formatDate(article.publishedAt)}</span>
      </div>
      
      <h3 className="news-title">{article.title}</h3>
      <p className="news-summary">{article.summary}</p>
      
      <div className="news-card-footer">
        <span className="news-source">{article.source}</span>
        {article.analyzed && (
          <span className="analyzed-badge">✓ AI Analyzed</span>
        )}
      </div>
    </article>
  );
}
