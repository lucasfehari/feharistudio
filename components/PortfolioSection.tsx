import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const PortfolioSection: React.FC = () => {
  // Display only first 4 projects on home
  const displayProjects = projects.slice(0, 4);

  return (
    <section className="py-24 bg-[#0A0A0A] text-white border-t border-white/10 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-2 block">
              Case Studies
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl">
              Trabalho visualmente <br />
              <span className="text-gray-500">impactante.</span>
            </h2>
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-full">
              Ver Portfolio Completo <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative group overflow-hidden rounded-xl border border-white/10 bg-zinc-900 ${project.size} min-h-[300px] md:min-h-0`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                    CASE_{project.id}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {project.client}
                  </h3>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;