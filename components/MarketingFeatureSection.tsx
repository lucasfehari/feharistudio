import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Crosshair, MousePointerClick, Shapes } from 'lucide-react';
import Button from './ui/Button';

const MarketingFeatureSection: React.FC = () => (
  <section id="empresa-marketing" className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.08] bg-[#080808] py-28 text-white md:py-36">
    <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[140px]" />
    <div className="relative mx-auto max-w-[1380px] px-6 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="lg:sticky lg:top-32"
        >
          <p className="eyebrow">Marketing e captação para empresas B2B e B2C</p>
          <h2 className="section-title max-w-2xl">Mais que aparecer.<br /><span>Atrair a pessoa certa.</span></h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/48">
            A Fehari cuida da estratégia e da execução: captação, tráfego pago, conteúdo, criativos, landing pages e implementação para transformar atenção em oportunidade comercial.
          </p>
          <Button
            href="https://wa.me/5564999602571?text=Oi%2C%20quero%20organizar%20o%20marketing%20da%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="mt-9 gap-3"
          >
            Organizar meu marketing <ArrowUpRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="space-y-4">
          {[
            { step: '01', icon: Crosshair, title: 'Clareza de posicionamento', copy: 'Organizamos mensagem, público e prioridade para sua comunicação parar de tentar dizer tudo ao mesmo tempo.', accent: 'Identidade + direção' },
            { step: '02', icon: Shapes, title: 'Conteúdo que parece sua marca', copy: 'Criamos um sistema visual para campanhas, redes e apresentações conversarem entre si.', accent: 'Design + conteúdo' },
            { step: '03', icon: MousePointerClick, title: 'Caminhos para converter', copy: 'Unimos mídia, criativos e páginas com uma ideia simples: facilitar o próximo passo.', accent: 'Tráfego + páginas' },
            { step: '04', icon: BarChart3, title: 'Aprendizado que vira ação', copy: 'Acompanhamos o que funciona e alimentamos os próximos ciclos de criação e implementação.', accent: 'Otimização + escala' },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: index * 0.05 }}
              className="group grid min-h-[230px] gap-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-accent/25 hover:bg-white/[0.04] md:grid-cols-[80px_1fr_auto] md:p-8"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-black/30 text-white/45 group-hover:text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-accent">PASSO {item.step}</span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-[-0.035em] md:text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/43">{item.copy}</p>
              </div>
              <span className="h-fit rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.13em] text-white/36">{item.accent}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MarketingFeatureSection;
