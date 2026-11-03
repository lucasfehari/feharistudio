import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter, Layers, MessageSquare, Maximize2 } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { PanoramicCarousel } from '../components/portfolio/PanoramicCarousel';
import { EventLaunchBoard } from '../components/portfolio/EventLaunchBoard';
import { CommunityGridBoard } from '../components/portfolio/CommunityGridBoard';
import { EditorialBoard } from '../components/portfolio/EditorialBoard';
import { PortfolioLightbox, LightboxItem } from '../components/portfolio/PortfolioLightbox';
import { projects } from '../data/projects';

type CategoryFilter = 'all' | 'thabata' | 'borntech' | 'aneti' | 'teacher' | 'outros';

const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'Todos os Trabalhos' },
  { id: 'thabata', label: 'Dra. Thábata (Carrossel)' },
  { id: 'borntech', label: 'Borntech (Lançamento)' },
  { id: 'aneti', label: 'ANETI (Comunidade Tech)' },
  { id: 'teacher', label: 'Teacher dos Famosos' },
  { id: 'outros', label: 'Sites & Identidade' },
];

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedItem, setSelectedItem] = useState<LightboxItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-text font-sans selection:bg-accent selection:text-white">
      <SEO
        title="Portfólio de Trabalhos | Fehari Studio"
        description="Conheça a produção criativa de alta fidelidade da Fehari Studio: carrosséis contínuos, campanhas de eventos, social media corporativo e direção de arte."
        url="https://www.feharistudio.com.br/portfolio"
      />

      <main className="mx-auto max-w-[1380px] px-6 pb-28 pt-36 md:px-10 md:pt-44">
        
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
          >
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-3 w-3" /> Produção Criativa de Alto Padrão
              </span>
              <h1 className="font-display text-[clamp(2.8rem,6.5vw,6.4rem)] font-medium leading-[0.93] tracking-tight text-white">
                Trabalhos que <br />
                <span className="hero-gradient-text">movem marcas reais.</span>
              </h1>
            </div>
            <div>
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/60">
                Uma coleção curada das nossas entregas de design sob demanda: carrosséis panorâmicos de alta retenção, campanhas de vendas de ingressos, identidade de eventos e social media estratégico para agências e marcas.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/40">
                <span>100% autoral</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Direção criativa sênior</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Estratégia white-label</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="mb-16 flex items-center justify-start overflow-x-auto pb-4 no-scrollbar">
          <div className="inline-flex rounded-full border border-white/10 bg-[#0c0c0c] p-1.5 shadow-xl">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`whitespace-nowrap rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-accent to-[#ff6a00] text-white shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Presentation Boards */}
        <div className="space-y-20">
          
          {/* CASE 01: Dra. Thábata (Panoramic Continuous Carousel) */}
          {(activeFilter === 'all' || activeFilter === 'thabata') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <PanoramicCarousel onOpenLightbox={setSelectedItem} />
            </motion.div>
          )}

          {/* CASE 02: Borntech / Techday (Event Ticket Launch Board) */}
          {(activeFilter === 'all' || activeFilter === 'borntech') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <EventLaunchBoard onOpenLightbox={setSelectedItem} />
            </motion.div>
          )}

          {/* CASE 03: ANETI (Tech Community Engagement Board) */}
          {(activeFilter === 'all' || activeFilter === 'aneti') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <CommunityGridBoard onOpenLightbox={setSelectedItem} />
            </motion.div>
          )}

          {/* CASE 04: Teacher dos Famosos (Editorial & Mentoria) */}
          {(activeFilter === 'all' || activeFilter === 'teacher') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <EditorialBoard onOpenLightbox={setSelectedItem} />
            </motion.div>
          )}

          {/* OTHER CASES: Websites & Branding Projects */}
          {(activeFilter === 'all' || activeFilter === 'outros') && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="pt-6"
            >
              <div className="mb-10">
                <span className="eyebrow">Sites & Identidades Visuais</span>
                <h3 className="font-display text-3xl font-medium text-white">
                  Plataformas Digitais, Apps e Identidade de Marca
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 transition-all hover:border-white/25 hover:bg-[#111]"
                  >
                    <div
                      className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-black cursor-pointer"
                      onClick={() =>
                        setSelectedItem({
                          image: project.image,
                          title: project.client,
                          client: project.category,
                        })
                      }
                    >
                      <img
                        src={project.image}
                        alt={project.client}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white shadow-xl">
                          <Maximize2 className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-white/50">
                          {project.category}
                        </span>
                        <h4 className="mt-2 font-display text-xl font-medium text-white group-hover:text-accent transition-colors">
                          {project.client}
                        </h4>
                        <p className="mt-1 text-xs text-white/50 line-clamp-2">
                          {project.desc}
                        </p>
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                          title="Ver case completo"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

        </div>

        {/* Final Conversion Banner */}
        <div className="mt-28 rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-[#111] via-[#0c0c0c] to-[#140b08] px-6 py-20 text-center shadow-2xl">
          <span className="eyebrow">Sua marca no próximo nível</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Quer uma produção de design com esse acabamento?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm text-white/55 leading-relaxed">
            Seja em regime de assinatura mensal de créditos ou para um projeto sob medida, nós colocamos a esteira para rodar no ritmo da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://wa.me/5564999602571?text=Ol%C3%A1%2C%20vi%20o%20portf%C3%B3lio%20da%20Fehari%20Studio%20e%20gostaria%20de%20iniciar%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="gap-2 shadow-[0_12px_45px_rgba(255,70,31,0.3)]"
            >
              Iniciar Conversa no WhatsApp <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              href="/planos"
              variant="secondary"
              size="lg"
            >
              Ver Planos de Assinatura
            </Button>
          </div>
        </div>

      </main>

      {/* Lightbox Modal */}
      <PortfolioLightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioPage;
