import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyDashboard from './pages/CompanyDashboard';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:name" element={<CompanyDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
