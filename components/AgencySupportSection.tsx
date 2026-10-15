import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CircleDot, Layers2, ShieldCheck, Users2 } from 'lucide-react';
import Button from './ui/Button';

const output = [
  { label: 'Campanha Black Friday', status: 'Pronto para aprovar', progress: 100 },
  { label: 'Criativos Cliente A', status: 'Em produção', progress: 68 },
  { label: 'Landing Page Cliente B', status: 'Direção aprovada', progress: 42 },
];

const AgencySupportSection: React.FC = () => (
    <section id="agencia-operacao" className="relative scroll-mt-24 overflow-hidden bg-[#f1f0ec] py-28 text-[#111] md:py-36">
    <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
    <div className="mx-auto max-w-[1380px] px-6 md:px-10">
      <div className="grid gap-16 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e73f1b]">Design sob demanda para agências</p>
          <h2 className="font-display text-[clamp(2.8rem,5.5vw,5.6rem)] font-medium leading-[0.95] tracking-[-0.065em]">
            Seu time de design.<br /><span className="text-black/35">Sem novas contratações.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-black/55 md:text-lg">
            Em vez de procurar e gerenciar freelancers a cada demanda, sua agência conta com uma empresa séria dentro da operação. Você mantém a estratégia e o cliente; a Fehari assume a produção, inclusive em white-label.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: 'Empresa e processo', copy: 'Continuidade e responsabilidade em cada entrega.' },
              { icon: Users2, title: 'Escala sem contratar', copy: 'Mais designers quando a demanda apertar.' },
              { icon: Layers2, title: 'Padrão em cada peça', copy: 'Direção visual que não se perde no volume.' },
              { icon: CircleDot, title: 'Prioridade visível', copy: 'Todo mundo sabe o que vem agora.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-black/15 pt-4">
                <item.icon className="h-5 w-5 text-[#e73f1b]" />
                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-black/45">{item.copy}</p>
              </div>
            ))}
          </div>

          <Button
            href="https://wa.me/5564999602571?text=Oi%2C%20quero%20uma%20retaguarda%20criativa%20para%20minha%20opera%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 gap-3 bg-[#111] text-white shadow-none hover:bg-[#e73f1b]"
          >
            Quero uma retaguarda criativa <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-[#ff4a1c]/10 blur-[80px]" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#111] p-4 shadow-[0_40px_100px_rgba(0,0,0,.22)] md:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ff6035]">Workspace compartilhado</p>
                <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.03em] text-white">Operação criativa / esta semana</h3>
              </div>
              <div className="flex -space-x-2">
                {['F', 'D', 'M'].map((item) => <span key={item} className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#111] bg-[#2a2a2a] text-[9px] text-white/65">{item}</span>)}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {output.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.12 }}
                  className="rounded-2xl bg-white/[0.045] p-4 md:p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">TASK 0{index + 1}</span>
                      <p className="mt-2 text-sm font-medium text-white/85">{item.label}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-[9px] ${index === 0 ? 'bg-[#ff4a1c]/15 text-[#ff754f]' : 'bg-white/[0.06] text-white/40'}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.25 + index * 0.12 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#e73114] to-[#ff7a00]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/[0.04] p-4 text-white">
                <Check className="h-4 w-4 text-[#ff6035]" />
                <p className="mt-7 text-2xl font-medium tracking-[-0.04em]">Tudo no lugar.</p>
                <p className="mt-1 text-[10px] text-white/35">Sem caçar arquivo ou feedback.</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff6a00] to-[#e42f15] p-4 text-white">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <p className="relative mt-12 text-2xl font-medium tracking-[-0.04em]">Pronto para<br />o próximo.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AgencySupportSection;
