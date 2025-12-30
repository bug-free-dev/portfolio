import React from "react";
import {
   TerminalSection,
   TerminalList,
   TerminalCard,
   TerminalCode,
   TerminalDivider,
   CommandGroup,
   FileItem,
} from "../components/ui/Terminal/TOutput";

export const help = () => (
   <div className="space-y-5">
      <TerminalSection title="Available Commands">
         <div className="space-y-4">
            <CommandGroup
               title="Personal"
               commands={[
                  { name: "whoami", description: "Brief introduction" },
                  { name: "about", description: "Detailed bio and philosophy" },
                  { name: "bio", description: "Same as about" },
                  { name: "contact", description: "Contact information" },
                  { name: "resume", description: "Resume and CV info" },
                  { name: "location", description: "Current location" },
               ]}
            />

            <CommandGroup
               title="Portfolio"
               commands={[
                  { name: "projects", description: "List all projects" },
                  { name: "project <name>", description: "View specific project" },
                  { name: "skills", description: "Technical skills" },
                  { name: "stats", description: "Portfolio statistics" },
                  { name: "github", description: "Open GitHub profile" },
               ]}
            />

            <CommandGroup
               title="Social"
               commands={[
                  { name: "social", description: "All social media links" },
                  { name: "email", description: "Email contact" },
                  { name: "instagram", description: "Open Instagram" },
                  { name: "twitter", description: "Open Twitter/X" },
                  { name: "npm", description: "Open npm profile" },
                  { name: "links", description: "Quick links overview" },
               ]}
            />

            <CommandGroup
               title="System"
               commands={[
                  { name: "help", description: "Show this help message" },
                  { name: "clear", description: "Clear terminal screen" },
                  { name: "exit", description: "Close terminal" },
                  { name: "theme", description: "Toggle theme (coming soon)" },
                  { name: "date", description: "Show current date/time" },
                  { name: "echo <text>", description: "Print text" },
                  { name: "pwd", description: "Print working directory" },
                  { name: "ls", description: "List files" },
                  { name: "cat <file>", description: "Read file content" },
                  { name: "history", description: "Command history" },
               ]}
            />

            <CommandGroup
               title="Fun"
               commands={[
                  { name: "fortune", description: "Random dev quote" },
                  { name: "sudo", description: "Try it" },
                  { name: "hack", description: "Matrix mode" },
                  { name: "coffee", description: "Coffee break" },
                  { name: "joke", description: "Tell a joke" },
               ]}
            />
         </div>
      </TerminalSection>

      <TerminalDivider />

      <TerminalCard variant="accent">
         <div className="space-y-2">
            <div className="font-semibold">Pro Tips</div>
            <TerminalList
               items={[
                  "Use ↑/↓ arrows to navigate command history",
                  "Commands are case-insensitive",
                  "Use Ctrl+L to clear terminal",
                  "Use Ctrl+C to cancel current input",
               ]}
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
      <TerminalCard variant="muted">
         <div className="space-y-2 font-mono text-sm">
            <div className="flex items-center gap-3">
               <span className="text-(--muted) min-w-20">Date:</span>
               <span className="font-semibold">{now.toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-(--muted) min-w-20">Time:</span>
               <span className="font-semibold">{now.toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-(--muted) min-w-20">Timezone:</span>
               <span className="font-semibold">IST (GMT+5:30)</span>
            </div>
         </div>
      </TerminalCard>
   );
};

export const echo = (args: string[]) => {
   if (args.length === 0) {
      return (
         <div className="text-sm text-(--muted)">
            Usage: <TerminalCode inline>echo &lt;text&gt;</TerminalCode>
         </div>
      );
   }
   return <div className="text-sm">{args.join(" ")}</div>;
};

export const pwd = () => <TerminalCode inline>/home/saurabh/portfolio</TerminalCode>;

export const ls = () => (
   <div className="space-y-1">
      <FileItem name="about.txt" type="file" />
      <FileItem name="projects" type="folder" />
      <FileItem name="skills.json" type="file" />
      <FileItem name="contact.info" type="file" />
      <FileItem name="README.md" type="file" />
      <FileItem name="social" type="folder" />
   </div>
);

export const cat = (args: string[]) => {
   if (args.length === 0) {
      return (
         <div className="text-sm space-y-2">
            <div className="text-(--muted)">
               Usage: <TerminalCode inline>cat &lt;file&gt;</TerminalCode>
            </div>
            <div className="text-xs text-(--muted)">
               Available: README.md, about.txt, contact.info
            </div>
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
                  Type <TerminalCode inline>help</TerminalCode> to see available commands.
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
            <div className="text-sm space-y-1 font-mono">
               <div>bugfreedev07@gmail.com</div>
               <div>Kanpur, India</div>
               <div>github.com/bug-free-dev</div>
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
   <TerminalCard variant="accent">
      <div className="text-sm space-y-1">
         <div className="font-bold">Portfolio Terminal v2.0</div>
         <div className="text-(--muted)">Built with React + TypeScript + Vite</div>
      </div>
   </TerminalCard>
);

export const man = (args: string[]) => {
   if (args.length === 0) {
      return (
         <div className="text-sm space-y-2">
            <div>What manual page do you want?</div>
            <div className="text-xs text-(--muted)">
               Try: <TerminalCode inline>man help</TerminalCode>,{" "}
               <TerminalCode inline>man whoami</TerminalCode>
            </div>
         </div>
      );
   }

   return (
      <TerminalCard variant="muted">
         <div className="text-sm space-y-2">
            <div className="font-bold">MANUAL: {args[0]}</div>
            <div className="text-(--muted)">
               For detailed info, just type: <TerminalCode inline>{args[0]}</TerminalCode>
            </div>
         </div>
      </TerminalCard>
   );
};

export const theme = () => (
   <TerminalCard variant="warning">
      <div className="text-sm space-y-2">
         <div className="font-semibold">Theme Switcher</div>
         <div className="text-(--muted)">
            Theme switching is coming soon! Currently in light mode.
         </div>
         <div className="text-xs text-(--muted) mt-2">
            Stay tuned for dark mode, catppuccin, and more themes...
         </div>
      </div>
   </TerminalCard>
);
