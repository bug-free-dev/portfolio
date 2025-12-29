import React, { useEffect } from "react";
import clsx from "clsx";
import { Terminal } from ".";

interface TerminalOverlayProps {
   open: boolean;
   onClose: () => void;
   onCommand: (cmd: string) => Promise<React.ReactNode> | React.ReactNode;
}

export const TerminalOverlay: React.FC<TerminalOverlayProps> = ({ open, onClose, onCommand }) => {
   useEffect(() => {
      if (!open) return;
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
   }, [open, onClose]);

   if (!open) return null;

   return (
      <div
         className="fixed inset-0 z-9999 bg-black/40 backdrop-blur-sm flex items-center justify-center"
         onClick={onClose}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
               "w-[90vw] max-w-3xl",
               "animate-terminal-in fade-in zoom-in duration-200"
            )}
         >
            <Terminal
               title="saurabh@portfolio ~ zsh"
               className="h-full"
               onCommand={onCommand}
               onClose={onClose}
               initialCommands={[
                  {
                     input: "welcome",
                     output: "Welcome to Saurabh's Portfolio Terminal. Type `help`.",
                  },
               ]}
            />
         </div>
      </div>
   );
};
