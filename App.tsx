import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import HeroHospedagemPage from './pages/HeroHospedagemPage';
import TermosHeroHospedagemPage from './pages/TermosHeroHospedagemPage';
import StickyPartnerBar from './components/StickyPartnerBar';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-background text-text font-sans">
      <StickyPartnerBar />
      <div className="max-w-7xl mx-auto border-l border-r border-border relative bg-background shadow-sm min-h-screen">
        <Outlet />
      </div>
    </div>
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
        <Route path="/herohospedagem" element={<HeroHospedagemPage />} />
        <Route path="/termos-hero" element={<TermosHeroHospedagemPage />} />
      </Routes>
    </Router>
  );
};

export default App;