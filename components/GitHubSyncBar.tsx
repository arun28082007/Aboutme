'use client';

import React, { useState } from 'react';
import { Github, RefreshCw, GitFork, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { INITIAL_GITHUB_STATS, USER_INFO } from '@/data/portfolio-data';
import { GitHubUserProfile } from '@/types/portfolio';

export default function GitHubSyncBar() {
  const [stats, setStats] = useState<GitHubUserProfile>(INITIAL_GITHUB_STATS);
  const [loading, setLoading] = useState(false);
  const [lastSynced, setLastSynced] = useState<string>('Just now');

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${USER_INFO.githubUsername}`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });
      if (res.ok) {
        const data = await res.json();
        setStats({
          login: data.login,
          name: data.name || USER_INFO.name,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          bio: data.bio || INITIAL_GITHUB_STATS.bio,
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location || USER_INFO.location,
          blog: data.blog || USER_INFO.portfolioV1Url,
          twitter_username: data.twitter_username,
          updated_at: data.updated_at,
        });
        setLastSynced(new Date().toLocaleTimeString());
      }
    } catch {
      // Keep existing data gracefully
    } finally {
      setTimeout(() => setLoading(false), 600);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-[#fdfcf7] dark:bg-[#161820] border-[2.5px] border-black dark:border-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left: User status */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ffe600] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
              <Github className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm uppercase text-black dark:text-white">
                  github.com/{stats.login}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-emerald-700 dark:text-emerald-400">
                  <CheckCircle className="w-3 h-3" /> Live Synced
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                Active coder since 2020 · {stats.location} · Synced: {lastSynced}
              </p>
            </div>
          </div>

          {/* Center / Right: Metrics in unboxed tabular figures */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-black dark:text-white">
            <div className="flex items-center gap-1.5 bg-white dark:bg-[#20232c] px-3 py-1.5 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]">
              <span className="text-zinc-500 uppercase text-[11px]">Public Repos:</span>
              <span className="font-mono font-black text-base tabular-nums text-amber-500 dark:text-[#ffe600]">
                {stats.public_repos}
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-white dark:bg-[#20232c] px-3 py-1.5 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]">
              <span className="text-zinc-500 uppercase text-[11px]">Followers:</span>
              <span className="font-mono font-black text-base tabular-nums">
                {stats.followers}
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-white dark:bg-[#20232c] px-3 py-1.5 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]">
              <span className="text-zinc-500 uppercase text-[11px]">Following:</span>
              <span className="font-mono font-black text-base tabular-nums">
                {stats.following}
              </span>
            </div>

            {/* Sync button and Direct Repos link */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                disabled={loading}
                title="Refresh Live GitHub Data"
                className="p-2 bg-white dark:bg-[#20232c] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:bg-[#ffe600] hover:text-black transition-all cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>

              <a
                href={`${USER_INFO.githubUrl}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 bg-black dark:bg-white text-white dark:text-black font-black text-xs uppercase border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#ffe600] flex items-center gap-1.5 hover:bg-[#ffe600] hover:text-black transition-all cursor-pointer whitespace-nowrap"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
