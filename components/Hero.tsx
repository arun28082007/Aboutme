'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowDown, Copy, Check, Github, Twitter, Mail, ExternalLink, FileText, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { USER_INFO } from '@/data/portfolio-data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ffe600', '#00f0ff', '#ff2a85', '#10b981'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full pt-10 pb-16 md:py-20 overflow-hidden">
      {/* Background graphic grid dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] text-xs font-black uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Fresher Roles & Internships</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight text-black dark:text-white leading-[1.02]">
                HI, I&apos;M <span className="bg-[#ffe600] text-black px-2 py-0.5 inline-block -rotate-1 border-2 border-black shadow-[3px_3px_0px_0px_#000]">ARUN ANAND</span>.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-zinc-400">
                  BUILDING SOFTWARE
                </span>{' '}
                WITH GRIT.
              </h1>
            </div>

            {/* Bio & Career Objective */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium max-w-2xl">
              Aspiring full-stack &amp; AI engineer currently pursuing{' '}
              <strong className="text-black dark:text-white font-black underline decoration-[#ffe600] decoration-4">
                BCA in Artificial Intelligence (BCA - AI)
              </strong>{' '}
              from this year at{' '}
              <strong className="text-black dark:text-white font-black">
                Jananayak Chandrashekhar University (JNCU), Ballia
              </strong>
              . Jawahar Navodaya Vidyalaya, Gorakhpur alumnus (PCM with Computer Science). Creator of{' '}
              <strong className="text-black dark:text-white font-bold">Cosmic IDE</strong>,{' '}
              <strong className="text-black dark:text-white font-bold">JARVIS</strong>, and 16+ open-source projects.
            </p>

            {/* Unboxed Metadata (Zero-Pill Compliance) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-400">
              <span className="text-black dark:text-white">📍 Ballia, Uttar Pradesh</span>
              <span aria-hidden="true">·</span>
              <span className="text-black dark:text-white font-black">BCA - AI (1st Year)</span>
              <span aria-hidden="true">·</span>
              <span>16 Repositories</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-black">JNV Gorakhpur (PCM+CS 78% · 10th 88%)</span>
            </div>

            {/* Tactile Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="neo-btn px-6 py-3.5 bg-[#ffe600] text-black font-black text-sm uppercase border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="neo-btn px-5 py-3.5 bg-white dark:bg-[#1f222e] text-black dark:text-white font-black text-sm uppercase border-[2.5px] border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenResume}
                className="neo-btn px-5 py-3.5 bg-[#00f0ff] text-black font-black text-sm uppercase border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </button>
            </div>

            {/* Quick Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-black uppercase text-zinc-500 tracking-wider">Connect:</span>
              <a
                href={USER_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:-translate-y-0.5 hover:bg-[#ffe600] hover:text-black transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={USER_INFO.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:-translate-y-0.5 hover:bg-[#00f0ff] hover:text-black transition-all"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${USER_INFO.email}`}
                className="w-9 h-9 flex items-center justify-center bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:-translate-y-0.5 hover:bg-[#ff2a85] hover:text-white transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Neobrutalist Visual Card & Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer backdrop shadow rectangle */}
              <div className="absolute inset-0 bg-[#00f0ff] translate-x-3 translate-y-3 border-[2.5px] border-black dark:border-white -z-10" />

              {/* Main Card */}
              <div className="bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-5">
                {/* Header of card with simulated window controls */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-black dark:border-white">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-black inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-black inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-black inline-block" />
                  </div>
                  <span className="text-xs font-mono font-black text-black dark:text-zinc-300 uppercase tracking-widest">
                    ARUN_DEV_PROFILE
                  </span>
                </div>

                {/* Avatar and Stamp */}
                <div className="relative flex flex-col items-center">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 border-[3px] border-black dark:border-white bg-[#ffe600] shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] overflow-hidden">
                    <Image
                      src={USER_INFO.avatarUrl}
                      alt="Arun Anand GitHub Avatar"
                      fill
                      sizes="(max-width: 768px) 192px, 192px"
                      className="object-cover"
                      priority
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Corner stamp badge */}
                  <div className="absolute -bottom-3 -right-2 bg-[#ff2a85] text-white px-3 py-1 font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] rotate-3">
                    BCA - AI @ JNCU
                  </div>

                  {/* Top-left sticker */}
                  <div className="absolute -top-3 -left-3 bg-[#ffe600] text-black px-2.5 py-1 font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] -rotate-6">
                    16 REPOS 🚀
                  </div>
                </div>

                {/* Info block */}
                <div className="bg-[#f7f5ee] dark:bg-[#20232c] border-2 border-black dark:border-zinc-300 p-3.5 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                    <span className="font-bold">STATUS:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-black">READY_FOR_WORK</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                    <span className="font-bold">STACK:</span>
                    <span className="text-black dark:text-white font-bold">Python / React / Kotlin</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                    <span className="font-bold">LOCATION:</span>
                    <span className="text-black dark:text-white font-bold">Ballia, UP (UTC+5:30)</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                    <span className="font-bold">GITHUB:</span>
                    <a
                      href={USER_INFO.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-cyan-400 underline font-bold hover:text-black dark:hover:text-white"
                    >
                      @arun28082007
                    </a>
                  </div>
                </div>

                {/* Bottom interactive card action */}
                <div className="pt-1 flex gap-2">
                  <a
                    href="#terminal"
                    className="w-full text-center py-2 bg-black dark:bg-white text-white dark:text-black font-black text-xs uppercase border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#ffe600] hover:bg-[#ffe600] hover:text-black transition-colors"
                  >
                    Open CLI Playground &gt;_
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
