'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ darkMode, onToggleDarkMode, onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b-[2.5px] border-black dark:border-white ${
        scrolled
          ? 'bg-[#fcfbf7]/95 dark:bg-[#0e1015]/95 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[0px_4px_0px_0px_rgba(255,255,255,0.15)]'
          : 'bg-[#fcfbf7] dark:bg-[#0e1015]'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-lg sm:text-xl font-black tracking-tight text-black dark:text-white uppercase hover:text-amber-500 dark:hover:text-[#ffe600] transition-colors"
        >
          ARUN ANAND
        </a>

        {/* Zone 2: Navigation Links (Clean text with hover state) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-black dark:text-zinc-200">
          <a
            href="#projects"
            className="hover:text-amber-600 dark:hover:text-[#ffe600] transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-amber-600 dark:hover:text-[#ffe600] transition-colors"
          >
            Skills
          </a>
          <a
            href="#education"
            className="hover:text-amber-600 dark:hover:text-[#ffe600] transition-colors"
          >
            Education
          </a>
          <a
            href="#terminal"
            className="hover:text-amber-600 dark:hover:text-[#ffe600] transition-colors"
          >
            Terminal
          </a>
          <a
            href="#contact"
            className="hover:text-amber-600 dark:hover:text-[#ffe600] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Dark mode toggle + Resume action) */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            {darkMode ? <Sun className="w-5 h-5 text-[#ffe600]" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Resume CTA Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-black uppercase bg-[#ffe600] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="md:hidden w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1a1c24] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black dark:border-white bg-[#fcfbf7] dark:bg-[#0e1015] px-4 py-4 space-y-3">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-bold border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#ffe600] hover:text-black transition-all"
          >
            Projects (16 Repositories)
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-bold border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#ffe600] hover:text-black transition-all"
          >
            Technical Skills
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-bold border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#ffe600] hover:text-black transition-all"
          >
            Education &amp; BCA - AI
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-bold border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#ffe600] hover:text-black transition-all"
          >
            Interactive CLI Terminal
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-bold border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#ffe600] hover:text-black transition-all"
          >
            Get In Touch
          </a>
          <div className="pt-2 border-t border-black/20 dark:border-white/20 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-black uppercase bg-[#ffe600] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000]"
            >
              <FileText className="w-4 h-4" />
              View Formatted Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
