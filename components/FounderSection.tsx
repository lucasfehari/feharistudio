import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Layers, Sparkles, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const disciplines = [
  { num: '01', title: 'Design & Direção de Arte', desc: 'Identidade visual, criativos e sistemas gráficos com critério estético superior.' },
  { num: '02', title: 'Desenvolvimento & UI/UX', desc: 'Landing pages, sites e interfaces digitais pensadas para converter.' },
  { num: '03', title: 'Marketing & Performance', desc: 'Captação, campanhas e tráfego pago integrados à produção criativa.' },
  { num: '04', title: 'Tecnologia & Operação', desc: 'Processos organizados, esteira white-label e entrega sem fricção.' },
];

const FounderSection: React.FC = () => (
  <section id="sobre" className="relative scroll-mt-24 overflow-hidden bg-[#050505] py-24 text-white md:py-32">
    <div className="mx-auto max-w-[1380px] px-6 md:px-10">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_34px_110px_rgba(0,0,0,.3)]"
      >
        {/* Glow ambient backgrounds */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,70,31,.16),transparent_40%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,.03),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* Header bar */}
        <header className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 md:px-10 lg:px-12">
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">01</span>
            <span>Direção Criativa & Estrutura</span>
          </div>
          <span className="hidden sm:block text-white/50">Fehari Studio · Brasil</span>
        </header>

        {/* Content Body: Clean Responsive Grid, No overflowing absolute elements, No cutout photo */}
        <div className="relative z-20 p-6 md:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            
            {/* Left Column: Mission & Positioning */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6">
                <Sparkles className="h-3 w-3" />
                <span>Por trás da criação</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-white">
                Criação, tecnologia e negócio <br />
                <span className="hero-gradient-text">no mesmo raciocínio.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-white/65">
                A Fehari Studio nasceu para preencher o gargalo entre a estratégia e a execução. Unimos direção criativa sênior, agilidade operacional e rigor técnico para entregar peças de alto impacto sem que sua equipe precise gerenciar freelancers soltos.
              </p>

              {/* Founder quote / vision pill */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic">
                  “Design não é apenas estética: é ferramenta de vendas, autoridade e retenção. Cada peça precisa comunicar alto valor e resolver o problema de ponta a ponta.”
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-accent/20 text-accent font-display font-semibold text-xs">
                    FS
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-white">Lucas Fehari</span>
                    <span className="block text-[10px] uppercase tracking-wider text-white/40">Fundador & Diretor de Criação</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="https://wa.me/5564999602571?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20dire%C3%A7%C3%A3o%20criativa%20da%20Fehari."
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  className="gap-2"
                >
                  <span>Conhecer nossa metodologia</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Column: Experience Metric & Disciplines Grid */}
            <div className="space-y-6">
              
              {/* Highlight Card: 10 Years */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#121212] to-[#0c0c0c] p-6 sm:p-8">
                <div className="flex items-baseline gap-4 border-b border-white/10 pb-6">
                  <span className="font-display text-5xl sm:text-6xl font-semibold tracking-tight text-accent">
                    10
                  </span>
                  <div>
                    <span className="block font-display text-xl sm:text-2xl font-medium text-white">
                      Anos de experiência digital
                    </span>
                    <span className="text-xs text-white/50">
                      Construindo marcas, produtos e campanhas que geram resultados reais.
                    </span>
                  </div>
                </div>

                {/* Disciplines */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {disciplines.map((item) => (
                    <div key={item.num} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-accent">/{item.num}</span>
                        <h4 className="text-xs font-semibold text-white">{item.title}</h4>
                      </div>
                      <p className="mt-2 text-[11px] leading-relaxed text-white/50">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confidence check banner */}
              <div className="flex items-center gap-3 rounded-xl border border-accent/25 bg-accent/10 px-5 py-3.5 text-xs text-white/80">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span>
                  Responsabilidade contratual, esteira white-label e acompanhamento direto.
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Footer info bar */}
        <footer className="relative z-20 flex flex-col gap-3 border-t border-white/10 bg-black/35 px-6 py-4 text-[10px] uppercase tracking-[0.16em] text-white/40 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <span>Visão próxima em cada entrega</span>
          <span className="text-white/60">Design · Código · Estratégia · Escala</span>
        </footer>
      </motion.article>
    </div>
  </section>
);

export default FounderSection;
