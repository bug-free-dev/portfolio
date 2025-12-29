import React, { type RefObject } from "react";
import clsx from "clsx";
import { TerminalInput } from "./TInput";
import { type TerminalCommand } from "./Ttypes";

interface TerminalBodyProps {
   history: TerminalCommand[];
   currentInput: string;
   onInputChange: (value: string) => void;
   onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
   inputRef: RefObject<HTMLInputElement | null>;
   terminalBodyRef: RefObject<HTMLDivElement | null>;
   prompt?: string;
   isProcessing?: boolean;
   showTimestamp?: boolean;
}

export const TerminalBody: React.FC<TerminalBodyProps> = ({
   history,
   currentInput,
   onInputChange,
   onKeyDown,
   inputRef,
   terminalBodyRef,
   prompt,
   isProcessing,
   showTimestamp,
}) => {
   const handleClick = () => inputRef.current?.focus();

   return (
      <div
         ref={terminalBodyRef}
         className={clsx(
            "terminal-body p-4 overflow-y-auto font-mono text-sm h-100 bg-(--card-bg) text-(--card-fg) scrollbar"
         )}
         onClick={handleClick}
      >
         {history.map((cmd, idx) => (
            <div key={idx} className="mb-3">
               <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold select-none">{prompt}</span>
                  <span className="text-(--card-fg)">{cmd.input}</span>
                  {showTimestamp && cmd.timestamp && (
                     <span className="text-(--muted) text-xs ml-auto">
                        {cmd.timestamp.toLocaleTimeString()}
                     </span>
                  )}
               </div>
               {cmd.output && (
                  <div className="mt-1 pl-4 text-(--muted)">{cmd.output}</div>
               )}
            </div>
         ))}

         <TerminalInput
            value={currentInput}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            prompt={prompt}
            isProcessing={isProcessing}
         />
      </div>
   );
};
