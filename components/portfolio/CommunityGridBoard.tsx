import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Maximize2, Share2 } from 'lucide-react';
import { LightboxItem } from './PortfolioLightbox';

interface CommunityGridBoardProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

const ANETI_PIECES = [
  {
    id: 'an-7mil',
    src: '/trabalhos/aneti-7mil.png',
    title: 'Marco Institucional: + de 7 mil no LinkedIn',
    tag: 'Prova Social & Autoridade',
    desc: 'Celebração de marco de audiência com paleta verde esmeralda e marinho escuro.',
  },
  {
    id: 'an-perg',
    src: '/trabalhos/aneti-pergunta.png',
    title: 'Caixinha Interativa: Temas de Treinamento',
    tag: 'Engajamento de Base',
    desc: 'Story com sticker de pergunta formatado sob medida para colher feedbacks da comunidade.',
  },
  {
    id: 'an-coord',
    src: '/trabalhos/aneti-coordenadores.png',
    title: 'Liderança: Apresentação de Novos Coordenadores',
    tag: 'Comunidade & Pessoas',
    desc: 'Card institucional apresentando a expansão da coordenação nacional da associação.',
  },
  {
    id: 'an-feed1',
    src: '/trabalhos/aneti-feed-1.png',
    title: 'Chamada: Publicação de Artigos na Comunidade',
    tag: 'Conteúdo Colaborativo',
    desc: 'Incentivo à produção técnica de membros associados em todo o Brasil.',
  },
];

export const CommunityGridBoard: React.FC<CommunityGridBoardProps> = ({ onOpenLightbox }) => {
  return (
    <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090909] shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
      {/* Emerald tech ambient glow (Slide 3 aesthetic) */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(0,204,136,0.18),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,140,255,0.12),transparent_70%)] blur-3xl" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 px-6 py-6 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Case 03 · Comunidade Tech & B2B
            </span>
            <span className="text-xs text-white/40">Engajamento & Autoridade</span>
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
            ANETI — Associação Nacional de Profissionais de TI
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-white/55 max-w-xl">
            Estratégia visual e social media para posicionar a maior comunidade de tecnologia do país. Paleta de tons esmeralda e marinho com foco em retenção de membros e autoridade corporativa.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs text-white/70">
          <Users className="h-3.5 w-3.5 text-emerald-400" />
          <span>Ecossistema Corporativo</span>
        </div>
      </div>

      {/* Content Grid (The exact 4-card arrangement from Slide 3 of PDF) */}
      <div className="relative z-10 p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ANETI_PIECES.map((piece) => (
            <motion.div
              key={piece.id}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              onClick={() =>
                onOpenLightbox({
                  image: piece.src,
                  title: piece.title,
                  client: 'ANETI — Tecnologia',
                  category: 'Comunidade & B2B',
                })
              }
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black/40">
                <img
                  src={piece.src}
                  alt={piece.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white shadow-xl">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              <div className="p-4 bg-[#0d0d0d] border-t border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-semibold block">
                  {piece.tag}
                </span>
                <h4 className="mt-1 text-sm text-white font-medium truncate">
                  {piece.title}
                </h4>
                <p className="mt-1 text-xs text-white/50 leading-relaxed line-clamp-2">
                  {piece.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
};

