import { clsx } from "clsx";

type BadgeVariant = "success" | "error" | "warning" | "info" | "default";
type BadgeSize = "sm" | "md" | "lg";

const badgeVariantStyles: Record<BadgeVariant, string> = {
   success: "bg-(--card-bg) text-(--success) border-(--success)",
   error: "bg-(--card-bg) text-(--error) border-(--error)",
   warning: "bg-(--card-bg) text-(--warning) border-(--warning)",
   info: "bg-(--card-bg) text-(--info) border-(--info)",
   default: "bg-(--card-bg) text-(--terminal-accent) border-(--card-border)",
};

const badgeSizeStyles: Record<BadgeSize, string> = {
   sm: "px-2 py-0.5 text-[10px] shadow-(--shadow-sm)",
   md: "px-2.5 py-1 text-xs shadow-(--shadow-md)",
   lg: "px-3 py-1.5 text-sm shadow-(--shadow-lg)",
};

export const TerminalBadge: React.FC<{
   children: React.ReactNode;
   variant?: BadgeVariant;
   size?: BadgeSize;
}> = ({ children, variant = "default", size = "md" }) => {
   return (
      <span
         className={clsx(
            "inline-flex items-center rounded border-2 font-bold uppercase tracking-wide",
            "",
            badgeVariantStyles[variant],
            badgeSizeStyles[size]
         )}
      >
         {children}
      </span>
   );
};
