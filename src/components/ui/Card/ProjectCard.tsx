import { FiFolder, FiStar, FiGitBranch, FiGitCommit, FiExternalLink } from "react-icons/fi";
import { TerminalBadge } from "../Terminal";
import type { Project } from "../../../data";

export const ProjectCard: React.FC<{
   project: Project;
}> = ({ project }) => {
   const { name, description, tech, status, links, stats } = project;
   return (
      <div className="border-2 border-(--card-border) rounded-lg p-4 bg-(--card-bg) hover:shadow-(--shadow-md) transition-all">
         <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
               <div className="flex items-center gap-2 flex-1 min-w-0">
                  <FiFolder className="text-lg text-(--terminal-accent) shrink-0" />
                  <h3 className="font-bold text-sm truncate">{name}</h3>
               </div>
               <TerminalBadge
                  variant={status === "live" ? "success" : status === "wip" ? "warning" : "default"}
               >
                  {status}
               </TerminalBadge>
            </div>

            <p className="text-xs text-(--muted) line-clamp-2">{description}</p>

            <div className="flex flex-wrap gap-1.5">
               {tech.slice(0, 3).map((t, idx) => (
                  <TerminalBadge variant="info" key={idx}>
                     {t}
                  </TerminalBadge>
               ))}
               {tech.length > 3 && <TerminalBadge variant="info">+{tech.length - 3}</TerminalBadge>}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-(--card-border)">
               <div className="flex items-center gap-3 text-xs text-(--muted)">
                  {stats?.stars !== undefined && (
                     <span className="flex items-center gap-1">
                        <FiStar className="text-xs" />
                        {stats.stars}
                     </span>
                  )}
                  {stats?.forks !== undefined && (
                     <span className="flex items-center gap-1">
                        <FiGitBranch className="text-xs" />
                        {stats.forks}
                     </span>
                  )}
               </div>
               <div className="flex items-center gap-2">
                  {links?.github && (
                     <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--terminal-accent) hover:text-(--info) transition-colors"
                     >
                        <FiGitCommit className="text-sm" />
                     </a>
                  )}
                  {links?.live && (
                     <a
                        href={links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--terminal-accent) hover:text-(--info) transition-colors"
                     >
                        <FiExternalLink className="text-sm" />
                     </a>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};
