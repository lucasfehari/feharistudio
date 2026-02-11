import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Hexagon, Box, Layers, Command, Activity, Triangle, Zap } from 'lucide-react';

const logos = [
  { name: "OpenAI", icon: Hexagon },
  { name: "Shopify", icon: Box },
  { name: "Stripe", icon: Layers },
  { name: "Linear", icon: Command },
  { name: "ClickUp", icon: Activity },
  { name: "Wiz", icon: Triangle },
];

const StickyPartnerBar: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto bg-[#ffffff] text-white rounded-full p-2 pl-4 md:pl-6 pr-2 shadow-2xl border border-white/10 flex items-center gap-4 md:gap-8 max-w-[95vw] md:max-w-fit overflow-hidden backdrop-blur-xl supports-[backdrop-filter]:bg-[#ffffff]/90">

        {/* Label (Hidden on small mobile) */}
        <div className="hidden md:flex flex-col flex-shrink-0 border-r border-white/10 pr-6">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">
            Trusted by
          </span>
          <span className="text-xs font-bold text-black tracking-tight leading-tight">
            Tech Giants
          </span>
        </div>

        {/* Marquee Area */}
        <div className="flex-1 overflow-hidden relative h-8 w-32 md:w-80 flex items-center">
          {/* Gradients to fade edges */}
          <div className="absolute rounded-full top-0 left-0 w-6 h-full bg-gradient-to-r from-[#ffffff] to-transparent z-10" />
          <div className="absolute rounded-full top-0 right-0 w-6 h-full bg-gradient-to-l from-[#ffffff] to-transparent z-10" />

          <motion.div
            className="flex items-center gap-8 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                <logo.icon className="w-4 h-4 text-gray-400" strokeWidth={2} />
                <span className="text-xs font-medium font-display text-black sm:inline-block">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <a href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#FF4500] hover:bg-white hover:text-black text-white border-none rounded-[80px] h-10 px-6 text-xs md:text-sm font-bold whitespace-nowrap] hover:shadow-none flex-shrink-0 transition-all">
            Solicitar Projeto <Zap className="ml-2 w-3 h-3 fill-current" />
          </Button>
        </a>

      </div>
    </motion.div>
  );
}

export default StickyPartnerBar;