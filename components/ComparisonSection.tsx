import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const features = [
  { name: "Tempo de Entrega Médio", fehari: "24-48 horas", agency: "5-10 dias", freelancer: "Imprevisível" },
  { name: "Custo Mensal", fehari: "Fixo (Econômico)", agency: "Alto + Extras", freelancer: "Variável/Hora" },
  { name: "Gestão de Projeto", fehari: "Plataforma Própria", agency: "E-mails/Reuniões", freelancer: "WhatsApp" },
  { name: "Multa de Cancelamento", fehari: "R$ 0 (Mensal)", agency: "Contrato 12 meses", freelancer: "N/A" },
  { name: "Revisões Ilimitadas", fehari: true, agency: false, freelancer: false },
  { name: "Arquivos Fonte Inclusos", fehari: true, agency: "Custo Extra", freelancer: "Depende" },
  { name: "Design System Manager", fehari: true, agency: false, freelancer: false },
  { name: "Cobertura de Férias", fehari: true, agency: true, freelancer: false },
];

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-4 block">
            Análise Comparativa v1.0
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text mb-4">
            Por que migrar para o modelo <br />
            <span className="text-text-secondary">Studio-as-a-Service?</span>
          </h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-[800px] bg-background border border-border rounded-xl overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-background-secondary border-b border-border">
              <div className="p-6 text-xs font-mono text-text-secondary uppercase tracking-widest flex items-end">
                Critério / Feature
              </div>
              <div className="p-6 relative bg-white border-l border-r border-border shadow-[0_-4px_0_0_#FF4500_inset]">
                <div className="font-display font-bold text-xl text-text mb-1">Fehari</div>
                <div className="text-xs text-accent font-medium">Creative Core</div>
              </div>
              <div className="p-6 flex items-end text-text-secondary opacity-70">
                <div className="font-display font-bold text-lg">Agência Tradicional</div>
              </div>
              <div className="p-6 flex items-end text-text-secondary opacity-70">
                <div className="font-display font-bold text-lg">Freelancer</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {features.map((feature, index) => (
                <div key={index} className="grid grid-cols-4 hover:bg-background-secondary/30 transition-colors group">
                  
                  {/* Label */}
                  <div className="p-6 flex items-center text-sm font-medium text-text-secondary group-hover:text-text">
                    {feature.name}
                  </div>

                  {/* Fehari Column */}
                  <div className="p-6 border-l border-r border-border bg-white/50 flex items-center justify-center md:justify-start font-medium text-text">
                    {renderValue(feature.fehari, true)}
                  </div>

                  {/* Agency Column */}
                  <div className="p-6 flex items-center justify-center md:justify-start text-text-secondary text-sm">
                    {renderValue(feature.agency, false)}
                  </div>

                  {/* Freelancer Column */}
                  <div className="p-6 flex items-center justify-center md:justify-start text-text-secondary text-sm">
                    {renderValue(feature.freelancer, false)}
                  </div>

                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <p className="text-center text-xs text-text-secondary mt-8 font-mono">
          DADOS BASEADOS EM MÉDIA DE MERCADO 2024. COMPARAÇÃO PARA PLANOS ENTERPRISE.
        </p>

      </div>
    </section>
  );
};

const renderValue = (value: string | boolean, isPrimary: boolean) => {
  if (value === true) {
    return (
      <div className={`flex items-center gap-2 ${isPrimary ? 'text-accent' : 'text-text'}`}>
        <Check className="w-5 h-5" strokeWidth={3} />
        {isPrimary && <span className="text-sm font-bold">Incluso</span>}
      </div>
    );
  }
  if (value === false) {
    return <Minus className="w-5 h-5 text-gray-300" />;
  }
  if (typeof value === 'string') {
    return (
      <span className={`${isPrimary ? 'text-text font-bold' : ''}`}>
        {value}
      </span>
    );
  }
  return null;
};

export default ComparisonSection;