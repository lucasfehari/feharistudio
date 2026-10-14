import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="border-t border-white/[0.08] bg-[#050505] pb-8 pt-16 text-white">
    <div className="mx-auto max-w-[1380px] px-6 md:px-10">
      <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_.8fr]">
        <div>
          <img src="/fehari.svg" alt="Fehari Studio" className="h-8 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/40">Design, marketing e tecnologia para equipes que têm mais ideias do que braços.</p>
          <a href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent">
            Falar no WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <FooterColumn title="Navegue" links={[['Para quem', '/#para-quem'], ['Soluções', '/#solucoes'], ['Cases', '/#cases'], ['Sobre', '/#sobre'], ['Processo', '/#processo']]} />
        <FooterColumn title="Soluções" links={[['Design para times', '/#solucoes'], ['Marketing', '/#solucoes'], ['Sites avançados', '/#solucoes'], ['Sistemas', '/#solucoes']]} />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">Contato</p>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/50 transition-all hover:border-accent/50 hover:text-accent"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-7 text-[10px] uppercase tracking-[0.14em] text-white/25 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Fehari Studio. Feito para mover ideias.</p>
        <a href="#top" className="hover:text-white">Voltar ao topo ↑</a>
      </div>
    </div>
  </footer>
);

const FooterColumn = ({ title, links }: { title: string; links: string[][] }) => (
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">{title}</p>
    <ul className="mt-6 space-y-3 text-sm text-white/48">
      {links.map(([label, href]) => <li key={label}><a href={href} className="transition-colors hover:text-white">{label}</a></li>)}
    </ul>
  </div>
);

export default Footer;
