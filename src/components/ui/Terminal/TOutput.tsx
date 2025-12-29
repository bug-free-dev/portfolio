import React from "react";
import clsx from "clsx";


export const TerminalSuccess: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="flex items-start gap-2 text-(--success)">
      <span className="select-none">✓</span>
      <span className="flex-1">{children}</span>
   </div>
);

export const TerminalError: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="flex items-start gap-2 text-(--error)">
      <span className="select-none">✗</span>
      <span className="flex-1">{children}</span>
   </div>
);

export const TerminalWarning: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="flex items-start gap-2 text-(--warning)">
      <span className="select-none">⚠</span>
      <span className="flex-1">{children}</span>
   </div>
);

export const TerminalInfo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="flex items-start gap-2 text-(--info)">
      <span className="select-none">ℹ</span>
      <span className="flex-1">{children}</span>
   </div>
);

// ============================================
// Layout Components
// ============================================

export const TerminalSection: React.FC<{
   title?: string;
   children: React.ReactNode;
   className?: string;
}> = ({ title, children, className }) => (
   <div className={clsx("space-y-2", className)}>
      {title && (
         <div className="text-(--accent) font-semibold text-sm uppercase tracking-wider border-b border-(--card-border) pb-1">
            {title}
         </div>
      )}
      <div className="pl-2">{children}</div>
   </div>
);

export const TerminalList: React.FC<{
   items: (string | React.ReactNode)[];
   icon?: string;
   className?: string;
}> = ({ items, icon = "•", className }) => (
   <div className={clsx("space-y-1", className)}>
      {items.map((item, idx) => (
         <div key={idx} className="flex items-start gap-2">
            <span className="text-(--accent) select-none">{icon}</span>
            <span className="flex-1">{item}</span>
         </div>
      ))}
   </div>
);

export const TerminalCode: React.FC<{
   children: React.ReactNode;
   inline?: boolean;
}> = ({ children, inline = false }) => {
   if (inline) {
      return (
         <code className="px-2 py-0.5 bg-(--card-bg-soft) text-(--accent) rounded text-sm font-mono">
            {children}
         </code>
      );
   }

   return (
      <pre className="p-3 bg-(--card-bg-soft) rounded-md overflow-x-auto border border-(--card-border)">
         <code className="text-(--accent) text-sm font-mono">{children}</code>
      </pre>
   );
};

// ============================================
// Content Components
// ============================================

export const TerminalTable: React.FC<{
   data: Array<{ label: string; value: string | React.ReactNode }>;
   className?: string;
}> = ({ data, className }) => (
   <div className={clsx("space-y-1.5", className)}>
      {data.map((row, idx) => (
         <div key={idx} className="flex gap-4">
            <span className="text-(--muted) min-w-30 font-semibold">{row.label}:</span>
            <span className="flex-1">{row.value}</span>
         </div>
      ))}
   </div>
);

export const TerminalLink: React.FC<{
   href: string;
   children: React.ReactNode;
   external?: boolean;
}> = ({ href, children, external = true }) => (
   <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-(--info) underline decoration-dotted hover:decoration-solid transition-all"
   >
      {children}
   </a>
);

export const TerminalDivider: React.FC<{ char?: string }> = ({ char = "─" }) => (
   <div className="text-(--card-border) select-none my-2">{char.repeat(50)}</div>
);

import { FiCheckCircle, FiXCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";

type Variant = "default" | "accent" | "muted" | "success" | "error" | "warning" | "info";

const variantStyles: Record<Variant, string> = {
   default: "bg-[var(--card-bg-soft)] border-[var(--card-border)]",
   accent: "bg-[var(--accent)]/10 border-[var(--accent)]",
   muted: "bg-transparent border-[var(--muted)]",

   success: "bg-[var(--success)]/10 border-[var(--success)]",
   error: "bg-[var(--error)]/10 border-[var(--error)]",
   warning: "bg-[var(--warning)]/10 border-[var(--warning)]",
   info: "bg-[var(--info)]/10 border-[var(--info)]",
};

const variantIcons: Partial<Record<Variant, React.ReactNode>> = {
   success: <FiCheckCircle />,
   error: <FiXCircle />,
   warning: <FiAlertTriangle />,
   info: <FiInfo />,
};

export const TerminalCard: React.FC<{
   title?: string;
   children: React.ReactNode;
   variant?: Variant;
}> = ({ title, children, variant = "default" }) => {
   return (
      <div
         className={clsx(
            "border rounded-lg px-4 py-3 space-y-2",
            "text-sm leading-relaxed",
            variantStyles[variant]
         )}
      >
         {title && (
            <div className="flex items-center gap-2 font-semibold text-sm">
               {variantIcons[variant] && (
                  <span className="opacity-80">{variantIcons[variant]}</span>
               )}
               <span>{title}</span>
            </div>
         )}

         <div className="text-sm opacity-90">{children}</div>
      </div>
   );
};

export const TerminalBadge: React.FC<{
   children: React.ReactNode;
   variant?: "success" | "error" | "warning" | "info" | "default";
}> = ({ children, variant = "default" }) => {
   const variants = {
      success: "bg-[var(--success)] bg-opacity-20 text-[var(--success)] border-[var(--success)]",
      error: "bg-[var(--error)] bg-opacity-20 text-[var(--error)] border-[var(--error)]",
      warning: "bg-[var(--warning)] bg-opacity-20 text-[var(--warning)] border-[var(--warning)]",
      info: "bg-[var(--info)] bg-opacity-20 text-[var(--info)] border-[var(--info)]",
      default: "bg-[var(--card-bg-soft)] text-[var(--accent)] border-[var(--card-border)]",
   };

   return (
      <span
         className={clsx(
            "inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border",
            variants[variant]
         )}
      >
         {children}
      </span>
   );
};

export const TerminalGrid: React.FC<{
   children: React.ReactNode;
   cols?: 2 | 3 | 4;
}> = ({ children, cols = 2 }) => {
   const gridCols = {
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
   };

   return <div className={clsx("grid gap-3", gridCols[cols])}>{children}</div>;
};

export const TerminalProgress: React.FC<{
   label: string;
   value: number;
   max?: number;
   showValue?: boolean;
}> = ({ label, value, max = 100, showValue = true }) => {
   const percentage = (value / max) * 100;

   return (
      <div className="space-y-1">
         <div className="flex items-center justify-between text-sm">
            <span>{label}</span>
            {showValue && <span className="text-(--muted) text-xs">{value}%</span>}
         </div>
         <div className="h-1.5 bg-(--card-bg-soft) rounded-full overflow-hidden border border-(--card-border)">
            <div
               className="h-full bg-(--accent) transition-all duration-500 ease-out"
               style={{ width: `${percentage}%` }}
            />
         </div>
      </div>
   );
};

export const TerminalEmptyState: React.FC<{
   icon?: string;
   message: string;
}> = ({ icon = "📭", message }) => (
   <div className="flex flex-col items-center justify-center py-8 text-(--muted)">
      <span className="text-4xl mb-2">{icon}</span>
      <span className="text-sm">{message}</span>
   </div>
);