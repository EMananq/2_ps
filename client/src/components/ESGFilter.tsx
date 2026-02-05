import './ESGFilter.css';

interface ESGFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All', icon: '◎' },
  { id: 'E', label: 'Environmental', icon: '🌿' },
  { id: 'S', label: 'Social', icon: '👥' },
  { id: 'G', label: 'Governance', icon: '⚖️' }
];

export default function ESGFilter({ selected, onChange }: ESGFilterProps) {
  return (
    <div className="esg-filter">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={`esg-filter-btn ${selected === cat.id ? 'active' : ''} ${cat.id !== 'all' ? `esg-${cat.id.toLowerCase()}` : ''}`}
          onClick={() => onChange(cat.id)}
        >
          <span className="esg-filter-icon">{cat.icon}</span>
          <span className="esg-filter-label">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
