import React from 'react';
import { motion } from 'framer-motion';

// Using Placeholder logos from simple icons or basic shapes representation
const logos = [
  "Acme Corp", "Vercel", "Stripe", "Raycast", "Linear", "Shopify", "Airbnb", "Loom"
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
                className="group cursor-default"
              >
                <span className="font-display font-bold text-2xl text-gray-300 transition-colors duration-300 group-hover:text-text">
                  {logo}
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