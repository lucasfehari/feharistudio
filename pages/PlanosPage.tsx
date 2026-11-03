import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Sparkles, Building2, Briefcase } from 'lucide-react';

import SEO from '../components/SEO';
import Footer from '../components/Footer';
import PricingHero from '../components/pricing/PricingHero';
import ProfileSelector from '../components/pricing/ProfileSelector';
import PlanCard from '../components/pricing/PlanCard';
import CreditSimulator from '../components/pricing/CreditSimulator';
import CustomProjectsGrid from '../components/pricing/CustomProjectsGrid';
import AdditionalServicesList from '../components/pricing/AdditionalServicesList';
import RulesAndFAQ from '../components/pricing/RulesAndFAQ';
import Button from '../components/ui/Button';

import {
  ClientProfile,
  AGENCY_PLANS,
  COMPANY_PLANS,
  buildWhatsAppLink,
} from '../data/pricingData';

const PlanosPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlProfile = searchParams.get('perfil') as ClientProfile | null;

  // Profile state: 'agencia' (default) | 'empresa' | 'avulso'
  const [profile, setProfile] = useState<ClientProfile>(() => {
    if (urlProfile && ['agencia', 'empresa', 'avulso'].includes(urlProfile)) {
      return urlProfile;
    }
    return 'agencia';
  });

  // Sync state with URL parameter without reloading
  const handleSelectProfile = (newProfile: ClientProfile) => {
    setProfile(newProfile);
    setSearchParams({ perfil: newProfile }, { replace: true });
  };

  // Scroll to top on initial mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const scrollToPlans = () => {
    const el = document.getElementById('tabela-planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-accent selection:text-white">
      <SEO
        title="Planos de Design Sob Demanda | Fehari Studio"
        description="Design profissional por assinatura para agências de marketing e empresas. Conheça nossos planos de produção criativa white-label e flexibilidade de créditos."
        url="https://www.feharistudio.com.br/planos"
      />

      <main>
        {/* 1. Hero Section */}
        <PricingHero
          activeProfile={profile}
          onExplorePlansClick={scrollToPlans}
        />

        {/* 2. Interactive Plans Section */}
        <section id="tabela-planos" className="relative scroll-mt-24 bg-[#050505] py-16 md:py-24">
          <div className="mx-auto max-w-[1380px] px-6 md:px-10">
            
            {/* Profile Selector Tabs */}
            <div className="mb-14">
              <ProfileSelector
                selectedProfile={profile}
                onSelectProfile={handleSelectProfile}
              />
            </div>

            {/* Dynamic Plans Display */}
            <div id="tabpanel-planos" role="tabpanel" aria-labelledby={`tab-${profile}`}>
              <AnimatePresence mode="wait">
                {profile === 'agencia' && (
                  <motion.div
                    key="planos-agencia"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* Agency Subheader */}
                    <div className="mb-10 text-center">
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold text-accent uppercase tracking-wider">
                        <Briefcase className="h-3.5 w-3.5" /> Planos Exclusivos para Agências & White-Label
                      </span>
                      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-white">
                        Escale a entrega dos seus clientes sem inchar sua folha.
                      </h2>
                      <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-white/50">
                        Produção confidencial nos bastidores, fila organizada e padrão estético sênior para cada marca da sua carteira.
                      </p>
                    </div>

                    {/* Agency Plans Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-stretch">
                      {AGENCY_PLANS.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} profile="agencia" />
                      ))}
                    </div>
                  </motion.div>
                )}

                {profile === 'empresa' && (
                  <motion.div
                    key="planos-empresa"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* Company Subheader */}
                    <div className="mb-10 text-center">
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold text-accent uppercase tracking-wider">
                        <Building2 className="h-3.5 w-3.5" /> Planos de Design Recorrente para Empresas
                      </span>
                      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-white">
                        Design de alto nível para sua marca todos os meses.
                      </h2>
                      <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-white/50">
                        Tenha um time de direção de arte sem os custos e a lentidão de contratar internamente. Consistência visual em todas as redes e canais.
                      </p>
                    </div>

                    {/* Company Plans Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
                      {COMPANY_PLANS.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} profile="empresa" />
                      ))}
                    </div>
                  </motion.div>
                )}

                {profile === 'avulso' && (
                  <motion.div
                    key="projetos-avulsos-tab"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                  >
                    <CustomProjectsGrid />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* 3. Interactive Credit Simulator & Equivalences */}
        <CreditSimulator currentProfile={profile} />

        {/* 4. Custom Projects Journey (shown if not in avulso tab) */}
        {profile !== 'avulso' && (
          <div className="border-t border-white/10 bg-[#050505]">
            <CustomProjectsGrid />
          </div>
        )}

        {/* 5. Additional Services (Creative vs Strategic) */}
        <AdditionalServicesList currentProfile={profile} />

        {/* 6. Commercial Rules & 10 Essential FAQs */}
        <RulesAndFAQ />

        {/* 7. Final High-Conversion Action Banner */}
        <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0c0c0c] to-[#050505] py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,70,31,0.14),transparent_60%)] pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center">
            <span className="eyebrow">Pronto para dar o próximo passo?</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
              Sua equipe criativa sob demanda <br />
              <span className="hero-gradient-text">começa agora.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-white/60">
              Converse diretamente com nossos especialistas, tire qualquer dúvida operacional e ative sua esteira de produção sem burocracia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={buildWhatsAppLink({
                  profile,
                  customMessage: 'Olá! Gostaria de conversar com a Fehari para ativar meu plano de design sob demanda.',
                })}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto gap-3 shadow-[0_12px_45px_rgba(255,70,31,0.3)]"
              >
                Falar com a Fehari no WhatsApp <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                onClick={scrollToPlans}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Rever tabela de planos
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-xs text-white/40">
              <span>Atendimento ágil</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Sem fidelidade obrigatória</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Garantia de alinhamento</span>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default PlanosPage;

