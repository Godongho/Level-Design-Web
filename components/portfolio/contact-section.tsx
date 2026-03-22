"use client";

import { useState } from "react";
import { 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  Twitter,
  Terminal,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormState("success");
    
    setTimeout(() => {
      setFormState("idle");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "#0070FF" },
    { name: "GitHub", icon: Github, href: "#", color: "#E5E5E5" },
    { name: "Twitter", icon: Twitter, href: "#", color: "#0070FF" },
    { name: "Email", icon: Mail, href: "mailto:contact@dongho.dev", color: "#FFB800" },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 112, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 112, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0070FF]" />
            <span className="font-mono text-sm text-[#0070FF] tracking-wider">
              ESTABLISH CONNECTION
            </span>
            <div className="w-8 h-px bg-[#0070FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-4">
            Link <span className="text-[#0070FF]">Start</span>
          </h2>
          <p className="font-mono text-[#888888] max-w-xl mx-auto">
            Ready to collaborate on your next mission? Initialize communication protocol.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass p-8 rounded-lg">
              {/* Terminal Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222222]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF3333]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
                  <div className="w-3 h-3 rounded-full bg-[#00FF88]" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
                  <Terminal className="w-4 h-4" />
                  <span>SECURE_TRANSMISSION.exe</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-[#888888] mb-2 block">
                      OPERATOR_NAME
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full bg-[#1A1A1A] border border-[#222222] rounded-lg px-4 py-3 font-mono text-sm text-[#E5E5E5] focus:border-[#0070FF] focus:outline-none focus:ring-1 focus:ring-[#0070FF] transition-colors"
                      placeholder="Enter identifier..."
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-[#888888] mb-2 block">
                      CONTACT_FREQUENCY
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full bg-[#1A1A1A] border border-[#222222] rounded-lg px-4 py-3 font-mono text-sm text-[#E5E5E5] focus:border-[#0070FF] focus:outline-none focus:ring-1 focus:ring-[#0070FF] transition-colors"
                      placeholder="email@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#888888] mb-2 block">
                    MISSION_SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    required
                    className="w-full bg-[#1A1A1A] border border-[#222222] rounded-lg px-4 py-3 font-mono text-sm text-[#E5E5E5] focus:border-[#0070FF] focus:outline-none focus:ring-1 focus:ring-[#0070FF] transition-colors"
                    placeholder="Subject line..."
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[#888888] mb-2 block">
                    TRANSMISSION_DATA
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full bg-[#1A1A1A] border border-[#222222] rounded-lg px-4 py-3 font-mono text-sm text-[#E5E5E5] focus:border-[#0070FF] focus:outline-none focus:ring-1 focus:ring-[#0070FF] transition-colors resize-none"
                    placeholder="Enter message content..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className={cn(
                    "w-full flex items-center justify-center gap-3 font-mono text-sm px-6 py-4 rounded-lg transition-all duration-300",
                    formState === "idle" && "bg-[#0070FF] text-white hover:bg-[#0088FF] hover:shadow-[0_0_20px_rgba(0,112,255,0.5)]",
                    formState === "sending" && "bg-[#1A1A1A] text-[#888888] cursor-wait",
                    formState === "success" && "bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]",
                    formState === "error" && "bg-[#FF3333]/20 text-[#FF3333] border border-[#FF3333]"
                  )}
                >
                  {formState === "idle" && (
                    <>
                      <Send className="w-4 h-4" />
                      INITIATE TRANSMISSION
                    </>
                  )}
                  {formState === "sending" && (
                    <>
                      <div className="w-4 h-4 border-2 border-[#888888] border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  )}
                  {formState === "success" && (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      TRANSMISSION COMPLETE
                    </>
                  )}
                  {formState === "error" && (
                    <>
                      <AlertCircle className="w-4 h-4" />
                      TRANSMISSION FAILED
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact */}
            <div className="glass p-6 rounded-lg">
              <h3 className="font-mono text-sm text-[#0070FF] mb-4">DIRECT CHANNELS</h3>
              <div className="space-y-4">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={i}
                      href={link.href}
                      className="flex items-center gap-4 p-3 rounded-lg bg-[#1A1A1A] border border-[#222222] hover:border-[#0070FF] transition-colors group"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                        style={{ backgroundColor: `${link.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: link.color }} />
                      </div>
                      <div>
                        <span className="font-mono text-sm text-[#E5E5E5] group-hover:text-[#0070FF] transition-colors">
                          {link.name}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass p-6 rounded-lg">
              <h3 className="font-mono text-sm text-[#0070FF] mb-4">AVAILABILITY STATUS</h3>
              <div className="flex items-center gap-3 p-4 bg-[#00FF88]/10 rounded-lg border border-[#00FF88]/30">
                <div className="w-3 h-3 rounded-full bg-[#00FF88] animate-pulse" />
                <div>
                  <span className="font-mono text-sm text-[#00FF88] block">OPEN FOR MISSIONS</span>
                  <span className="font-mono text-xs text-[#888888]">Response time: &lt; 24 hours</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass p-6 rounded-lg">
              <h3 className="font-mono text-sm text-[#0070FF] mb-4">OPERATION BASE</h3>
              <div className="relative h-32 bg-[#1A1A1A] rounded-lg overflow-hidden">
                {/* Simple map representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at center, rgba(0, 112, 255, 0.3) 0%, transparent 70%)
                      `,
                    }}
                  />
                  <div className="text-center z-10">
                    <div className="w-4 h-4 rounded-full bg-[#0070FF] mx-auto mb-2 animate-pulse" />
                    <span className="font-mono text-xs text-[#888888]">SEOUL, SOUTH KOREA</span>
                    <span className="font-mono text-xs text-[#0070FF] block">GMT+9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
