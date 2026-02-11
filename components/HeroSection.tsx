import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom ease similar to easeOutQuint
    },
  },
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black-radial">
      <div className="max-w-4xl px-6 mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-background-secondary border border-border text-xs font-medium tracking-wide text-text-secondary uppercase">
              Design, Marketing & Tech Studio v2.0
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight text-text mb-6"
          >
            Seu braço criativo <br />
            <span className="text-accent relative inline-block">
              sob demanda.
              {/* Optional subtle underline decoration could go here */}
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Da criação de marcas à entrega de sistemas, a Fehari integra design e tecnologia para escalar seu negócio. Sem burocracia, sem limites.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button href="#planos" size="lg" className="gap-2 rounded-[50px] px-10 py-5 w-full sm:w-auto">
              Ver Nossos Planos
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="https://wa.me/5564999602571"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageSquare className="mr-2 w-4 h-4" />
              Fale com um Especialista
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Background decoration (very subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;