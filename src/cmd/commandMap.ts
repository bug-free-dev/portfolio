import * as personal from "./personal";
import * as portfolio from "./portfolio";
import * as social from "./social";
import * as system from "./system";
import * as easterEggs from "./easter-eggs";

export type CommandFunction = (args: string[]) => React.ReactNode | Promise<React.ReactNode>;

export interface CommandInfo {
   fn: CommandFunction;
   description: string;
   category: "personal" | "portfolio" | "social" | "system" | "fun";
}

export const commandMap: Record<string, CommandInfo> = {
   whoami: {
      fn: personal.whoami,
      description: "Brief introduction",
      category: "personal",
   },
   about: {
      fn: personal.about,
      description: "Detailed bio and philosophy",
      category: "personal",
   },
   bio: {
      fn: personal.bio_cmd,
      description: "Same as about",
      category: "personal",
   },
   contact: {
      fn: personal.contactCmd,
      description: "Contact information",
      category: "personal",
   },
   location: {
      fn: personal.location,
      description: "Current location",
      category: "personal",
   },
   resume: {
      fn: personal.resume,
      description: "Resume and CV info",
      category: "personal",
   },

   // Portfolio Commands
   projects: {
      fn: portfolio.projectsCmd,
      description: "List all projects",
      category: "portfolio",
   },
   project: {
      fn: portfolio.projectCmd,
      description: "View specific project",
      category: "portfolio",
   },
   skills: {
      fn: portfolio.skillsCmd,
      description: "Technical skills",
      category: "portfolio",
   },
   github: {
      fn: portfolio.github,
      description: "Open GitHub profile",
      category: "portfolio",
   },
   stats: {
      fn: portfolio.stats,
      description: "Portfolio statistics",
      category: "portfolio",
   },

   // Social Commands
   social: {
      fn: social.social,
      description: "All social media links",
      category: "social",
   },
   socials: {
      fn: social.socialsCmd,
      description: "Same as social",
      category: "social",
   },
   instagram: {
      fn: social.instagram,
      description: "Open Instagram profile",
      category: "social",
   },
   twitter: {
      fn: social.twitter,
      description: "Open Twitter/X profile",
      category: "social",
   },
   npm: {
      fn: social.npm,
      description: "Open npm profile",
      category: "social",
   },
   email: {
      fn: social.email,
      description: "Email contact",
      category: "social",
   },
   links: {
      fn: social.links,
      description: "Quick links overview",
      category: "social",
   },

   // System Commands
   help: {
      fn: system.help,
      description: "Show help message",
      category: "system",
   },
   clear: {
      fn: system.clear,
      description: "Clear terminal",
      category: "system",
   },
   exit: {
      fn: system.exit,
      description: "Close terminal",
      category: "system",
   },
   date: {
      fn: system.date,
      description: "Show date and time",
      category: "system",
   },
   echo: {
      fn: system.echo,
      description: "Print text",
      category: "system",
   },
   pwd: {
      fn: system.pwd,
      description: "Print working directory",
      category: "system",
   },
   ls: {
      fn: system.ls,
      description: "List files",
      category: "system",
   },
   cat: {
      fn: system.cat,
      description: "Read file content",
      category: "system",
   },
   history: {
      fn: system.history,
      description: "Command history",
      category: "system",
   },
   version: {
      fn: system.version,
      description: "Show version",
      category: "system",
   },
   man: {
      fn: system.man,
      description: "Manual pages",
      category: "system",
   },

   // Easter Eggs
   sudo: {
      fn: easterEggs.sudo,
      description: "Try it 😏",
      category: "fun",
   },
   hack: {
      fn: easterEggs.hack,
      description: "Hack the mainframe",
      category: "fun",
   },
   coffee: {
      fn: easterEggs.coffee,
      description: "Coffee break",
      category: "fun",
   },
   fortune: {
      fn: easterEggs.fortune,
      description: "Random dev quote",
      category: "fun",
   },
   matrix: {
      fn: easterEggs.matrix,
      description: "Enter the Matrix",
      category: "fun",
   },
   konami: {
      fn: easterEggs.konami,
      description: "Secret code",
      category: "fun",
   },
   joke: {
      fn: easterEggs.joke,
      description: "Tell a joke",
      category: "fun",
   },
   rickroll: {
      fn: easterEggs.rickroll,
      description: "Never gonna give you up",
      category: "fun",
   },
   xyzzy: {
      fn: easterEggs.xyzzy,
      description: "Adventure awaits",
      category: "fun",
   },
   credits: {
      fn: easterEggs.credits,
      description: "View credits",
      category: "fun",
   },
};

export const getCommand = (cmd: string): CommandInfo | undefined => {
   return commandMap[cmd.toLowerCase()];
};

export const getCommandsByCategory = (category: CommandInfo["category"]) => {
   return Object.entries(commandMap)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, info]) => info.category === category)
      .map(([name]) => name);
};

export const commandExists = (cmd: string): boolean => {
   return cmd.toLowerCase() in commandMap;
};
