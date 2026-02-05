import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NewsCard from '../components/NewsCard';
import ESGFilter from '../components/ESGFilter';
import AISummary from '../components/AISummary';
import ESGDistributionChart from '../components/ESGDistributionChart';
import SentimentTrendChart from '../components/SentimentTrendChart';
import { getCompany, getCompanyNews, getCompanySummary, getCompanyTrends } from '../services/api';
import type { Company, Article, CompanySummary, TrendData } from '../types';
import './CompanyDashboard.css';

export default function CompanyDashboard() {
  const { name } = useParams<{ name: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [summary, setSummary] = useState<CompanySummary | null>(null);
  const [trends, setTrends] = useState<TrendData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [summaryLoading, setSummaryLoading] = useState(false);

  useEffect(() => {
    if (!name) return;

    setLoading(true);
    setSummaryLoading(true);

    // Load company info, articles, and trends
    Promise.all([
      getCompany(name),
      getCompanyNews(name),
      getCompanyTrends(name)
    ])
      .then(([companyData, articlesData, trendsData]) => {
        setCompany(companyData);
        setArticles(articlesData);
        setFilteredArticles(articlesData);
        setTrends(trendsData);
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    // Load AI summary separately (slower)
    getCompanySummary(name)
      .then(setSummary)
      .catch(console.error)
      .finally(() => setSummaryLoading(false));
  }, [name]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter(a => 
          a.esgCategory?.primary?.toUpperCase() === selectedCategory.toUpperCase()
        )
      );
    }
  }, [selectedCategory, articles]);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading {name}...</p>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="dashboard-error">
        <h2>Company not found</h2>
        <p>We couldn't find any data for "{name}"</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="company-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <Link to="/" className="back-link">← Back</Link>
        <SearchBar />
      </header>

      {/* Company Info */}
      <section className="company-info">
        <div className="company-title-row">
          <h1>{company.name}</h1>
          <span className="company-symbol-lg">{company.symbol}</span>
        </div>
        <p className="company-sector-lg">{company.sector}</p>
        <p className="company-description">{company.description}</p>
      </section>

      {/* AI Summary */}
      <section className="summary-section">
        <AISummary 
          summary={summary} 
          loading={summaryLoading} 
          companyName={company.name} 
        />
      </section>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* News Feed */}
        <section className="news-section">
          <div className="section-header">
            <h2>ESG News ({filteredArticles.length})</h2>
            <ESGFilter selected={selectedCategory} onChange={setSelectedCategory} />
          </div>
          
          <div className="news-list">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <div key={article.id} className="fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <NewsCard article={article} />
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No articles found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Charts Sidebar */}
        <aside className="charts-section">
          {trends && (
            <>
              <ESGDistributionChart data={trends.esgDistribution} />
              <SentimentTrendChart data={trends.timeline} />
              
              {/* Stats Cards */}
              <div className="stats-cards">
                <div className="mini-stat">
                  <span className="mini-stat-value positive">
                    {trends.sentimentDistribution.Positive}
                  </span>
                  <span className="mini-stat-label">Positive</span>
                </div>
                <div className="mini-stat">
                  <span className="mini-stat-value negative">
                    {trends.sentimentDistribution.Negative}
                  </span>
                  <span className="mini-stat-label">Negative</span>
                </div>
                <div className="mini-stat">
                  <span className="mini-stat-value neutral">
                    {trends.sentimentDistribution.Neutral}
                  </span>
                  <span className="mini-stat-label">Neutral</span>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
