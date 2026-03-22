"use client";

import { useState } from "react";
import { 
  MapPin, 
  Zap, 
  Shield, 
  Clock,
  ChevronRight,
  Eye,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  code: string;
  name: string;
  environment: string;
  engine: string;
  status: "COMPLETED" | "IN_PROGRESS" | "CLASSIFIED";
  difficulty: "STANDARD" | "HARD" | "EXTREME";
  features: string[];
  description: string;
  thumbnail: string;
}

const projects: Project[] = [
  {
    id: "bunker",
    code: "MSN-001",
    name: "THE BUNKER",
    environment: "UNDERGROUND FACILITY",
    engine: "UE5",
    status: "COMPLETED",
    difficulty: "EXTREME",
    features: ["Total Blackout", "Electric Floor", "Suicide Bomber Events"],
    description: "A tactical underground facility featuring dynamic lighting systems, environmental hazards, and intense combat scenarios.",
    thumbnail: "/api/placeholder/600/400",
  },
  {
    id: "gangnam",
    code: "MSN-002",
    name: "NT GANGNAM CENTER",
    environment: "URBAN HIGH-RISE",
    engine: "UE5",
    status: "COMPLETED",
    difficulty: "HARD",
    features: ["Vertical Combat", "Dynamic Weather", "Civilian AI"],
    description: "A modern corporate tower in Seoul's Gangnam district with realistic civilian population and vertical gameplay mechanics.",
    thumbnail: "/api/placeholder/600/400",
  },
  {
    id: "harbor",
    code: "MSN-003",
    name: "INCHEON HARBOR",
    environment: "INDUSTRIAL PORT",
    engine: "UE5",
    status: "COMPLETED",
    difficulty: "STANDARD",
    features: ["Open Combat", "Vehicle Support", "Day/Night Cycle"],
    description: "Expansive port facility with multiple approach routes, vehicle combat support, and realistic maritime operations.",
    thumbnail: "/api/placeholder/600/400",
  },
  {
    id: "subway",
    code: "MSN-004",
    name: "METRO NEXUS",
    environment: "SUBWAY NETWORK",
    engine: "UE5",
    status: "IN_PROGRESS",
    difficulty: "EXTREME",
    features: ["Train Dynamics", "Flood Events", "Close Quarters"],
    description: "Underground metro system with moving trains, flooding mechanics, and claustrophobic tunnel combat.",
    thumbnail: "/api/placeholder/600/400",
  },
  {
    id: "tower",
    code: "MSN-005",
    name: "SIGNAL TOWER",
    environment: "COMMUNICATION HUB",
    engine: "UE5",
    status: "CLASSIFIED",
    difficulty: "HARD",
    features: ["EMP Effects", "Stealth Required", "Time Pressure"],
    description: "High-altitude communications facility requiring stealth approach with electromagnetic interference mechanics.",
    thumbnail: "/api/placeholder/600/400",
  },
  {
    id: "market",
    code: "MSN-006",
    name: "NAMDAEMUN MARKET",
    environment: "URBAN MARKETPLACE",
    engine: "UE5",
    status: "COMPLETED",
    difficulty: "STANDARD",
    features: ["Crowd Simulation", "Destructible Props", "Chase Sequences"],
    description: "Busy traditional market environment with realistic crowd AI and dynamic chase sequence support.",
    thumbnail: "/api/placeholder/600/400",
  },
];

const difficultyColors = {
  STANDARD: "text-[#00FF88] border-[#00FF88]/30 bg-[#00FF88]/10",
  HARD: "text-[#FFB800] border-[#FFB800]/30 bg-[#FFB800]/10",
  EXTREME: "text-[#FF3333] border-[#FF3333]/30 bg-[#FF3333]/10",
};

const statusColors = {
  COMPLETED: "text-[#00FF88]",
  IN_PROGRESS: "text-[#FFB800]",
  CLASSIFIED: "text-[#FF3333]",
};

export function ProjectGrid() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0070FF]" />
            <span className="font-mono text-sm text-[#0070FF] tracking-wider">
              MISSION DATABASE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
            Project <span className="text-[#0070FF]">Archive</span>
          </h2>
          <p className="font-mono text-[#888888] max-w-xl">
            Access classified mission environments. Select a target for tactical briefing.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className={cn(
                "group relative glass rounded-lg overflow-hidden transition-all duration-500 cursor-pointer scanlines",
                hoveredProject === project.id && "scale-[1.02] shadow-[0_0_30px_rgba(0,112,255,0.3)]"
              )}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-[#111111]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border border-[#222222] rounded-lg flex items-center justify-center">
                    <Layers className="w-10 h-10 text-[#333333]" />
                  </div>
                </div>
                
                {/* Mission Code Overlay */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="font-mono text-xs text-[#0070FF] bg-[#0A0A0A]/80 px-2 py-1 rounded">
                    {project.code}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3 z-20">
                  <span className={cn(
                    "font-mono text-xs px-2 py-1 rounded bg-[#0A0A0A]/80",
                    statusColors[project.status]
                  )}>
                    {project.status.replace("_", " ")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-[#E5E5E5] mb-1 group-hover:text-[#0070FF] transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[#888888]">
                      <MapPin className="w-3 h-3" />
                      <span className="font-mono text-xs">{project.environment}</span>
                    </div>
                  </div>
                  <span className={cn(
                    "font-mono text-xs px-2 py-1 rounded border",
                    difficultyColors[project.difficulty]
                  )}>
                    {project.difficulty}
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <span 
                      key={i}
                      className="font-mono text-xs text-[#888888] bg-[#1A1A1A] px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="font-mono text-xs text-[#0070FF]">
                      +{project.features.length - 2}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#222222]">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#888888]">
                      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.18l8.5 4.9v9.84L12 21.82l-8.5-4.9V7.08L12 2.18z"/>
                    </svg>
                    <span className="font-mono text-xs text-[#888888]">{project.engine}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#0070FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-xs">ACCESS</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={cn(
                "absolute inset-0 border-2 border-[#0070FF] rounded-lg opacity-0 transition-opacity pointer-events-none",
                hoveredProject === project.id && "opacity-100"
              )} />
            </article>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      <div 
        className="relative glass rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-64 bg-[#111111] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border border-[#222222] rounded-lg flex items-center justify-center">
              <Layers className="w-16 h-16 text-[#333333]" />
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-[#888888] hover:text-[#E5E5E5] transition-colors"
          >
            ✕
          </button>

          <div className="absolute bottom-6 left-6">
            <span className="font-mono text-sm text-[#0070FF] mb-2 block">{project.code}</span>
            <h3 className="text-3xl font-bold text-[#E5E5E5]">{project.name}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Tactical Briefing */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 font-mono text-sm text-[#0070FF] mb-4">
              <Eye className="w-4 h-4" />
              TACTICAL BRIEFING
            </h4>
            <p className="text-[#888888] leading-relaxed">{project.description}</p>
          </div>

          {/* Mission Parameters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass p-4 rounded-lg">
              <span className="font-mono text-xs text-[#888888] block mb-1">ENVIRONMENT</span>
              <span className="font-mono text-sm text-[#E5E5E5]">{project.environment}</span>
            </div>
            <div className="glass p-4 rounded-lg">
              <span className="font-mono text-xs text-[#888888] block mb-1">ENGINE</span>
              <span className="font-mono text-sm text-[#E5E5E5]">{project.engine}</span>
            </div>
            <div className="glass p-4 rounded-lg">
              <span className="font-mono text-xs text-[#888888] block mb-1">DIFFICULTY</span>
              <span className={cn("font-mono text-sm", difficultyColors[project.difficulty].split(" ")[0])}>
                {project.difficulty}
              </span>
            </div>
            <div className="glass p-4 rounded-lg">
              <span className="font-mono text-xs text-[#888888] block mb-1">STATUS</span>
              <span className={cn("font-mono text-sm", statusColors[project.status])}>
                {project.status.replace("_", " ")}
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 font-mono text-sm text-[#0070FF] mb-4">
              <Zap className="w-4 h-4" />
              MISSION FEATURES
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.features.map((feature, i) => (
                <span 
                  key={i}
                  className="flex items-center gap-2 font-mono text-sm text-[#888888] bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#222222]"
                >
                  <Shield className="w-4 h-4 text-[#0070FF]" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="flex-1 font-mono text-sm bg-[#0070FF] text-white px-6 py-3 rounded-lg hover:bg-[#0088FF] transition-colors">
              VIEW BLUEPRINTS
            </button>
            <button 
              onClick={onClose}
              className="font-mono text-sm text-[#888888] px-6 py-3 rounded-lg border border-[#222222] hover:border-[#0070FF] hover:text-[#0070FF] transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
