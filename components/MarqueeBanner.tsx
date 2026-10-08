'use client';

import React from 'react';
import { Sparkles, Terminal, Code2, Flame, Laptop } from 'lucide-react';

export default function MarqueeBanner() {
  const items = [
    { text: 'OPEN FOR JUNIOR & INTERN ROLES', icon: Sparkles },
    { text: 'BCA - AI (1ST YEAR) @ JNCU BALLIA', icon: Laptop },
    { text: 'JNV GORAKHPUR (PCM + COMPUTER SCIENCE)', icon: Code2 },
    { text: 'PYTHON · JAVASCRIPT · KOTLIN · C', icon: Code2 },
    { text: '16+ OPEN SOURCE REPOSITORIES', icon: Terminal },
    { text: 'ANDROID DESKTOP IDE BUILDER', icon: Flame },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#ffe600] text-black border-y-[2.5px] border-black select-none py-2.5 shadow-[0px_4px_0px_0px_#000]">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        {/* First repetition */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-3 font-black text-xs md:text-sm uppercase tracking-wider">
              <item.icon className="w-4 h-4 fill-black stroke-black shrink-0" />
              <span>{item.text}</span>
              <span className="text-black/50">★</span>
            </div>
          ))}
        </div>
        {/* Second repetition for smooth seamless loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-3 font-black text-xs md:text-sm uppercase tracking-wider">
              <item.icon className="w-4 h-4 fill-black stroke-black shrink-0" />
              <span>{item.text}</span>
              <span className="text-black/50">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
