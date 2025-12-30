import React, { useState, useRef, useLayoutEffect } from "react";
import clsx from "clsx";
import type { TerminalCommand } from "./Ttypes";
import { TerminalBody, TerminalHeader } from ".";
import { executeCommand, shouldClearTerminal, shouldExitTerminal } from "../../../cmd";

interface TerminalProps {
   title?: string;
   className?: string;
   onClose?: () => void;
   initialCommands?: TerminalCommand[];
   prompt?: string;
   maxHistory?: number;
   autoFocus?: boolean;
   showTimestamp?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({
   title = "Terminal",
   className,
   onClose,
   initialCommands = [],
   prompt = "➜",
   maxHistory = 200,
   autoFocus = true,
   showTimestamp = false,
}) => {
   const [history, setHistory] = useState<TerminalCommand[]>(initialCommands);
   const [currentInput, setCurrentInput] = useState("");
   const [commandHistory, setCommandHistory] = useState<string[]>([]);
   const [historyIndex, setHistoryIndex] = useState(-1);
   const [isProcessing, setIsProcessing] = useState(false);

   const inputRef = useRef<HTMLInputElement>(null);
   const terminalBodyRef = useRef<HTMLDivElement>(null);

   useLayoutEffect(() => {
      if (terminalBodyRef.current) {
         terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
      }
   }, [history]);

   React.useEffect(() => {
      if (autoFocus) inputRef.current?.focus();
   }, [autoFocus]);

   const pushHistory = (cmd: TerminalCommand) => {
      setHistory((prev) => {
         const next = [...prev, cmd].slice(-maxHistory);
         return next;
      });
   };

   const replaceLastOutput = (output: React.ReactNode) => {
      setHistory((prev) => {
         if (prev.length === 0) return prev;
         const lastIndex = prev.length - 1;
         const copy = prev.slice();
         copy[lastIndex] = { ...copy[lastIndex], output };
         return copy;
      });
   };

   const handleCommand = async (command: string) => {
      const trimmed = command.trim();
      if (!trimmed) return;

      setIsProcessing(true);
      const timestamp = new Date();

      // Add command to history immediately
      pushHistory({
         input: trimmed,
         output: null,
         timestamp: showTimestamp ? timestamp : undefined,
      });

      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
      setCurrentInput("");

      try {
         // Execute command using our command system
         const result = await executeCommand(trimmed);

         // Check for special commands
         if (shouldClearTerminal(result)) {
            setHistory([]);
         } else if (shouldExitTerminal(result)) {
            onClose?.();
         } else {
            replaceLastOutput(result);
         }
      } catch (err) {
         replaceLastOutput(
            <div className="text-(--error)">
               Error: {err instanceof Error ? err.message : String(err)}
            </div>
         );
      } finally {
         setIsProcessing(false);
      }
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         e.preventDefault();
         handleCommand(currentInput);
      } else if (e.key === "ArrowUp") {
         e.preventDefault();
         if (commandHistory.length > 0) {
            const newIndex =
               historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setCurrentInput(commandHistory[newIndex]);
         }
      } else if (e.key === "ArrowDown") {
         e.preventDefault();
         if (historyIndex !== -1) {
            const newIndex = historyIndex + 1;
            if (newIndex >= commandHistory.length) {
               setHistoryIndex(-1);
               setCurrentInput("");
            } else {
               setHistoryIndex(newIndex);
               setCurrentInput(commandHistory[newIndex]);
            }
         }
      } else if (e.ctrlKey && (e.key === "l" || e.key === "L")) {
         e.preventDefault();
         setHistory([]);
      } else if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
         e.preventDefault();
         setCurrentInput("");
      }
   };

   const containerClass = clsx(
      "rounded-lg overflow-hidden",
      "border border-[var(--card-border)]",
      "transition-all duration-300",
      className
   );

   return (
      <div className={containerClass}>
         <TerminalHeader title={title} onClose={onClose} />
         <TerminalBody
            history={history}
            currentInput={currentInput}
            onInputChange={setCurrentInput}
            onKeyDown={handleKeyDown}
            inputRef={inputRef}
            terminalBodyRef={terminalBodyRef}
            prompt={prompt}
            isProcessing={isProcessing}
            showTimestamp={showTimestamp}
         />
      </div>
   );
};

export default Terminal;
