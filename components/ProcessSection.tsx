import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Assinatura",
    desc: "Escolha seu plano e tenha acesso imediato ao nosso painel de gestão de projetos (baseado no Linear)."
  },
  {
    num: "02",
    title: "Requisição",
    desc: "Crie demandas em minutos. Do post social ao design de app complexo. Priorize o que importa."
  },
  {
    num: "03",
    title: "Entrega",
    desc: "Receba atualizações a cada 24-48h. Feedback rápido, iterações ilimitadas até a perfeição."
  },
  {
    num: "04",
    title: "Escala",
    desc: "Aprovado? Receba os arquivos fonte. Precisa de mais? Adicione mais designers ao seu time com um clique."
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text mb-4">
            Da ideia à entrega,<br />um processo sem atritos.
          </h2>
        </div>

        {/* Increased gap from default to gap-16 on mobile for better separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <span className="block font-display text-6xl font-bold text-border mb-6">
                {step.num}
              </span>
              <h3 className="font-display font-semibold text-xl text-text mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;