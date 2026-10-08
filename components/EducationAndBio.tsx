'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, FileText, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA, USER_INFO } from '@/data/portfolio-data';

interface EducationAndBioProps {
  onOpenResume: () => void;
}

export default function EducationAndBio({ onOpenResume }: EducationAndBioProps) {
  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-[2.5px] border-black dark:border-white">
        <div className="space-y-3">
          <div className="inline-block px-3 py-1 text-xs font-black uppercase bg-[#ff2a85] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            04. ACADEMIC CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black dark:text-white">
            EDUCATION &amp; BACKGROUND
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl">
            Pursuing BCA - AI (Artificial Intelligence) at Jananayak Chandrashekhar University, Ballia. Senior secondary schooling (PCM with Computer Science) and high school from Jawahar Navodaya Vidyalaya, Gorakhpur.
          </p>
        </div>

        <button
          onClick={onOpenResume}
          className="neo-btn px-5 py-3 bg-[#ffe600] text-black font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-2 cursor-pointer self-start md:self-auto"
        >
          <FileText className="w-4 h-4" />
          <span>View Verified Resume</span>
        </button>
      </div>

      {/* Main Grid: Education Timeline + Career Objective */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: Education Cards */}
        <div className="lg:col-span-8 space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] p-6 sm:p-7 relative space-y-3"
            >
              {/* Badge strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black dark:border-white pb-3">
                <span
                  className="px-2.5 py-0.5 text-xs font-black uppercase border-2 border-black text-black"
                  style={{ backgroundColor: edu.accentColor }}
                >
                  {edu.badge}
                </span>

                <div className="flex items-center gap-3 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-black text-emerald-600 dark:text-emerald-400">
                    Score: {edu.score}
                  </span>
                </div>
              </div>

              {/* Title & Institution */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-bold text-amber-600 dark:text-amber-400 mt-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Career Objective & Personal Summary */}
        <div className="lg:col-span-4 space-y-6">
          {/* Career Objective Card */}
          <div className="bg-[#fcfbf7] dark:bg-[#1f222e] border-[2.5px] border-black dark:border-white shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3">
              <span className="w-3 h-3 bg-[#ffe600] border border-black inline-block" />
              <h3 className="text-sm font-black uppercase text-black dark:text-white tracking-wider">
                CAREER OBJECTIVE
              </h3>
            </div>
            <blockquote className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 italic leading-relaxed border-l-4 border-[#ffe600] pl-3">
              &quot;{USER_INFO.careerObjective}&quot;
            </blockquote>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] p-6 space-y-4 text-xs font-mono">
            <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
              <span className="font-black uppercase text-black dark:text-white">CANDIDATE INFO</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">VERIFIED</span>
            </div>

            <div className="space-y-2 text-zinc-600 dark:text-zinc-300">
              <div className="flex justify-between">
                <span className="font-bold">NAME:</span>
                <span className="text-black dark:text-white font-bold">{USER_INFO.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">LOCATION:</span>
                <span className="text-black dark:text-white font-bold">Ballia, UP</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">EXPERIENCE:</span>
                <span className="text-black dark:text-white font-bold">Fresher / Active Learner</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">LANGUAGES:</span>
                <span className="text-black dark:text-white font-bold">Hindi, English</span>
              </div>
            </div>

            <div className="pt-2 border-t border-black/10 dark:border-white/10">
              <button
                onClick={onOpenResume}
                className="w-full py-2 bg-black dark:bg-white text-white dark:text-black font-black text-xs uppercase border border-black dark:border-white shadow-[2px_2px_0px_0px_#ffe600] hover:bg-[#ffe600] hover:text-black transition-colors"
              >
                Open Full Printable Resume &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
