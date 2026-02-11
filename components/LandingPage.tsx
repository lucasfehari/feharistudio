import React from 'react';
import HeroSection from './HeroSection';
import DifferenceSection from './DifferenceSection';
import StatsSection from './StatsSection';
import VideoShowcaseSection from './VideoShowcaseSection';
import TestimonialsSection from './TestimonialsSection';
import ScrollytellingSection from './ScrollytellingSection';
import MarketingFeatureSection from './MarketingFeatureSection';
import ServicesSection from './ServicesSection';
import AgencySupportSection from './AgencySupportSection';
import PricingSection from './PricingSection';
import ProcessSection from './ProcessSection';
import FinalCTASection from './FinalCTASection';
import PortfolioSection from './PortfolioSection';
import FAQSection from './FAQSection';
import ComparisonSection from './ComparisonSection';
import TechStackSection from './TechStackSection';
import PlatformPreviewSection from './PlatformPreviewSection';
import SEO from './SEO';

const LandingPage: React.FC = () => {
    return (
        <main>
            <SEO />
            <HeroSection />
            {/* New Section Inspired by Groq */}
            <DifferenceSection />

            {/* NEW: Platform Preview - Visualizing the "Product" */}
            <PlatformPreviewSection />

            <VideoShowcaseSection />
            {/* Statistical Comparison Section */}
            <StatsSection />

            {/* NEW: Portfolio Bento Grid */}
            <PortfolioSection />

            {/* NEW: Tech Stack (Our OS) */}
            <TechStackSection />

            {/* Marketing / Growth Section (McLaren Style) */}
            <MarketingFeatureSection />
            {/* Testimonials / Social Proof Section */}
            <TestimonialsSection />
            <ServicesSection />
            {/* Social Media Agency Specific Section */}
            <AgencySupportSection />
            <ScrollytellingSection />

            {/* NEW: Comparison Table (Before Pricing) */}
            <ComparisonSection />

            <ProcessSection />
            {/* Pricing Section */}
            <PricingSection />

            {/* NEW: FAQ Section before Final CTA */}
            <FAQSection />

            <FinalCTASection />
        </main>
    );
};

export default LandingPage;
