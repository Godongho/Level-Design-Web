"use client";

import { 
  Code, 
  Cpu, 
  Gamepad2, 
  Lightbulb, 
  Target,
  Award,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Unreal Engine 5", level: 95, category: "ENGINE" },
  { name: "Level Design", level: 92, category: "DESIGN" },
  { name: "Blueprint Systems", level: 88, category: "LOGIC" },
  { name: "Environment Art", level: 85, category: "ART" },
  { name: "Lighting Design", level: 90, category: "TECH" },
  { name: "Combat Flow", level: 94, category: "GAMEPLAY" },
];

const experience = [
  {
    period: "2020 - PRESENT",
    role: "Senior Level Designer",
    company: "NEXON GAMES",
    description: "Lead designer for tactical shooter environments, managing team of 5 designers.",
  },
  {
    period: "2017 - 2020",
    role: "Level Designer",
    company: "NCSOFT",
    description: "Designed PvP arenas and open-world zones for MMO projects.",
  },
  {
    period: "2015 - 2017",
    role: "Junior Level Designer",
    company: "SMILEGATE",
    description: "Created multiplayer maps for FPS titles with focus on competitive balance.",
  },
];

const certifications = [
  { name: "Unreal Engine Expert", org: "EPIC GAMES", year: "2022" },
  { name: "Game Design Mastery", org: "GDC", year: "2021" },
  { name: "Level Design Specialist", org: "CGMA", year: "2019" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0070FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0070FF]" />
            <span className="font-mono text-sm text-[#0070FF] tracking-wider">
              OPERATOR PROFILE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
            About <span className="text-[#0070FF]">Me</span>
          </h2>
          <p className="font-mono text-[#888888] max-w-xl">
            Detailed personnel file and operational capabilities overview.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Bio & Skills */}
          <div className="space-y-8">
            {/* Bio Card */}
            <div className="glass p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0070FF]/10 flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-[#0070FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#E5E5E5]">Dongho Ko</h3>
                  <p className="font-mono text-xs text-[#888888]">SENIOR LEVEL DESIGNER</p>
                </div>
              </div>
              <p className="text-[#888888] leading-relaxed mb-6">
                With over 8 years of experience crafting immersive game environments, 
                I specialize in creating tactical spaces that challenge players while 
                maintaining visual fidelity. My work focuses on the intersection of 
                narrative design and gameplay mechanics, ensuring every environment 
                tells a story while serving its functional purpose.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-[#0070FF]">
                  <Lightbulb className="w-4 h-4" />
                  <span className="font-mono text-xs">CREATIVE LEAD</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFB800]">
                  <Target className="w-4 h-4" />
                  <span className="font-mono text-xs">DETAIL ORIENTED</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="glass p-8 rounded-lg">
              <h3 className="flex items-center gap-2 font-mono text-sm text-[#0070FF] mb-6">
                <Cpu className="w-4 h-4" />
                OPERATIONAL CAPABILITIES
              </h3>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#888888]">[{skill.category}]</span>
                        <span className="text-sm text-[#E5E5E5]">{skill.name}</span>
                      </div>
                      <span className="font-mono text-sm text-[#0070FF]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#0070FF] to-[#00AAFF] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Certifications */}
          <div className="space-y-8">
            {/* Experience Timeline */}
            <div className="glass p-8 rounded-lg">
              <h3 className="flex items-center gap-2 font-mono text-sm text-[#0070FF] mb-6">
                <Code className="w-4 h-4" />
                DEPLOYMENT HISTORY
              </h3>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-[#222222]">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#0070FF]" />
                    <span className="font-mono text-xs text-[#0070FF] block mb-1">{exp.period}</span>
                    <h4 className="font-bold text-[#E5E5E5] mb-1">{exp.role}</h4>
                    <p className="font-mono text-sm text-[#FFB800] mb-2">{exp.company}</p>
                    <p className="text-sm text-[#888888]">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass p-8 rounded-lg">
              <h3 className="flex items-center gap-2 font-mono text-sm text-[#0070FF] mb-6">
                <Award className="w-4 h-4" />
                CERTIFICATIONS
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-lg border border-[#222222]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0070FF]/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-[#0070FF]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#E5E5E5]">{cert.name}</h4>
                        <p className="font-mono text-xs text-[#888888]">{cert.org}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#00FF88] bg-[#00FF88]/10 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-[#0070FF] block">50+</span>
                <span className="font-mono text-xs text-[#888888]">LEVELS</span>
              </div>
              <div className="glass p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-[#FFB800] block">8+</span>
                <span className="font-mono text-xs text-[#888888]">YEARS</span>
              </div>
              <div className="glass p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-[#00FF88] block">15+</span>
                <span className="font-mono text-xs text-[#888888]">SHIPPED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
