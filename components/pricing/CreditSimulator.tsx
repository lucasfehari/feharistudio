import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, RotateCcw, AlertTriangle, CheckCircle2, ArrowRight, Calculator, Info } from 'lucide-react';
import {
  CREDIT_EQUIVALENCE_TABLE,
  AGENCY_PLANS,
  COMPANY_PLANS,
  ClientProfile,
  buildWhatsAppLink,
} from '../../data/pricingData';
import Button from '../ui/Button';

interface CreditSimulatorProps {
  currentProfile: ClientProfile;
}

export const CreditSimulator: React.FC<CreditSimulatorProps> = ({ currentProfile }) => {
  // Initialize state with sensible defaults
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    CREDIT_EQUIVALENCE_TABLE.forEach((item) => {
      initial[item.id] = item.defaultCount;
    });
    return initial;
  });

  // Target reference plan (for comparison)
  const availablePlans = currentProfile === 'empresa' ? COMPANY_PLANS : AGENCY_PLANS;
  const [selectedPlanId, setSelectedPlanId] = useState<string>(() => {
    const recommended = availablePlans.find((p) => p.isRecommended);
    return recommended ? recommended.id : availablePlans[1].id;
  });

  const selectedPlan = availablePlans.find((p) => p.id === selectedPlanId) || availablePlans[0];
  const planCreditsLimit = selectedPlan.creditsNumber || 20;

  // Update item count safely
  const updateCount = (id: string, delta: number) => {
    setCounts((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  // Reset to defaults
  const handleReset = () => {
    const resetValues: Record<string, number> = {};
    CREDIT_EQUIVALENCE_TABLE.forEach((item) => {
      resetValues[item.id] = 0;
    });
    // set 4 posts, 2 stories, 1 carrossel curto as minimal baseline
    resetValues['post'] = 4;
    resetValues['story'] = 2;
    resetValues['carrossel-curto'] = 1;
    setCounts(resetValues);
  };

  // Calculate total consumed credits
  const totalCredits = useMemo(() => {
    return CREDIT_EQUIVALENCE_TABLE.reduce((acc, item) => {
      const count = counts[item.id] || 0;
      return acc + count * item.credits;
    }, 0);
  }, [counts]);

  // Total pieces count
  const totalPieces = useMemo(() => {
    return Object.values(counts).reduce((acc, val) => acc + val, 0);
  }, [counts]);

  // Is within limit or exceeding?
  const isExceeded = totalCredits > planCreditsLimit;
  const difference = (totalCredits - planCreditsLimit).toFixed(1).replace('.0', '');
  const remaining = (planCreditsLimit - totalCredits).toFixed(1).replace('.0', '');

  // Find best matching plan based on calculated credits
  const suggestedPlan = useMemo(() => {
    for (const plan of availablePlans) {
      if (plan.creditsNumber && totalCredits <= plan.creditsNumber) {
        return plan;
      }
    }
    return availablePlans[availablePlans.length - 1]; // SCALE or top plan
  }, [totalCredits, availablePlans]);

  // Format simulator summary for WhatsApp
  const simulatedSummary = useMemo(() => {
    const parts: string[] = [];
    CREDIT_EQUIVALENCE_TABLE.forEach((item) => {
      const c = counts[item.id] || 0;
      if (c > 0) {
        parts.push(`${c}x ${item.title}`);
      }
    });
    return parts.join(', ');
  }, [counts]);

  const simulatorWhatsAppUrl = buildWhatsAppLink({
    profile: currentProfile,
    planName: suggestedPlan.name,
    credits: `${totalCredits.toFixed(1).replace('.0', '')} créditos simulados (${suggestedPlan.name})`,
    customMessage: `Gostaria de fechar essa composição simulada: ${simulatedSummary}.`,
  });

  return (
    <section id="sistema-creditos" className="relative scroll-mt-24 border-t border-white/10 bg-[#070707] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Flexibilidade & Transparência</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.05]">
            Sua demanda muda. <br />
            <span className="hero-gradient-text">Seu plano acompanha.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            Use seus créditos mensais para solicitar diferentes formatos de design, de acordo com a necessidade da sua operação.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          
          {/* Left: Interactive Items Adjustment */}
          <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-5 sm:p-8 shadow-2xl min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <h3 className="flex items-center gap-2 font-display text-xl font-medium text-white">
                  <Calculator className="h-5 w-5 text-accent" />
                  Simulador de Peças & Créditos
                </h3>
                <p className="text-xs text-white/50 mt-1">
                  Ajuste a quantidade de cada formato para visualizar a demanda mensal da sua operação.
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
                title="Resetar quantidades"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Limpar</span>
              </button>
            </div>

            {/* List of items */}
            <div className="mt-6 divide-y divide-white/5">
              {CREDIT_EQUIVALENCE_TABLE.map((item) => {
                const count = counts[item.id] || 0;
                const subtotal = (count * item.credits).toFixed(1).replace('.0', '');

                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 transition-colors hover:bg-white/[0.015] rounded-xl px-2 min-w-0"
                  >
                    <div className="flex-1 pr-2 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-sm text-white break-words">{item.title}</span>
                        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
                          {item.creditsFormatted}
                        </span>
                      </div>
                      <p className="text-xs text-white/45 mt-1 leading-snug break-words">
                        {item.description}
                      </p>
                    </div>

                    {/* Counter Controls */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                      <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] p-1">
                        <button
                          type="button"
                          onClick={() => updateCount(item.id, -1)}
                          disabled={count === 0}
                          aria-label={`Diminuir ${item.title}`}
                          className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>

                        <span className="w-9 text-center font-display text-sm font-semibold text-white">
                          {count}
                        </span>

                        <button
                          type="button"
                          onClick={() => updateCount(item.id, 1)}
                          aria-label={`Aumentar ${item.title}`}
                          className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="w-16 text-right">
                        <span className="font-display text-sm font-semibold text-white">
                          {subtotal}
                        </span>
                        <span className="block text-[10px] text-white/40">créditos</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explanatory notes */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/50 flex items-start gap-3">
              <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div className="space-y-1 leading-relaxed">
                <p>
                  <strong>Tabela de referência:</strong> Os valores acima servem como régua de equivalência. Produções de complexidade fora do padrão (ex.: ilustrações 3D customizadas ou projetos especiais) recebem orçamento sob consulta.
                </p>
                <p>
                  <strong>Edição simples de vídeo:</strong> Pressupõe roteiro e materiais brutos fornecidos pelo cliente, sem captação presencial ou animações avançadas.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Simulation Balance & Plan Recommendation */}
          <div className="sticky top-28 space-y-6 min-w-0">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#111] to-[#0a0a0a] p-5 sm:p-8 shadow-2xl min-w-0">
              
              <div className="border-b border-white/10 pb-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  Resultado da Simulação
                </span>
                <h4 className="mt-1 font-display text-2xl font-medium text-white">
                  Consumo Estimado
                </h4>
              </div>

              {/* Total credits display */}
              <div className="my-6 rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-center">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Total de créditos calculados
                </div>
                <div className="mt-2 font-display text-5xl sm:text-6xl font-semibold tracking-tight text-white">
                  {totalCredits.toFixed(1).replace('.0', '')}
                </div>
                <div className="mt-1 text-xs text-white/50">
                  para um volume total de <strong className="text-white">{totalPieces} {totalPieces === 1 ? 'peça' : 'peças'}</strong>
                </div>
              </div>

              {/* Plan Comparison Selector */}
              <div className="mb-6">
                <label htmlFor="plan-selector" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                  Comparar com a franquia do plano:
                </label>
                <select
                  id="plan-selector"
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[#161616] px-4 py-3 text-sm font-medium text-white focus:border-accent focus:outline-none"
                >
                  {availablePlans.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} — {plan.price} ({plan.creditsLabel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Balance status pill */}
              <div className="mb-6">
                {isExceeded ? (
                  <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-200">
                    <div className="flex items-center gap-2 font-semibold text-rose-300">
                      <AlertTriangle className="h-4 w-4 shrink-0" />
                      <span>Saldo ultrapassado em {difference} créditos</span>
                    </div>
                    <p className="mt-1.5 leading-relaxed text-rose-200/80">
                      Esta composição excede a cota do plano {selectedPlan.name} ({planCreditsLimit} créditos). Considere migrar para o plano <strong>{suggestedPlan.name}</strong> ou orçar créditos avulsos.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-200">
                    <div className="flex items-center gap-2 font-semibold text-emerald-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>Dentro da franquia do plano ({remaining} créditos livres)</span>
                    </div>
                    <p className="mt-1.5 leading-relaxed text-emerald-200/80">
                      Perfeito! O plano <strong>{selectedPlan.name}</strong> suporta perfeitamente este volume mensal de produção.
                    </p>
                  </div>
                )}
              </div>

              {/* Suggested Best Plan Card */}
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    Plano mais indicado
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {suggestedPlan.price}
                  </span>
                </div>
                <div className="mt-1 font-display text-xl font-medium text-white">
                  Plano {suggestedPlan.name}
                </div>
                <p className="mt-1 text-xs text-white/60">
                  {suggestedPlan.creditsLabel} · {suggestedPlan.simultaneousTasks}
                </p>
              </div>

              {/* CTA to contract based on simulation */}
              <div className="mt-6 pt-2">
                <Button
                  href={simulatorWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  className="w-full justify-center gap-2"
                >
                  <span>Contratar com este volume</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="mt-3 text-center text-[10px] text-white/40">
                  Envie sua simulação diretamente para nosso time de atendimento no WhatsApp.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CreditSimulator;

