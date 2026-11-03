import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

export interface LightboxItem {
  image: string;
  title: string;
  client: string;
  category?: string;
}

interface PortfolioLightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  const whatsappUrl = `https://wa.me/5564999602571?text=${encodeURIComponent(
    `Olá! Vi o trabalho "${item.title}" do case ${item.client} no portfólio da Fehari Studio e gostaria de solicitar um projeto com esse nível de acabamento.`
  )}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-accent hover:text-white"
          aria-label="Fechar visualização"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Prev / Next navigation */}
        {onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 hidden sm:grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-accent hover:text-white"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 hidden sm:grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-accent hover:text-white"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl max-h-[90vh] flex flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Image Container */}
          <div className="relative flex items-center justify-center p-3 sm:p-5 max-h-[72vh] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>

          {/* Footer Bar */}
          <div className="w-full border-t border-white/10 bg-[#0c0c0c] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  {item.client}
                </span>
                {item.category && (
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] text-white/50">
                    {item.category}
                  </span>
                )}
              </div>
              <h3 className="font-display text-base sm:text-lg font-medium text-white mt-0.5">
                {item.title}
              </h3>
            </div>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="gap-2 shrink-0"
            >
              <span>Quero um projeto assim</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

