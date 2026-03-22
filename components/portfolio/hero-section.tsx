"use client";

import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="status" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 112, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 112, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Radial gradient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0070FF]/5 rounded-full blur-3xl" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 w-24 h-24 border-l-2 border-t-2 border-[#0070FF]/30" />
      <div className="absolute top-20 right-4 w-24 h-24 border-r-2 border-t-2 border-[#0070FF]/30" />
      <div className="absolute bottom-20 left-4 w-24 h-24 border-l-2 border-b-2 border-[#0070FF]/30" />
      <div className="absolute bottom-20 right-4 w-24 h-24 border-r-2 border-b-2 border-[#0070FF]/30" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Status indicator */}
        <div 
          className={cn(
            "inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
          <span className="font-mono text-xs text-[#888888] tracking-wider">
            OPERATOR STATUS: ACTIVE
          </span>
        </div>

        {/* Title with glitch effect */}
        <div 
          className={cn(
            "mb-6 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="font-mono text-sm text-[#0070FF] mb-3 tracking-[0.3em]">
            LEVEL DESIGNER
          </p>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight glitch"
            data-text="DONGHO KO"
          >
            <span className="text-[#E5E5E5]">DONGHO</span>{" "}
            <span className="text-[#0070FF]">KO</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p 
          className={cn(
            "font-mono text-lg md:text-xl text-[#888888] mb-8 transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Crafting Immersive Tactical Environments
        </p>

        {/* Stats row */}
        <div 
          className={cn(
            "flex flex-wrap justify-center gap-6 md:gap-12 mb-12 transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex items-center gap-2 text-[#888888]">
            <MapPin className="w-4 h-4 text-[#0070FF]" />
            <span className="font-mono text-sm">SEOUL, KOREA</span>
          </div>
          <div className="flex items-center gap-2 text-[#888888]">
            <Briefcase className="w-4 h-4 text-[#FFB800]" />
            <span className="font-mono text-sm">SENIOR DESIGNER</span>
          </div>
          <div className="flex items-center gap-2 text-[#888888]">
            <Calendar className="w-4 h-4 text-[#00FF88]" />
            <span className="font-mono text-sm">8+ YEARS EXP</span>
          </div>
        </div>

        {/* Engine badge */}
        <div 
          className={cn(
            "inline-flex items-center gap-3 glass px-6 py-3 rounded-lg transition-all duration-1000 delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#E5E5E5]">
            <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.18l8.5 4.9v9.84L12 21.82l-8.5-4.9V7.08L12 2.18z"/>
            <path d="M12 5.5l-6 3.46v6.93l6 3.46 6-3.46V8.96L12 5.5zm0 2l4 2.31v4.62l-4 2.31-4-2.31V9.81l4-2.31z"/>
          </svg>
          <span className="font-mono text-sm tracking-wider text-[#888888]">
            POWERED BY UNREAL ENGINE 5
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-[#888888]">SCROLL</span>
        <ChevronDown className="w-5 h-5 text-[#0070FF]" />
      </div>

      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className="w-1 h-8 bg-[#0070FF]/20"
            style={{ opacity: 0.2 + (i * 0.15) }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className="w-1 h-8 bg-[#0070FF]/20"
            style={{ opacity: 0.2 + (i * 0.15) }}
          />
        ))}
      </div>
    </section>
  );
}
