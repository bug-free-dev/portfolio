import React from "react";
import clsx from "clsx";

interface TerminalHeaderProps {
   title?: string;
   onClose?: () => void;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({ title = "zsh", onClose }) => {
   return (
      <div
         className={clsx(
            "flex items-center justify-between px-4 py-2 border-b select-none",
            "border-(--card-border)",
            "bg-(--card-bg-soft)"
         )}
      >
         {/* Zsh-style mac dots */}
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer hover:brightness-110 transition-all" onClick={onClose}/>
            <div className="w-3 h-3 rounded-full bg-[#febc2e] cursor-pointer hover:brightness-110 transition-all" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] cursor-pointer hover:brightness-110 transition-all" />
         </div>

         {/* Centered title */}
         <div className="flex-1 text-center">
            <span className="text-xs font-semibold text-(--muted) uppercase tracking-wide">
               {title}
            </span>
         </div>

         {/* Right spacer to center title */}
         <div className="w-12" />
      </div>
   );
};
