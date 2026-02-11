import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, MessageSquare, MoreHorizontal, Paperclip, Search, Plus, Lock, Construction } from 'lucide-react';
import Button from './ui/Button';

const PlatformPreviewSection: React.FC = () => {
  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
              Em Desenvolvimento (V2.0)
            </span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-3xl md:text-5xl text-text"
          >
            O futuro da gestão <br />
            <span className="text-text-secondary">criativa.</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="mt-6 text-text-secondary max-w-2xl mx-auto"
          >
            Enquanto construímos nosso sistema proprietário (Fehari OS), gerenciamos seus projetos com eficiência máxima usando Linear, Trello e Slack Connect.
          </motion.p>
        </div>

        {/* The Dashboard Mockup Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto group"
        >
          {/* Main Window Frame */}
          <div className="bg-[#0F0F0F] rounded-xl shadow-2xl border border-border/20 overflow-hidden text-white aspect-[16/10] md:aspect-[16/9] flex flex-col relative z-10">
            
            {/* Window Header */}
            <div className="h-10 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="ml-4 bg-[#0F0F0F] px-3 py-1 rounded text-[10px] text-gray-500 font-mono flex items-center gap-2 border border-white/5 opacity-50">
                 <Lock className="w-3 h-3" />
                 app.fehari.com/dashboard
              </div>
            </div>

            {/* App Layout (Blurred Content) */}
            <div className="flex flex-1 overflow-hidden relative opacity-50 blur-[3px] grayscale-[50%] transition-all duration-700 group-hover:blur-[2px] group-hover:grayscale-0">
              
              {/* Sidebar */}
              <div className="w-16 md:w-64 border-r border-white/5 bg-[#111] p-4 flex flex-col hidden md:flex">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-6 h-6 bg-accent rounded flex items-center justify-center font-bold text-xs">F</div>
                  <span className="font-display font-bold text-sm">Fehari OS</span>
                </div>
                
                <div className="space-y-1">
                   <SidebarItem active icon={<CheckCircle2 className="w-4 h-4" />} text="Fila de Pedidos" />
                   <SidebarItem icon={<Clock className="w-4 h-4" />} text="Em Progresso" />
                   <SidebarItem icon={<CheckCircle2 className="w-4 h-4 text-green-500" />} text="Concluídos" />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-[#0F0F0F] p-6 md:p-8 overflow-y-auto relative">
                {/* Simulated Content structure */}
                <div className="flex justify-between items-center mb-8">
                  <div className="h-6 w-32 bg-gray-800 rounded"></div>
                  <div className="h-8 w-24 bg-gray-800 rounded"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="h-32 bg-[#1A1A1A] rounded-lg border border-white/5"></div>
                    <div className="h-24 bg-[#1A1A1A] rounded-lg border border-white/5"></div>
                  </div>
                  <div className="space-y-4">
                     <div className="h-24 bg-[#1A1A1A] rounded-lg border border-white/5"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm p-4">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-[#111] border border-white/10 p-8 md:p-10 rounded-2xl text-center shadow-2xl max-w-sm w-full mx-auto"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent ring-1 ring-accent/30">
                  <Lock className="w-7 h-7" />
                </div>
                <h3 className="text-white font-display font-bold text-2xl mb-4">Acesso Antecipado</h3>
                <p className="text-gray-400 text-base mb-8 leading-relaxed">
                  Estamos construindo o sistema operacional definitivo para design. Clientes atuais terão prioridade no beta.
                </p>
                <Button size="md" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black w-full justify-center h-12">
                  Entrar na Lista de Espera
                </Button>
              </motion.div>
            </div>

          </div>
          
          {/* Back Glow */}
          <div className="absolute -inset-4 bg-accent/10 blur-3xl -z-10 rounded-[3rem] opacity-30" />
        </motion.div>

      </div>
    </section>
  );
};

const SidebarItem = ({ active, icon, text }: { active?: boolean; icon: React.ReactNode; text: string }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-medium cursor-pointer transition-colors ${active ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
    {icon}
    <span>{text}</span>
  </div>
);

export default PlatformPreviewSection;