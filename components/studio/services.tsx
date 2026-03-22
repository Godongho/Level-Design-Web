"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { studioContent } from "@/data/studio-content";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20">
          
          {/* Timeline / Tabs */}
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] mb-12 text-[#FF4500]">
              What We Do
            </h2>
            <div className="relative border-l border-white/20 pl-8 space-y-12">
              {studioContent.expertise.map((item, idx) => (
                <div 
                  key={idx}
                  className={`relative cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'opacity-100 pl-4' : 'opacity-40 hover:opacity-75'}`}
                  onClick={() => setActiveIndex(idx)}
                  data-cursor-hover
                >
                  {/* Active Dot */}
                  {activeIndex === idx && (
                    <motion.div 
                      layoutId="active-dot"
                      className="absolute -left-[37px] top-2 w-3 h-3 bg-[#FF4500] rounded-full shadow-[0_0_15px_#FF4500]"
                    />
                  )}
                  
                  <span className="text-xs font-mono tracking-widest text-[#A0A0A0] block mb-2">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-2/3 min-h-[500px] flex items-center relative pl-0 md:pl-20 border-l-0 md:border-l border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="text-[12rem] md:text-[18rem] font-black text-white/[0.03] absolute -top-32 -left-10 pointer-events-none select-none tracking-tighter leading-none mix-blend-screen">
                  {String(activeIndex + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight max-w-xl relative z-10" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>
                  {studioContent.expertise[activeIndex].title}
                </h3>
                
                <p className="text-[#A0A0A0] text-lg md:text-xl leading-relaxed max-w-2xl font-light relative z-10">
                  {studioContent.expertise[activeIndex].description}
                </p>
                
                {/* Stylized button / visual element */}
                <div className="mt-12 group cursor-pointer inline-flex items-center gap-4" data-cursor-hover>
                  <div className="w-12 h-12 rounded-full border border-[#FF4500] flex items-center justify-center group-hover:bg-[#FF4500] transition-colors">
                    <span className="text-[#FF4500] group-hover:text-white transition-colors">↓</span>
                  </div>
                  <span className="text-sm tracking-[0.2em] font-bold uppercase text-white group-hover:text-[#FF4500] transition-colors">
                    Learn More
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
