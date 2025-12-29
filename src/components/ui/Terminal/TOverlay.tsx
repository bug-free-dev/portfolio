import React, { useEffect } from "react";
import clsx from "clsx";
import Terminal from "./Terminal";
import { TerminalSection, TerminalBadge, TerminalList } from "./TOutput";

interface TerminalOverlayProps {
   open: boolean;
   onClose: () => void;
}

const WelcomeMessage = () => (
   <div className="space-y-3">
      <TerminalSection title="Welcome to Saurabh's Portfolio Terminal">
         <div className="text-sm space-y-2">
            <p>
               This is an interactive terminal interface. Type commands to explore my work, skills,
               and experience.
            </p>
         </div>
      </TerminalSection>

      <div className="space-y-2">
         <div className="text-xs font-semibold text-(--accent) uppercase tracking-wide">
            Quick Start
         </div>
         <TerminalList
            items={[
               <>
                  Type <TerminalBadge>help</TerminalBadge> to see all available commands
               </>,
               <>
                  Try <TerminalBadge>about</TerminalBadge> to learn more about me
               </>,
               <>
                  Use <TerminalBadge>projects</TerminalBadge> to see my work
               </>,
               "Use ↑/↓ arrows to navigate command history",
            ]}
            icon="→"
         />
      </div>
   </div>
);

export const TerminalOverlay: React.FC<TerminalOverlayProps> = ({ open, onClose }) => {
   useEffect(() => {
      if (!open) return;
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
   }, [open, onClose]);

   if (!open) return null;

   return (
      <div
         className="fixed inset-0 z-9999 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
         onClick={onClose}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
               "w-full max-w-4xl max-h-[90vh]",
               "animate-terminal-in fade-in zoom-in duration-200"
            )}
         >
            <Terminal
               title="saurabh@portfolio ~ zsh"
               className="h-full"
               onClose={onClose}
               initialCommands={[
                  {
                     input: "welcome",
                     output: <WelcomeMessage />,
                  },
               ]}
            />
         </div>
      </div>
   );
};
