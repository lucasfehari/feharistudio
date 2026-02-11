import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-32 border-t border-border bg-background relative overflow-hidden">
      {/* Decorative gradient background similar to Hero but inverted/subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/50 via-background to-background pointer-events-none" />

      <div className="px-6 relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-5xl md:text-7xl text-text mb-8 tracking-tight"
        >
          Pronto para elevar <br />
          seu design?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
        >
          Junte-se a empresas que constroem o futuro com a velocidade e qualidade que o mercado exige.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-12 h-16 text-lg">
              Agendar Demonstração
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;