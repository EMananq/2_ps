import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getCompanies, getStats } from '../services/api';
import type { Company, Stats } from '../types';
import './HomePage.css';

export default function HomePage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getCompanies(), getStats()])
      .then(([companiesData, statsData]) => {
        setCompanies(companiesData);
        setStats(statsData);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            ESG News <span className="gradient-text">Analyzer</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered insights into Environmental, Social, and Governance news. 
            Track company ESG performance with sentiment analysis and intelligent categorization.
          </p>
          <SearchBar />
        </div>
        <div className="hero-glow"></div>
      </section>

      {/* Stats Section */}
      {stats && (
        <section className="stats-section">
          <div className="stat-card">
            <span className="stat-number">{stats.totalCompanies}</span>
            <span className="stat-label">Companies</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.totalArticles}</span>
            <span className="stat-label">Articles Analyzed</span>
          </div>
          <div className="stat-card esg-e">
            <span className="stat-number">{stats.esgDistribution.E}</span>
            <span className="stat-label">Environmental</span>
          </div>
          <div className="stat-card esg-s">
            <span className="stat-number">{stats.esgDistribution.S}</span>
            <span className="stat-label">Social</span>
          </div>
          <div className="stat-card esg-g">
            <span className="stat-number">{stats.esgDistribution.G}</span>
            <span className="stat-label">Governance</span>
          </div>
        </section>
      )}

      {/* Companies Grid */}
      <section className="companies-section">
        <h2>Explore Companies</h2>
        <div className="companies-grid">
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading companies...</p>
            </div>
          ) : (
            companies.map((company, index) => (
              <Link
                key={company.name}
                to={`/company/${company.name.toLowerCase()}`}
                className="company-card fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="company-card-header">
                  <h3>{company.name}</h3>
                  <span className="company-symbol">{company.symbol}</span>
                </div>
                <p className="company-sector">{company.sector}</p>
                <p className="company-desc">{company.description}</p>
                <span className="view-arrow">→</span>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* ESG Categories Info */}
      <section className="esg-info-section">
        <h2>Understanding ESG Categories</h2>
        <div className="esg-info-grid">
          <div className="esg-info-card esg-e-card">
            <div className="esg-info-icon">🌿</div>
            <h3>Environmental</h3>
            <ul>
              <li>Climate change & carbon emissions</li>
              <li>Pollution & waste management</li>
              <li>Renewable energy adoption</li>
              <li>Water conservation</li>
            </ul>
          </div>
          <div className="esg-info-card esg-s-card">
            <div className="esg-info-icon">👥</div>
            <h3>Social</h3>
            <ul>
              <li>Labor practices & working conditions</li>
              <li>Diversity & inclusion</li>
              <li>Human rights & community</li>
              <li>Product safety & quality</li>
            </ul>
          </div>
          <div className="esg-info-card esg-g-card">
            <div className="esg-info-icon">⚖️</div>
            <h3>Governance</h3>
            <ul>
              <li>Board diversity & structure</li>
              <li>Executive compensation</li>
              <li>Transparency & ethics</li>
              <li>Shareholder rights</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
