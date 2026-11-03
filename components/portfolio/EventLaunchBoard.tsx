import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Sparkles, Maximize2, MapPin, Zap } from 'lucide-react';
import { LightboxItem } from './PortfolioLightbox';

interface EventLaunchBoardProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

const TICKET_STORIES = [
  { id: 't1', src: '/trabalhos/borntech-ticket-1.png', label: '01 · Ticket Mockup 3D', title: '1º Lote Liberado' },
  { id: 't2', src: '/trabalhos/borntech-ticket-2.png', label: '02 · Benefícios', title: 'Seu Ingresso Inclui' },
  { id: 't3', src: '/trabalhos/borntech-ticket-3.png', label: '03 · Kit Exclusivo', title: 'Kit Especial 1º Lote' },
  { id: 't4', src: '/trabalhos/borntech-ticket-4.png', label: '04 · Conversão de Preço', title: 'Lote Promocional R$ 249,90' },
  { id: 't5', src: '/trabalhos/borntech-group.png', label: '05 · Local', title: 'FECAP São Paulo Confirmado' },
];

const FEED_CREATIVES = [
  { id: 'f1', src: '/trabalhos/borntech-feed-1.png', title: 'O ingresso que pode transformar sua carreira', tag: 'Capa Principal' },
  { id: 'f2', src: '/trabalhos/borntech-feed-2.png', title: 'Mas viver Techday ao vivo é outra história', tag: 'Storytelling' },
  { id: 'f3', src: '/trabalhos/borntech-feed-3.png', title: 'O que você recebe com seu ingresso', tag: 'Entrega de Valor' },
  { id: 'f4', src: '/trabalhos/borntech-feed-4.png', title: 'Abertura das inscrições — Contagem', tag: 'Escassez & Urgência' },
];

export const EventLaunchBoard: React.FC<EventLaunchBoardProps> = ({ onOpenLightbox }) => {
  return (
    <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090909] shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
      {/* Neon Cyberpunk Ambient Glow (Magenta & Cyan, exactly like Slide 8 of PDF) */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,20,147,0.18),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.12),transparent_70%)] blur-3xl" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 px-6 py-6 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-pink-400">
              Case 02 · Lançamento de Evento
            </span>
            <span className="text-xs text-white/40">Visual Key & Funil de Ingressos</span>
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Borntech / Techday — Campanha de Ingressos & Experiência
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-white/55 max-w-xl">
            Ecossistema visual completo: mockups holográficos de ingressos, sequência de stories de lotes e criativos de alto impacto para Meta Ads com estética neon cyberpunk.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs text-white/70">
          <Zap className="h-3.5 w-3.5 text-pink-400" />
          <span>Fila Dupla de Produção</span>
        </div>
      </div>

      {/* Section 1: Top 5 Ticket Stories Sequence (Slide 8 Upper Row) */}
      <div className="relative z-10 p-6 md:p-10 border-b border-white/10">
        <div className="mb-4 flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wider text-pink-400 text-[10px] flex items-center gap-1.5">
            <Ticket className="h-3.5 w-3.5" /> Sequência de Stories do Ingresso (Lotes & Experiência)
          </span>
          <span className="text-white/40 text-[10px] hidden sm:block">5 Peças Sequenciais</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {TICKET_STORIES.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() =>
                onOpenLightbox({
                  image: story.src,
                  title: `${story.label} — ${story.title}`,
                  client: 'Borntech / Techday',
                  category: 'Campanha de Ingressos',
                })
              }
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={story.src}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-pink-500 text-white shadow-xl">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              <div className="p-2.5 bg-[#0e0e0e] border-t border-white/5">
                <span className="text-[9px] uppercase tracking-wider text-pink-400 font-semibold block truncate">
                  {story.label}
                </span>
                <p className="text-xs text-white/80 font-medium truncate mt-0.5">
                  {story.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 2: Bottom Row Feed Creatives (Slide 8 Lower Row) */}
      <div className="relative z-10 p-6 md:p-10 bg-[#060606]">
        <div className="mb-4 flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wider text-white/50 text-[10px]">
            Criativos de Feed para Tráfego Pago & Conversão
          </span>
          <span className="text-white/40 text-[10px]">Meta Ads & LinkedIn</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEED_CREATIVES.map((feed) => (
            <motion.div
              key={feed.id}
              whileHover={{ y: -5 }}
              onClick={() =>
                onOpenLightbox({
                  image: feed.src,
                  title: feed.title,
                  client: 'Borntech / Techday',
                  category: 'Criativo de Feed',
                })
              }
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={feed.src}
                  alt={feed.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-pink-500 text-white shadow-xl">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              <div className="p-3.5 bg-[#0c0c0c] border-t border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-cyan-400 font-semibold block">
                  {feed.tag}
                </span>
                <p className="mt-1 text-xs text-white/90 font-medium leading-snug line-clamp-2">
                  {feed.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
};

