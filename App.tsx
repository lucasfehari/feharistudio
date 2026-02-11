import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import StickyPartnerBar from './components/StickyPartnerBar';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-background text-text font-sans">

        {/* Fixed Floating Bar (Outside the main container to ensure it sits on top relative to viewport) */}
        <StickyPartnerBar />

        {/* Structural Frame: Creates the "blueprint" look with borders on max-width container */}
        <div className="max-w-7xl mx-auto border-l border-r border-border relative bg-background shadow-sm min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;