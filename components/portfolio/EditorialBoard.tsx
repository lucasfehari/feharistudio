import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Maximize2 } from 'lucide-react';
import { LightboxItem } from './PortfolioLightbox';

interface EditorialBoardProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

const TEACHER_PIECES = [
  {
    id: 'tea-forbes',
    src: '/trabalhos/teacher-forbes.png',
    title: 'Editorial Forbes: Teacher dos Famosos',
    tag: 'Autoridade Internacional',
    desc: 'Mockup de capa padrão revista internacional valorizando a presença na grande mídia.',
  },
  {
    id: 'tea-fluencia',
    src: '/trabalhos/teacher-fluencia.png',
    title: 'Lançamento: O Código Secreto da Fluência',
    tag: 'Key Visual de Vendas',
    desc: 'Criativo magnético para captação de alunos e conversão de infoproduto.',
  },
  {
    id: 'tea-estrelas',
    src: '/trabalhos/teacher-estrelas-1.png',
    title: 'Mentoria: Formando Estrelas',
    tag: 'Programa High-Ticket',
    desc: 'Peça de posicionamento para mentoria de comunicação e idiomas para celebridades.',
  },
  {
    id: 'tea-cultura',
    src: '/trabalhos/teacher-cultura.png',
    title: 'Evento de Cultura & Imersão',
    tag: 'Experiência & Marca',
    desc: 'Divulgação de workshop imersivo presencial com direção de arte refinada.',
  },
];

export const EditorialBoard: React.FC<EditorialBoardProps> = ({ onOpenLightbox }) => {
  return (
    <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090909] shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
      {/* Warm gold / royal blue ambient glow */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,180,30,0.15),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(30,100,255,0.12),transparent_70%)] blur-3xl" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 px-6 py-6 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-400">
              Case 04 · Educação & Mentoria
            </span>
            <span className="text-xs text-white/40">Editorial & Infoprodutos</span>
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Teacher dos Famosos — Autoridade & Produtos High-Ticket
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-white/55 max-w-xl">
            Design de alto padrão conectando coberturas editoriais (Forbes), campanhas de lançamento de cursos de fluência e identidade para programas de mentoria presencial.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs text-white/70">
          <Award className="h-3.5 w-3.5 text-amber-400" />
          <span>Alta Autoridade</span>
        </div>
      </div>

      {/* Pieces Grid */}
      <div className="relative z-10 p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEACHER_PIECES.map((piece) => (
            <motion.div
              key={piece.id}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              onClick={() =>
                onOpenLightbox({
                  image: piece.src,
                  title: piece.title,
                  client: 'Teacher dos Famosos',
                  category: 'Editorial & Infoproduto',
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

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-500 text-white shadow-xl">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              <div className="p-4 bg-[#0d0d0d] border-t border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-amber-400 font-semibold block">
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

