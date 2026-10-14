import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquareText, Play, Repeat2 } from 'lucide-react';

const steps = [
  { num: '01', icon: MessageSquareText, title: 'A gente entende', copy: 'Você mostra o cenário, os objetivos e o que está tirando energia do time hoje.' },
  { num: '02', icon: Play, title: 'A gente organiza', copy: 'Transformamos prioridades em um plano claro, com responsáveis e próximos passos.' },
  { num: '03', icon: Repeat2, title: 'A gente produz', copy: 'As entregas avançam em ciclos curtos, com espaço para ajustes e decisões rápidas.' },
  { num: '04', icon: Check, title: 'Você aprova e escala', copy: 'Tudo chega pronto para publicar, apresentar, implementar ou colocar para rodar.' },
];

const ProcessSection: React.FC = () => (
  <section id="processo" className="relative border-y border-white/[0.08] bg-[#0a0a0a] py-28 text-white md:py-36">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(255,61,20,.08),transparent_28%)]" />
    <div className="relative mx-auto max-w-[1380px] px-6 md:px-10">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
        <div>
          <p className="eyebrow">Como funciona</p>
          <h2 className="section-title">Sem mistério.<br /><span>Sem empurra-empurra.</span></h2>
        </div>
        <p className="max-w-lg text-base leading-relaxed text-white/45 lg:ml-auto">
          Um fluxo próximo o bastante para entender sua rotina e organizado o bastante para não depender de mensagens perdidas.
        </p>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group relative min-h-[340px] bg-[#0d0d0d] p-7 transition-colors hover:bg-[#111]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-accent">PASSO {step.num}</span>
              <step.icon className="h-5 w-5 text-white/25 transition-colors group-hover:text-accent" />
            </div>
            <div className="absolute inset-x-7 bottom-8">
              <span className="font-display text-7xl font-medium tracking-[-0.08em] text-white/[0.035]">{step.num}</span>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.035em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/40">{step.copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
