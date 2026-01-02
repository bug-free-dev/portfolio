import { useRef, useEffect, type KeyboardEvent, type FC } from "react";
import clsx from "clsx";

interface TerminalInputProps {
   value: string;
   onChange: (v: string) => void;
   onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
   user?: string;
   host?: string;
   cwd?: string;
   isProcessing?: boolean;
}

export const TerminalInput: FC<TerminalInputProps> = ({
   value,
   onChange,
   onKeyDown,
   user = "root",
   host = "portfolio",
   cwd = "~",
   isProcessing = false,
}) => {
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (!isProcessing) {
         inputRef.current?.focus();
      }
   }, [isProcessing, value]);

   return (
      <div
         className="flex items-center gap-2 mt-1 font-mono text-sm"
         onClick={() => inputRef.current?.focus()}
      >
         <span className="select-none whitespace-nowrap">
            <span className="text-emerald-600 font-semibold">{user}</span>
            <span className="text-neutral-600">@</span>
            <span className="text-sky-600 font-semibold">{host}</span>
            <span className="text-neutral-600">:</span>
            <span className="text-zinc-600">{cwd}</span>
            <span className="text-neutral-600">$</span>
         </span>

         <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={isProcessing}
            className={clsx(
               "flex-1 bg-transparent border-none outline-none",
               "text-(--card-fg) caret-emerald-600",
               "placeholder:text-(--muted)",
               isProcessing && "opacity-60 cursor-not-allowed"
            )}
            placeholder={isProcessing ? "executing…" : ""}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
         />
      </div>
   );
};
