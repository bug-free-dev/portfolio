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
               "max-w-full break-all",
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
            "w-full max-w-full",
            className
         )}
      >
         <code className="text-(--terminal-accent) text-sm font-mono leading-relaxed break-all">
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
   variant?: "section" | "terminal";
   className?: string;
}

export const TerminalDivider: React.FC<TerminalDividerProps> = ({
   label,
   sectionId,
   lineColor = "var(--card-border)",
   badgeColor,
   thickness = 2,
   variant = "section",
   className,
}) => {
   return (
      <div
         id={sectionId}
         className={clsx(
            "relative w-full max-w-full mx-auto px-2 sm:px-6 flex items-center justify-center min-w-0",
            variant === "section" && "my-6 sm:my-10",
            variant === "terminal" && "my-2 sm:my-3",
            className
         )}
      >
         {/* Left Line */}
         <div
            className="min-w-0"
            style={{
               height: thickness,
               backgroundColor: lineColor,
               minWidth: "60px",
            }}
         />

         {/* Badge */}
         {label && (
            <div className="mx-2 sm:mx-3 shrink-0">
               <TerminalBadge color={badgeColor}>{label}</TerminalBadge>
            </div>
         )}

         {/* Right Line */}
         <div
            className="min-w-0"
            style={{
               height: thickness,
               backgroundColor: lineColor,
               minWidth: "60px",
            }}
         />
      </div>
   );
};


export const TerminalEmptyState: React.FC<{
   icon?: React.ReactNode;
   message: string;
}> = ({ icon = <FiFolder className="text-4xl" />, message }) => (
   <div className="flex flex-col items-center justify-center py-8 text-(--muted) w-full">
      <div className="mb-3 text-(--terminal-accent)">{icon}</div>
      <span className="text-sm wrap-break-word text-center px-4">{message}</span>
   </div>
);
