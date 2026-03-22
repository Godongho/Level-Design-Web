"use client";

import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectGrid />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
