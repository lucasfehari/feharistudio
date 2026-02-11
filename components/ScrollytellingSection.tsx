import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    title: "Briefing Inteligente",
    description: "Eliminamos reuniões intermináveis. Nosso processo assíncrono extrai a essência da sua necessidade em tempo recorde."
  },
  {
    title: "Direção Criativa Inclusa",
    description: "Não apenas executamos; elevamos. Cada projeto passa por diretores de arte experientes antes de chegar a você."
  },
  {
    title: "Talento Diverso",
    description: "Acesso instantâneo a especialistas em UX, Motion, 3D e Frontend. A ferramenta certa para o problema certo."
  },
  {
    title: "Custo Fixo Previsível",
    description: "Sem surpresas no fim do mês. Escale sua produção criativa mantendo seu orçamento sob total controle."
  }
];

const ScrollytellingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-3xl px-6 w-full relative">
          {features.map((feature, index) => {
            // Calculate range for this specific feature
            const stepSize = 1 / features.length;
            const start = stepSize * index;
            const end = stepSize * (index + 1);
            
            // Fade in/out logic
            // Using a slightly tighter range for opacity to create a clean switch
            // eslint-disable-next-line
            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0, 1, 1, 0]
            );
            
            // eslint-disable-next-line
            const y = useTransform(
              scrollYProgress,
              [start, end],
              [20, -20]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity, y }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center sm:items-start sm:text-left h-full w-full pointer-events-none"
              >
                <div className="bg-background/90 backdrop-blur-sm p-4 sm:p-0">
                  <h3 className="font-display font-bold text-4xl md:text-6xl text-text mb-6">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-lg md:text-2xl text-text-secondary leading-relaxed max-w-xl">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Scroll Progress Indicator (Optional visual cue) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-xs h-1 bg-border rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSection;