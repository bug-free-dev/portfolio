import clsx from "clsx";
import { FiCheckCircle, FiXCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";

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
            "border-2 rounded-lg px-4 py-3",
            "text-sm leading-relaxed",
            "shadow-(--shadow-md)",
            cardVariantStyles[variant],
            className
         )}
      >
         {title && (
            <div className="flex items-center gap-2 font-semibold text-sm mb-2 pb-2 border-b border-(--card-border)">
               {cardVariantIcons[variant] && (
                  <span className="text-(--terminal-accent)">{cardVariantIcons[variant]}</span>
               )}
               <span>{title}</span>
            </div>
         )}

         <div className="text-sm">{children}</div>
      </div>
   );
};
