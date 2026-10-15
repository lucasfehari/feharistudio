import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const PortfolioSection: React.FC = () => {
  const featured = projects.slice(0, 4);

  return (
    <section id="cases" className="bg-[#050505] py-28 text-white md:py-36">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow">O nível do trabalho fala primeiro</p>
            <h2 className="section-title">Marcas que não passam<br /><span>com aparência de improviso.</span></h2>
          </motion.div>
          <Link to="/portfolio" className="group flex items-center gap-3 text-sm font-medium text-white/60 transition-colors hover:text-white">
            Ver todos os trabalhos
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-accent group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {featured.map((project, index) => {
            const spanClass = index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            const card = (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.06 }}
                className={`case-card group relative overflow-hidden rounded-[1.5rem] bg-[#111] shadow-[0_26px_80px_rgba(0,0,0,.2)] ${index < 2 ? 'aspect-[1.2/1]' : 'aspect-[1.35/1]'}`}
              >
                <img src={project.image} alt={`${project.client} — ${project.category}`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 md:p-8">
                  <div>
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">{project.category}</p>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.04em] md:text-3xl">{project.client}</h3>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white backdrop-blur-lg transition-all group-hover:bg-accent">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            );

            return project.link ? (
              <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Ver case ${project.client}`} className={spanClass}>
                {card}
              </a>
            ) : (
              <div key={project.id} className={spanClass}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
