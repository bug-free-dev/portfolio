import { FiFolder } from "react-icons/fi";

export const TerminalCode: React.FC<{
   children: React.ReactNode;
   inline?: boolean;
}> = ({ children, inline = false }) => {
   if (inline) {
      return (
         <code className="px-2 py-0.5 bg-(--card-bg-soft) text-(--terminal-accent) border border-(--card-border) rounded text-xs font-mono">
            {children}
         </code>
      );
   }

   return (
      <pre className="p-4 bg-(--card-bg-soft) rounded border-2 border-(--card-border) overflow-x-auto">
         <code className="text-(--terminal-accent) text-sm font-mono">{children}</code>
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
