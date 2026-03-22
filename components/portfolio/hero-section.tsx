"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { studioContent } from "@/data/studio-content";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { title, subtitle, description } = studioContent.hero;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial gradient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/5 rounded-full blur-3xl opacity-50" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <h1 
          className={cn(
            "text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 whitespace-pre-line leading-[0.9] transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p 
          className={cn(
            "text-xl md:text-3xl font-medium text-gray-300 mb-8 tracking-tight transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {subtitle}
        </p>

        {/* Description */}
        <p 
          className={cn(
            "text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {description}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">Discover</span>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </section>
  );
}
