import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Quote, ArrowRight } from 'lucide-react';
import { SiReact, SiLinear, SiVercel, SiRaycast } from 'react-icons/si';

const testimonials = [
  {
    quote: "Otimizamos nossa infraestrutura de marca ao limite. A virada de chave veio com o Creative Core da Fehari. Da noite para o dia, nossa velocidade de lançamento triplicou enquanto os custos caíram 40%.",
    author: "Nicolas Bustamante",
    role: "CEO, FINTOOL",
    companyLogo: SiReact // Simulando logo
  },
  {
    quote: "A Fehari criou uma economia imensa e reduziu drasticamente nosso overhead de gestão. Conseguimos manter nossos preços competitivos porque não carregamos o custo de um time interno ocioso.",
    author: "Abhigyan Arya",
    role: "CTO, OPENNOTE",
    companyLogo: SiLinear
  },
  {
    quote: "Se tivéssemos que contratar, treinar e gerir, perderíamos a janela de mercado. A Fehari entregou a nova identidade visual e o site em duas semanas. Simplesmente não conseguimos viver sem.",
    author: "Kevin Scott",
    role: "VP DE PRODUTO, WIZ",
    companyLogo: SiVercel // Simulando logo da Wiz com Vercel
  },
  {
    quote: "A consistência visual entre nossas apresentações de investidores e nosso produto final nunca foi tão alta. É como ter um Diretor de Arte Sênior disponível 24/7 no Slack.",
    author: "Sarah Jenkings",
    role: "FOUNDER, RAYCAST",
    companyLogo: SiRaycast
  }
];

// Triple the array to create a seamless loop effect that works on wide screens
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-border overflow-hidden">
      <div className="w-full">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-light text-4xl md:text-6xl text-text tracking-tight"
          >
            Prova de quem está <br className="hidden md:block" />
            <span className="font-medium">escalando agora.</span>
          </motion.h2>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative w-full mt-10 overflow-hidden">
          
          {/* Gradient Masks for smooth entry/exit */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-6 pl-6 w-max"
            initial={{ x: 0 }}
            animate={{ x: "-33.33%" }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {extendedTestimonials.map((item, index) => (
              <div 
                key={index}
                className="w-[320px] md:w-[450px] bg-[#F2F2F2] p-8 md:p-10 rounded-lg flex flex-col justify-between shrink-0"
              >
                <div>
                  <Quote className="w-8 h-8 text-accent mb-6 fill-current opacity-80" />
                  <p className="font-sans text-lg md:text-xl text-text leading-relaxed font-light">
                    {item.quote}
                  </p>
                </div>
                
                <div className="mt-10 flex items-end justify-between border-t border-gray-300/50 pt-6">
                  <div>
                    <p className="font-mono text-[10px] md:text-xs font-bold text-text uppercase tracking-widest mb-1">
                      {item.author}
                    </p>
                    <p className="font-mono text-[10px] md:text-xs text-text-secondary uppercase tracking-widest">
                      {item.role}
                    </p>
                  </div>
                  <item.companyLogo className="w-6 h-6 text-text opacity-50" strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Callout Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 text-center border-t border-border pt-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-4"
          >
            MAIS RÁPIDO DO QUE VOCÊ LÊ ISSO
          </motion.p>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-light text-3xl md:text-5xl text-text mb-8 max-w-2xl mx-auto leading-tight"
          >
            Integrado ao seu workflow <br />
            <span className="font-medium">em dois cliques.</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button size="lg" className="bg-accent hover:bg-accent-secondary text-white border-none rounded-full px-10">
              Começar Agora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;