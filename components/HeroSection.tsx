import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const objectY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const objectRotate = useTransform(scrollYProgress, [0, 0.35], [0, 12]);

  return (
    <section id="top" className="hero-grid relative min-h-[980px] overflow-hidden bg-[#050505] pt-32 text-white md:min-h-screen md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_38%,rgba(255,76,26,0.18),transparent_27%),radial-gradient(circle_at_25%_8%,rgba(255,255,255,0.06),transparent_24%)]" />
      <div className="absolute left-[-8rem] top-[46%] h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-[760px] max-w-[1380px] items-center gap-12 px-6 pb-16 md:px-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-4 lg:pb-24">
        <div className="relative z-20 pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Duas soluções · Um time sério
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[820px] font-display text-[clamp(3.4rem,7vw,7.6rem)] font-medium leading-[0.91] tracking-[-0.075em]"
          >
            Design sob demanda.<br />
            <span className="hero-gradient-text">Marketing que cresce.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/68 md:text-lg md:text-white/56"
          >
            Para agências, somos o time de design que assume a produção. Para empresas B2B ou B2C, cuidamos da captação, tráfego, conteúdo e implementação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href="#para-agencias"
              size="lg"
              className="gap-3"
            >
              Sou agência <ArrowDown className="h-4 w-4" />
            </Button>
            <Button href="#para-empresas" variant="secondary" size="lg" className="gap-3">
              Tenho uma empresa <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/35"
          >
            <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-accent" /> Empresa, não freelancer</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Investimento acessível</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Operação organizada</span>
          </motion.div>
        </div>

        <div className="relative min-h-[470px] lg:min-h-[700px]">
          <div className="absolute inset-0 m-auto h-[82%] w-[82%] rounded-full border border-accent/15 shadow-[inset_0_0_100px_rgba(255,75,20,0.04)]" />
          <div className="absolute inset-0 m-auto h-[62%] w-[62%] animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-white/10" />
          <motion.div style={{ y: objectY, rotate: objectRotate }} className="absolute inset-[-4%] z-10 flex items-center justify-center">
            <img
              src="/fehari-creative-core.png"
              alt="Escultura abstrata em vidro laranja e metal representando o núcleo criativo conectado da Fehari"
              className="hero-core h-auto w-[105%] max-w-[760px] select-none object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="glass-panel absolute right-0 top-[9%] z-20 w-40 rounded-2xl p-4 md:w-48"
          >
            <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">Creative core</span>
            <p className="mt-2 text-sm font-medium leading-snug text-white/80">Um só fluxo.<br />Várias frentes.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="glass-panel absolute bottom-[8%] left-0 z-20 rounded-2xl px-4 py-3"
          >
            <div className="flex gap-2 text-[10px] font-medium uppercase tracking-[0.13em] text-white/60">
              <span>Marca</span><span className="text-accent">/</span><span>Growth</span><span className="text-accent">/</span><span>Produto</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 border-y border-white/[0.08] bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1380px] flex-wrap items-center justify-between gap-5 px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38 md:px-10">
          <span>Duas frentes. Uma só parceria.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/65 md:gap-x-10">
            <span>Design sob demanda</span><span>Marketing e captação</span><span>B2B & B2C</span><span>Sites & sistemas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
