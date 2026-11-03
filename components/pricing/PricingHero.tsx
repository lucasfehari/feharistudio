import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, Sparkles, Shield, Zap, Layers } from 'lucide-react';
import Button from '../ui/Button';
import { buildWhatsAppLink, ClientProfile } from '../../data/pricingData';

interface PricingHeroProps {
  activeProfile: ClientProfile;
  onExplorePlansClick: () => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({ activeProfile, onExplorePlansClick }) => {
  const whatsappUrl = buildWhatsAppLink({
    profile: activeProfile,
    customMessage: 'Gostaria de falar com um especialista sobre os planos e entender a melhor estrutura para minha operação.',
  });

  return (
    <section className="hero-grid relative overflow-hidden bg-[#050505] pt-32 pb-20 text-white md:pt-40 md:pb-28">
      {/* Glow and radial lighting effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,70,31,0.18),transparent_32%),radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.05),transparent_25%)] pointer-events-none" />
      <div className="absolute left-[-6rem] top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
      <div className="absolute right-[-4rem] bottom-10 h-72 w-72 rounded-full bg-accent-secondary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left Column: Core Positioning Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/55"
            >
              <span className="h-px w-10 bg-accent" />
              <span>Planos & Contratação de Design Sob Demanda</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.2rem,5.5vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.04em] text-white break-words"
            >
              Design profissional <br />
              <span className="hero-gradient-text">para quem precisa crescer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg md:text-white/60"
            >
              Sua equipe criativa sob demanda. Mais agilidade, menos burocracia e uma produção de design que acompanha o ritmo do seu negócio.
            </motion.p>

            {/* Support Message Box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="mt-6 inline-block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
            >
              <p className="text-xs md:text-sm font-medium tracking-tight text-white/80">
                “Para agências, empresas e marcas que valorizam qualidade, organização e previsibilidade.”
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                onClick={onExplorePlansClick}
                size="lg"
                className="gap-3 shadow-[0_12px_45px_rgba(255,70,31,0.32)]"
              >
                Conhecer os planos <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="gap-3"
              >
                Falar com a Fehari <MessageCircle className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/40"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> Direção criativa sênior
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Sem fidelidade obrigatória</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Operação white-label</span>
            </motion.div>
          </div>

          {/* Right Column: Visual Core & Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="relative lg:pl-6"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0c]/80 p-6 md:p-8 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    Arquitetura Comercial
                  </span>
                  <h2 className="mt-1 font-display text-xl font-medium tracking-tight text-white">
                    Franquia de Créditos Flexíveis
                  </h2>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/70">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Esteira Ativa
                </div>
              </div>

              {/* Highlights cards */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
                  <Shield className="h-5 w-5 text-accent mb-3" />
                  <div className="font-display text-2xl font-semibold text-white">100%</div>
                  <div className="text-xs text-white/50 mt-1">Garantia White-Label nos bastidores</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
                  <Zap className="h-5 w-5 text-accent mb-3" />
                  <div className="font-display text-2xl font-semibold text-white">24/48h</div>
                  <div className="text-xs text-white/50 mt-1">Ritmo ágil de entrega contínua</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
                  <Layers className="h-5 w-5 text-accent mb-3" />
                  <div className="font-display text-2xl font-semibold text-white">Multiuso</div>
                  <div className="text-xs text-white/50 mt-1">Posts, carrosséis, banners e reels</div>
                </div>
              </div>

              {/* Real-time simulation teaser callout */}
              <div className="mt-6 rounded-xl border border-accent/20 bg-gradient-to-r from-accent/10 to-transparent p-4 flex items-center justify-between gap-4">
                <div className="text-xs text-white/80 leading-relaxed">
                  <strong className="text-white block font-medium">Controle total de investimento:</strong>
                  Distribua créditos sob demanda e nunca pague por ociosidade ou custos fixos.
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingHero;

