import { clsx } from "clsx";
import { FiChevronRight } from "react-icons/fi";

export const TerminalSection: React.FC<{
   title?: string;
   children: React.ReactNode;
   className?: string;
}> = ({ title, children, className }) => (
   <div className={clsx("space-y-3", className)}>
      {title && (
         <div className="flex items-center gap-2 text-(--terminal-accent) font-semibold text-xs uppercase tracking-wider border-b-2 border-(--card-border) pb-2">
            <FiChevronRight className="text-sm" />
            <span>{title}</span>
         </div>
      )}
      <div className="pl-1">{children}</div>
   </div>
);


export const TerminalGrid: React.FC<{
   children: React.ReactNode;
   cols?: 2 | 3 | 4;
}> = ({ children, cols = 2 }) => {
   const gridCols = {
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
   };

   return <div className={clsx("grid gap-4", gridCols[cols])}>{children}</div>;
};


export const TerminalList: React.FC<{
   items: (string | React.ReactNode)[];
   icon?: React.ReactNode;
   className?: string;
}> = ({ items, icon, className }) => (
   <div className={clsx("space-y-2", className)}>
      {items.map((item, idx) => (
         <div key={idx} className="flex items-start gap-2 text-sm">
            <span className="text-(--terminal-accent) mt-0.5 shrink-0">
               {icon || <FiChevronRight className="text-xs" />}
            </span>
            <span className="flex-1">{item}</span>
         </div>
      ))}
   </div>
);


export const TerminalTable: React.FC<{
   data: Array<{ label: string; value: string | React.ReactNode }>;
   className?: string;
}> = ({ data, className }) => (
   <div className={clsx("space-y-2", className)}>
      {data.map((row, idx) => (
         <div
            key={idx}
            className="flex gap-4 text-sm border-b border-(--card-border) pb-2 last:border-0"
         >
            <span className="text-(--muted) min-w-32 font-semibold">{row.label}</span>
            <span className="flex-1 text-(--app-fg)">{row.value}</span>
         </div>
      ))}
   </div>
);



export const CommandGroup: React.FC<{
   title: string;
   commands: Array<{ name: string; description: string }>;
}> = ({ title, commands }) => (
   <div className="space-y-2">
      <div className="text-xs font-bold uppercase tracking-wider text-(--terminal-accent) border-b-2 border-(--card-border) pb-1">
         {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
         {commands.map((cmd, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm">
               <code className="text-(--terminal-accent) font-mono font-semibold min-w-24">
                  {cmd.name}
               </code>
               <span className="text-(--muted) text-xs">{cmd.description}</span>
            </div>
         ))}
      </div>
   </div>
);

