import React from 'react';
import { motion } from 'framer-motion';

const disciplines = ['Design', 'Desenvolvimento', 'Marketing', 'Tecnologia'];

const FounderSection: React.FC = () => (
  <section id="sobre" className="relative scroll-mt-24 overflow-hidden bg-[#050505] py-28 text-white md:py-36">
    <div className="mx-auto max-w-[1380px] px-6 md:px-10">
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="relative overflow-hidden rounded-[2rem] bg-[#090909] shadow-[0_34px_110px_rgba(0,0,0,.24)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_78%,rgba(255,70,31,.24),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(255,255,255,.055),transparent_24%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.028)_1px,transparent_1px)] [background-size:72px_72px]" />

        <header className="relative z-30 flex items-center justify-between border-b border-white/10 px-6 py-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 md:px-10 lg:px-12">
          <span><span className="mr-3 text-accent">01</span> Direção criativa</span>
          <span className="hidden sm:block">Fehari Studio · Brasil</span>
        </header>

        <div className="relative px-6 pb-10 pt-14 md:px-10 md:pt-16 lg:min-h-[760px] lg:px-12 lg:pb-12">
          <div className="pointer-events-none absolute inset-y-0 left-[35%] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
          <div className="pointer-events-none absolute bottom-[11%] left-[4%] hidden font-display text-[clamp(9rem,19vw,17rem)] font-medium leading-none tracking-[-0.1em] text-white/[0.025] lg:block">
            10
          </div>

          <div className="relative z-20 lg:absolute lg:left-12 lg:top-[72px]">
            <p className="mb-5 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-8 bg-accent" /> Por trás da criação
            </p>
            <h2 className="font-display text-[clamp(4.5rem,10vw,9.5rem)] font-medium leading-[0.76] tracking-[-0.085em]">
              Lucas
              <span className="founder-outline block">Fehari</span>
            </h2>
            <p className="mt-8 max-w-[260px] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-white/55">
              Diretor de criação<br />Fehari Studio
            </p>
          </div>

          <div className="pointer-events-none relative -mx-6 -mt-10 h-[530px] md:-mx-10 md:h-[650px] lg:contents">
            <img
              src="/lucas-fehari-cutout-clean.png"
              alt="Lucas Fehari, diretor de criação da Fehari Studio"
              className="founder-portrait absolute left-1/2 top-12 z-10 h-[680px] w-auto max-w-none -translate-x-1/2 object-contain md:top-16 md:h-[820px] lg:left-[53%] lg:top-[100px] lg:h-[900px]"
            />
            <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#090909] via-[#090909]/85 to-transparent md:h-44 lg:left-[27%] lg:right-[20%] lg:h-40" />
          </div>

          <div className="relative z-30 -mt-16 ml-auto border-l border-accent/55 bg-gradient-to-r from-[#090909]/95 via-[#090909]/85 to-transparent py-2 pl-6 backdrop-blur-[2px] md:max-w-[430px] lg:absolute lg:bottom-[62px] lg:right-12 lg:mt-0 lg:w-[360px] lg:pl-8">
            <div className="flex items-end gap-4 border-b border-white/12 pb-5">
              <span className="font-display text-7xl font-medium leading-[.74] tracking-[-0.08em] text-accent">10</span>
              <p className="pb-1 text-[9px] font-bold uppercase leading-relaxed tracking-[0.2em] text-white/65">anos de<br />experiência digital</p>
            </div>

            <p className="mt-6 font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-white md:text-[1.7rem]">
              Criação, tecnologia e negócio no mesmo raciocínio.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/52">
              Designer, desenvolvedor, diretor criativo e profissional de marketing. Lucas aproxima estratégia e execução para transformar ideias em marcas, campanhas, sites e sistemas que funcionam no mundo real.
            </p>

            <div className="mt-7 grid grid-cols-2 border-y border-white/10 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/42">
              {disciplines.map((discipline, index) => (
                <span
                  key={discipline}
                  className={`py-3 ${index % 2 === 0 ? 'border-r border-white/10 pr-3' : 'pl-4'} ${index < 2 ? 'border-b border-white/10' : ''}`}
                >
                  <span className="mr-2 text-accent">0{index + 1}</span>{discipline}
                </span>
              ))}
            </div>
          </div>
        </div>

        <footer className="relative z-30 flex flex-col gap-3 border-t border-white/10 bg-black/25 px-6 py-5 text-[9px] uppercase tracking-[0.18em] text-white/30 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <span>Visão próxima em cada projeto</span>
          <span className="text-white/55">Design · Código · Direção · Crescimento</span>
        </footer>
      </motion.article>
    </div>
  </section>
);

export default FounderSection;
