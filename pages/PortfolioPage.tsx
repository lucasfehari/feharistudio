import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';

const PortfolioPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <SEO
                title="Portfólio | Fehari Studio"
                description="Explore nossa coleção curada de projetos de design, branding e tecnologia."
                url="https://www.feharistudio.com.br/portfolio"
            />
            <main className="mx-auto max-w-[1380px] px-6 pb-28 pt-40 md:px-10">
                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end"
                    >
                        <div>
                            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                                Portfólio Fehari
                            </span>
                            <h1 className="font-display text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[.9] tracking-[-0.07em]">
                                Projetos que<br /><span className="text-white/30">saíram do papel.</span>
                            </h1>
                        </div>
                        <p className="max-w-xl text-base leading-relaxed text-white/50 lg:text-lg">
                            Uma coleção curada de projetos onde design encontra performance.
                            Explore cases de branding, interfaces digitais e campanhas de growth.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            {/* Image Container */}
                            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                {project.link && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Button href={project.link} target="_blank" rel="noopener noreferrer" variant="outline" className="gap-2">
                                            Ver case <Maximize2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-text transition-colors group-hover:text-accent">
                                        {project.client}
                                    </h3>
                                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-white/35">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="mt-3 line-clamp-2 text-sm text-white/38">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-28 rounded-[2rem] border border-white/10 bg-[#0c0c0c] px-6 py-20 text-center">
                    <h2 className="mb-5 font-display text-4xl font-medium tracking-[-0.05em] md:text-5xl">Qual ideia entra aqui depois?</h2>
                    <p className="mx-auto mb-8 max-w-lg text-white/45">
                        Conte o que você quer tirar do papel. A gente organiza o caminho e coloca o time certo para fazer.
                    </p>
                    <Button href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer" size="lg" className="px-8">
                        Iniciar Projeto <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioPage;
