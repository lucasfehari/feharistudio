import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { TrendingUp } from 'lucide-react';

const MarketingFeatureSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let reverseInterval: ReturnType<typeof setInterval>;

    const handleEnded = () => {
      // Pausa ao chegar no fim
      video.pause();
      
      // Retrocede o vídeo manualmente (efeito boomerang)
      reverseInterval = setInterval(() => {
        if (video.currentTime <= 0.05) {
          clearInterval(reverseInterval);
          video.currentTime = 0;
          video.play().catch(() => {}); // Inicia para frente novamente
        } else {
          video.currentTime -= 0.04; // Reduz o tempo atual do vídeo
        }
      }, 40); // 25 fps
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
      if (reverseInterval) clearInterval(reverseInterval);
    };
  }, []);

  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[80vh] min-h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
        >
          {/* Background Video with Boomerang effect */}
          <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
            <video
              ref={videoRef}
              src="/videomarketing.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay Gradient - Essential for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-16">

            {/* Top Content */}
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block font-mono text-xs font-bold text-accent tracking-[0.2em] uppercase mb-6"
              >
                Growth & Performance
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-display font-medium text-4xl md:text-6xl text-white leading-[1.1] mb-8"
              >
                Estratégia digital focada. <br />
                A Fehari faz sua empresa <br />
                <span className="text-gray-400">escalar com inteligência.</span>
              </motion.h2>
            </div>

            {/* Bottom Content Row */}
            <div className="flex flex-col md:flex-row items-end md:items-end justify-between gap-8 mt-12 md:mt-0">

              {/* Description (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="max-w-md"
              >
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Não é só sobre likes. Captamos leads qualificados (Tráfego Pago), melhoramos seu posicionamento (SEO) e criamos funis que colocam dinheiro no caixa.
                </p>
              </motion.div>

              {/* Logos (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6"
              >
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-3 mb-1">
                    <img src="/logo-fehari-black.svg" alt="Fehari" className="h-6 w-auto invert brightness-0" />
                    <div className="h-6 w-px bg-gray-600 mx-2"></div>
                    <div className="flex items-center gap-1 text-white">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      <span className="font-display font-bold text-xl tracking-tight">MARKETING</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                    Digital Business Unit
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default MarketingFeatureSection;