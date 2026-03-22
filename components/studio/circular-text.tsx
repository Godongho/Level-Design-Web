"use client";

import { motion } from "framer-motion";

export function CircularText({ text }: { text: string }) {
  const letters = text.split("");
  const degPerLetter = 360 / letters.length;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <motion.div 
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            className="absolute top-0 left-1/2 text-[#FF4500] font-black text-[10px] tracking-widest origin-[0_64px]"
            style={{ 
              transform: `rotate(${i * degPerLetter}deg)`,
              marginLeft: '-4px' // center align adjustment
            }}
          >
            {letter}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
