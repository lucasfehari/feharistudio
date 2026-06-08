import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { ArrowRight } from 'lucide-react';

// Using high-quality placeholder posts
const POSTS = [
  "/posts/Background+Border+Shadow-1.png",
  "/posts/Background+Border+Shadow.png",
  "/posts/amandamazzo.png",
  "/posts/brabaopost.png",
  "/posts/codental.png",
  "/posts/g2company.jpg",
  "/posts/greenstation.png"
];

const PostsCarouselSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden flex flex-col items-center border-t border-white/5">

      {/* Background Central Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Content */}
      <div className="relative z-30 flex flex-col items-center mb-12 text-center px-4">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white font-display font-bold text-3xl md:text-4xl mb-4"
        >
          Alta performance em diversos nichos.
        </motion.h3>
      </div>

      {/* 3D Carousel */}
      <div className="w-full max-w-[100vw] mx-auto relative z-10">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={800} // Transição mais lenta e suave (premium motion)
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 15,       // Curvatura suave
            stretch: -30,     // Mais sobreposição elegante
            depth: 150,       // Profundidade 3D
            modifier: 1.5,    // Escala dos itens laterais
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full py-12 px-0"
        >
          {POSTS.map((post, index) => (
            <SwiperSlide key={index} className="!w-[200px] md:!w-[240px] lg:!w-[300px]">
              <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5 group bg-black">
                <img
                  src={post}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Glossy Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default PostsCarouselSection;
