import React from 'react';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, ArrowUpRight, HelpCircle } from 'lucide-react';
import { ADDITIONAL_SERVICES, buildWhatsAppLink, ClientProfile } from '../../data/pricingData';

interface AdditionalServicesListProps {
  currentProfile: ClientProfile;
}

export const AdditionalServicesList: React.FC<AdditionalServicesListProps> = ({ currentProfile }) => {
  const creativeServices = ADDITIONAL_SERVICES.filter((s) => s.category === 'criativo');
  const strategicServices = ADDITIONAL_SERVICES.filter((s) => s.category === 'estrategico');

  return (
    <section id="servicos-adicionais" className="relative scroll-mt-24 border-t border-white/10 bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Complementos & Upgrades</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            Serviços Adicionais & <br />
            <span className="hero-gradient-text">Expansão de Escopo.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            Precisa de mais capacidade ou frentes complementares além do seu pacote mensal? Adicione demandas pontuais ou serviços estratégicos sob demanda.
          </p>
        </div>

        {/* Two distinct pillars */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          
          {/* Pillar 1: Produção Criativa Adicional */}
          <div className="rounded-[2rem] border border-white/10 bg-[#0c0c0c] p-5 sm:p-8 min-w-0">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <Palette className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  Capacidade Criativa
                </span>
                <h3 className="font-display text-xl font-medium text-white">
                  Produção Criativa Adicional
                </h3>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              Artes e formatos complementares produzidos pela mesma equipe que já conhece a identidade e o ritmo da sua marca.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {creativeServices.map((service, index) => {
                const waUrl = buildWhatsAppLink({
                  profile: currentProfile,
                  customMessage: `Gostaria de consultar valores para o serviço adicional: ${service.title}.`,
                });

                return (
                  <motion.a
                    key={service.id}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="group flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                          {service.title}
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-white/30 group-hover:text-accent transition-colors" />
                      </div>
                      <p className="mt-2 text-xs text-white/50 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                      <span className="text-white/40">Investimento</span>
                      <span className="font-medium text-white/80">{service.priceTag}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Pillar 2: Serviços Estratégicos de Marketing */}
          <div className="rounded-[2rem] border border-accent/30 bg-gradient-to-b from-[#140b08]/80 to-[#0c0c0c] p-5 sm:p-8 min-w-0">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-accent to-[#ff7a00] text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  Performance & Estratégia
                </span>
                <h3 className="font-display text-xl font-medium text-white">
                  Serviços Estratégicos de Marketing
                </h3>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              Frentes especializadas para quem busca tracionar vendas, gerar leads qualificados e orquestrar distribuição inteligente.
            </p>

            <div className="mt-6 space-y-4">
              {strategicServices.map((service, index) => {
                const waUrl = buildWhatsAppLink({
                  profile: currentProfile,
                  customMessage: `Gostaria de consultar valores para o serviço estratégico: ${service.title}.`,
                });

                return (
                  <motion.a
                    key={service.id}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-accent hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent">
                          Estratégia Separada
                        </span>
                        <h4 className="mt-2 font-display text-lg font-medium text-white group-hover:text-accent transition-colors">
                          {service.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-white/60 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/[0.05] text-white/50 group-hover:bg-accent group-hover:text-white transition-colors">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                      <span className="text-white/40">Condições comerciais</span>
                      <span className="font-semibold text-accent">{service.priceTag}</span>
                    </div>
                  </motion.a>
                );
              })}

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/50 flex items-start gap-3">
                <HelpCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Aviso de escopo:</strong> Serviços de gestão de tráfego, copywriting de marketing e planejamento não estão embutidos nos planos de design por assinatura e são contratados separadamente.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdditionalServicesList;

