// src/data/skills.ts

import type { Skill, SkillCategory } from "./types";

export const skills: Skill[] = [
   { name: "React", category: "frontend", level: 95, icon: "⚛️" },
   { name: "Next.js", category: "frontend", level: 90, icon: "▲" },
   { name: "TypeScript", category: "frontend", level: 90, icon: "🔷" },
   { name: "JavaScript", category: "frontend", level: 95, icon: "🟨" },
   { name: "Tailwind CSS", category: "frontend", level: 95, icon: "🎨" },
   { name: "CSS/SCSS", category: "frontend", level: 90, icon: "🎨" },

   { name: "Node.js", category: "backend", level: 80, icon: "🟢" },
   { name: "Express", category: "backend", level: 75, icon: "⚡" },
   { name: "Python", category: "backend", level: 70, icon: "🐍" },
   { name: "Firebase", category: "backend", level: 85, icon: "🔥" },

   { name: "Git", category: "tools", level: 90, icon: "🔧" },
   { name: "Vite", category: "tools", level: 85, icon: "⚡" },
   { name: "Webpack", category: "tools", level: 75, icon: "📦" },
   { name: "Figma", category: "design", level: 80, icon: "🎨" },

   { name: "UI/UX Design", category: "design", level: 85, icon: "✨" },
   { name: "Design Systems", category: "design", level: 85, icon: "🎯" },
];

export const skillsByCategory: SkillCategory[] = [
   {
      category: "Frontend",
      skills: skills.filter((s) => s.category === "frontend"),
   },
   {
      category: "Backend",
      skills: skills.filter((s) => s.category === "backend"),
   },
   {
      category: "Tools & Design",
      skills: skills.filter((s) => s.category === "tools" || s.category === "design"),
   },
];
