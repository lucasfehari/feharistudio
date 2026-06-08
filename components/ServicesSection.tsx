import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Monitor, PenTool, Zap } from 'lucide-react';
import Button from './ui/Button';

const services = [
  {
    title: "Parceria Criativa",
    description: "Design contínuo para times de marketing. Social media, landing pages e apresentações on-demand.",
    icon: PenTool,
    buttonText: "Conhecer Planos",
    primary: false
  },
  {
    title: "Design Pontual",
    description: "Sprints intensivos para lançamentos. Identidade visual, rebranding ou campanha específica.",
    icon: Zap,
    buttonText: "Iniciar Sprint",
    primary: true
  },
  {
    title: "Sistemas & Interfaces",
    description: "Design de produto digital. UI/UX complexo, Design Systems e prototipagem de alta fidelidade.",
    icon: Monitor,
    buttonText: "Ver Cases",
    primary: false
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-secondary border-t border-border">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text mb-6">
            Soluções desenhadas para sua necessidade.
          </h2>
          <p className="text-text-secondary text-lg">
            Flexibilidade estrutural para atender startups em crescimento e enterprises estabelecidas.
          </p>
        </div>

        <motion.div
          /* Increased gap from gap-8 to gap-12 on mobile to fix "everything too close" issue */
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-background border border-border p-8 rounded-xl flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="w-12 h-12 bg-background-secondary rounded-lg flex items-center justify-center mb-6 text-text">
                  <service.icon strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-2xl text-text mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;