import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { Check, ArrowRight, Zap, Crown, Sparkles, AlertCircle } from 'lucide-react';

type PlanCategory = 'subscription' | 'sprints' | 'marketing';

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlanCategory>('subscription');

  const tabs = [
    { id: 'subscription', label: 'Design Assinatura' },
    { id: 'sprints', label: 'Projetos Pontuais' },
    { id: 'marketing', label: 'Growth & Marketing' },
  ];

  return (
    <section id="planos" className="py-24 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-6">
            Investimento transparente. <br />
            <span className="text-text-secondary font-light">Escolha seu volume mensal.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Sem contratos de longo prazo. Pause ou cancele quando quiser.
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-background-secondary p-1 rounded-lg border border-border inline-flex relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as PlanCategory)}
                className={`relative px-6 py-2 text-sm font-medium rounded-md transition-colors z-10 ${activeTab === tab.id ? 'text-text' : 'text-text-secondary hover:text-text'
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white border border-border rounded-md shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'subscription' && <SubscriptionPlans key="subscription" />}
            {activeTab === 'sprints' && <SprintPlans key="sprints" />}
            {activeTab === 'marketing' && <MarketingPlans key="marketing" />}
          </AnimatePresence>
        </div>

        {/* Enterprise Callout */}
        <div className="mt-16 p-8 bg-background-secondary rounded-xl border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-xl text-text mb-2">Precisa de uma squad dedicada?</h4>
            <p className="text-text-secondary text-sm">Para grandes operações que precisam de 4+ designers e gestão de tráfego simultânea.</p>
          </div>
          <Button variant="secondary" className="whitespace-nowrap">
            Falar com Consultor Enterprise
          </Button>
        </div>

      </div>
    </section>
  );
};

// --- Sub-components for each tab content ---

const SubscriptionPlans = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
  >
    <PlanCard
      title="Starter"
      price="R$ 890"
      period="/mês"
      description="Para manter suas redes sociais ativas com qualidade profissional."
      features={[
        "Até 8 Artes Mensais (Posts/Stories)",
        "Adaptação de Formatos",
        "Design de Banners Simples",
        "Legendas Geradas por IA",
        "Entrega em até 48h",
        "Direito de Uso Comercial"
      ]}
    />
    <PlanCard
      title="Growth"
      price="R$ 1.690"
      period="/mês"
      description="Volume ideal para pequenas empresas e experts que postam toda semana."
      isPopular
      features={[
        "Até 20 Artes Mensais",
        "Incluso: 4 Edições de Reels/Shorts",
        "Criação de Carrosséis (até 7 slides)",
        "Apresentações Simples (PDF)",
        "Prioridade na Fila de Produção",
        "Suporte via WhatsApp"
      ]}
    />
    <PlanCard
      title="Agency / Scale"
      price="R$ 3.290"
      period="/mês"
      description="Seu departamento de design completo. Fluxo intenso sem gargalos."
      features={[
        "Volume Ilimitado (Fluxo Contínuo)",
        "Design, Landing Pages & Motion",
        "Edição de Vídeo Avançada",
        "Slack Connect com a Equipe",
        "Arquivos Abertos (Figma/After)",
        "Reunião de Direção Mensal"
      ]}
    />
  </motion.div>
);

const SprintPlans = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
  >
    <PlanCard
      title="Identidade Visual"
      price="R$ 3.500"
      period="único"
      description="Sprint de 2 semanas para definir a cara da sua marca."
      features={[
        "Logo & Variações",
        "Paleta de Cores & Tipografia",
        "Guia de Estilo Básico",
        "Aplicações em Social Media",
        "3 Rodadas de Revisão"
      ]}
    />
    <PlanCard
      title="Landing Page High-End"
      price="R$ 2.800"
      period="única"
      description="Design e desenvolvimento focados em conversão."
      isPopular
      features={[
        "Copywriting Estratégico",
        "Design no Figma",
        "Desenvolvimento (React ou Framer)",
        "Otimização Mobile",
        "SEO Técnico Básico"
      ]}
    />
    <PlanCard
      title="Pitch Deck"
      price="R$ 2.200"
      period="único"
      description="Apresentação para captar investimento ou grandes clientes."
      features={[
        "Até 15 Slides",
        "Storytelling Visual",
        "Gráficos e Infográficos Custom",
        "Versão PDF e Editável",
        "Entrega Express (5 dias)"
      ]}
    />
  </motion.div>
);

const MarketingPlans = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
  >
    <PlanCard
      title="Tráfego Pago"
      price="R$ 2.000"
      period="/mês + % ads"
      description="Gestão profissional de mídia para escalar suas vendas."
      features={[
        "Gestão Meta Ads & Google Ads",
        "Planejamento de Mídia",
        "Otimização Diária de Campanhas",
        "Dashboard de Performance em Tempo Real",
        "Reunião Mensal de Resultados"
      ]}
    />
    <PlanCard
      title="Growth Full-Stack"
      price="R$ 5.500"
      period="/mês"
      description="União de criativo e mídia. A solução completa da Fehari."
      isPopular
      features={[
        "Gestão de Tráfego Completa",
        "Produção de Criativos (4/semana)",
        "Copywriting para Anúncios",
        "Testes A/B de Landing Pages",
        "Implementação de CRM",
        "Estratégia de Funil de Vendas"
      ]}
    />
  </motion.div>
);

// --- Generic Card Component ---

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, period, description, features, isPopular }) => {
  return (
    <div className={`relative p-8 rounded-xl border flex flex-col h-full bg-background transition-all duration-300 hover:shadow-lg ${isPopular ? 'border-accent shadow-md' : 'border-border'}`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Sparkles className="w-3 h-3" /> Recomendado
        </div>
      )}

      <div className="mb-8">
        <h3 className="font-display font-bold text-2xl text-text mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed min-h-[40px]">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-4xl text-text tracking-tight">{price}</span>
          <span className="text-text-secondary text-sm font-medium">{period}</span>
        </div>
      </div>

      <div className="flex-1 mb-8">
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer" className="w-full">
        <Button variant={isPopular ? 'primary' : 'secondary'} className="w-full justify-center">
          {isPopular ? 'Começar Agora' : 'Selecionar Plano'}
        </Button>
      </a>
    </div>
  );
};

export default PricingSection;