import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Layers, Image as ImageIcon, Video, CheckCircle2, ArrowRight } from 'lucide-react';

const assets = [
  { type: 'Carousel', ratio: 'aspect-[4/5]', bg: 'bg-zinc-100', icon: Layers, label: 'Carrosséis Educativos' },
  { type: 'Reel Cover', ratio: 'aspect-[9/16]', bg: 'bg-zinc-900', icon: Video, label: 'Capas & Edição Reels', dark: true },
  { type: 'Ad Creative', ratio: 'aspect-square', bg: 'bg-accent/10', icon: ImageIcon, label: 'Ads de Alta Conversão' },
];

const features = [
  "White-label total (entregamos como se fosse você)",
  "Arquivos editáveis (Figma/Adobe) inclusos",
  "Volume escalável para atender múltiplos clientes",
  "Revisões ilimitadas até aprovação do seu cliente"
];

const AgencySupportSection: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                 <span className="w-2 h-2 rounded-full bg-accent"></span>
                 <span className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">
                   Para Agências & Criadores
                 </span>
              </div>
              
              <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight mb-6">
                Sua agência vende estratégia. <br />
                <span className="text-gray-400">Nós entregamos a produção.</span>
              </h2>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Cansado de recusar clientes ou enlouquecer gerenciando freelancers para entregar posts? A Fehari atua como sua linha de produção de design invisível.
              </p>

              <ul className="space-y-4 mb-10">
                {features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-text"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button className="bg-text text-white hover:bg-accent rounded-full px-8">
                Ver Planos para Agências
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-accent/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {/* Column 1 (Offset down) */}
              <div className="space-y-4 pt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-border p-4 rounded-xl shadow-lg"
                >
                  <div className="aspect-[4/5] bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group">
                     {/* Mockup Element */}
                     <div className="absolute inset-x-4 top-4 bottom-12 bg-white shadow-sm rounded border border-gray-200" />
                     <div className="absolute inset-x-6 top-6 bottom-16 bg-gray-50 rounded border border-gray-100" />
                     <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                     </div>
                     <Layers className="w-8 h-8 text-text/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <p className="font-display font-bold text-text text-sm">Carrosséis Infinitos</p>
                  <p className="text-xs text-text-secondary">Conteúdo denso visualizado.</p>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   className="bg-[#111] text-white p-4 rounded-xl shadow-2xl"
                >
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono uppercase">Motion</span>
                      </div>
                      <Video className="w-4 h-4 text-gray-500" />
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-gray-700 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-gray-700 rounded-full"></div>
                   </div>
                   <div className="mt-8 pt-4 border-t border-gray-800">
                      <p className="font-display font-bold text-sm">Reels & TikToks</p>
                   </div>
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                 <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white border border-border p-4 rounded-xl shadow-lg"
                >
                  <div className="aspect-square bg-accent/5 rounded-lg mb-4 flex items-center justify-center border border-accent/10">
                     <ImageIcon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="font-display font-bold text-text text-sm">Social Posts</p>
                  <p className="text-xs text-text-secondary">Estáticos e Stories diários.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-background-secondary border border-border p-6 rounded-xl flex flex-col items-center text-center justify-center min-h-[180px]"
                >
                   <h4 className="font-display font-bold text-4xl text-accent mb-2">+250</h4>
                   <p className="text-xs font-medium text-text uppercase tracking-wide">Templates Criados</p>
                   <p className="text-[10px] text-text-secondary mt-2">Neste mês para clientes.</p>
                </motion.div>
              </div>
            </div>

            {/* Floating Connection Line */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 hidden md:block" viewBox="0 0 400 400">
              <path d="M 100 100 Q 200 50 300 100 T 400 200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencySupportSection;