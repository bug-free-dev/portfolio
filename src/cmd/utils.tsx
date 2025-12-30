import React from "react";
import { getCommand } from "./commandMap";
import { TerminalCard } from "../components/ui/Terminal";


export const executeCommand = async (input: string): Promise<React.ReactNode> => {
   const trimmed = input.trim();

   if (!trimmed) {
      return null;
   }

   const parts = trimmed.split(/\s+/);
   const cmd = parts[0].toLowerCase();
   const args = parts.slice(1);

   const command = getCommand(cmd);

   if (!command) {
      return (
         <TerminalCard variant="error">
            <div className="text-sm space-y-1">
               <div>
                  Command not found: <code className="text-(--error)">{cmd}</code>
               </div>
               <div className="text-xs text-(--muted)">
                  Type <code className="text-(--accent)">help</code> to see available commands
               </div>
            </div>
         </TerminalCard>
      );
   }

   try {
      const result = command.fn(args);

      if (result instanceof Promise) {
         return await result;
      }

      return result;
   } catch (error) {
      return (
         <TerminalCard variant="error">
            <div className="text-sm">
               Error executing command: {error instanceof Error ? error.message : String(error)}
            </div>
         </TerminalCard>
      );
   }
};

/**
 * Get command suggestions based on partial input
 */
export const getCommandSuggestions = (partial: string): string[] => {
   if (!partial) return [];

   const lowerPartial = partial.toLowerCase();

   return Object.keys(getCommand)
      .filter((cmd) => cmd.startsWith(lowerPartial))
      .slice(0, 5);
};

/**
 * Format timestamp for terminal display
 */
export const formatTimestamp = (date: Date): string => {
   return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
   });
};

/**
 * Parse command for special cases
 */
export const parseCommand = (input: string): { cmd: string; args: string[] } => {
   const trimmed = input.trim();
   const parts = trimmed.split(/\s+/);

   return {
      cmd: parts[0]?.toLowerCase() || "",
      args: parts.slice(1),
   };
};

/**
 * Check if output should clear the terminal
 */
export const shouldClearTerminal = (output: React.ReactNode): boolean => {
   return output === "CLEAR";
};

/**
 * Check if output should close the terminal
 */
export const shouldExitTerminal = (output: React.ReactNode): boolean => {
   return output === "EXIT";
};

/**
 * Sanitize user input
 */
export const sanitizeInput = (input: string): string => {
   return input.trim().replace(/[<>]/g, "");
};
