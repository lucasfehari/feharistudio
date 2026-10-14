import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Braces, ChartNoAxesCombined, Layers3, Megaphone, Palette, PanelsTopLeft } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Design para times',
    description: 'Sua operação ganha consistência visual sem precisar montar outro departamento.',
    deliverables: ['Social media', 'Criativos', 'Apresentações', 'Materiais de campanha'],
    icon: Layers3,
    className: 'md:col-span-2 lg:col-span-7 lg:min-h-[430px]',
    visual: 'design',
  },
  {
    num: '02',
    title: 'Marketing para empresas',
    description: 'Estratégia e execução para transformar presença digital em movimento de negócio.',
    deliverables: ['Campanhas', 'Conteúdo', 'Posicionamento', 'Implementação'],
    icon: Megaphone,
    className: 'md:col-span-2 lg:col-span-5 lg:min-h-[430px]',
    visual: 'marketing',
  },
  {
    num: '03',
    title: 'Tráfego pago',
    description: 'Planejamento, criativos e páginas trabalhando juntos para testar com inteligência.',
    deliverables: ['Meta Ads', 'Google Ads', 'Tracking'],
    icon: ChartNoAxesCombined,
    className: 'lg:col-span-4',
  },
  {
    num: '04',
    title: 'Identidade visual',
    description: 'Uma marca reconhecível, coerente e pronta para ocupar seu espaço.',
    deliverables: ['Estratégia', 'Logo', 'Sistema visual'],
    icon: Palette,
    className: 'lg:col-span-4',
  },
  {
    num: '05',
    title: 'Sites avançados',
    description: 'Experiências rápidas, bonitas e pensadas para guiar o próximo passo.',
    deliverables: ['UX/UI', 'Landing pages', 'Websites'],
    icon: PanelsTopLeft,
    className: 'lg:col-span-4',
  },
  {
    num: '06',
    title: 'Sistemas digitais',
    description: 'Interfaces e automações sob medida para sua operação funcionar melhor.',
    deliverables: ['Produtos digitais', 'Dashboards', 'Automações'],
    icon: Braces,
    className: 'lg:col-span-12',
  },
];

const ServicesSection: React.FC = () => (
  <section id="solucoes" className="relative bg-[#050505] py-28 text-white md:py-36">
    <div className="mx-auto max-w-[1380px] px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-8 lg:grid-cols-2 lg:items-end"
      >
        <div>
          <p className="eyebrow">Um estúdio, seis frentes</p>
          <h2 className="section-title">Do primeiro rascunho<br /><span>ao sistema rodando.</span></h2>
        </div>
        <p className="max-w-lg text-base leading-relaxed text-white/48 lg:ml-auto">
          Cada frente pode funcionar sozinha. O ganho real acontece quando marca, marketing e tecnologia falam a mesma língua.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className={`service-card group relative min-h-[340px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0c0c] p-6 md:p-8 ${service.className}`}
          >
            <div className="relative z-10 flex h-full min-h-[280px] flex-col">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-white/28">/{service.num}</span>
                <div className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all group-hover:border-accent/40 group-hover:text-accent">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="font-display text-3xl font-medium tracking-[-0.045em] md:text-4xl">{service.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/48">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {service.visual === 'design' && <DesignVisual />}
            {service.visual === 'marketing' && <MarketingVisual />}
            <ArrowUpRight className="absolute bottom-8 right-8 h-5 w-5 text-white/0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const DesignVisual = () => (
  <div className="pointer-events-none absolute right-[-3rem] top-16 hidden h-56 w-64 rotate-[-7deg] lg:block">
    {[0, 1, 2].map((item) => (
      <motion.div
        key={item}
        animate={{ y: [0, item % 2 ? -7 : 7, 0] }}
        transition={{ duration: 4 + item, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute h-36 w-28 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.015] shadow-2xl backdrop-blur-lg"
        style={{ left: item * 54, top: item * 22 }}
      >
        <div className="m-3 h-2 w-10 rounded bg-accent/70" />
        <div className="mx-3 mt-16 h-1.5 w-16 rounded bg-white/15" />
        <div className="mx-3 mt-2 h-1.5 w-10 rounded bg-white/10" />
      </motion.div>
    ))}
  </div>
);

const MarketingVisual = () => (
  <div className="pointer-events-none absolute right-6 top-16 hidden h-44 w-44 place-items-center rounded-full border border-dashed border-accent/25 lg:grid">
    <div className="grid h-24 w-24 place-items-center rounded-full bg-accent/10 shadow-[0_0_80px_rgba(255,61,20,0.16)]">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#ff7a00] to-[#ff3115] shadow-[0_0_35px_rgba(255,70,20,.6)]" />
    </div>
  </div>
);

export default ServicesSection;
