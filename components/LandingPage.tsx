import React from 'react';
import HeroSection from './HeroSection';
import DifferenceSection from './DifferenceSection';
import MarketingFeatureSection from './MarketingFeatureSection';
import ServicesSection from './ServicesSection';
import AgencySupportSection from './AgencySupportSection';
import ProcessSection from './ProcessSection';
import FinalCTASection from './FinalCTASection';
import PortfolioSection from './PortfolioSection';
import FAQSection from './FAQSection';
import SEO from './SEO';
import Footer from './Footer';
import FounderSection from './FounderSection';

const LandingPage: React.FC = () => {
    return (
        <main>
            <SEO
                title="Fehari Studio | Design sob demanda e marketing para empresas"
                description="Design sob demanda para agências e profissionais de marketing. Captação, tráfego pago, conteúdo, sites e implementação para empresas B2B e B2C."
                image="/logo4D_fehari.png"
            />
            <HeroSection />
            <DifferenceSection />
            <ServicesSection />
            <AgencySupportSection />
            <MarketingFeatureSection />
            <PortfolioSection />
            <FounderSection />
            <ProcessSection />
            <FAQSection />
            <FinalCTASection />
            <Footer />
        </main>
    );
};

export default LandingPage;
