import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
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
                title="Portfolio"
                description="Explore nossa coleção curada de projetos de design, branding e tecnologia."
                url="https://fehari.com/portfolio"
            />
            <Navbar />
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">
                            Portfolio
                        </span>
                        <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
                            Selected Works
                        </h1>
                        <p className="text-text-secondary text-lg max-w-2xl">
                            Uma coleção curada de projetos onde design encontra performance.
                            Explore cases de branding, interfaces digitais e campanhas de growth.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6 border border-border">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Button href={project.link} target="_blank" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                                        Ver Detalhes <Maximize2 className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Info */}
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-display font-bold text-2xl text-text group-hover:text-accent transition-colors">
                                        {project.client}
                                    </h3>
                                    <span className="font-mono text-xs text-text-secondary border border-border px-2 py-1 rounded">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-text-secondary text-sm line-clamp-2">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center py-16 bg-background-secondary rounded-xl border border-border">
                    <h2 className="font-display font-bold text-3xl mb-6">Pronto para começar seu projeto?</h2>
                    <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                        Vamos transformar sua visão em realidade digital de alta performance.
                    </p>
                    <a href="https://wa.me/5564999602571" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="px-8">
                            Iniciar Projeto <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Button>
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioPage;
