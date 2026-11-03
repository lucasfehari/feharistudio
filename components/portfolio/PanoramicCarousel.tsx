import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Layers, Maximize2 } from 'lucide-react';
import { LightboxItem } from './PortfolioLightbox';

interface PanoramicCarouselProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

const PANORAMIC_SLIDES = [
  { id: '1', src: '/trabalhos/thabata-carrossel-1.png', title: 'Lâmina 01 — Capa: A Durabilidade dos Procedimentos' },
  { id: '2', src: '/trabalhos/thabata-carrossel-2.png', title: 'Lâmina 02 — Conheça a Durabilidade de Alguns' },
  { id: '3', src: '/trabalhos/thabata-carrossel-3.png', title: 'Lâmina 03 — Toxina Botulínica & Ácido Hialurônico' },
  { id: '4', src: '/trabalhos/thabata-carrossel-4.png', title: 'Lâmina 04 — Bioestimuladores de Colágeno & Profhilo' },
  { id: '5', src: '/trabalhos/thabata-carrossel-5.png', title: 'Lâmina 05 — Dúvidas & CTA Final' },
];

const SECONDARY_PIECES = [
  { id: 'botox', src: '/trabalhos/thabata-botox.png', title: 'Botox Preventivo — Feed', tag: 'Procedimento' },
  { id: 'labial', src: '/trabalhos/thabata-labial.png', title: 'Preenchimento Labial — Feed', tag: 'Autoridade' },
  { id: 'arte1', src: '/trabalhos/thabata-arte-1.png', title: 'Criativo Conceito 01 — Feed', tag: 'Direção de Arte' },
  { id: 'arte2', src: '/trabalhos/thabata-arte-2.png', title: 'Criativo Conceito 02 — Cuidados', tag: 'Educação' },
];

export const PanoramicCarousel: React.FC<PanoramicCarouselProps> = ({ onOpenLightbox }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
      {/* Warm ambient lighting mimicking the PDF */}
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,140,50,0.18),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(212,175,133,0.12),transparent_70%)] blur-2xl" />

      {/* Top Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 px-6 py-6 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-[#d4af85]/30 bg-[#d4af85]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#e8cbb0]">
              Case 01 · Estética Médica
            </span>
            <span className="text-xs text-white/40">Carrossel Panorâmico</span>
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Dra. Thábata — Estética Avançada & Cosmiatria
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-white/55 max-w-xl">
            Sequência contínua de 5 lâminas com continuidade fotográfica e tipografia editorial de luxo, projetada para reter a atenção e educar pacientes de alto tíquete.
          </p>
        </div>

        {/* Carousel Scroll Controls */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          <button
            onClick={() => scroll('left')}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-accent hover:bg-accent hover:text-white"
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-accent hover:bg-accent hover:text-white"
            aria-label="Rolar para direita"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Panoramic Continuous Strip (The exact look from Slide 6 of user's PDF) */}
      <div className="relative z-10 p-6 md:p-10">
        <div className="mb-4 flex items-center justify-between text-xs text-white/40">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#e8cbb0]">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Lâminas Sequenciais Contínuas (Arraste lateralmente)
          </span>
          <span className="text-[10px] hidden sm:block">5 Lâminas Conectadas</span>
        </div>

        {/* Scrollable Panoramic Container */}
        <div
          ref={scrollContainerRef}
          className="relative flex overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory rounded-2xl border border-white/10 bg-black/60 shadow-2xl"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PANORAMIC_SLIDES.map((slide, index) => (
            <motion.div
              key={slide.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() =>
                onOpenLightbox({
                  image: slide.src,
                  title: slide.title,
                  client: 'Dra. Thábata',
                  category: 'Carrossel Contínuo',
                })
              }
              className="relative shrink-0 w-[240px] sm:w-[270px] md:w-[300px] cursor-pointer group border-r border-white/10 last:border-r-0 snap-start bg-[#111]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white shadow-lg">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              {/* Slide numbering tag */}
              <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-2.5 py-0.5 text-[9px] font-semibold text-white/80 backdrop-blur-md">
                0{index + 1} / 05
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Secondary Supporting Creatives (Botox, Labial, Concept Arts) */}
      <div className="border-t border-white/10 bg-[#070707] p-6 md:p-10">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
            Outras Peças do Ecossistema Visual
          </span>
          <span className="text-xs text-white/40">Criativos para Feed</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SECONDARY_PIECES.map((piece) => (
            <motion.div
              key={piece.id}
              whileHover={{ y: -4 }}
              onClick={() =>
                onOpenLightbox({
                  image: piece.src,
                  title: piece.title,
                  client: 'Dra. Thábata',
                  category: 'Feed Instagram',
                })
              }
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={piece.src}
                  alt={piece.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white shadow-lg">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>
              <div className="p-3 border-t border-white/10 bg-[#0c0c0c]">
                <span className="text-[9px] uppercase tracking-wider text-accent font-semibold block">
                  {piece.tag}
                </span>
                <p className="mt-0.5 text-xs text-white/80 font-medium truncate">
                  {piece.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
};

