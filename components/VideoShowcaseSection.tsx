import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Play, Zap, Cpu } from 'lucide-react';

const VideoShowcaseSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Video Container */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video w-full bg-black rounded-lg overflow-hidden group shadow-2xl"
            >
              {/* 
                  PLACEHOLDER PARA SEU VÍDEO:
                  Substitua o conteúdo abaixo pela tag <video> real.
                  Exemplo:
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
                    <source src="/seu-video.mp4" type="video/mp4" />
                  </video>
              */}
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer border border-white/20">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                  Assista ao Manifesto
                </span>
              </div>

              {/* Decorative corner markers (Blueprint style) */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30" />
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/30" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/30" />
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30" />
              
              {/* Optional: Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              
              {/* Video Status Indicator */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                 <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                 <span className="text-white/80 font-mono text-xs">AO VIVO: DESIGN SYSTEM V2.0</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-5 flex flex-col h-full">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-4 block">
                Design é combustível para escala
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-light text-3xl md:text-4xl text-text leading-tight mb-8"
            >
              A Fehari entrega interfaces rápidas e robustas que não travam quando <span className="text-text-secondary">o mundo real acontece.</span>
            </motion.h2>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <Button className="bg-accent hover:bg-accent-secondary text-white rounded-full px-8 py-3 h-auto text-base">
                Começar Projeto
              </Button>
            </motion.div>

            {/* Feature Grid (The two boxes at bottom right) */}
            <div className="grid grid-cols-2 gap-6 mt-auto">
              
              {/* Box 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-background border border-border p-5 rounded-lg hover:border-accent/30 transition-colors group"
              >
                <div className="h-12 mb-4 flex items-center">
                  <span className="font-display font-bold text-xl text-text tracking-tighter flex items-center gap-2">
                    Vercel <span className="text-gray-300">×</span> Fehari
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-[10px] text-accent uppercase tracking-wider">
                    PARCEIROS OFICIAIS
                  </p>
                  <p className="text-sm text-text-secondary leading-snug">
                    Stack recomendada para performance máxima no frontend.
                  </p>
                </div>
              </motion.div>

              {/* Box 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-background border border-border p-5 rounded-lg hover:border-accent/30 transition-colors group"
              >
                <div className="h-12 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Cpu className="w-6 h-6 text-gray-400 group-hover:text-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-[10px] text-accent uppercase tracking-wider">
                    O CORE CRIATIVO
                  </p>
                  <p className="text-sm text-text-secondary leading-snug">
                    Processo construído para iteração rápida e consistência visual.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;