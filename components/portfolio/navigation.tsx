"use client";

import { useState, useEffect } from "react";
import { 
  Activity, 
  Database, 
  User, 
  Link2, 
  Menu, 
  X,
  Wifi,
  Battery,
  Signal
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "status", label: "SYS_STATUS", icon: Activity },
  { id: "projects", label: "DATABASE", icon: Database },
  { id: "about", label: "PROFILE", icon: User },
  { id: "contact", label: "LINK_START", icon: Link2 },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("status");
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Floating Sidebar */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        <div className="glass rounded-lg p-3 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 group",
                  isActive 
                    ? "bg-[#0070FF]/20 text-[#0070FF]" 
                    : "text-[#888888] hover:text-[#E5E5E5] hover:bg-[#1A1A1A]"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-all",
                  isActive && "animate-pulse-glow"
                )} />
                <span className="font-mono text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Top Bar - System Status */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
              <span className="font-mono text-xs text-[#888888]">SYSTEM ONLINE</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[#888888]">
              <Wifi className="w-4 h-4" />
              <Signal className="w-4 h-4" />
              <Battery className="w-4 h-4" />
            </div>
          </div>
          
          <div className="font-mono text-xs text-[#0070FF]">
            {time.toLocaleTimeString('en-US', { hour12: false })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#E5E5E5]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
          <nav className="absolute top-16 left-4 right-4 glass rounded-lg p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-md transition-all",
                    isActive 
                      ? "bg-[#0070FF]/20 text-[#0070FF]" 
                      : "text-[#888888] hover:text-[#E5E5E5]"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-mono text-sm tracking-wider">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
