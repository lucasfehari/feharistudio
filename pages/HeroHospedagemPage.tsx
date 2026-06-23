import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const HeroHospedagemPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true); // Default to annual as it's more advantageous

  const monthlyPrice = 49.9;
  const annualPrice = 347.9;

  const monthlyLink =
    "https://app.abacatepay.com/pay/bill_jMpWhhsSNetBuA6rMExG2Esm";
  const annualLink =
    "https://app.abacatepay.com/pay/bill_FwGg1E4zPjCf0W0kfZhqmHeF";

  const currentLink = isAnnual ? annualLink : monthlyLink;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 sm:p-12">
      <Helmet>
        <title>Hero Hospedagem | Alta Performance</title>
        <meta name="description" content="Hospedagem de alta performance para sites exigentes. Planos mensais e anuais." />
        <meta property="og:title" content="Hero Hospedagem | Alta Performance" />
        <meta property="og:description" content="Hospedagem de alta performance para sites exigentes. Planos mensais e anuais." />
        <meta property="og:image" content="https://www.feharistudio.com.br/logohero.png" />
      </Helmet>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-glow-radial opacity-30 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="max-w-3xl w-full text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logohero.png"
            alt="Hero Hospedagem Logo"
            className="w-auto h-16 mx-auto mb-6 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text mb-4">
            Hospedagem de Alta Performance
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Infraestrutura premium para sites que exigem velocidade, segurança e
            estabilidade. Escolha o melhor plano para o seu negócio.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-[420px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Toggle Container */}
        <div className="flex justify-center mb-8">
          <div className="bg-background-secondary border border-border rounded-full p-1.5 flex items-center shadow-sm relative">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isAnnual ? "text-text" : "text-text-secondary hover:text-text"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                isAnnual ? "text-text" : "text-text-secondary hover:text-text"
              }`}
            >
              Anual
              <span className="bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                -41%
              </span>
            </button>

            {/* Sliding Pill */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 w-[50%] bg-white rounded-full shadow border border-gray-100"
              initial={false}
              animate={{
                left: isAnnual ? "50%" : "1.5px",
                width: isAnnual ? "calc(50% - 1.5px)" : "calc(50% - 1.5px)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl border border-border shadow-xl shadow-black/5 overflow-hidden relative">
          {/* Highlight Badge */}
          {isAnnual && (
            <div className="bg-accent text-white text-center py-2 text-sm font-semibold tracking-wide uppercase">
              Melhor Custo-Benefício (5 meses grátis)
            </div>
          )}

          <div className="p-8 sm:p-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-text">
                  Plano Pro
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  Ideal para negócios em crescimento.
                </p>
              </div>
            </div>

            <div className="mb-8 flex items-end gap-1">
              <span className="text-text font-semibold self-start mt-2">
                R$
              </span>
              <span className="text-5xl font-display font-bold text-text tracking-tighter">
                {isAnnual
                  ? annualPrice.toFixed(2).replace(".", ",")
                  : monthlyPrice.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-text-secondary mb-1">
                /{isAnnual ? "ano" : "mês"}
              </span>
            </div>

            <a
              href={currentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-text text-white font-medium py-4 rounded-xl hover:bg-black transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Assinar Agora
            </a>
            
            <p className="text-center text-xs text-text-secondary mt-4">
              Ao assinar, você concorda com nossos <a href="/termos-hero" target="_blank" className="underline hover:text-text transition-colors">Termos de Serviço</a>.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">
              <div className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
                O que está incluído
              </div>
              {[
                { text: "Servidores Cloud Premium (100% NVMe)", icon: Zap },
                { text: "Nós cuidamos de tudo (Gerenciada)", icon: Shield },
                { text: "Migração Gratuita do seu site", icon: Check },
                { text: "Backups Diários e Anti-DDoS", icon: Shield },
                { text: "Certificado SSL e Suporte WhatsApp", icon: Check },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-text-secondary text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroHospedagemPage;
