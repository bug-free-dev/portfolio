import React from "react";
import clsx from "clsx";
import { FiFolder, FiStar, FiGitBranch, FiExternalLink, FiGithub } from "react-icons/fi";
import { TerminalBadge } from "../Terminal";
import type { Project } from "../../../data";

export interface ProjectCardProps {
   project: Project;
   onOpen?: (project: Project) => void;
   variant?: "default" | "compact";
   interactive?: boolean;
   showLinks?: boolean;
   showStats?: boolean;
   className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
   project,
   onOpen,
   variant = "default",
   interactive = true,
   showLinks = true,
   showStats = true,
   className,
}) => {
   const { name, description, tech, status, links, stats } = project;

   return (
      <div
         role={interactive ? "button" : undefined}
         onClick={() => interactive && onOpen?.(project)}
         className={clsx(
            "group relative rounded-xl border-2 bg-(--card-bg)",
            "border-(--card-border) transition-all",
            interactive && "cursor-pointer hover:-translate-y-1 hover:shadow-(--shadow-md)",
            "animate-fade-in-up",
            variant === "compact" ? "p-4" : "p-6",
            className
         )}
      >
         {/* Header */}
         <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
               <FiFolder className="text-2xl text-(--terminal-accent) group-hover:rotate-6 transition-transform" />
               <h3 className="font-bold truncate">{name}</h3>
            </div>

            <TerminalBadge
               variant={status === "live" ? "success" : status === "wip" ? "warning" : "default"}
            >
               {status.toUpperCase()}
            </TerminalBadge>
         </div>

         {/* Description */}
         <p className="mt-3 text-sm text-(--muted) line-clamp-2">{description}</p>

         {/* Tech */}
         <div className="mt-4 flex flex-wrap gap-2">
            {tech.slice(0, variant === "compact" ? 3 : 4).map((t, i) => (
               <TerminalBadge key={i} variant="info">
                  {t}
               </TerminalBadge>
            ))}
            {tech.length > 4 && <TerminalBadge variant="default">+{tech.length - 4}</TerminalBadge>}
         </div>

         {/* Footer */}
         {(showStats || showLinks) && (
            <div className="mt-4 pt-3 border-t border-(--card-border) flex items-center justify-between">
               {showStats && (
                  <div className="flex items-center gap-4 text-xs text-(--muted)">
                     {stats?.stars !== undefined && (
                        <span className="flex items-center gap-1">
                           <FiStar /> {stats.stars}
                        </span>
                     )}
                     {stats?.forks !== undefined && (
                        <span className="flex items-center gap-1">
                           <FiGitBranch /> {stats.forks}
                        </span>
                     )}
                  </div>
               )}

               {showLinks && (
                  <div className="flex items-center gap-2">
                     {links?.github && (
                        <a
                           href={links.github}
                           onClick={(e) => e.stopPropagation()}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-(--terminal-accent) hover:text-(--info)"
                        >
                           <FiGithub />
                        </a>
                     )}
                     {links?.live && (
                        <a
                           href={links.live}
                           onClick={(e) => e.stopPropagation()}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-(--terminal-accent) hover:text-(--info)"
                        >
                           <FiExternalLink />
                        </a>
                     )}
                  </div>
               )}
            </div>
         )}
      </div>
   );
};
