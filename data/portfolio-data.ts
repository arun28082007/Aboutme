import { Project, EducationItem, SkillCategory, GitHubUserProfile } from '@/types/portfolio';

export const USER_INFO = {
  name: 'Arun Anand',
  tagline: 'Aspiring Full-Stack & AI Software Engineer · BCA - AI Student',
  careerObjective:
    'To begin my professional career in a growth-oriented organization where I can apply my skills, learn continuously, and contribute with dedication as a fresher.',
  email: 'arunanand0807@gmail.com',
  phone: '+91 8115304095',
  location: 'Ballia, Uttar Pradesh, India',
  address: 'Near Bhrigu Mandir, Ballia, Uttar Pradesh',
  githubUsername: 'arun28082007',
  githubUrl: 'https://github.com/arun28082007',
  twitterUsername: 'arunanand2808',
  twitterUrl: 'https://x.com/arunanand2808',
  avatarUrl: 'https://avatars.githubusercontent.com/u/68988353?v=4',
  portfolioV1Url: 'https://arun28082007.github.io/Portfolio/',
  dob: '28/08/2007',
  status: 'Open for Fresher Roles, Internships & Freelance',
  experienceLevel: 'Fresher',
  languagesSpoken: ['Hindi (Native)', 'English (Professional)'],
};

export const INITIAL_GITHUB_STATS: GitHubUserProfile = {
  login: 'arun28082007',
  name: 'Arun Anand',
  avatar_url: 'https://avatars.githubusercontent.com/u/68988353?v=4',
  html_url: 'https://github.com/arun28082007',
  bio: 'Software Craftsman · BCA - AI Student @ JNCU · Building for Android, Web & AI',
  public_repos: 16,
  followers: 4,
  following: 11,
  location: 'Ballia, Uttar Pradesh',
  blog: 'https://arun28082007.github.io/Portfolio/',
  twitter_username: 'arunanand2808',
  updated_at: '2026-09-24T12:09:36Z',
};

export const PROJECTS: Project[] = [
  {
    id: 'cosmic-ide',
    name: 'Cosmic-IDE',
    displayName: 'Cosmic IDE',
    tagline: 'Desktop-class general-purpose IDE for Android powered by a full Linux runtime',
    description:
      'A powerful, self-contained development environment engineered to bring desktop-grade coding workflows to Android devices. Runs Linux container environments, terminal tooling, syntax highlighting, and on-device project builds.',
    category: 'android-linux',
    language: 'Kotlin',
    stars: 1,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/Cosmic-IDE',
    featured: true,
    accentColor: '#FFE600', // yellow
    techStack: ['Kotlin', 'Android SDK', 'PRoot / Linux', 'Terminal Emulator', 'Monaco Core'],
    keyFeatures: [
      'Isolated Linux execution layer directly on Android phones and tablets',
      'Integrated bash terminal with package manager support (apt, pip, npm)',
      'Syntax highlighting and code navigation for multi-language projects',
      'Low latency native rendering optimized for touch and keyboard input',
    ],
    architectureNotes:
      'Engineered utilizing Kotlin and Android NDK to bridge between Android user-space sandboxes and Linux binary compatibility layers, enabling true offline compilers.',
    updatedAt: '2026-09-06',
  },
  {
    id: 'jarvis',
    name: 'JARVIS',
    displayName: 'J.A.R.V.I.S Voice Assistant',
    tagline: 'Personal AI Voice Assistant with custom GUI & system automation',
    description:
      'An intelligent desktop voice assistant capable of automated web search, system diagnostics, music streaming controls, app launching, and conversational speech synthesis with a sleek interactive GUI.',
    category: 'python-ai',
    language: 'Python',
    stars: 1,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/JARVIS',
    featured: true,
    accentColor: '#00F0FF', // cyan
    techStack: ['Python', 'SpeechRecognition', 'Pyttsx3', 'Tkinter GUI', 'OS Automation', 'Web Scraping'],
    keyFeatures: [
      'Real-time voice trigger and dynamic natural speech synthesis',
      'System automation: volume, media, app launching, browser controls',
      'Interactive retro-futuristic graphical user interface',
      'Custom Wikipedia and live news extraction pipelines',
    ],
    architectureNotes:
      'Multi-threaded event loop decoupling the audio listener thread from the GUI renderer, preventing voice recognition stalls.',
    updatedAt: '2025-05-10',
  },
  {
    id: 'timeslot-discord-bot',
    name: 'Timeslot-Discord-Bot',
    displayName: 'Timeslot Discord Scheduler',
    tagline: 'Intelligent Discord bot for automated team scheduling and slot reservations',
    description:
      'A Discord automation bot designed for student study squads, tournament organizers, and gaming teams to coordinate time slots without conflicting bookings. Features slash commands, automated reminders, and persistent slot allocation.',
    category: 'utility-bots',
    language: 'Python',
    stars: 2,
    forks: 1,
    githubUrl: 'https://github.com/arun28082007/Timeslot-Discord-Bot',
    featured: true,
    accentColor: '#FF2A85', // pink
    techStack: ['Python', 'Discord.py', 'Asyncio', 'SQLite', 'Cron Jobs'],
    keyFeatures: [
      'Interactive Discord slash command booking workflow',
      'Automated conflict detection across timezones',
      'Persistent schedule persistence using lightweight database tables',
      'Direct mention alerts and automated reminder pings',
    ],
    architectureNotes:
      'Built with async event loops and Discord gateway intents, keeping response times under 50ms with atomic database locks.',
    updatedAt: '2026-04-16',
  },
  {
    id: 'psychiatrist',
    name: 'psychiatrist',
    displayName: 'Dr. Ankita Gupta Clinic Portal',
    tagline: 'Clean, empathetic healthcare landing portal deployed live on Vercel',
    description:
      'A responsive medical consultation portal crafted for mental wellness and psychiatric practice. Features clinic details, practitioner qualifications, treatment specialties, and streamlined booking inquiries.',
    category: 'web',
    language: 'HTML & CSS',
    stars: 1,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/psychiatrist',
    liveUrl: 'https://ankitagupta.vercel.app',
    featured: true,
    accentColor: '#10B981', // emerald
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Vercel CDN'],
    keyFeatures: [
      'Accessible, high-contrast healthcare presentation',
      'Direct appointment consultation intake flow',
      'Fully responsive across smartphones, tablets, and wide monitors',
      'Optimized load speed with zero external bloat',
    ],
    architectureNotes:
      'Vanilla semantic markup and mobile-first CSS architecture for sub-second first-contentful paint.',
    updatedAt: '2026-04-16',
  },
  {
    id: 'youtube-downloader',
    name: 'Youtube-downloader',
    displayName: 'YouTube Media CLI Toolkit',
    tagline: 'Fast, clean CLI application for extracting audio and video streams',
    description:
      'A terminal-based media extraction utility designed for developers and audio collectors. Supports video stream selection up to 1080p60, high-bitrate MP3 extraction, audio playlist downloads, and realtime progress reporting.',
    category: 'python-ai',
    language: 'Python',
    stars: 1,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/Youtube-downloader',
    featured: false,
    accentColor: '#FF8800', // orange
    techStack: ['Python', 'Pytube / yt-dlp', 'FFmpeg', 'CLI TUI', 'Multithreading'],
    keyFeatures: [
      'Adaptive resolution selection (1080p, 720p, 480p) or pure audio (MP3)',
      'Rich CLI progress bars with transfer speed calculations',
      'Batch playlist parsing and automated directory structuring',
      'Auto-tagging and metadata preservation',
    ],
    architectureNotes:
      'Integrates FFmpeg pipes for demuxing and combining separate audio/video streams into losslessly muxed MP4 files.',
    updatedAt: '2025-07-21',
  },
  {
    id: 'bitchat-android',
    name: 'bitchat-android',
    displayName: 'BitChat Bluetooth Mesh',
    tagline: 'Decentralized peer-to-peer mesh messaging with classic IRC vibes',
    description:
      'An offline communications utility enabling smartphone users to chat peer-to-peer across Bluetooth Low Energy mesh relays without internet connection, mobile data, or central servers.',
    category: 'android-linux',
    language: 'Kotlin / Java',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/bitchat-android',
    featured: false,
    accentColor: '#8B5CF6', // violet
    techStack: ['Kotlin', 'Android BLE', 'Mesh Networking', 'IRC Protocol', 'Crypto'],
    keyFeatures: [
      'Completely offline peer discovery and dynamic relay routing',
      'Classic IRC-inspired channel commands and whisper modes',
      'Minimal battery footprint with BLE advertising intervals',
      'Resilient multi-hop packet forwarding',
    ],
    architectureNotes:
      'Implements a lightweight custom packet envelope over BLE GATT characteristics to relay messages across adjacent nodes.',
    updatedAt: '2026-07-25',
  },
  {
    id: 'retro-clock',
    name: 'retro-clock',
    displayName: 'Retro Aesthetic Clock',
    tagline: 'Vintage glowing flip clock & neon time visualizer',
    description:
      'A nostalgic, beautifully styled digital clock web application featuring smooth CSS flip animations, customizable retro themes, audio tick sounds, and precision time synchronizations.',
    category: 'web',
    language: 'SCSS & JS',
    stars: 1,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/retro-clock',
    liveUrl: 'https://arun28082007.github.io/retro-clock/',
    featured: false,
    accentColor: '#FFE600',
    techStack: ['SCSS', 'Vanilla JavaScript', 'CSS 3D Transforms', 'Web Audio API'],
    keyFeatures: [
      'Realistic 3D mechanical card-flip animations',
      'Switchable vintage palettes (Cyberpunk, Amber CRT, Neon Green)',
      'Sub-second precision with drift compensation',
      'Fullscreen ambient mode for desk displays',
    ],
    architectureNotes:
      'Uses requestAnimationFrame and CSS transform-style preserve-3d for hardware-accelerated 60FPS flip physics.',
    updatedAt: '2025-06-17',
  },
  {
    id: 'matrix-operation-numpy',
    name: 'Matrix-operation-Numpy',
    displayName: 'Matrix NumPy Toolkit',
    tagline: 'Numerical linear algebra and multidimensional matrix transformations',
    description:
      'Python computation module built for mathematical matrix algebra, computing determinants, inversions, eigenvalues, dot products, and multi-dimensional tensor transformations with NumPy.',
    category: 'python-ai',
    language: 'Python',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/Matrix-operation-Numpy',
    featured: false,
    accentColor: '#38BDF8',
    techStack: ['Python', 'NumPy', 'Linear Algebra Algorithms'],
    keyFeatures: [
      'High performance vectorized operations over massive matrices',
      'Gaussian elimination and rank calculations',
      'Eigenvector decomposition for data science foundations',
    ],
    updatedAt: '2026-09-15',
  },
  {
    id: 'nerd-calculator',
    name: 'Nerd-Calculator-',
    displayName: 'Nerd Calculator',
    tagline: 'Scientific & programmer calculator with bitwise computations',
    description:
      'An interactive web-based mathematical calculator supporting standard scientific formulas, programmer bitwise conversions (HEX, BIN, DEC), and real-time calculation history tape.',
    category: 'web',
    language: 'HTML & JS',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/Nerd-Calculator-',
    featured: false,
    accentColor: '#A78BFA',
    techStack: ['HTML5', 'CSS Grid', 'JavaScript'],
    keyFeatures: [
      'Full scientific formula evaluator',
      'Programmer bitwise logic gates (AND, OR, XOR, NOT, Bit-shift)',
      'Keyboard navigation and history memory registry',
    ],
    updatedAt: '2026-04-03',
  },
  {
    id: 'shreya-birthday',
    name: 'Shreya_Birthday',
    displayName: 'Celebratory Interactive Experience',
    tagline: 'Animated celebration portal with confetti physics and soundscapes',
    description:
      'A delightful, custom-coded interactive celebration web app with dynamic confetti particle simulation, celebratory balloon physics, background music player, and heartfelt timeline memory cards.',
    category: 'web',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/Shreya_Birthday',
    liveUrl: 'https://arun28082007.github.io/Shreya_Birthday/',
    featured: false,
    accentColor: '#FF5376',
    techStack: ['JavaScript', 'HTML5 Canvas', 'CSS Animations', 'Web Audio API'],
    keyFeatures: [
      'Canvas 2D particle explosion engine',
      'Audio sync with interactive interactive gift-box unwrapping',
      'Smooth responsive mobile layout',
    ],
    updatedAt: '2025-06-14',
  },
  {
    id: 'hoolychat-bot',
    name: 'hoolychat_bot',
    displayName: 'Hooly Chat Automation Bot',
    tagline: 'Custom messaging bot with conversational triggers and utility actions',
    description:
      'Chatbot automation built in Python featuring trigger-based reply engines, moderation filters, webhook dispatchers, and automated notification feeds.',
    category: 'utility-bots',
    language: 'Python',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/hoolychat_bot',
    featured: false,
    accentColor: '#F59E0B',
    techStack: ['Python', 'Webhooks', 'Regex Matching', 'HTTP APIs'],
    keyFeatures: [
      'Regex command matching and keyword triggers',
      'Automated message scheduling and webhook relays',
      'Configurable channel auto-replies',
    ],
    updatedAt: '2026-04-15',
  },
  {
    id: 'learning-c',
    name: 'Learning-C',
    displayName: 'C Systems Programming Lab',
    tagline: 'Low-level memory management, pointers, and data structures in C',
    description:
      'Curated repository of C systems code focusing on memory allocation (malloc/free), pointer arithmetic, linked lists, binary trees, and foundational computer architecture algorithms.',
    category: 'android-linux',
    language: 'C',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/arun28082007/Learning-C',
    featured: false,
    accentColor: '#64748B',
    techStack: ['C', 'GCC', 'GDB', 'Data Structures', 'Pointers'],
    keyFeatures: [
      'Hand-crafted linked list and tree data structures',
      'Pointers and dynamic memory management implementations',
      'Algorithm complexity profiling',
    ],
    updatedAt: '2026-09-01',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications - Artificial Intelligence (BCA - AI)',
    institution: 'Jananayak Chandrashekhar University (JNCU), Ballia',
    year: 'Currently Pursuing (1st Year · Enrolled This Year)',
    score: '1st Year / Active Freshman',
    badge: 'BCA - AI (Artificial Intelligence)',
    accentColor: '#FFE600',
    description:
      'Pursuing BCA with specialization in Artificial Intelligence starting this year. Focusing on foundational AI, Machine Learning algorithms, Python data computation, Discrete Mathematics, Data Structures, and Modern Software Engineering.',
  },
  {
    degree: '12th Intermediate (Senior Secondary) — PCM with Computer Science',
    institution: 'Jawahar Navodaya Vidyalaya, Gorakhpur (CBSE)',
    year: '2026',
    score: '78%',
    badge: 'Senior Secondary CBSE (PCM + CS)',
    accentColor: '#00F0FF',
    description:
      'Specialized in Physics, Chemistry, Mathematics (PCM) and Computer Science at Jawahar Navodaya Vidyalaya, Gorakhpur. Fostered strong programming logic, computational thinking, and calculus in India’s premier residential school.',
  },
  {
    degree: '10th High School (Secondary)',
    institution: 'Jawahar Navodaya Vidyalaya, Gorakhpur (CBSE)',
    year: '2024',
    score: '88%',
    badge: 'Secondary CBSE (JNV Gorakhpur)',
    accentColor: '#10B981',
    description:
      'Completed secondary schooling from the same institution (Jawahar Navodaya Vidyalaya, Gorakhpur) with 88% distinction in Science, Mathematics, and Computer Applications.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    color: '#FFE600',
    skills: [
      { name: 'Python', level: 90, tags: ['AI/CLI', 'Discord', 'Automation'] },
      { name: 'JavaScript (ES6+)', level: 88, tags: ['Web', 'DOM', 'Async'] },
      { name: 'TypeScript', level: 80, tags: ['Type Safety', 'Interfaces'] },
      { name: 'Kotlin', level: 75, tags: ['Android', 'OOP'] },
      { name: 'C Language', level: 72, tags: ['Memory', 'Pointers'] },
      { name: 'HTML5 / CSS3 / SCSS', level: 92, tags: ['Semantics', 'Layouts'] },
    ],
  },
  {
    title: 'Web & Frameworks',
    color: '#00F0FF',
    skills: [
      { name: 'React', level: 85, tags: ['Hooks', 'State', 'Components'] },
      { name: 'Next.js (App Router)', level: 82, tags: ['SSR', 'API Routes'] },
      { name: 'Tailwind CSS', level: 92, tags: ['Utility-First', 'Responsive'] },
      { name: 'Node.js', level: 78, tags: ['Backends', 'npm'] },
      { name: 'NumPy', level: 80, tags: ['Matrix Math', 'Tensors'] },
    ],
  },
  {
    title: 'Developer Tools & OS',
    color: '#FF2A85',
    skills: [
      { name: 'Git & GitHub', level: 88, tags: ['Commits', 'Releases', 'PRs'] },
      { name: 'Linux / Bash', level: 82, tags: ['CLI', 'Shell Scripts', 'PRoot'] },
      { name: 'Android Studio', level: 76, tags: ['Emulators', 'Gradle'] },
      { name: 'VS Code & Termux', level: 90, tags: ['Workflow', 'Keybindings'] },
      { name: 'Vercel Deployment', level: 86, tags: ['CI/CD', 'Edge Hosting'] },
    ],
  },
  {
    title: 'Core Professional Attributes',
    color: '#10B981',
    skills: [
      { name: 'Quick Learner', level: 95, tags: ['Rapid Ramp-up', 'Documentation'] },
      { name: 'Adaptability', level: 92, tags: ['Multitasking', 'Resilience'] },
      { name: 'Teamwork', level: 88, tags: ['Collaboration', 'Review'] },
      { name: 'Time Management', level: 85, tags: ['Milestones', 'Focus'] },
      { name: 'Clear Communication', level: 88, tags: ['Hindi', 'English'] },
    ],
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  • bio       - Display Arun's background & career objective
  • projects  - List top projects with technologies
  • skills    - View programming languages and toolchain
  • education - Show academic qualifications (BCA, JNV, CBSE)
  • contact   - Print phone, email, and social coordinates
  • github    - Show GitHub stats for arun28082007
  • clear     - Clear terminal history`,
  bio: `NAME: Arun Anand
ROLE: Full-Stack & AI Developer · BCA - AI Student @ JNCU Ballia (1st Year)
LOCATION: Ballia, Uttar Pradesh, India
OBJECTIVE: To begin my professional career in a growth-oriented organization where I can apply my skills, learn continuously, and contribute with dedication as a fresher.`,
  projects: `FEATURED PROJECTS (16 Repositories):
  1. Cosmic-IDE [Kotlin]       - Desktop-class IDE for Android with Linux environment
  2. JARVIS [Python]           - Voice AI Assistant with GUI & OS automation
  3. Timeslot-Discord-Bot [Py] - Team booking & slot coordination bot
  4. Psychiatrist [HTML/CSS]   - Live medical clinic portal (ankitagupta.vercel.app)
  5. Youtube-downloader [Py]   - CLI high-res media extraction engine
  6. BitChat-Android [Kotlin]  - Bluetooth mesh P2P chat without internet
  7. Retro-Clock [SCSS/JS]     - Vintage glowing flip-clock visualizer`,
  skills: `TECH STACK:
  • Languages: Python, JavaScript, TypeScript, Kotlin, C, HTML5, CSS3, SCSS
  • Frameworks: React, Next.js, Tailwind CSS, Node.js, NumPy
  • Tools: Git, GitHub, Linux, Bash, Termux, Android Studio, Vercel`,
  education: `EDUCATION:
  • BCA - AI (1st Year)  - Jananayak Chandrashekhar University (JNCU), Ballia [Enrolled this year]
  • 12th Intermediate    - Jawahar Navodaya Vidyalaya, Gorakhpur [PCM with Computer Science, 78%]
  • 10th High School     - Jawahar Navodaya Vidyalaya, Gorakhpur [CBSE, 88%]`,
  contact: `CONTACT INFO:
  • Email:    arunanand0807@gmail.com
  • Phone:    +91 8115304095
  • Address:  Near Bhrigu Mandir, Ballia, Uttar Pradesh
  • GitHub:   https://github.com/arun28082007
  • Twitter:  https://x.com/arunanand2808`,
  github: `GITHUB STATS (@arun28082007):
  • Public Repos: 16
  • Followers:    4
  • Following:    11
  • Status:       Active & Building Daily`,
};
