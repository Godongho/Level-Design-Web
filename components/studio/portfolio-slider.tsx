"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { studioContent } from '@/data/studio-content';
import { CircularText } from './circular-text';

export function PortfolioSlider() {
  return (
    <section className="w-full py-32 relative bg-black overflow-hidden flex flex-col items-center">
      
      {/* Title with Studio-801 Outline Effect */}
      <div className="mb-20 text-center flex flex-col md:flex-row items-center justify-center gap-4 px-6 z-10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>
          OUR
        </h2>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-[#FF4500]">
          PORTFOLIO
        </h2>
      </div>

      <div className="w-full relative px-0 md:px-10">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-4 md:px-10 pointer-events-none z-20">
          <button className="swiper-button-prev w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-white/10 hover:border-white transition-all group backdrop-blur-sm" data-cursor-hover>
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </button>
          <button className="swiper-button-next w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-white/10 hover:border-white transition-all group backdrop-blur-sm" data-cursor-hover>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="w-full max-w-[1400px] mx-auto h-[400px] md:h-[600px] !pb-10"
        >
          {studioContent.projects.map((project, index) => (
            <SwiperSlide key={project.id} className="w-[85vw] md:w-[800px] h-full rounded-2xl overflow-hidden relative group cursor-grab active:cursor-grabbing" data-cursor-hover>
              <div className="w-full h-full bg-[#111] relative">
                {/* Fallback pattern */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a), linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a)`,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 10px 10px'
                    }}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute bottom-8 left-8 right-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-bold tracking-[0.3em] text-[#FF4500] uppercase mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
                    {project.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-10 right-10 pointer-events-none z-30 opacity-50">
         <CircularText text="GET IN TOUCH STUDIO 801 • " />
      </div>
    </section>
  );
}
