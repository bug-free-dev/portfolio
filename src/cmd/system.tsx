
import React from "react";
import {
   TerminalSection,
   TerminalList,
   TerminalCard,
   TerminalCode,
   TerminalDivider,
   TerminalTable,
} from "../components/ui/Terminal/TOutput";

export const help = () => (
   <div className="space-y-4">
      <TerminalSection title="Available Commands">
         <div className="space-y-4">
            <div>
               <div className="text-xs font-semibold text-(--accent) uppercase tracking-wide mb-2">
                  Personal
               </div>
               <TerminalTable
                  data={[
                     { label: "whoami", value: "Brief introduction" },
                     { label: "about", value: "Detailed bio and philosophy" },
                     { label: "bio", value: "Same as about" },
                     { label: "contact", value: "Contact information" },
                     { label: "resume", value: "Resume and CV info" },
                     { label: "location", value: "Current location" },
                  ]}
               />
            </div>

            <div>
               <div className="text-xs font-semibold text-(--accent) uppercase tracking-wide mb-2">
                  Portfolio
               </div>
               <TerminalTable
                  data={[
                     { label: "projects", value: "List all projects" },
                     { label: "project <name>", value: "View specific project" },
                     { label: "skills", value: "Technical skills" },
                     { label: "stats", value: "Portfolio statistics" },
                     { label: "github", value: "Open GitHub profile" },
                  ]}
               />
            </div>

            <div>
               <div className="text-xs font-semibold text-(--accent) uppercase tracking-wide mb-2">
                  Social
               </div>
               <TerminalTable
                  data={[
                     { label: "social", value: "All social media links" },
                     { label: "email", value: "Email contact" },
                     { label: "instagram", value: "Open Instagram" },
                     { label: "twitter", value: "Open Twitter/X" },
                     { label: "npm", value: "Open npm profile" },
                     { label: "links", value: "Quick links overview" },
                  ]}
               />
            </div>

            <div>
               <div className="text-xs font-semibold text-(--accent) uppercase tracking-wide mb-2">
                  System
               </div>
               <TerminalTable
                  data={[
                     { label: "help", value: "Show this help message" },
                     { label: "clear", value: "Clear terminal screen" },
                     { label: "exit", value: "Close terminal" },
                     { label: "date", value: "Show current date/time" },
                     { label: "echo <text>", value: "Print text" },
                     { label: "pwd", value: "Print working directory" },
                     { label: "ls", value: "List files" },
                     { label: "cat <file>", value: "Read file content" },
                     { label: "history", value: "Command history" },
                  ]}
               />
            </div>

            <div>
               <div className="text-xs font-semibold text-(--accent) uppercase tracking-wide mb-2">
                  Fun
               </div>
               <TerminalTable
                  data={[
                     { label: "fortune", value: "Random dev quote" },
                     { label: "sudo", value: "Try it 😏" },
                     { label: "hack", value: "Matrix mode" },
                     { label: "coffee", value: "Coffee break" },
                  ]}
               />
            </div>
         </div>
      </TerminalSection>

      <TerminalDivider />

      <TerminalCard variant="accent">
         <div className="text-sm space-y-1">
            <div className="font-semibold">💡 Pro Tips:</div>
            <TerminalList
               items={[
                  "Use ↑/↓ arrows to navigate command history",
                  "Commands are case-insensitive",
                  "Tab completion coming soon!",
               ]}
               icon="→"
            />
         </div>
      </TerminalCard>
   </div>
);

export const clear = () => "CLEAR";

export const exit = () => "EXIT";

export const date = () => {
   const now = new Date();
   return (
      <div className="space-y-2">
         <TerminalCard variant="muted">
            <div className="space-y-1 text-sm">
               <div className="flex items-center gap-2">
                  <span className="text-(--muted)">Date:</span>
                  <span className="font-mono">{now.toLocaleDateString()}</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-(--muted)">Time:</span>
                  <span className="font-mono">{now.toLocaleTimeString()}</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-(--muted)">Timezone:</span>
                  <span className="font-mono">IST (GMT+5:30)</span>
               </div>
            </div>
         </TerminalCard>
      </div>
   );
};

export const echo = (args: string[]) => {
   if (args.length === 0) {
      return <div className="text-sm text-(--muted)">Usage: echo &lt;text&gt;</div>;
   }
   return <div className="text-sm">{args.join(" ")}</div>;
};

export const pwd = () => <TerminalCode inline>/home/saurabh/portfolio</TerminalCode>;

export const ls = () => (
   <div className="space-y-2">
      <TerminalList
         items={[
            "📄 about.txt",
            "📁 projects/",
            "📄 skills.json",
            "📄 contact.info",
            "📄 README.md",
            "📁 social/",
         ]}
      />
   </div>
);

export const cat = (args: string[]) => {
   if (args.length === 0) {
      return (
         <div className="text-sm space-y-2">
            <div className="text-(--muted)">Usage: cat &lt;file&gt;</div>
            <div className="text-xs text-(--muted)">Available files: README.md, about.txt, contact.info</div>
         </div>
      );
   }

   const file = args[0].toLowerCase();

   const files: Record<string, React.ReactNode> = {
      "readme.md": (
         <TerminalCard variant="muted">
            <div className="space-y-2 text-sm">
               <div className="font-bold text-(--accent)"># Saurabh's Portfolio Terminal</div>
               <div>Welcome! This is an interactive terminal portfolio.</div>
               <div className="text-xs text-(--muted)">
                  Type 'help' to see available commands.
               </div>
            </div>
         </TerminalCard>
      ),
      "about.txt": (
         <TerminalCard variant="muted">
            <div className="text-sm space-y-1">
               <div>Frontend Engineer | Systems Thinker | Builder</div>
               <div className="text-(--muted)">
                  Building elegant interfaces with React, Next.js, and modern web technologies.
               </div>
            </div>
         </TerminalCard>
      ),
      "contact.info": (
         <TerminalCard variant="muted">
            <div className="text-sm space-y-1">
               <div>📧 bugfreedev07@gmail.com</div>
               <div>📍 Kanpur, India</div>
               <div>🐙 github.com/bug-free-dev</div>
            </div>
         </TerminalCard>
      ),
   };

   if (files[file]) {
      return files[file];
   }

   return <div className="text-sm text-(--error)">cat: {file}: No such file or directory</div>;
};

export const history = () => (
   <TerminalCard variant="muted">
      <div className="text-sm space-y-2">
         <div className="font-semibold text-(--accent)">Command History</div>
         <div className="text-(--muted)">
            Use ↑/↓ arrow keys to navigate through your command history
         </div>
      </div>
   </TerminalCard>
);

export const version = () => (
   <div className="space-y-2">
      <TerminalCard variant="accent">
         <div className="text-sm space-y-1">
            <div className="font-bold">Portfolio Terminal v2.0</div>
            <div className="text-(--muted)">Built with React + TypeScript</div>
         </div>
      </TerminalCard>
   </div>
);

export const man = (args: string[]) => {
   if (args.length === 0) {
      return (
         <div className="text-sm space-y-2">
            <div>What manual page do you want?</div>
            <div className="text-xs text-(--muted)">
               Try: man help, man whoami, man projects
            </div>
         </div>
      );
   }

   return (
      <TerminalCard variant="muted">
         <div className="text-sm space-y-2">
            <div className="font-bold">MANUAL: {args[0]}</div>
            <div className="text-(--muted)">
               For detailed info, just type: <code className="text-(--accent)">{args[0]}</code>
            </div>
         </div>
      </TerminalCard>
   );
};
