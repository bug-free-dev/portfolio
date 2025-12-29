import React, { type KeyboardEvent } from "react";
import clsx from "clsx";

interface TerminalInputProps {
   value: string;
   onChange: (v: string) => void;
   onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
   prompt?: string;
   isProcessing?: boolean;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
   value,
   onChange,
   onKeyDown,
   prompt = "➜",
   isProcessing = false,
}) => (
   <div className="flex items-center gap-2 mt-1">
      <span className="text-green-600 font-semibold select-none">{prompt}</span>
      <input
         type="text"
         value={value}
         onChange={(e) => onChange(e.target.value)}
         onKeyDown={onKeyDown}
         disabled={isProcessing}
         className={clsx(
            "flex-1 bg-transparent border-none outline-none font-mono text-(--card-fg) placeholder:text-(--muted)",
            isProcessing && "opacity-50 cursor-not-allowed"
         )}
         placeholder={isProcessing ? "Processing..." : "Type a command..."}
         spellCheck={false}
         autoComplete="off"
         autoCorrect="off"
         autoCapitalize="off"
      />
      {isProcessing && <span className="animate-pulse text-(--accent)">▊</span>}
   </div>
);
