import type { Project } from "./types";

export const projects: Project[] = [
   {
      id: "firechat",
      name: "FireChat",
      tagline: "Ephemeral messaging for students",
      description:
         "Real-time chat application with vanishing messages built for student communities",
      longDescription: [
         "FireChat is an ephemeral messaging platform designed specifically for students. Messages vanish automatically when sessions end, creating a judgement-free space for authentic conversations.",
         "Built with Next.js and Firebase RTDB for lightning-fast real-time updates. Features include a kudos system, clean UI, and performance-focused architecture.",
         "The project emphasizes simplicity and speed—no bloat, just a seamless messaging experience.",
      ],
      tech: ["React", "Next.js", "Firebase RTDB", "Tailwind CSS", "TypeScript"],
      status: "live",
      featured: true,
      links: {
         live: "https://fyrechatz.vercel.app",
         github: "https://github.com/bug-free-dev/firechat",
      },
      highlights: [
         "Real-time messaging with sub-50ms latency",
         "Ephemeral sessions with automatic message expiry",
         "Kudos system for peer appreciation",
         "Clean, student-friendly UI",
         "Optimized Next.js performance",
      ],
      year: 2025,
   },
   {
      id: "portfolio",
      name: "Personal Portfolio",
      tagline: "Developer portfolio with terminal-inspired UI",
      description:
         "A performance-focused personal portfolio showcasing projects, skills, and DevOps practices",
      longDescription: [
         "This portfolio is built as a real engineering project rather than a static website, with a strong focus on performance, accessibility, and developer experience.",
         "Features a terminal-inspired UI, modular component architecture, and continuous UI improvements driven through PR-based development.",
         "CI workflows and structured commits ensure maintainability and production-ready quality.",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS"],
      status: "live",
      featured: true,
      links: {
         live: "https://bugfreedev.vercel.app",
         github: "https://github.com/bug-free-dev/portfolio",
      },
      highlights: [
         "Terminal-inspired interactive UI",
         "Clean, scalable component architecture",
         "Neo-brutalism design inspired"
      ],
      year: 2026,
   },
   {
      id: "svelte-french-toast",
      name: "svelte-french-toast",
      tagline: "Open-source toast notifications for Svelte",
      description:
         "Contribution to a popular open-source toast notification library for the Svelte ecosystem",
      longDescription: [
         "svelte-french-toast is a lightweight and elegant toast notification library for Svelte applications.",
         "I contributed improvements and refinements with a focus on usability, developer experience, and maintainability.",
         "This contribution reflects my interest in open-source collaboration and clean UI utilities.",
      ],
      tech: ["Svelte", "TypeScript", "Open Source"],
      status: "contributed",
      featured: false,
      links: {
         github: "https://github.com/kbrgl/svelte-french-toast",
         live: "https://svelte-french-toast.vercel.app",
      },
      highlights: [
         "Open-source contribution",
         "Improved developer experience",
         "Clean, minimal UI utility",
         "Collaborative GitHub workflow",
      ],
      year: 2025,
   },
];
