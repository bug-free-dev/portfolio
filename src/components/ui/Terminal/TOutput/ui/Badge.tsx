import { clsx } from "clsx";

export type BadgeVariant = "success" | "error" | "warning" | "info" | "default";
type BadgeSize = "sm" | "md" | "lg";

interface TerminalBadgeProps {
   children: React.ReactNode;
   variant?: BadgeVariant;
   size?: BadgeSize;
   color?: string;
   onClick?: () => void;
}

const badgeVariantStyles: Record<BadgeVariant, string> = {
   success: "text-(--success) border-(--success)",
   error: "text-(--error) border-(--error)",
   warning: "text-(--warning) border-(--warning)",
   info: "text-(--info) border-(--info)",
   default: "text-(--terminal-accent) border-(--card-border)",
};

const badgeSizeStyles: Record<BadgeSize, string> = {
   sm: "px-2 py-0.5 text-[10px] shadow-(--shadow-sm)",
   md: "px-2.5 py-1 text-xs shadow-(--shadow-md)",
   lg: "px-3 py-1.5 text-sm shadow-(--shadow-lg)",
};

export const TerminalBadge: React.FC<TerminalBadgeProps> = ({
   children,
   variant = "default",
   size = "md",
   color,
   onClick,
}) => {
   return (
      <span
         style={{
            ...(color
               ? {
                    color,
                    borderColor: color,
                 }
               : {}),
            cursor: onClick ? "pointer" : "default",
         }}
         className={clsx(
            "inline-flex items-center rounded border-2 font-bold uppercase tracking-wide",
            "bg-(--card-bg) animate-badge-pop",
            badgeVariantStyles[variant],
            badgeSizeStyles[size]
         )}
         onClick={onClick}
      >
         {children}
      </span>
   );
};
