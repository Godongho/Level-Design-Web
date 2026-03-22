"use client";

import { motion } from "framer-motion";
import { studioContent } from "@/data/studio-content";

export function Hero() {
  const { title, subtitle, description } = studioContent.hero;
  
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#000] overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden mb-6"
        >
          <span className="text-[#FF4500] tracking-[0.4em] text-xs md:text-sm font-bold uppercase block text-center border border-[#FF4500]/30 px-6 py-2 rounded-full backdrop-blur-md">
            {subtitle}
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-[9rem] font-black text-white tracking-tighter uppercase text-center leading-[0.85] w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {title.split(' ').map((word, i) => (
            <span key={i} className={word.toLowerCase().includes('design') ? 'text-transparent' : 'text-white'} style={word.toLowerCase().includes('design') ? { WebkitTextStroke: '2px white' } : {}}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          className="mt-12 text-[#A0A0A0] max-w-2xl text-center text-lg md:text-2xl font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {description}
        </motion.p>
        
        <motion.button 
          className="mt-12 bg-[#FF4500] hover:bg-white hover:text-black text-white px-8 py-4 uppercase font-bold tracking-widest text-sm transition-colors duration-300 flex items-center gap-4 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          data-cursor-hover
        >
          Get A Quote
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase origin-left transform -rotate-90 block mb-8">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-[#FF4500]"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
