'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Star, GitFork, Copy, Check } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedClone, setCopiedClone] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const cloneCommand = `git clone ${project.githubUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white dark:bg-[#181a20] border-[3px] border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-black dark:border-white pb-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="px-2.5 py-1 text-xs font-black uppercase border-2 border-black text-black"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.language}
              </span>
              <span className="text-xs font-mono font-bold text-zinc-500 uppercase">
                ID: {project.name}
              </span>
              {project.stars > 0 && (
                <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" /> {project.stars} Star{project.stars > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white mt-2">
              {project.displayName}
            </h3>
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 flex items-center justify-center bg-white dark:bg-[#222] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] hover:bg-[#ff2a85] hover:text-white transition-all cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Project Overview
          </h4>
          <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Key Engineering Highlights
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack (Zero-Pill Compliance: clean unboxed tokens or rectangular tiles) */}
        <div className="space-y-2">
          <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-bold bg-[#f3f1e9] dark:bg-[#232733] text-black dark:text-zinc-200 border-2 border-black dark:border-zinc-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Notes if available */}
        {project.architectureNotes && (
          <div className="bg-[#fefce8] dark:bg-[#1d222e] border-2 border-black dark:border-zinc-400 p-4 text-xs space-y-1">
            <span className="font-black uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" /> Architecture Note
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 font-medium">
              {project.architectureNotes}
            </p>
          </div>
        )}

        {/* Quick Clone Snippet */}
        <div className="space-y-1.5">
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            Clone Repository
          </span>
          <div className="flex items-center justify-between gap-2 p-2.5 bg-black text-[#00f0ff] font-mono text-xs border-2 border-black">
            <span className="truncate">{cloneCommand}</span>
            <button
              onClick={handleCopyClone}
              className="p-1.5 bg-white text-black hover:bg-[#ffe600] transition-colors border border-black cursor-pointer shrink-0"
              title="Copy clone command"
            >
              {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3 border-t-2 border-black dark:border-white">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="neo-btn px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-black text-xs uppercase border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#ffe600] flex items-center gap-2 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Code</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="neo-btn px-5 py-2.5 bg-[#ffe600] text-black font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-2 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Preview</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-bold uppercase underline underline-offset-4 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
