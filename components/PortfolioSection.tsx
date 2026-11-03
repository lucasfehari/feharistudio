import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_CASES = [
  {
    id: 'thabata',
    client: 'Dra. Thábata',
    category: 'Carrossel Contínuo · Estética',
    image: '/trabalhos/thabata-carrossel-1.png',
    headline: 'Narrativa visual em 5 lâminas com retenção contínua para autoridade médica.',
    tag: 'Carrossel Panorâmico',
    spanClass: 'lg:col-span-7',
  },
  {
    id: 'borntech',
    client: 'Borntech / Techday',
    category: 'Lançamento de Ingressos · Evento',
    image: '/trabalhos/borntech-feed-1.png',
    headline: 'Visual key cyberpunk, mockups 3D de ingressos e criativos de conversão.',
    tag: 'Campanha de Ingressos',
    spanClass: 'lg:col-span-5',
  },
  {
    id: 'aneti',
    client: 'ANETI — Comunidade Tech',
    category: 'B2B & Social Media Corporativo',
    image: '/trabalhos/aneti-7mil.png',
    headline: 'Posicionamento institucional e senso de comunidade para a maior rede de TI do Brasil.',
    tag: 'Comunidade & B2B',
    spanClass: 'lg:col-span-5',
  },
  {
    id: 'teacher',
    client: 'Teacher dos Famosos',
    category: 'Editorial & Infoprodutos',
    image: '/trabalhos/teacher-forbes.png',
    headline: 'Mockup editorial padrão revista Forbes e key visuals para cursos e mentorias.',
    tag: 'Alta Autoridade',
    spanClass: 'lg:col-span-7',
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="cases" className="bg-[#050505] py-24 text-white md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow">O nível do trabalho fala primeiro</p>
            <h2 className="section-title">
              Marcas que não passam<br /><span>com aparência de improviso.</span>
            </h2>
          </motion.div>

          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            <span>Ver todos os cases no portfólio</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.08] transition-all group-hover:bg-accent group-hover:text-white group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* Featured Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {FEATURED_CASES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className={item.spanClass}
            >
              <Link
                to="/portfolio"
                className="group relative flex h-full min-h-[420px] sm:min-h-[480px] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 transition-all hover:border-accent/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
              >
                {/* Background Image with Zoom & Dark Gradient */}
                <img
                  src={item.image}
                  alt={item.client}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />

                {/* Floating Category Pill */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent backdrop-blur-md">
                  <Sparkles className="h-3 w-3" />
                  <span>{item.tag}</span>
                </div>

                {/* Text Content Overlay */}
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-medium">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-accent transition-colors">
                      {item.client}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-white/70 max-w-lg leading-relaxed line-clamp-2">
                      {item.headline}
                    </p>
                  </div>

                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all group-hover:bg-accent group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Panoramic Teaser Strip */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-white/70 text-center sm:text-left">
            <strong className="text-white">Veja a coleção completa:</strong> Carrosséis contínuos de 5 lâminas, campanhas de eventos neon e mockups editoriais no portfólio.
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline shrink-0"
          >
            Explorar portfólio interativo →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
