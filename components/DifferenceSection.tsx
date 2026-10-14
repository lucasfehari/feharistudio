import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, BriefcaseBusiness, Building2, Check, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    index: '01',
    id: 'para-agencias',
    eyebrow: 'Para agências, gestores e social medias',
    title: 'Design sob demanda. Sem depender de freelancer.',
    copy: 'A Fehari entra como parte do seu time para assumir a produção criativa com processo, direção e responsabilidade. Você ganha mais braço sem precisar contratar e gerenciar vários profissionais soltos.',
    points: ['Time profissional à disposição', 'Modelo white-label', 'Volume que acompanha sua demanda', 'Investimento acessível e previsível'],
    image: '/fehari-agency-team.png',
    icon: BriefcaseBusiness,
    link: '#agencia-operacao',
    linkLabel: 'Entender o design sob demanda',
  },
  {
    index: '02',
    id: 'para-empresas',
    eyebrow: 'Para empresas B2B e B2C',
    title: 'Marketing para captar, posicionar e vender.',
    copy: 'Cuidamos da operação de marketing da empresa: estratégia, captação, tráfego pago, conteúdo, criativos, páginas e implementação. As peças trabalham juntas para gerar oportunidades reais.',
    points: ['Captação de leads e clientes', 'Tráfego pago e campanhas', 'Conteúdo e posicionamento', 'Sites, páginas e implementação'],
    image: '/fehari-marketing-strategy.png',
    icon: Building2,
    link: '#empresa-marketing',
    linkLabel: 'Conhecer a operação de marketing',
  },
];

const DifferenceSection: React.FC = () => (
  <section id="para-quem" className="relative overflow-hidden border-b border-white/[0.08] bg-[#080808] py-28 text-white md:py-36">
    <div className="mx-auto max-w-[1380px] px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-9 lg:grid-cols-[1fr_.72fr] lg:items-end"
      >
        <div>
          <p className="eyebrow">Duas soluções. Uma empresa parceira.</p>
          <h2 className="section-title">Onde sua operação precisa<br /><span>de mais força hoje?</span></h2>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-white/52 lg:ml-auto lg:text-lg">
          Seja para produzir mais dentro de uma agência ou para cuidar do marketing de uma empresa, a Fehari entra no time e faz o trabalho avançar.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        {solutions.map((solution, index) => (
          <motion.article
            key={solution.id}
            id={solution.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ delay: index * 0.1, duration: 0.7 }}
            className="group relative flex min-h-[760px] scroll-mt-28 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0c]"
          >
            <div className="relative h-[300px] overflow-hidden md:h-[350px]">
              <img src={solution.image} alt={solution.eyebrow} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-black/10" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur-xl">
                <solution.icon className="h-3.5 w-3.5 text-accent" /> {solution.index}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-9">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">{solution.eyebrow}</p>
              <h3 className="mt-5 max-w-xl font-display text-3xl font-medium leading-[1.02] tracking-[-0.05em] md:text-4xl">{solution.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/48 md:text-base">{solution.copy}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {solution.points.map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-xs text-white/60">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent"><Check className="h-3 w-3" /></span>
                    {point}
                  </div>
                ))}
              </div>

              <a href={solution.link} className="mt-auto flex items-center justify-between border-t border-white/10 pt-7 text-sm font-medium text-white/70 transition-colors hover:text-white">
                {solution.linkLabel}
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-all group-hover:border-accent/50 group-hover:text-accent">
                  <ArrowDownRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 flex flex-col gap-5 rounded-3xl border border-accent/20 bg-[linear-gradient(110deg,rgba(255,70,31,.12),rgba(255,255,255,.02))] p-6 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <div className="flex items-center gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-white"><ShieldCheck className="h-5 w-5" /></span>
          <div>
            <p className="font-display text-lg font-medium tracking-[-0.03em]">Não é um freelancer solto. É uma empresa cuidando da sua operação.</p>
            <p className="mt-1 text-xs text-white/40">Processo, direção, continuidade e responsabilidade em cada entrega.</p>
          </div>
        </div>
        <span className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">Fehari Studio · Creative Partner</span>
      </motion.div>
    </div>
  </section>
);

export default DifferenceSection;
