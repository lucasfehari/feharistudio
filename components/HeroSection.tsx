import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      <div className="max-w-4xl px-6 mx-auto text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* 4D Logo */}
          <motion.img
            src="/logo4D_fehari.png"
            alt="Fehari 4D Logo"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 md:w-48 mb-8 object-contain"
          />

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight text-white mb-6"
          >
            Chega de perder tempo com freelancers.<br />
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Da criação de marcas à entrega de sistemas, a Fehari integra design e tecnologia para escalar seu negócio. Sem burocracia, sem limites.
          </motion.p>
        </div>
      </div>

      {/* Grid Background decoration (very subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;