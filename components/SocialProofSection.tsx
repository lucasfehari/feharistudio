import React from 'react';
import { motion } from 'framer-motion';
import { SiVercel, SiStripe, SiRaycast, SiLinear, SiShopify, SiAirbnb, SiLoom, SiAmazon } from 'react-icons/si';

const logos = [
  { name: "Amazon", icon: SiAmazon },
  { name: "Vercel", icon: SiVercel },
  { name: "Stripe", icon: SiStripe },
  { name: "Raycast", icon: SiRaycast },
  { name: "Linear", icon: SiLinear },
  { name: "Shopify", icon: SiShopify },
  { name: "Airbnb", icon: SiAirbnb },
  { name: "Loom", icon: SiLoom }
];

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-12 border-t border-border bg-background overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-widest text-text-secondary uppercase">
          Confecionado para as melhores equipes de software do mundo
        </span>
      </div>
      
      <div className="relative w-full overflow-hidden mask-linear-gradient">
        {/* Fade masks on sides */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-full">
          <motion.div
            className="flex gap-16 md:gap-24 whitespace-nowrap min-w-full items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicating the list to ensure seamless infinite scroll */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="group cursor-default flex items-center gap-3 text-gray-400 transition-colors duration-300 hover:text-text"
              >
                <logo.icon className="w-8 h-8" />
                <span className="font-display font-bold text-2xl">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;