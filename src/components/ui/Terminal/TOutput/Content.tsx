import { FiFolder } from "react-icons/fi";
import React from "react";
import clsx from "clsx";

interface TerminalCodeProps {
   children: React.ReactNode;
   inline?: boolean;
   className?: string;
}

export const TerminalCode: React.FC<TerminalCodeProps> = ({
   children,
   inline = false,
   className,
}) => {
   if (inline) {
      return (
         <code
            className={clsx(
               "inline-flex items-center gap-1",
               "px-1.5 py-0.5",
               "bg-(--card-bg-soft) text-(--terminal-accent)",
               "border border-(--card-border) rounded",
               "text-xs font-mono font-medium",
               "whitespace-nowrap",
               "transition-colors",
               "hover:bg-(--card-bg) shadow-(--shadow-sm)",
               className
            )}
         >
            {children}
         </code>
      );
   }

   return (
      <pre
         className={clsx(
            "p-4 bg-(--card-bg-soft) rounded-lg",
            "border border-(--card-border)",
            "overflow-x-auto",
            "transition-colors",
            "hover:border-(--accent)/30",
            className
         )}
      >
         <code className="text-(--terminal-accent) text-sm font-mono leading-relaxed">
            {children}
         </code>
      </pre>
   );
};

export const TerminalDivider: React.FC = () => <div className="h-px bg-(--card-border) my-4" />;


export const TerminalEmptyState: React.FC<{
   icon?: React.ReactNode;
   message: string;
}> = ({ icon = <FiFolder className="text-4xl" />, message }) => (
   <div className="flex flex-col items-center justify-center py-8 text-(--muted)">
      <div className="mb-3 text-(--terminal-accent)">{icon}</div>
      <span className="text-sm">{message}</span>
   </div>
);
