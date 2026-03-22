"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const bootLines = [
  { text: "INITIALIZING SYSTEM...", delay: 0 },
  { text: "LOADING OPERATOR PROFILE...", delay: 300 },
  { text: "ESTABLISHING SECURE CONNECTION...", delay: 600 },
  { text: "ACCESSING MISSION DATABASE...", delay: 900 },
  { text: "SYSTEM READY", delay: 1200, isSuccess: true },
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, bootLines[currentLine].delay + 400);
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 500);
      }, 500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center transition-opacity duration-500",
        isComplete && "opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-lg w-full px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF3333]" />
            <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
            <div className="w-3 h-3 rounded-full bg-[#00FF88]" />
          </div>
          <div className="h-px bg-[#222222] animate-boot-line" />
        </div>

        <div className="space-y-3 font-mono text-sm">
          {bootLines.slice(0, currentLine).map((line, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-center gap-3 animate-fade-in-up",
                line.isSuccess ? "text-[#00FF88]" : "text-[#888888]"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-[#0070FF]">[{String(index + 1).padStart(2, '0')}]</span>
              <span>{line.text}</span>
              {line.isSuccess && (
                <span className="ml-auto text-[#00FF88]">✓</span>
              )}
            </div>
          ))}
        </div>

        {currentLine < bootLines.length && (
          <div className="mt-6 flex items-center gap-2">
            <div className="w-2 h-4 bg-[#0070FF] animate-pulse" />
            <span className="font-mono text-xs text-[#888888]">PROCESSING...</span>
          </div>
        )}
      </div>
    </div>
  );
}
