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
         "Built with Next.js and Firebase RTDB for lightning-fast real-time updates. Features include kudos system, clean UI, and optimized performance.",
         "The project focuses on simplicity and speed—no bloat, just pure messaging experience.",
      ],
      tech: ["React", "Next.js", "Firebase RTDB", "Tailwind CSS", "TypeScript"],
      status: "live",
      featured: true,
      links: {
         live: "https://fyrechatz.vercel.app",
         github: "https://github.com/bug-free-dev/firechat",
      },
      stats: {
         stars: 24,
         forks: 5,
      },
      highlights: [
         "Real-time messaging with <50ms latency",
         "Ephemeral sessions—messages vanish automatically",
         "Kudos system for peer appreciation",
         "Clean, student-friendly UI",
         "Lightning-fast Next.js performance",
      ],
      year: 2024,
      thumbnail: "/projects/firechat.png",
   },
   {
      id: "devtools-suite",
      name: "DevTools Suite",
      tagline: "Collection of developer utilities",
      description:
         "Open-source toolkit with regex testers, JSON formatters, and productivity tools",
      longDescription: [
         "A comprehensive suite of developer utilities built to solve everyday coding problems. No ads, no BS—just tools that work.",
         "Features include regex testing with live highlighting, JSON/YAML formatters, diff checkers, and encoding utilities.",
      ],
      tech: ["React", "TypeScript", "Vite", "Monaco Editor"],
      status: "wip",
      featured: true,
      links: {
         github: "https://github.com/bug-free-dev/devtools",
      },
      highlights: [
         "10+ developer utilities in one place",
         "Works offline with PWA support",
         "Clean, distraction-free interface",
         "Open-source and privacy-focused",
      ],
      year: 2024,
      thumbnail: "/projects/devtools.png",
   },
];
