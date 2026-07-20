import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Globe, ArrowUpRight } from "lucide-react";

const BioPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#130002] text-white font-sans selection:bg-[#FC1F02] selection:text-white relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FC1F02]/20 blur-[120px] pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#F7042C]/10 blur-[150px] pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.5 }} 
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E')] pointer-events-none z-0" 
      />

      <main className="relative z-10 max-w-md mx-auto px-4 py-12 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          {/* Profile Header Section with Banner Background */}
          <motion.div
            variants={itemVariants}
            className="relative w-full mb-10 rounded-[2rem] overflow-hidden border border-white/5 bg-[#130002] shadow-2xl"
          >
            {/* Banner Background */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#130002]/60 to-[#130002] z-10" />
              <div className="absolute inset-0 bg-[#FC1F02]/10 mix-blend-overlay z-10" />
              <img
                src="/banner_bio.png"
                alt="Banner"
                className="w-full h-full object-cover opacity-70"
              />
            </div>

            {/* Profile Content */}
            <div className="relative z-10 flex flex-col items-center pt-12 pb-10 px-4 w-full">
              <h1
                className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2 drop-shadow-lg text-center"
                style={{
                  fontFamily:
                    "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                Lucas Fehari
              </h1>
              <p className="text-[10px] md:text-xs text-[#ffffff] font-bold tracking-[0.25em] uppercase mb-8 text-center drop-shadow-md">
                Design, Marketing e Tech
              </p>

              <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#FC1F02] via-[#F7042C] to-transparent rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10 bg-[#130002] shadow-2xl ring-4 ring-black/50">
                  <img
                    src="/perfil_lucas_fehari.png"
                    alt="Lucas Fehari"
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Banners Section */}
          <div className="w-full flex flex-col gap-6">
            {/* Banner 1 - Browzebot */}
            <motion.div variants={itemVariants} className="w-full group">
              <a
                href="https://chat.whatsapp.com/GwlJv0MQptx819tCWuSIY9?s=cl&p=i&ilr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#FC1F02]/40 transition-all duration-500"
              >
                {/* Banner Image */}
                <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#130002] to-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#FC1F02]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src="/grupodeespera_browzebot.png"
                    alt="Browzebot Prospecção com I.A"
                    className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 text-white/70 group-hover:text-white group-hover:bg-[#FC1F02] group-hover:border-[#FC1F02] transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                {/* Text Content */}
                <div className="p-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#FC1F02] transition-colors duration-300">
                    Browzebot: Prospecção com I.A
                  </h3>
                  <p className="text-sm text-[#D9D9D9] line-clamp-2">
                    Lista de Espera. Automatize sua captação de clientes de
                    ponta a ponta com Inteligência Artificial.
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Banner 2 - Contrate Meus Serviços */}
            <motion.div variants={itemVariants} className="w-full group">
              <a
                href="https://wa.me/5564999602571"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#FC1F02]/40 transition-all duration-500"
              >
                {/* Banner Image */}
                <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#130002] to-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#FC1F02]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src="/banner_contratelucasPrancheta-1-copiar-2.png"
                    alt="Contrate Meus Serviços"
                    className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 text-white/70 group-hover:text-white group-hover:bg-[#FC1F02] group-hover:border-[#FC1F02] transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                {/* Text Content */}
                <div className="p-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#FC1F02] transition-colors duration-300">
                    Contrate Meus Serviços
                  </h3>
                  <p className="text-sm text-[#D9D9D9] line-clamp-2">
                    Eleve o padrão visual e estratégico do seu negócio. Projetos premium desenvolvidos com excelência absoluta.
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Banner 3 - Fehari Studio Design */}
            <motion.div variants={itemVariants} className="w-full group">
              <a
                href="https://feharistudio.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#FC1F02]/40 transition-all duration-500"
              >
                {/* Banner Image */}
                <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#130002] to-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#FC1F02]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src="/banner_feharistudio.png"
                    alt="Fehari Studio Design"
                    className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 text-white/70 group-hover:text-white group-hover:bg-[#FC1F02] group-hover:border-[#FC1F02] transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                {/* Text Content */}
                <div className="p-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#FC1F02] transition-colors duration-300">
                    Fehari Studio Design
                  </h3>
                  <p className="text-sm text-[#D9D9D9] line-clamp-2">
                    Tenha um time de designers entregando para sua agência com
                    rapidez, qualidade e foco absoluto na identidade visual do
                    seu cliente.
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="w-12 h-1 bg-gradient-to-r from-[#FC1F02] to-[#F7042C] mx-auto rounded-full mb-6 opacity-50" />
            <p className="text-xs text-[#D9D9D9]/70 font-display">
              © {new Date().getFullYear()} Fehari Studio. Elevando o padrão.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default BioPage;
