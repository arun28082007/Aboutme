'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolio-data';
import { Cpu, Code, Layers, Wrench, Award, CheckCircle } from 'lucide-react';

export default function SkillsMatrix() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-black" />;
      case 1:
        return <Layers className="w-5 h-5 text-black" />;
      case 2:
        return <Wrench className="w-5 h-5 text-black" />;
      default:
        return <Award className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b-[2.5px] border-black dark:border-white">
        <div className="inline-block px-3 py-1 text-xs font-black uppercase bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          03. TECHNICAL CAPABILITIES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black dark:text-white">
          SKILLS &amp; ARSENAL
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl">
          From systems programming in C and Android IDE engineering in Kotlin to full-stack web and Python automation.
        </p>
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <div
            key={catIdx}
            className="bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] p-6 sm:p-7 space-y-6"
          >
            {/* Category Title Header */}
            <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000]"
                  style={{ backgroundColor: cat.color }}
                >
                  {getCategoryIcon(catIdx)}
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-black dark:text-white">
                  {cat.title}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-zinc-500 uppercase">
                {cat.skills.length} Items
              </span>
            </div>

            {/* Skill rows */}
            <div className="space-y-4">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                    <span className="text-black dark:text-zinc-100 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Neobrutal Progress Bar */}
                  <div className="w-full h-3 bg-[#e8e6dc] dark:bg-[#252834] border-2 border-black dark:border-zinc-400 overflow-hidden">
                    <div
                      className="h-full border-r-2 border-black transition-all duration-500"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: cat.color,
                      }}
                    />
                  </div>

                  {/* Micro tags */}
                  {skill.tags && (
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-medium">
                      <span>{skill.tags.join(' · ')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
