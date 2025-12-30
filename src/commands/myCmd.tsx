import { projects } from "../data/projects";
import {
   TerminalList,
   TerminalProjectCard,
   TerminalInfo,
   TerminalHelp,
   TerminalPane,
} from "../components/ui/Terminal/TOutput";
import { SiNpm } from "react-icons/si";

export const portfolioCommands = {
   about: () => (
      <TerminalInfo title="About Saurabh">
         <div>
            <p className="mb-2">I build frontends, design systems and developer tools.</p>
            <p>
               Focus: React, TypeScript, System Thinking. I prefer design-first, test-later
               workflows and keep UIs small but expressive.
            </p>
         </div>
      </TerminalInfo>
   ),

   help: () => (
      <TerminalHelp
         commands={[
            { cmd: "about", desc: "Short intro about me" },
            { cmd: "projects", desc: "List selected projects" },
            { cmd: "project <name>", desc: "Show detailed project card" },
            { cmd: "theme <name>", desc: "Change site theme" },
         ]}
      />
   ),

   projects: () => (
      <TerminalList
         title="Selected Projects"
         items={projects.map((p) => ({
            title: p.name,
            subtitle: p.tags?.join(", "),
            details: p.description,
         }))}
      />
   ),

   project: (args: string[]) => {
      const name = args.join(" ").toLowerCase();
      const p = projects.find((pr) => pr.name.toLowerCase() === name);
      if (!p) return <TerminalInfo title="Not found">Project not found: {name}</TerminalInfo>;
      return <TerminalProjectCard project={p} />;
   },

   resume: () => (
      <TerminalPane title="Resume">
         <div>
            <p className="mb-2">Downloadable resume:</p>
            <a href="/saurabh-resume.pdf" className="inline-flex items-center gap-2">
               <SiNpm /> Download PDF
            </a>
         </div>
      </TerminalPane>
   ),
};
