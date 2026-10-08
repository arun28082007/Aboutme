'use client';

import React from 'react';
import { ArrowUp, Github, Twitter, Mail, Heart } from 'lucide-react';
import { USER_INFO } from '@/data/portfolio-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t-[2.5px] border-black dark:border-white bg-[#fcfbf7] dark:bg-[#0e1015] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Rights */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-base font-black uppercase text-black dark:text-white tracking-tight">
              ARUN ANAND · PORTFOLIO
            </span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              BCA - AI Student @ Jananayak Chandrashekhar University (JNCU), Ballia.
            </p>
            <p className="text-[11px] text-zinc-500 font-mono">
              Designed with Neobrutalism aesthetic · All rights reserved.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={USER_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:bg-[#ffe600] hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={USER_INFO.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:bg-[#00f0ff] hover:text-black transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${USER_INFO.email}`}
              className="p-2.5 bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:bg-[#ff2a85] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="px-3.5 py-2.5 bg-[#ffe600] text-black font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-yellow-400 transition-colors flex items-center gap-1.5 cursor-pointer ml-2"
              title="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
