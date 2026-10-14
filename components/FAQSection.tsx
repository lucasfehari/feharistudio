import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  { q: 'Qual é a diferença entre o trabalho para agências e para empresas?', a: 'Para agências, gestores e social medias, funcionamos como um time de design sob demanda, inclusive em white-label. Para empresas B2B ou B2C, assumimos a operação de marketing e captação, conectando estratégia, tráfego, conteúdo, criativos, páginas e implementação.' },
  { q: 'A Fehari substitui minha equipe?', a: 'Não precisa. Podemos complementar o time que você já tem, assumir uma frente específica ou funcionar como sua operação criativa completa. O formato acompanha o que faz sentido hoje.' },
  { q: 'Vocês trabalham em modelo white-label?', a: 'Sim. Para agências, gestores e social medias, podemos produzir nos bastidores para que a entrega chegue ao cliente com o nome e o fluxo da sua operação.' },
  { q: 'Posso contratar só um projeto?', a: 'Sim. Atendemos demandas pontuais, como identidade visual, site ou sistema, e também operações contínuas de design e marketing.' },
  { q: 'Como vocês organizam pedidos e feedbacks?', a: 'Centralizamos briefing, prioridade, arquivos e retornos em um fluxo simples. Assim, você acompanha o andamento sem depender de mensagens soltas.' },
  { q: 'Por onde começamos?', a: 'Por uma conversa curta sobre seu momento, seu time e o que precisa sair do papel. Depois indicamos a estrutura mais enxuta para avançar.' },
];

const FAQSection: React.FC = () => (
  <section className="bg-[#050505] py-28 text-white md:py-36">
    <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:px-10 lg:grid-cols-[.65fr_1.35fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="eyebrow">Antes de começar</p>
        <h2 className="font-display text-5xl font-medium tracking-[-0.06em] md:text-6xl">Perguntas<br /><span className="text-white/25">honestas.</span></h2>
      </motion.div>
      <div className="border-t border-white/10">
        {faqs.map((faq, index) => (
          <motion.details
            key={faq.q}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="faq-item group border-b border-white/10"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-base font-medium text-white/80 transition-colors hover:text-white md:text-lg">
              {faq.q}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-white/35 transition-all group-open:rotate-45 group-open:border-accent/40 group-open:text-accent">
                <Plus className="h-4 w-4" />
              </span>
            </summary>
            <p className="max-w-2xl pb-7 pr-12 text-sm leading-relaxed text-white/42 md:text-base">{faq.a}</p>
          </motion.details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
