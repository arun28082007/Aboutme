export interface Project {
  id: string;
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  category: 'python-ai' | 'web' | 'android-linux' | 'utility-bots';
  language: string;
  stars: number;
  forks: number;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  accentColor: string;
  keyFeatures: string[];
  techStack: string[];
  architectureNotes?: string;
  updatedAt?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  description: string;
  badge: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: { name: string; level: number; tags?: string[] }[];
}

export interface GitHubUserProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string | null;
  updated_at: string;
}
