import React, { useEffect } from "react";
import clsx from "clsx";
import { FiX, FiExternalLink, FiGithub, FiZap } from "react-icons/fi";
import type { Project } from "../../data";
import { TerminalBadge } from "./Terminal";


interface ProjectOverlayProps {
   project: Project;
   onClose: () => void;
}

export const ProjectOverlay: React.FC<ProjectOverlayProps> = ({ project, onClose }) => {
   useEffect(() => {
      const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      document.addEventListener("keydown", esc);
      document.body.style.overflow = "hidden";
      return () => {
         document.removeEventListener("keydown", esc);
         document.body.style.overflow = "";
      };
   }, [onClose]);

   return (
      <div
         className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up"
         onClick={onClose}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
               "w-full max-w-4xl max-h-[90vh] overflow-y-auto",
               "bg-(--card-bg) border-2 border-(--card-border)",
               "rounded-2xl shadow-xl animate-scale-in"
            )}
         >
            {/* Header */}
            <div className="sticky top-0 bg-(--card-bg) border-b border-(--card-border) p-5 flex justify-between">
               <div>
                  <h2 className="text-2xl font-bold">{project.name}</h2>
                  <p className="text-(--muted)">{project.tagline}</p>
               </div>
               <button onClick={onClose}>
                  <FiX className="text-2xl hover:rotate-90 transition-transform" />
               </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
               <TerminalBadge variant="info" size="lg">
                  <FiZap /> Tech Stack
               </TerminalBadge>

               <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                     <TerminalBadge key={i} variant="warning">
                        {t}
                     </TerminalBadge>
                  ))}
               </div>

               {project.longDescription && (
                  <div className="space-y-3 text-sm leading-relaxed">
                     {project.longDescription.map((p, i) => (
                        <p key={i}>{p}</p>
                     ))}
                  </div>
               )}

               <div className="flex gap-4">
                  {project.links?.live && (
                     <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                     >
                        <FiExternalLink /> Live
                     </a>
                  )}
                  {project.links?.github && (
                     <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                     >
                        <FiGithub /> Code
                     </a>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};
