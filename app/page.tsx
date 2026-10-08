'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Navbar from '@/components/Navbar';
import MarqueeBanner from '@/components/MarqueeBanner';
import Hero from '@/components/Hero';
import GitHubSyncBar from '@/components/GitHubSyncBar';
import ProjectShowcase from '@/components/ProjectShowcase';
import SkillsMatrix from '@/components/SkillsMatrix';
import EducationAndBio from '@/components/EducationAndBio';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';

function useDarkMode() {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener('theme-toggle', onStoreChange);
      return () => window.removeEventListener('theme-toggle', onStoreChange);
    },
    () => {
      if (typeof document === 'undefined') return false;
      return document.documentElement.classList.contains('dark');
    },
    () => false
  );
}

export default function Home() {
  const darkMode = useDarkMode();
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const handleToggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    if (document.body) {
      document.body.classList.toggle('dark', isDark);
    }
    localStorage.setItem('arun_portfolio_theme', isDark ? 'dark' : 'light');
    window.dispatchEvent(new Event('theme-toggle'));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-[#fcfbf7] dark:bg-[#0e1015] text-[#121212] dark:text-[#f5f5f7] transition-colors duration-150 selection:bg-[#ffe600] selection:text-black font-sans`}>
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Hero Section */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Marquee Ticker */}
        <MarqueeBanner />

        {/* Live GitHub Sync Status */}
        <GitHubSyncBar />

        {/* Projects Showcase */}
        <ProjectShowcase />

        {/* Skills Matrix */}
        <SkillsMatrix />

        {/* Education, Background & Bio */}
        <EducationAndBio onOpenResume={() => setResumeOpen(true)} />

        {/* Interactive CLI Terminal */}
        <InteractiveTerminal />

        {/* Contact & Message Composer */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
