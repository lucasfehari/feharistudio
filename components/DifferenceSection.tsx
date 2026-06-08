import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Zap, ArrowRight } from 'lucide-react';
import { SiOpenai, SiShopify, SiStripe, SiLinear, SiClickup, SiVercel } from 'react-icons/si';

const logos = [
  { name: "OpenAI", icon: SiOpenai },
  { name: "Shopify", icon: SiShopify },
  { name: "Stripe", icon: SiStripe },
  { name: "Linear", icon: SiLinear },
  { name: "ClickUp", icon: SiClickup },
  { name: "Vercel", icon: SiVercel },
];

const DifferenceSection: React.FC = () => {
  return (
    <section className="bg-text text-white relative pt-24 pb-0">
      {/* Background Grid Lines for the main body area (Optional "Blueprint" feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side: Headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Zap className="w-8 h-8 text-accent mb-6 fill-current" />
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
                Outros dependem de <br />
                freelancers isolados. <br />
                <span className="text-gray-400">Nossa vantagem?</span> <br />
                Um estúdio conectado.
              </h2>
            </motion.div>
          </div>

          {/* Right Side: Description & CTA */}
          <div className="flex flex-col justify-center items-start lg:pl-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
            >
              A Fehari centraliza direção de arte, UI/UX e desenvolvimento em um único fluxo criativo. Cada entrega é focada em manter sua marca consistente e rápida, sem o overhead de gerenciar vários contratos diferentes.
            </motion.p>
          </div>
        </div>

        {/* Center Visual Element (The "Chip" equivalent) */}
        <div className="flex justify-center relative mt-12 mb-32">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] rounded-xl border border-gray-700 shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-accent/50 transition-colors duration-500"
          >
            {/* Metallic shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <span className="font-display font-bold text-3xl tracking-tighter text-white z-10">
              <img src="/fehari.svg" alt="" />
            </span>
            <span className="font-mono text-xs text-gray-500 mt-2 tracking-widest z-10">
              CREATIVE CORE v1.0
            </span>

            {/* Decorative technical lines */}
            <div className="absolute bottom-4 left-4 text-[10px] text-gray-700 font-mono">
              01LN599 ESD PQ<br />
              9316 BR
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-full h-full border border-white/5 rounded-xl m-1" />
          </motion.div>
        </div>
      </div>

      {/* Grid Style Trusted By Section */}
      <div className="border-t border-white/10 bg-text">
        <div className="max-w-7xl mx-auto">

          {/* Header Row */}
          <div className="px-6 md:px-12 py-6 border-b border-white/10 flex items-center">
            <span className="font-sans text-sm font-medium text-gray-400">
              Trusted by the world's best software teams
            </span>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-white/10 border-b border-white/10">
            {logos.map((logo, i) => (
              <div key={i} className="group h-24 flex items-center justify-center gap-3 p-4 hover:bg-white/5 transition-colors duration-300 cursor-default">
                {/* Icon */}
                <logo.icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                {/* Text */}
                <span className="font-display font-semibold text-lg text-gray-400 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default DifferenceSection;