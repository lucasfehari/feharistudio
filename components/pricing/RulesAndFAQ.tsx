import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShieldCheck, Scale, FileText } from 'lucide-react';
import { PRICING_FAQS, COMMERCIAL_RULES } from '../../data/pricingData';

export const RulesAndFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="regras-faq" className="relative scroll-mt-24 border-t border-white/10 bg-[#070707] py-24 md:py-36 text-white">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Clareza & Segurança Jurídica</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            Regras dos Planos & <br />
            <span className="hero-gradient-text">Dúvidas Frequentes.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            Transparência absoluta em cada detalhe. Conheça as diretrizes operacionais e respostas diretas para sua tomada de decisão.
          </p>
        </div>

        {/* Commercial Rules Grid */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
            <Scale className="h-4 w-4" /> Diretrizes Operacionais & Comerciais
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMMERCIAL_RULES.map((rule, index) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/5 bg-[#0d0d0d] p-5 transition-all hover:border-white/15"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                  <h4 className="font-display text-sm font-semibold text-white">
                    {rule.title}
                  </h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/55">
                  {rule.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            
            {/* Sticky Intro */}
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">Perguntas Essenciais</span>
              <h3 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
                Tudo o que você precisa saber antes de iniciar.
              </h3>
              <p className="mt-4 text-sm text-white/55 leading-relaxed">
                Reunimos as respostas para as perguntas mais comuns de agências e empresas sobre nossa metodologia, rotinas de entrega e gestão de esteira.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-white">Ainda tem alguma dúvida?</span>
                </div>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  Nosso time comercial está pronto para esclarecer nuances da sua operação no WhatsApp.
                </p>
                <a
                  href="https://wa.me/5564999602571?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20regras%20dos%20planos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline"
                >
                  Falar agora com um consultor →
                </a>
              </div>
            </div>

            {/* Accordion Items */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {PRICING_FAQS.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={faq.question} className="py-5 sm:py-6">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                    >
                      <span className="font-display text-base sm:text-lg font-medium text-white/90 hover:text-white transition-colors">
                        {faq.question}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'border-accent bg-accent text-white rotate-180'
                            : 'border-white/10 bg-white/[0.04] text-white/40 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/60 pr-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RulesAndFAQ;

