import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, MessageSquare, Layers, Clock } from 'lucide-react';
import Button from '../ui/Button';
import { PlanItem, buildWhatsAppLink, ClientProfile } from '../../data/pricingData';

interface PlanCardProps {
  plan: PlanItem;
  profile: ClientProfile;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, profile }) => {
  const isRecommended = plan.isRecommended;
  const isCompact = plan.isCompact;
  const isScale = plan.price.toLowerCase().includes('consulta');

  const ctaHref = buildWhatsAppLink({
    profile,
    planName: plan.name,
    credits: plan.creditsLabel,
    price: plan.price + (plan.period ? ` ${plan.period}` : ''),
    customMessage: isScale
      ? 'Gostaria de solicitar uma proposta comercial personalizada para alto volume de produção.'
      : `Quero contratar o plano ${plan.name} (${plan.creditsLabel}).`,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative flex min-w-0 flex-col justify-between rounded-[1.75rem] border transition-all duration-300 break-words ${
        isRecommended
          ? 'border-accent/80 bg-gradient-to-b from-[#140b08] to-[#0c0c0c] shadow-[0_20px_60px_rgba(255,70,31,0.18)] ring-1 ring-accent/50'
          : isCompact
          ? 'border-white/8 bg-[#0a0a0a]/90 hover:border-white/20'
          : 'border-white/10 bg-[#0d0d0d] hover:border-white/25 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)]'
      } p-5 sm:p-6 lg:p-6`}
    >
      {/* Recommended Ribbon / Badge - Safe width, no overflow */}
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 max-w-[92%] rounded-full bg-gradient-to-r from-accent to-[#ff6a00] px-3.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow-md flex items-center justify-center gap-1.5 truncate">
          <Sparkles className="h-3 w-3 shrink-0" />
          <span className="truncate">{plan.badge || 'Recomendado'}</span>
        </div>
      )}

      <div className="min-w-0">
        {/* Plan Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Plano
              </span>
              {isCompact && (
                <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[9px] font-medium text-white/50">
                  Entrada
                </span>
              )}
            </div>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl font-medium tracking-tight text-white truncate">
              {plan.name}
            </h3>
          </div>
        </div>

        {/* Headline / Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-white/60 leading-relaxed mb-5">
          {plan.headline}
        </p>

        {/* Pricing Block */}
        <div className="my-5 border-y border-white/10 py-4">
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-xs sm:text-sm font-medium text-white/40">
                {plan.period}
              </span>
            )}
          </div>

          {/* Quick Metrics Chips */}
          <div className="mt-3.5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-medium text-white/85">
              <Layers className="h-3.5 w-3.5 text-accent shrink-0" />
              <span className="truncate">{plan.creditsLabel}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Clock className="h-3.5 w-3.5 text-white/35 shrink-0" />
              <span className="truncate">{plan.simultaneousTasks}</span>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="mb-6">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-white/40">
            O que está incluído:
          </span>
          <ul className="space-y-2.5">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed break-words">
                <div className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                </div>
                <span className="min-w-0">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <Button
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          variant={isRecommended ? 'primary' : 'secondary'}
          size="md"
          className="w-full justify-center gap-2 text-center text-xs sm:text-sm"
        >
          <span>{plan.ctaLabel}</span>
          {isScale ? <MessageSquare className="h-3.5 w-3.5 shrink-0" /> : <ArrowRight className="h-3.5 w-3.5 shrink-0" />}
        </Button>
      </div>
    </motion.div>
  );
};

export default PlanCard;
