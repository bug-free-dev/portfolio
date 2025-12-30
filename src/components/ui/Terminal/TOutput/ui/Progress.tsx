import { useState, useEffect } from "react";

export const TerminalProgress: React.FC<{
   label: string;
   value: number;
   max?: number;
   showValue?: boolean;
}> = ({ label, value, max = 100, showValue = true }) => {
   const percentage = Math.min((value / max) * 100, 100);
   const [animated, setAnimated] = useState(false);

   useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnimated(false);
      const t = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(t);
   }, [percentage]);

   return (
      <div className="space-y-2">
         <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{label}</span>
            {showValue && (
               <span className="text-(--muted) text-xs font-mono">{Math.round(percentage)}%</span>
            )}
         </div>

         {/* Track */}
         <div className="h-2 bg-(--card-bg-soft) overflow-hidden border border-(--card-border) shadow-(--shadow-sm) rounded">
            {/* Fill */}
            <div
               className="h-full bg-(--terminal-accent)"
               style={{
                  width: `${percentage}%`,
                  transform: animated ? "translateX(0)" : "translateX(-100%)",
                  transition: "transform 700ms cubic-bezier(.2,.9,.2,1)",
                  boxShadow: "var(--shadow-sm)",
               }}
               role="progressbar"
               aria-valuemin={0}
               aria-valuemax={max}
               aria-valuenow={Math.round(percentage)}
            />
         </div>
      </div>
   );
};
