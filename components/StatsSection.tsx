import React from 'react';
import { motion } from 'framer-motion';

const data = [
  { label: "FEHARI (ON-DEMAND)", value: 98, highlight: true, displayValue: "98%" },
  { label: "FREELANCER SÊNIOR", value: 65, highlight: false, displayValue: "65%" },
  { label: "AGÊNCIA TRADICIONAL", value: 42, highlight: false, displayValue: "42%" },
  { label: "CONTRATAÇÃO CLT (IN-HOUSE)", value: 25, highlight: false, displayValue: "25%" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-secondary border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display font-light text-3xl md:text-4xl text-text leading-tight max-w-2xl">
            Qual modelo de operação oferece a maior <span className="font-medium">velocidade de entrega</span> para seu time?
          </h2>
        </motion.div>

        {/* Chart Container */}
        <div className="space-y-6 w-full">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              
              {/* Label */}
              <div className="w-full md:w-64 flex-shrink-0">
                <span className={`font-mono text-xs md:text-sm tracking-widest uppercase ${item.highlight ? 'font-bold text-text' : 'text-text-secondary'}`}>
                  {item.label}
                </span>
              </div>

              {/* Bar Area */}
              <div className="flex-1 h-12 md:h-14 bg-border/30 rounded-md relative overflow-hidden flex items-center">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  className={`h-full absolute top-0 left-0 rounded-md ${
                    item.highlight ? 'bg-accent' : 'bg-[#E5E5E5]'
                  }`}
                />
                
                {/* Value Text (positioned at the end of the bar slightly offset) */}
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + (index * 0.1) }}
                  className={`relative z-10 ml-4 font-mono text-sm font-medium ${item.highlight ? 'text-white' : 'text-text-secondary'}`}
                  style={{ left: `${item.value}%`, marginLeft: item.value > 10 ? '-3rem' : '0.5rem' }} // Adjust text position based on bar width
                >
                  {item.displayValue}
                </motion.span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Source */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-6 border-t border-border/50"
        >
          <p className="font-mono text-[10px] text-text-secondary tracking-widest uppercase">
            FONTE: ANÁLISE COMPARATIVA DE EFICIÊNCIA OPERACIONAL (AGENCY VS IN-HOUSE) 2024
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;