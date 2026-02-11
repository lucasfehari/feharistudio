import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Terminal } from 'lucide-react';

const faqs = [
  {
    question: "O que significa 'pedidos ilimitados'?",
    answer: "Significa que você pode adicionar quantas tarefas quiser à sua fila no nosso painel. Trabalharemos nelas uma por uma (ou duas, dependendo do plano), entregando todos os dias úteis. Assim que aprovado, passamos para a próxima."
  },
  {
    question: "E se eu não gostar do design?",
    answer: "Sem problemas. A revisão é parte do processo e é ilimitada. Vamos iterar o design quantas vezes forem necessárias até que você esteja 100% satisfeito, sem custo extra."
  },
  {
    question: "Qual é o tempo médio de entrega?",
    answer: "Para a maioria das tarefas (posts sociais, banners, ajustes de UI), entregamos em 24 a 48 horas. Projetos complexos como Landing Pages ou Motion Design podem ser divididos em marcos de entrega a cada 48h."
  },
  {
    question: "Existe algum contrato de fidelidade?",
    answer: "Zero. É uma assinatura mensal como a Netflix. Você pode pausar ou cancelar a qualquer momento antes da renovação do mês seguinte."
  },
  {
    question: "Quais softwares vocês usam?",
    answer: "Somos modernos. Usamos Figma para UI/UX, Adobe Creative Cloud (After Effects, Photoshop, Illustrator) para design gráfico e motion, e React/Tailwind/Webflow para desenvolvimento."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background-secondary border border-border mb-4">
            <Terminal className="w-3 h-3 text-accent" />
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">
              Protocolos Operacionais
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'border-accent/30 bg-background-secondary shadow-sm' 
                  : 'border-border bg-background hover:border-text-secondary/30'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-medium text-lg ${activeIndex === index ? 'text-accent' : 'text-text'}`}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-text-secondary" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed border-t border-border/50 mt-2">
                      <div className="pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;