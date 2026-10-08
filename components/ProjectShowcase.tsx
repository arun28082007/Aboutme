'use client';

import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Github, Star, GitFork, ArrowUpRight, Terminal, Sparkles, Eye, Filter } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio-data';
import { Project } from '@/types/portfolio';
import ProjectModal from './ProjectModal';

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'python-ai', label: 'Python & AI', count: PROJECTS.filter((p) => p.category === 'python-ai').length },
    { id: 'web', label: 'Web Apps', count: PROJECTS.filter((p) => p.category === 'web').length },
    { id: 'android-linux', label: 'Android & Linux', count: PROJECTS.filter((p) => p.category === 'android-linux').length },
    { id: 'utility-bots', label: 'Bots & Tools', count: PROJECTS.filter((p) => p.category === 'utility-bots').length },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-[2.5px] border-black dark:border-white">
        <div className="space-y-2">
          <div className="inline-block px-3 py-1 text-xs font-black uppercase bg-[#00f0ff] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            02. CODE REPOSITORIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black dark:text-white">
            PROJECTS &amp; CRAFT
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-xl">
            Real software built for Android, Python voice automation, Discord workflows, and web clients. Live from Arun&apos;s GitHub repository.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 absolute left-3 text-zinc-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#1a1c24] text-black dark:text-white text-xs sm:text-sm font-bold border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] focus:outline-none focus:bg-[#ffe600]/20"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs (Segmented Controls) */}
      <div className="flex flex-wrap items-center gap-2 pt-6 pb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-2 text-xs sm:text-sm font-black uppercase border-2 transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-[#ffe600] text-black border-black shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                : 'bg-white dark:bg-[#181a20] text-black dark:text-zinc-200 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:bg-zinc-100 dark:hover:bg-[#252834]'
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center border-2 border-dashed border-black dark:border-white bg-[#fcfbf7] dark:bg-[#161820] space-y-3">
          <p className="text-base font-black text-black dark:text-white uppercase">
            No projects match your query &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="px-4 py-2 bg-[#ffe600] text-black font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#fff] transition-all duration-150 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Top Accent Strip */}
              <div
                className="h-3 w-full border-b-2 border-black dark:border-white"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Metadata Row: Clean Unboxed (Zero-Pill Compliance) */}
                  <div className="flex items-center justify-between gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 border border-black inline-block"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      <span className="text-black dark:text-white uppercase">
                        {project.language}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.stars > 0 && (
                        <span className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          <span>{project.stars}</span>
                        </span>
                      )}
                      {project.forks > 0 && (
                        <span className="flex items-center gap-1 text-zinc-500">
                          <GitFork className="w-3.5 h-3.5" />
                          <span>{project.forks}</span>
                        </span>
                      )}
                      {project.featured && (
                        <span className="bg-[#ffe600] text-black px-1.5 py-0.5 text-[10px] font-black border border-black">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white tracking-tight group-hover:text-amber-500 dark:group-hover:text-[#ffe600] transition-colors">
                    {project.displayName}
                  </h3>

                  {/* Tagline / Description */}
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium mt-2 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack List */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-bold bg-[#f4f2ea] dark:bg-[#232733] text-black dark:text-zinc-200 border border-black dark:border-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold text-zinc-500">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t-2 border-black/10 dark:border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-black uppercase flex items-center gap-1 text-black dark:text-white hover:text-amber-500 dark:hover:text-[#ffe600] transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="View Live Web App"
                        className="p-1.5 bg-[#ffe600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-amber-400 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="View GitHub Repository"
                      className="p-1.5 bg-white dark:bg-[#1f222e] text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
