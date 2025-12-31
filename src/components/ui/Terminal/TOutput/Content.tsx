import { FiFolder } from "react-icons/fi";
import React from "react";
import clsx from "clsx";
import { TerminalBadge } from "./ui";

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

interface TerminalDividerProps {
   label?: string;
   sectionId?: string; 
   lineColor?: string;
   badgeColor?: string; 
   thickness?: number;
   className?: string;
}
export const TerminalDivider: React.FC<TerminalDividerProps> = ({
   label,
   sectionId,
   lineColor = "var(--card-border)",
   badgeColor,
   thickness = 2,
   className,
}) => {
   return (
      <div
         className={clsx(
            "relative max-w-6xl mx-auto my-16 px-6 flex items-center justify-center",
            className
         )}
         id={sectionId}
      >
         {/* Left Line */}
         <div
            className="flex-1"
            style={{
               height: thickness,
               backgroundColor: lineColor,
               minWidth: "100px",
            }}
         />

         {/* Badge */}
         {label && (
            <div className="mx-4 shrink-0">
               <TerminalBadge color={badgeColor}>{label}</TerminalBadge>
            </div>
         )}

         {/* Right Line */}
         <div
            className="flex-1"
            style={{
               height: thickness,
               backgroundColor: lineColor,
               minWidth: "100px",
            }}
         />
      </div>
   );
};


export const TerminalEmptyState: React.FC<{
   icon?: React.ReactNode;
   message: string;
}> = ({ icon = <FiFolder className="text-4xl" />, message }) => (
   <div className="flex flex-col items-center justify-center py-8 text-(--muted)">
      <div className="mb-3 text-(--terminal-accent)">{icon}</div>
      <span className="text-sm">{message}</span>
   </div>
);
