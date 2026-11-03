import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Calculator, Briefcase, Building2, Compass } from 'lucide-react';
import Button from './ui/Button';
import PlanCard from './pricing/PlanCard';
import CustomProjectsGrid from './pricing/CustomProjectsGrid';
import {
  ClientProfile,
  AGENCY_PLANS,
  COMPANY_PLANS,
  buildWhatsAppLink,
} from '../data/pricingData';

const PricingSection: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<ClientProfile>('agencia');

  return (
    <section id="planos" className="relative scroll-mt-24 border-t border-white/10 bg-[#050505] py-24 md:py-32 text-white">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <p className="eyebrow">Planos Sob Demanda</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.05]">
            Design profissional <br />
            <span className="hero-gradient-text">para quem precisa crescer.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed">
            Sua equipe criativa sob demanda. Mais agilidade, menos burocracia e uma produção de design que acompanha o ritmo do seu negócio.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex rounded-full border border-white/10 bg-[#0c0c0c] p-1.5 shadow-xl">
            <button
              onClick={() => setActiveProfile('agencia')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all ${
                activeProfile === 'agencia'
                  ? 'bg-gradient-to-r from-accent to-[#ff6a00] text-white shadow-md'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>Sou uma agência</span>
            </button>
            <button
              onClick={() => setActiveProfile('empresa')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all ${
                activeProfile === 'empresa'
                  ? 'bg-gradient-to-r from-accent to-[#ff6a00] text-white shadow-md'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Building2 className="h-3.5 w-3.5" />
              <span>Sou uma empresa</span>
            </button>
            <button
              onClick={() => setActiveProfile('avulso')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all ${
                activeProfile === 'avulso'
                  ? 'bg-gradient-to-r from-accent to-[#ff6a00] text-white shadow-md'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Projeto avulso</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          {activeProfile === 'agencia' && (
            <motion.div
              key="home-agencia"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-stretch"
            >
              {AGENCY_PLANS.map((plan) => (
                <PlanCard key={plan.id} plan={plan} profile="agencia" />
              ))}
            </motion.div>
          )}

          {activeProfile === 'empresa' && (
            <motion.div
              key="home-empresa"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto items-stretch"
            >
              {COMPANY_PLANS.map((plan) => (
                <PlanCard key={plan.id} plan={plan} profile="empresa" />
              ))}
            </motion.div>
          )}

          {activeProfile === 'avulso' && (
            <motion.div
              key="home-avulso"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <CustomProjectsGrid />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dedicated Planos Page Callout */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#111] via-[#0d0d0d] to-[#140b08] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent mb-1.5">
              <Calculator className="h-3.5 w-3.5" /> Simulador Interativo
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-medium text-white">
              Quer simular exatamente quantas peças pode produzir por mês?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
              Acesse a página completa de planos para utilizar nosso simulador de créditos, conferir a tabela de equivalência e sanar todas as dúvidas.
            </p>
          </div>

          <Link to="/planos">
            <Button size="lg" className="whitespace-nowrap gap-3">
              Acessar simulador e detalhes <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
