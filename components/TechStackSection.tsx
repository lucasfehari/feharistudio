import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Slack, Video, Layout } from 'lucide-react';

const tools = [
  {
    icon: Figma,
    name: "Figma",
    role: "Design & Prototipagem",
    desc: "Onde a mágica visual acontece. Acesso em tempo real aos arquivos."
  },
  {
    icon: Layout, // Using Layout as proxy for Linear/Trello-like board
    name: "Fehari Board",
    role: "Gestão de Projetos",
    desc: "Kanban simplificado. Arraste, solte e aprove demandas em segundos."
  },
  {
    icon: Slack,
    name: "Slack Connect",
    role: "Comunicação Direta",
    desc: "Sem e-mails formais. Fale com seu diretor de arte via chat direto."
  },
  {
    icon: Video, // Proxy for Loom
    name: "Loom",
    role: "Feedback Assíncrono",
    desc: "Explicamos entregas complexas via vídeo para evitar reuniões."
  }
];

const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-text mb-2">
              Nosso Sistema Operacional.
            </h3>
            <p className="text-text-secondary">
              Não usamos e-mail e planilhas. Usamos a stack das melhores startups.
            </p>
          </div>
          
          <div className="h-px bg-border flex-1 mx-8 hidden md:block" />
          
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest border border-border px-3 py-1 rounded-full bg-background">
            Tech Stack 2024
          </span>
        </div>

        {/* Increased gap-y to 10 for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-background border border-border p-6 rounded-xl hover:border-accent/40 hover:shadow-lg transition-all duration-300 group shadow-sm"
            >
              <div className="w-12 h-12 bg-background-secondary rounded-lg flex items-center justify-center mb-6 border border-border group-hover:bg-accent/5 group-hover:border-accent/20 transition-colors">
                <tool.icon className="w-6 h-6 text-text group-hover:text-accent transition-colors" strokeWidth={1.5} />
              </div>
              
              <h4 className="font-bold text-lg text-text mb-1">{tool.name}</h4>
              <p className="text-xs font-mono text-accent mb-3 uppercase tracking-wider">{tool.role}</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;