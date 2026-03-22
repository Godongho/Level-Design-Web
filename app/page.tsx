import { CustomCursor } from "@/components/studio/custom-cursor";
import { Hero } from "@/components/studio/hero";
import { Services } from "@/components/studio/services";
import { PortfolioSlider } from "@/components/studio/portfolio-slider";

export default function PortfolioPage() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-[#FF4500] selection:text-white overflow-hidden">
      <CustomCursor />
      
      {/* 
        Exact Studio-801 Replica Framework:
        1. Hero Section (Giant Typography + Fadeups)
        2. Services (Interactive Timeline)
        3. Portfolio (3D Coverflow Slider)
      */}
      
      <Hero />
      <Services />
      <PortfolioSlider />
      
      <footer className="py-12 border-t border-white/10 bg-black text-center text-[#A0A0A0] text-sm uppercase tracking-widest font-mono">
        © {new Date().getFullYear()} STUDIO 801 CLONE. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
