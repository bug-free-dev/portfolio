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

export interface Skill {
   name: string;
   category: "frontend" | "backend" | "tools" | "design" | "other";
   level: number;
   icon?: string;
   description?: string;
}

export interface SkillCategory {
   category: string;
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
   thumbnail?: string;
}

export interface Experience {
   company: string;
   position: string;
   duration: string;
   description: string[];
   tech: string[];
   type: "full-time" | "part-time" | "freelance" | "internship";
}

export interface Contact {
   email: string;
   location: string;
   timezone: string;
   availability: string;
   preferredContact: string;
}