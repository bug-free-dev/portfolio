import { FiGitBranch, FiTerminal, FiLayers, FiZap, FiCpu, FiCode, FiTool } from "react-icons/fi";
import {
   SiReact,
   SiNextdotjs,
   SiTypescript,
   SiJavascript,
   SiTailwindcss,
   SiNodedotjs,
   SiExpress,
   SiPython,
   SiFirebase,
   SiDocker,
   SiGithubactions,
   SiLinux,
   SiVite,
} from "react-icons/si";
import type { Skill, SkillCategory } from "./types";

export const skills: Skill[] = [
   /* ---------- Frontend ---------- */
   {
      name: "React",
      category: "frontend",
      level: 95,
      icon: SiReact,
      description: "Component-driven UI development with hooks and modern patterns",
   },
   {
      name: "Next.js",
      category: "frontend",
      level: 90,
      icon: SiNextdotjs,
      description: "SSR, SSG, routing, performance-focused React apps",
   },
   {
      name: "TypeScript",
      category: "frontend",
      level: 90,
      icon: SiTypescript,
      description: "Type-safe frontend and backend development",
   },
   {
      name: "JavaScript",
      category: "frontend",
      level: 95,
      icon: SiJavascript,
      description: "Deep understanding of modern ES features",
   },
   {
      name: "Tailwind CSS",
      category: "frontend",
      level: 95,
      icon: SiTailwindcss,
      description: "Utility-first, scalable and responsive UI design",
   },

   /* ---------- Backend ---------- */
   {
      name: "Node.js",
      category: "backend",
      level: 90,
      icon: SiNodedotjs,
      description: "Backend APIs and server-side logic",
   },
   {
      name: "Express",
      category: "backend",
      level: 90,
      icon: SiExpress,
      description: "REST APIs and middleware-driven architecture",
   },
   {
      name: "Python",
      category: "backend",
      level: 95,
      icon: SiPython,
      description: "Scripting, automation, backend logic",
   },
   {
      name: "Firebase",
      category: "backend",
      level: 85,
      icon: SiFirebase,
      description: "Auth, database, hosting, and rapid backend setup",
   },

   /* ---------- DevOps ---------- */
   {
      name: "Docker",
      category: "devops",
      level: 80,
      icon: SiDocker,
      description: "Containerizing applications for consistent environments",
   },
   {
      name: "GitHub Actions",
      category: "devops",
      level: 80,
      icon: SiGithubactions,
      description: "CI/CD pipelines for build, lint, and deploy",
   },
   {
      name: "Linux",
      category: "devops",
      level: 75,
      icon: SiLinux,
      description: "CLI usage, processes, permissions, and environment setup",
   },

   /* ---------- Tools ---------- */
   {
      name: "Git",
      category: "tools",
      level: 90,
      icon: FiGitBranch,
      description: "Branching strategies, PR workflow, version control",
   },
   {
      name: "Vite",
      category: "tools",
      level: 85,
      icon: SiVite,
      description: "Fast modern frontend tooling",
   },
   {
      name: "Terminal & CLI",
      category: "tools",
      level: 85,
      icon: FiTerminal,
      description: "Command-line driven development workflow",
   },

   /* ---------- Design ---------- */
   {
      name: "UI/UX Design",
      category: "design",
      level: 85,
      icon: FiLayers,
      description: "User-focused interfaces with clean visual hierarchy",
   },
   {
      name: "Design Systems",
      category: "design",
      level: 85,
      icon: FiZap,
      description: "Reusable components and consistent design language",
   },

   /* ---------- Cognitive / Meta Skills ---------- */
   {
      name: "Prompt Engineering",
      category: "cognitive",
      level: 90,
      icon: FiCpu,
      description:
         "Solving complex problems by crafting precise, structured prompts for AI-assisted development",
   },
   {
      name: "Problem Solving",
      category: "cognitive",
      level: 90,
      icon: FiCode,
      description: "Breaking down problems logically and designing efficient solutions",
   },
];


export const skillsByCategory: SkillCategory[] = [
   {
      key: "frontend",
      title: "Frontend",
      icon: FiLayers,
      skills: skills.filter((s) => s.category === "frontend"),
   },
   {
      key: "backend",
      title: "Backend",
      icon: FiCode,
      skills: skills.filter((s) => s.category === "backend"),
   },
   {
      key: "devops",
      title: "DevOps",
      icon: FiTool,
      skills: skills.filter((s) => s.category === "devops"),
   },
   {
      key: "tools",
      title: "Tools",
      icon: FiTerminal,
      skills: skills.filter((s) => s.category === "tools"),
   },
   {
      key: "design",
      title: "Design",
      icon: FiLayers,
      skills: skills.filter((s) => s.category === "design"),
   },
   {
      key: "cognitive",
      title: "Thinking & Strategy",
      icon: FiCpu,
      skills: skills.filter((s) => s.category === "cognitive"),
   },
];
