import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from './ui/Button';

const FinalCTASection: React.FC = () => (
  <section className="relative overflow-hidden bg-[#070707] py-28 text-white md:py-40">
    <img src="/fehari-4d-stage.png" alt="Marca Fehari em composição tridimensional" className="absolute inset-0 h-full w-full object-cover object-center opacity-75" />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
    <div className="absolute inset-0 cta-grid opacity-20" />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      className="absolute -right-28 -top-40 h-[540px] w-[540px] rounded-full border border-white/20"
    >
      <div className="absolute inset-16 rounded-full border border-white/15" />
      <div className="absolute inset-32 rounded-full border border-white/10" />
    </motion.div>
    <div className="relative mx-auto max-w-[1380px] px-6 md:px-10">
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff7c59]">Seu próximo projeto pode começar aqui</p>
        <h2 className="max-w-6xl font-display text-[clamp(3.6rem,9vw,9rem)] font-medium leading-[0.87] tracking-[-0.075em]">
          Tem coisa boa<br />presa na fila?
        </h2>
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
          <Button
            href="https://wa.me/5564999602571?text=Oi%2C%20tenho%20um%20projeto%20e%20quero%20tir%C3%A1-lo%20do%20papel."
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="gap-3 bg-accent text-white hover:bg-white hover:text-[#16100e]"
          >
            Vamos tirar do papel <ArrowUpRight className="h-4 w-4" />
          </Button>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">Conte o que está travando. A gente ajuda a transformar em um próximo passo claro.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
