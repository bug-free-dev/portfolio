// src/components/ui/Terminal/TOutput/ui/Cards.tsx
import clsx from "clsx";
import { useEffect, useRef } from "react";
import {
   FiCheckCircle,
   FiXCircle,
   FiAlertTriangle,
   FiInfo,
   FiAlertCircle,
   FiMoon,
   FiSun,
   FiCheck,
} from "react-icons/fi";
import { useTheme } from "../../../../../theme/useTheme";
import { TerminalCode } from "../Content";
import { TerminalBadge } from "./Badge";

type CardVariant = "default" | "accent" | "muted" | "success" | "error" | "warning" | "info";

const cardVariantStyles: Record<CardVariant, string> = {
   default: "bg-(--card-bg) border-(--card-border)",
   accent: "bg-(--card-bg) border-(--terminal-accent)",
   muted: "bg-(--card-bg-soft) border-(--card-border)",
   success: "bg-(--card-bg) border-(--success)",
   error: "bg-(--card-bg) border-(--error)",
   warning: "bg-(--card-bg) border-(--warning)",
   info: "bg-(--card-bg) border-(--info)",
};

const cardVariantIcons: Partial<Record<CardVariant, React.ReactNode>> = {
   success: <FiCheckCircle />,
   error: <FiXCircle />,
   warning: <FiAlertTriangle />,
   info: <FiInfo />,
};

export const TerminalCard: React.FC<{
   title?: string;
   children: React.ReactNode;
   variant?: CardVariant;
   className?: string;
}> = ({ title, children, variant = "default", className }) => {
   return (
      <div
         className={clsx(
            "border-2 rounded-lg px-3 sm:px-4 py-3",
            "text-sm leading-relaxed",
            "shadow-(--shadow-md)",
            "w-full min-w-0",
            cardVariantStyles[variant],
            className
         )}
      >
         {title && (
            <div className="flex items-center gap-2 font-semibold text-sm mb-2 pb-2 border-b border-(--card-border) wrap-break-words">
               {cardVariantIcons[variant] && (
                  <span className="text-(--terminal-accent) shrink-0">
                     {cardVariantIcons[variant]}
                  </span>
               )}
               <span className="wrap-break-words">{title}</span>
            </div>
         )}

         <div className="text-sm w-full min-w-0 [&>*]:wrap-break-words">{children}</div>
      </div>
   );
};

interface ThemeCommandProps {
   args: string[];
}

export const TthemeCard: React.FC<ThemeCommandProps> = ({ args }) => {
   const { theme, toggleTheme } = useTheme();
   const target = args[0]?.toLowerCase();
   const hasToggledRef = useRef(false);

   useEffect(() => {
      if (!target || hasToggledRef.current) return;

      const needsToggle =
         (target === "dark" && theme !== "dark") || (target === "light" && theme !== "light");

      if (needsToggle) {
         toggleTheme();
         hasToggledRef.current = true;
      }
   }, [target, theme, toggleTheme]);

   if (target && target !== "dark" && target !== "light") {
      return (
         <TerminalCard variant="error">
            <div className="space-y-2 w-full min-w-0">
               <div className="flex items-center gap-2 font-semibold text-sm">
                  <FiAlertCircle className="text-base shrink-0" />
                  <span className="wrap-break-words">Invalid theme argument</span>
               </div>
               <div className="text-sm text-(--muted) wrap-break-words">
                  Usage: <TerminalCode inline>theme [light|dark]</TerminalCode>
               </div>
            </div>
         </TerminalCard>
      );
   }

   if (target) {
      return (
         <TerminalCard variant="success">
            <div className="space-y-2 w-full min-w-0">
               <div className="flex items-center gap-2 font-semibold text-sm">
                  <FiCheck className="text-base shrink-0" />
                  <span>Theme updated</span>
               </div>
               <div className="flex items-center gap-2 text-sm flex-wrap">
                  <span className="text-(--muted)">Switched to</span>
                  <TerminalBadge variant={theme === "dark" ? "info" : "warning"}>
                     {theme === "dark" ? <FiMoon className="mr-1" /> : <FiSun className="mr-1" />}
                     {theme}
                  </TerminalBadge>
               </div>
            </div>
         </TerminalCard>
      );
   }

   return (
      <TerminalCard variant="muted">
         <div className="space-y-3 w-full min-w-0">
            <div className="flex items-center gap-2 font-semibold text-sm">
               {theme === "dark" ? (
                  <FiMoon className="text-base text-(--accent) shrink-0" />
               ) : (
                  <FiSun className="text-base text-(--accent) shrink-0" />
               )}
               <span>Theme Settings</span>
            </div>

            <div className="flex items-center gap-2 text-sm flex-wrap">
               <span className="text-(--muted)">Current theme:</span>
               <TerminalBadge variant={theme === "dark" ? "info" : "warning"}>
                  {theme}
               </TerminalBadge>
            </div>

            <div className="pt-2 border-t border-(--card-border) w-full min-w-0">
               <div className="text-xs text-(--muted) space-y-1">
                  <div>Change theme:</div>
                  <div className="flex gap-2 flex-wrap">
                     <TerminalCode inline>theme light</TerminalCode>
                     <TerminalCode inline>theme dark</TerminalCode>
                  </div>
               </div>
            </div>
         </div>
      </TerminalCard>
   );
};
