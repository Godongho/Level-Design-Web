"use client";

import { Heart, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - System info */}
          <div className="flex items-center gap-3 text-[#888888]">
            <Terminal className="w-4 h-4 text-[#0070FF]" />
            <span className="font-mono text-xs">
              v2.0.26 // BUILD_STABLE
            </span>
          </div>

          {/* Center - Copyright */}
          <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
            <span>&copy; {currentYear} DONGHO KO</span>
            <span className="text-[#0070FF]">//</span>
            <span className="flex items-center gap-1">
              CRAFTED WITH <Heart className="w-3 h-3 text-[#FF3333] fill-[#FF3333]" /> & UE5
            </span>
          </div>

          {/* Right - Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00FF88]" />
            <span className="font-mono text-xs text-[#888888]">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
