import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Compass, Sparkles } from 'lucide-react';
import { CUSTOM_PROJECTS, buildWhatsAppLink } from '../../data/pricingData';
import Button from '../ui/Button';

export const CustomProjectsGrid: React.FC = () => {
  return (
    <section id="projetos-avulsos" className="relative scroll-mt-24 py-20 text-white">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Demandas Pontuais & Sob Medida</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            Projetos Avulsos & <br />
            <span className="hero-gradient-text">Soluções Personalizadas.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            Precisa de um projeto específico com começo, meio e fim? Desenvolvemos entregas estratégicas de alto padrão com cronograma fechado e direção sênior.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CUSTOM_PROJECTS.map((project, index) => {
            const projectWhatsAppUrl = buildWhatsAppLink({
              profile: 'avulso',
              projectName: project.title,
              customMessage: `Gostaria de solicitar um orçamento personalizado para ${project.title}.`,
            });

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="group relative flex min-w-0 flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-5 sm:p-7 transition-all duration-300 hover:border-accent/40 hover:bg-[#111] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] break-words"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {project.tag}
                    </span>
                    <span className="text-[11px] font-medium text-white/40">
                      Orçamento sob medida
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-white/5 pt-5">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-white/40 mb-3">
                      Entregáveis típicos:
                    </span>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <Check className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <a
                    href={projectWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold text-white transition-all group-hover:border-accent/50 group-hover:bg-accent group-hover:text-white"
                  >
                    <span>Solicitar orçamento deste projeto</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Tailor Callout */}
        <div className="mt-14 rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#111] via-[#0f0f0f] to-[#140b08] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                <Sparkles className="h-3.5 w-3.5" /> Demandas Complexas ou Especiais
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Seu projeto precisa de um escopo personalizado?
              </h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Nossos diretores de arte e tecnologia analisam seu briefing para estruturar um plano de entrega ágil com escopo fechado.
              </p>
            </div>

            <Button
              href={buildWhatsAppLink({
                profile: 'avulso',
                projectName: 'Projeto Especial sob Medida',
                customMessage: 'Olá! Tenho um projeto sob medida e gostaria de alinhar um briefing e orçamento personalizado.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="whitespace-nowrap gap-3 shrink-0"
            >
              Solicitar orçamento personalizado <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomProjectsGrid;

