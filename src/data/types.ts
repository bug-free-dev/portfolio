export interface Bio {
   name: string;
   title: string;
   tagline: string;
   location: string;
   avatar?: string;
   description: string[];
   philosophy: string[];
   interests: string[];
   currentFocus: string;
   availability: "available" | "busy" | "not-looking";
}

export interface Social {
   platform: string;
   username: string;
   url: string;
   icon: string;
   handle?: string;
}
import type { IconType } from "react-icons";

/* -------------------- Types -------------------- */

export type SkillCategoryKey = "frontend" | "backend" | "devops" | "tools" | "design" | "cognitive";

export interface Skill {
   name: string;
   category: SkillCategoryKey;
   level: number; // 0–100
   icon: IconType;
   description?: string;
}

export interface SkillCategory {
   key: SkillCategoryKey;
   title: string;
   icon: IconType;
   skills: Skill[];
}

export interface Project {
   id: string;
   name: string;
   tagline: string;
   description: string;
   longDescription?: string[];
   tech: string[];
   status: "live" | "wip" | "archived" | "concept";
   featured: boolean;
   links: {
      live?: string;
      github?: string;
      demo?: string;
   };
   stats?: {
      stars?: number;
      forks?: number;
      contributors?: number;
   };
   highlights?: string[];
   year: number;
}

export interface Contact {
   email: string;
   location: string;
   timezone: string;
   availability: string;
   preferredContact: string;
}