import { FiExternalLink } from "react-icons/fi";

export const TerminalLink: React.FC<{
   href: string;
   children: React.ReactNode;
   external?: boolean;
}> = ({ href, children, external = true }) => (
   <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 text-(--info) hover:text-(--terminal-accent) transition-colors border-b border-dotted border-(--info) hover:border-(--terminal-accent)"
   >
      {children}
      {external && <FiExternalLink className="text-xs" />}
   </a>
);
