// Mock ESG News Data for 10 Companies
// Each article includes realistic ESG-related news content

export const mockCompanies = [
  { name: 'Tesla', symbol: 'TSLA', sector: 'Automotive', description: 'Electric vehicle and clean energy company' },
  { name: 'Amazon', symbol: 'AMZN', sector: 'E-commerce/Technology', description: 'Global e-commerce and cloud computing company' },
  { name: 'Microsoft', symbol: 'MSFT', sector: 'Technology', description: 'Technology corporation developing software and cloud services' },
  { name: 'BP', symbol: 'BP', sector: 'Energy', description: 'British multinational oil and gas company' },
  { name: 'Unilever', symbol: 'UL', sector: 'Consumer Goods', description: 'Multinational consumer goods company' },
  { name: 'Patagonia', symbol: 'PRIVATE', sector: 'Retail', description: 'Outdoor clothing and gear company' },
  { name: 'Nike', symbol: 'NKE', sector: 'Apparel', description: 'Multinational corporation for footwear and apparel' },
  { name: 'Nestlé', symbol: 'NSRGY', sector: 'Food & Beverage', description: 'Multinational food and drink processing corporation' },
  { name: 'Google', symbol: 'GOOGL', sector: 'Technology', description: 'Multinational technology company specializing in Internet services' },
  { name: 'Walmart', symbol: 'WMT', sector: 'Retail', description: 'Multinational retail corporation' }
];

export const mockArticles = [
  // Tesla Articles
  {
    id: '1',
    title: 'Tesla Achieves Carbon Neutrality at Gigafactory Berlin',
    content: 'Tesla announced that its Gigafactory Berlin has achieved carbon neutrality through a combination of on-site solar installations, energy storage systems, and renewable energy procurement. The facility now runs entirely on clean energy, setting a new standard for automotive manufacturing. CEO Elon Musk stated that this milestone demonstrates the company\'s commitment to sustainable manufacturing practices.',
    summary: 'Tesla\'s Berlin factory achieves carbon neutrality with 100% renewable energy.',
    company: 'Tesla',
    source: 'Reuters',
    url: 'https://example.com/tesla-carbon-neutral',
    publishedAt: new Date('2026-01-28'),
    sentiment: { type: 'Positive', confidence: 0.92, reasoning: 'Significant environmental achievement' },
    esgCategory: { primary: 'E', secondary: [], reasoning: 'Carbon neutrality is an environmental initiative' },
    analyzed: true
  },
  {
    id: '2',
    title: 'Tesla Faces Labor Dispute at Nevada Factory',
    content: 'Workers at Tesla\'s Nevada Gigafactory have filed complaints with the National Labor Relations Board, alleging unfair labor practices and inadequate safety measures. The UAW has expressed support for the workers, potentially signaling a new unionization effort. Tesla has denied the allegations, stating that employee safety is their top priority.',
    summary: 'Tesla workers file labor complaints amid potential unionization efforts.',
    company: 'Tesla',
    source: 'Bloomberg',
    url: 'https://example.com/tesla-labor',
    publishedAt: new Date('2026-01-25'),
    sentiment: { type: 'Negative', confidence: 0.85, reasoning: 'Labor disputes indicate workplace issues' },
    esgCategory: { primary: 'S', secondary: [], reasoning: 'Labor relations is a social issue' },
    analyzed: true
  },
  {
    id: '3',
    title: 'Tesla Board Approves Diversity Initiative',
    content: 'Tesla\'s board of directors has approved a comprehensive diversity and inclusion program aimed at increasing representation of women and minorities in leadership positions. The initiative includes mentorship programs, targeted recruitment, and transparent reporting on diversity metrics. The company aims to achieve 30% female representation in technical roles by 2028.',
    summary: 'Tesla launches diversity program targeting 30% female representation in tech roles.',
    company: 'Tesla',
    source: 'Financial Times',
    url: 'https://example.com/tesla-diversity',
    publishedAt: new Date('2026-01-20'),
    sentiment: { type: 'Positive', confidence: 0.88, reasoning: 'Proactive diversity initiatives' },
    esgCategory: { primary: 'S', secondary: ['G'], reasoning: 'Diversity is primarily social, with governance implications' },
    analyzed: true
  },
  
  // Amazon Articles
  {
    id: '4',
    title: 'Amazon Commits to 100% Renewable Energy by 2025',
    content: 'Amazon announced an acceleration of its renewable energy goals, now targeting 100% renewable energy across all operations by 2025, five years ahead of the original 2030 target. The company has invested in over 400 solar and wind projects globally. This positions Amazon as one of the largest corporate purchasers of renewable energy worldwide.',
    summary: 'Amazon accelerates renewable energy goal to 100% by 2025.',
    company: 'Amazon',
    source: 'CNBC',
    url: 'https://example.com/amazon-renewable',
    publishedAt: new Date('2026-01-29'),
    sentiment: { type: 'Positive', confidence: 0.94, reasoning: 'Ambitious environmental commitment' },
    esgCategory: { primary: 'E', secondary: [], reasoning: 'Renewable energy is an environmental focus' },
    analyzed: true
  },
  {
    id: '5',
    title: 'Amazon Warehouse Workers Strike Over Working Conditions',
    content: 'Thousands of Amazon warehouse workers across multiple states have gone on strike, demanding better working conditions, higher wages, and improved break policies. The strike, organized during the busy holiday season, has drawn attention to the physical demands of fulfillment center work. Amazon responded by highlighting recent wage increases and benefits improvements.',
    summary: 'Amazon workers strike demanding better conditions and wages.',
    company: 'Amazon',
    source: 'The Guardian',
    url: 'https://example.com/amazon-strike',
    publishedAt: new Date('2026-01-22'),
    sentiment: { type: 'Negative', confidence: 0.87, reasoning: 'Worker strikes indicate labor dissatisfaction' },
    esgCategory: { primary: 'S', secondary: [], reasoning: 'Worker welfare is a social concern' },
    analyzed: true
  },
  {
    id: '6',
    title: 'Amazon Faces FTC Investigation Over AI Ethics',
    content: 'The Federal Trade Commission has launched an investigation into Amazon\'s use of AI algorithms in its marketplace, focusing on potential bias in product recommendations and seller rankings. The investigation also examines data privacy practices related to Alexa voice recordings. Amazon has pledged full cooperation with regulators.',
    summary: 'FTC investigates Amazon\'s AI ethics and data privacy practices.',
    company: 'Amazon',
    source: 'Wall Street Journal',
    url: 'https://example.com/amazon-ftc',
    publishedAt: new Date('2026-01-18'),
    sentiment: { type: 'Negative', confidence: 0.78, reasoning: 'Regulatory investigation suggests governance concerns' },
    esgCategory: { primary: 'G', secondary: ['S'], reasoning: 'Ethics and transparency are governance issues' },
    analyzed: true
  },

  // Microsoft Articles
  {
    id: '7',
    title: 'Microsoft Becomes Carbon Negative Ahead of Schedule',
    content: 'Microsoft has officially become carbon negative, removing more carbon from the atmosphere than it emits. The company achieved this milestone through massive investments in carbon capture technology, reforestation projects, and operational efficiency improvements. Microsoft announced plans to remove all historical emissions by 2050.',
    summary: 'Microsoft achieves carbon negative status ahead of 2030 goal.',
    company: 'Microsoft',
    source: 'TechCrunch',
    url: 'https://example.com/microsoft-carbon',
    publishedAt: new Date('2026-01-30'),
    sentiment: { type: 'Positive', confidence: 0.96, reasoning: 'Industry-leading environmental achievement' },
    esgCategory: { primary: 'E', secondary: [], reasoning: 'Carbon negative is an environmental milestone' },
    analyzed: true
  },
  {
    id: '8',
    title: 'Microsoft Launches AI Ethics Board with External Oversight',
    content: 'Microsoft has established an independent AI Ethics Board comprising external academics, ethicists, and civil rights advocates. The board will have authority to review and recommend changes to AI products before release. This move follows industry-wide concerns about AI safety and comes as governments consider AI regulation.',
    summary: 'Microsoft creates independent AI Ethics Board with external experts.',
    company: 'Microsoft',
    source: 'Wired',
    url: 'https://example.com/microsoft-ai-ethics',
    publishedAt: new Date('2026-01-26'),
    sentiment: { type: 'Positive', confidence: 0.89, reasoning: 'Proactive governance on AI ethics' },
    esgCategory: { primary: 'G', secondary: ['S'], reasoning: 'Ethics oversight is a governance initiative' },
    analyzed: true
  },
  {
    id: '9',
    title: 'Microsoft Expands Employee Mental Health Benefits',
    content: 'Microsoft announced a significant expansion of its mental health benefits, including unlimited therapy sessions, sabbatical programs, and on-site counseling services. The company is investing $500 million in employee wellness programs over the next three years. Employees have praised the initiative as industry-leading.',
    summary: 'Microsoft invests $500M in employee mental health and wellness.',
    company: 'Microsoft',
    source: 'Forbes',
    url: 'https://example.com/microsoft-mental-health',
    publishedAt: new Date('2026-01-21'),
    sentiment: { type: 'Positive', confidence: 0.91, reasoning: 'Strong employee welfare commitment' },
    esgCategory: { primary: 'S', secondary: [], reasoning: 'Employee wellness is a social priority' },
    analyzed: true
  },

  // BP Articles
  {
    id: '10',
    title: 'BP Announces $20 Billion Investment in Renewable Energy',
    content: 'BP has unveiled plans to invest $20 billion in renewable energy projects over the next decade, including offshore wind farms, solar installations, and green hydrogen production. The oil giant aims to reduce its oil and gas production by 40% by 2030. Environmental groups have cautiously welcomed the announcement while calling for faster action.',
    summary: 'BP commits $20B to renewables, plans 40% oil production cut by 2030.',
    company: 'BP',
    source: 'BBC',
    url: 'https://example.com/bp-renewable',
    publishedAt: new Date('2026-01-27'),
    sentiment: { type: 'Positive', confidence: 0.82, reasoning: 'Significant shift toward clean energy' },
    esgCategory: { primary: 'E', secondary: [], reasoning: 'Renewable energy investment is environmental' },
    analyzed: true
  },
  {
    id: '11',
    title: 'BP Faces Lawsuit Over Gulf Coast Environmental Damage',
    content: 'Louisiana residents have filed a class-action lawsuit against BP, alleging ongoing environmental damage from the 2010 Deepwater Horizon spill. The lawsuit claims that cleanup efforts were inadequate and that local communities continue to suffer health and economic consequences. BP has stated it has met all legal obligations.',
    summary: 'BP sued over ongoing Deepwater Horizon environmental impacts.',
    company: 'BP',
    source: 'New York Times',
    url: 'https://example.com/bp-lawsuit',
    publishedAt: new Date('2026-01-19'),
    sentiment: { type: 'Negative', confidence: 0.88, reasoning: 'Lawsuit indicates ongoing environmental concerns' },
    esgCategory: { primary: 'E', secondary: ['G'], reasoning: 'Environmental damage with governance implications' },
    analyzed: true
  },

  // Unilever Articles
  {
    id: '12',
    title: 'Unilever Achieves 100% Recyclable Packaging Goal',
    content: 'Unilever announced that all its plastic packaging is now fully recyclable, reusable, or compostable, achieving its 2025 target ahead of schedule. The company has invested heavily in innovative packaging materials and collection programs. CEO Hein Schumacher called it a major milestone in the fight against plastic pollution.',
    summary: 'Unilever reaches 100% recyclable packaging milestone.',
    company: 'Unilever',
    source: 'Reuters',
    url: 'https://example.com/unilever-packaging',
    publishedAt: new Date('2026-01-29'),
    sentiment: { type: 'Positive', confidence: 0.93, reasoning: 'Achievement of sustainability goal' },
    esgCategory: { primary: 'E', secondary: [], reasoning: 'Packaging sustainability is environmental' },
    analyzed: true
  },
  {
    id: '13',
    title: 'Unilever Partners with Fair Trade for Ethical Sourcing',
    content: 'Unilever has expanded its partnership with Fair Trade International, committing to source 100% of its cocoa, tea, and coffee from certified fair trade suppliers by 2027. The initiative ensures living wages for farmers and prohibits child labor in supply chains. The commitment covers over 1 million farmers globally.',
    summary: 'Unilever expands fair trade sourcing to 100% for key ingredients.',
    company: 'Unilever',
    source: 'The Guardian',
    url: 'https://example.com/unilever-fairtrade',
    publishedAt: new Date('2026-01-24'),
    sentiment: { type: 'Positive', confidence: 0.90, reasoning: 'Ethical supply chain commitment' },
    esgCategory: { primary: 'S', secondary: ['G'], reasoning: 'Fair trade is primarily a social initiative' },
    analyzed: true
  },

  // Patagonia Articles
  {
    id: '14',
    title: 'Patagonia Donates Entire Profits to Climate Change Fight',
    content: 'Outdoor apparel company Patagonia announced it will donate 100% of its profits, approximately $100 million annually, to environmental nonprofits fighting climate change. Founder Yvon Chouinard stated that "Earth is now our only shareholder." The unprecedented move has been praised by environmental advocates worldwide.',
    summary: 'Patagonia commits all profits ($100M/year) to climate action.',
    company: 'Patagonia',
    source: 'NPR',
    url: 'https://example.com/patagonia-profits',
    publishedAt: new Date('2026-01-28'),
    sentiment: { type: 'Positive', confidence: 0.98, reasoning: 'Extraordinary environmental commitment' },
    esgCategory: { primary: 'E', secondary: ['G'], reasoning: 'Climate action funding with unique governance structure' },
    analyzed: true
  },
  {
    id: '15',
    title: 'Patagonia Launches Repair Program to Reduce Waste',
    content: 'Patagonia has expanded its Worn Wear program, offering free repairs for any Patagonia product regardless of age. The company has opened 50 repair centers globally and trained 500 repair technicians. The initiative aims to extend product lifespan and reduce textile waste in landfills.',
    summary: 'Patagonia expands free repair program to 50 global centers.',
    company: 'Patagonia',
    source: 'Fast Company',
    url: 'https://example.com/patagonia-repair',
    publishedAt: new Date('2026-01-23'),
    sentiment: { type: 'Positive', confidence: 0.91, reasoning: 'Circular economy initiative' },
    esgCategory: { primary: 'E', secondary: ['S'], reasoning: 'Waste reduction is environmental' },
    analyzed: true
  },

  // Nike Articles
  {
    id: '16',
    title: 'Nike Commits to Zero Waste in All Facilities by 2025',
    content: 'Nike has announced that all its manufacturing facilities will achieve zero waste to landfill status by the end of 2025. The company has implemented comprehensive recycling programs and is converting waste materials into new products through its Nike Grind initiative. The program has already diverted 1 billion pounds of waste from landfills.',
    summary: 'Nike targeting zero waste across all manufacturing by 2025.',
    company: 'Nike',
    source: 'Bloomberg',
    url: 'https://example.com/nike-zero-waste',
    publishedAt: new Date('2026-01-30'),
    sentiment: { type: 'Positive', confidence: 0.89, reasoning: 'Strong environmental commitment' },
    esgCategory: { primary: 'E', secondary: [], reasoning: 'Waste reduction is environmental' },
    analyzed: true
  },
  {
    id: '17',
    title: 'Nike Criticized for Supply Chain Labor Practices',
    content: 'A new report from labor rights organizations has criticized Nike for inadequate oversight of working conditions in its Southeast Asian suppliers. The report documents excessive overtime hours and below-living-wage pay in some factories. Nike has responded by announcing enhanced auditing procedures and supplier accountability measures.',
    summary: 'Nike faces criticism over supplier working conditions in Asia.',
    company: 'Nike',
    source: 'Washington Post',
    url: 'https://example.com/nike-labor',
    publishedAt: new Date('2026-01-22'),
    sentiment: { type: 'Negative', confidence: 0.84, reasoning: 'Supply chain labor issues' },
    esgCategory: { primary: 'S', secondary: ['G'], reasoning: 'Labor practices are social concerns' },
    analyzed: true
  },

  // Nestlé Articles
  {
    id: '18',
    title: 'Nestlé Pledges to End Deforestation in Supply Chain',
    content: 'Nestlé has announced a binding commitment to eliminate deforestation from its entire supply chain by 2025, backed by satellite monitoring technology. The company will require all suppliers to provide proof of deforestation-free sourcing for palm oil, cocoa, soy, and beef. Non-compliant suppliers will be removed from the supply chain.',
    summary: 'Nestlé commits to deforestation-free supply chain by 2025.',
    company: 'Nestlé',
    source: 'Financial Times',
    url: 'https://example.com/nestle-deforestation',
    publishedAt: new Date('2026-01-26'),
    sentiment: { type: 'Positive', confidence: 0.86, reasoning: 'Strong environmental commitment' },
    esgCategory: { primary: 'E', secondary: ['G'], reasoning: 'Deforestation is environmental' },
    analyzed: true
  },
  {
    id: '19',
    title: 'Nestlé Faces Backlash Over Water Extraction in California',
    content: 'Environmental groups and local residents are protesting Nestlé\'s water extraction operations in drought-stricken California. Critics argue that the company is depleting aquifers while communities face water restrictions. Nestlé maintains that its operations are within permitted levels and contribute to local employment.',
    summary: 'Nestlé water extraction sparks protests amid California drought.',
    company: 'Nestlé',
    source: 'LA Times',
    url: 'https://example.com/nestle-water',
    publishedAt: new Date('2026-01-20'),
    sentiment: { type: 'Negative', confidence: 0.82, reasoning: 'Community conflict over resource use' },
    esgCategory: { primary: 'E', secondary: ['S'], reasoning: 'Water conservation is environmental with social impact' },
    analyzed: true
  },

  // Google Articles
  {
    id: '20',
    title: 'Google Achieves 24/7 Carbon-Free Energy at All Data Centers',
    content: 'Google announced that all its data centers are now running on 24/7 carbon-free energy, a first for a major tech company. The achievement was made possible through a combination of renewable energy procurement, battery storage, and advanced grid matching algorithms. The company plans to help other organizations achieve similar goals.',
    summary: 'Google reaches 24/7 carbon-free energy across all data centers.',
    company: 'Google',
    source: 'The Verge',
    url: 'https://example.com/google-carbon-free',
    publishedAt: new Date('2026-01-31'),
    sentiment: { type: 'Positive', confidence: 0.95, reasoning: 'Industry-leading environmental achievement' },
    esgCategory: { primary: 'E', secondary: [], reasoning: 'Carbon-free energy is environmental' },
    analyzed: true
  },
  {
    id: '21',
    title: 'Google Fined €2 Billion for AI Data Privacy Violations',
    content: 'The European Union has fined Google €2 billion for violations of GDPR related to its AI training data practices. Regulators found that the company collected user data without proper consent for training machine learning models. Google has announced plans to appeal while implementing new data collection policies.',
    summary: 'EU fines Google €2B over AI training data privacy violations.',
    company: 'Google',
    source: 'Politico',
    url: 'https://example.com/google-gdpr',
    publishedAt: new Date('2026-01-25'),
    sentiment: { type: 'Negative', confidence: 0.89, reasoning: 'Major regulatory penalty' },
    esgCategory: { primary: 'G', secondary: ['S'], reasoning: 'Data privacy is a governance issue' },
    analyzed: true
  },
  {
    id: '22',
    title: 'Google Expands Diversity Programs with $1 Billion Commitment',
    content: 'Google has announced a $1 billion commitment to expand diversity and inclusion programs over the next five years. The initiative includes increased hiring targets for underrepresented groups, partnerships with HBCUs, and support for minority-owned businesses. The announcement comes as the tech industry faces scrutiny over diversity metrics.',
    summary: 'Google commits $1B to diversity and inclusion initiatives.',
    company: 'Google',
    source: 'Business Insider',
    url: 'https://example.com/google-diversity',
    publishedAt: new Date('2026-01-18'),
    sentiment: { type: 'Positive', confidence: 0.87, reasoning: 'Major diversity investment' },
    esgCategory: { primary: 'S', secondary: ['G'], reasoning: 'Diversity is a social initiative' },
    analyzed: true
  },

  // Walmart Articles
  {
    id: '23',
    title: 'Walmart Electrifies Entire Delivery Fleet',
    content: 'Walmart has completed the electrification of its entire last-mile delivery fleet, deploying over 50,000 electric vehicles across the United States. The company\'s EV fleet is expected to eliminate 2 million metric tons of CO2 emissions annually. Walmart has also installed thousands of charging stations at its distribution centers.',
    summary: 'Walmart completes full EV delivery fleet of 50,000+ vehicles.',
    company: 'Walmart',
    source: 'CNBC',
    url: 'https://example.com/walmart-ev',
    publishedAt: new Date('2026-01-29'),
    sentiment: { type: 'Positive', confidence: 0.92, reasoning: 'Major emission reduction initiative' },
    esgCategory: { primary: 'E', secondary: [], reasoning: 'Fleet electrification is environmental' },
    analyzed: true
  },
  {
    id: '24',
    title: 'Walmart Workers Demand Living Wage Increase',
    content: 'Walmart employees across 20 states have organized demonstrations calling for a $20 minimum wage, up from the current $14. Workers cite inflation and rising living costs as reasons for the demand. Walmart has responded by pointing to recent wage increases and comprehensive benefits packages.',
    summary: 'Walmart workers protest for $20/hour minimum wage.',
    company: 'Walmart',
    source: 'USA Today',
    url: 'https://example.com/walmart-wages',
    publishedAt: new Date('2026-01-21'),
    sentiment: { type: 'Negative', confidence: 0.79, reasoning: 'Worker dissatisfaction with compensation' },
    esgCategory: { primary: 'S', secondary: [], reasoning: 'Wages and labor are social issues' },
    analyzed: true
  },
  {
    id: '25',
    title: 'Walmart Launches Sustainable Product Certification',
    content: 'Walmart has introduced a new sustainability certification program for suppliers, requiring products to meet stringent environmental and social standards. Products meeting the criteria will receive a "Walmart Eco-Select" badge. The program is expected to influence the practices of over 100,000 suppliers globally.',
    summary: 'Walmart introduces eco-certification for 100,000+ suppliers.',
    company: 'Walmart',
    source: 'Fortune',
    url: 'https://example.com/walmart-eco',
    publishedAt: new Date('2026-01-17'),
    sentiment: { type: 'Positive', confidence: 0.88, reasoning: 'Supply chain sustainability initiative' },
    esgCategory: { primary: 'E', secondary: ['G'], reasoning: 'Sustainability standards are environmental with governance aspects' },
    analyzed: true
  }
];

// Helper functions
export function getCompanies() {
  return mockCompanies;
}

export function getCompanyByName(name) {
  return mockCompanies.find(c => c.name.toLowerCase() === name.toLowerCase());
}

export function getArticlesByCompany(companyName) {
  return mockArticles.filter(a => a.company.toLowerCase() === companyName.toLowerCase());
}

export function getArticleById(id) {
  return mockArticles.find(a => a.id === id);
}

export function getAllArticles() {
  return mockArticles;
}
