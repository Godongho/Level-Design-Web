"use client";

import { useState, useEffect } from "react";
import { BootSequence } from "@/components/portfolio/boot-sequence";
import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  const [isBooted, setIsBooted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has already seen boot sequence in this session
    const hasBooted = sessionStorage.getItem("hasBooted");
    if (hasBooted) {
      setIsBooted(true);
      setShowContent(true);
    }
  }, []);

  const handleBootComplete = () => {
    setIsBooted(true);
    sessionStorage.setItem("hasBooted", "true");
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Boot Sequence */}
      {!isBooted && <BootSequence onComplete={handleBootComplete} />}

      {/* Main Content */}
      {showContent && (
        <main className="min-h-screen">
          <Navigation />
          <HeroSection />
          <ProjectGrid />
          <AboutSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
}
