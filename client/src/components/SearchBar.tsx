import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCompanies } from '../services/api';
import type { Company } from '../types';
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filtered, setFiltered] = useState<Company[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getCompanies().then(setCompanies).catch(console.error);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const results = companies.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.symbol.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results);
      setIsOpen(results.length > 0);
      setActiveIndex(-1);
    } else {
      setFiltered([]);
      setIsOpen(false);
    }
  }, [query, companies]);

  const handleSelect = (company: Company) => {
    setQuery('');
    setIsOpen(false);
    navigate(`/company/${company.name.toLowerCase()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(filtered[activeIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search companies (e.g., Tesla, Amazon, Google...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && filtered.length > 0 && setIsOpen(true)}
        />
        {query && (
          <button className="clear-btn" onClick={() => setQuery('')}>
            ×
          </button>
        )}
      </div>
      
      {isOpen && (
        <div ref={dropdownRef} className="search-dropdown">
          {filtered.map((company, index) => (
            <div
              key={company.name}
              className={`search-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleSelect(company)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="company-info">
                <span className="company-name">{company.name}</span>
                <span className="company-symbol">{company.symbol}</span>
              </div>
              <span className="company-sector">{company.sector}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
