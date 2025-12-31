import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
   FiX,
   FiExternalLink,
   FiGithub,
   FiZap,
   FiFolder,
   FiCheckCircle,
   FiClock,
} from "react-icons/fi";
import type { Project } from "../../data";
import { TerminalBadge } from "./Terminal";
import { Card, CardBody } from "./Card";

interface ProjectOverlayProps {
   project: Project;
   onClose: () => void;
}

export const ProjectOverlay: React.FC<ProjectOverlayProps> = ({ project, onClose }) => {
   const [isAnimating, setIsAnimating] = useState(false);

   useEffect(() => {
      (() => setIsAnimating(true))();
      document.body.style.overflow = "hidden";
      return () => {
         document.body.style.overflow = "unset";
      };
   }, []);

   return (
      <div
         className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in-up"
         onClick={onClose}
      >
         <div
            className={clsx(
               "relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-(--card-bg) border-2 border-(--card-border) transition-all duration-500",
               isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            )}
            onClick={(e) => e.stopPropagation()}
         >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-(--card-bg) border-b-2 border-(--card-border) p-6 flex items-start justify-between rounded-t-2xl">
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                     <FiFolder className="text-3xl text-(--accent)" />
                     <h2 className="text-3xl font-bold">{project.name}</h2>
                  </div>
                  <p className="text-(--accent) font-semibold text-lg">{project.tagline}</p>
               </div>
               <button
                  onClick={onClose}
                  className="p-2 hover:bg-(--card-bg-soft) rounded-lg transition-colors group"
               >
                  <FiX className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
               </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6 space-y-6 scrollbar" style={{ overscrollBehavior: "contain" }}>
               {/* Status & Year */}
               <div className="p-4 flex flex-wrap gap-3 items-center">
                  {project.status === "live" && (
                     <TerminalBadge variant="success" size="lg">
                        <span className="flex items-center gap-2">
                           <FiCheckCircle /> LIVE
                        </span>
                     </TerminalBadge>
                  )}
                  {project.status === "wip" && (
                     <TerminalBadge variant="warning" size="lg">
                        <span className="flex items-center gap-2">
                           <FiClock /> IN PROGRESS
                        </span>
                     </TerminalBadge>
                  )}
                  <TerminalBadge variant="default" size="lg">
                     {project.year}
                  </TerminalBadge>
               </div>

               {/* Description */}
               {project.longDescription && (
                  <Card className="p-6 bg-(--card-bg-soft) border-2 border-(--card-border)">
                     <CardBody>
                        {project.longDescription.map((para, idx) => (
                           <p key={idx} className="leading-relaxed text-(--app-fg) mb-3">
                              {para}
                           </p>
                        ))}
                     </CardBody>
                  </Card>
               )}

               {/* Tech Stack */}
               <Card className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                     <FiZap className="text-(--accent)" />
                     <h3 className="text-xl font-bold">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                     {project.tech.map((tech, idx) => (
                        <TerminalBadge key={idx} color={`hsl(${(idx * 60) % 360},70%,80%)`}>
                           {tech}
                        </TerminalBadge>
                     ))}
                  </div>
               </Card>

               {/* Key Features */}
               {project.highlights && (
                  <Card className="p-6 bg-(--card-bg-soft) border-2 border-(--card-border)">
                     <div className="flex items-center gap-2 mb-4">
                        <FiCheckCircle className="text-(--accent)" />
                        <h3 className="text-xl font-bold">Key Features</h3>
                     </div>
                     <div className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                           <div key={idx} className="flex items-start gap-3 group">
                              <div className="w-2 h-2 rounded-full bg-(--accent) mt-2 shrink-0 group-hover:scale-150 group-hover:shadow-[0_0_8px_var(--accent)] transition-all" />
                              <p className="leading-relaxed">{highlight}</p>
                           </div>
                        ))}
                     </div>
                  </Card>
               )}

               {/* Links */}
               <div className="p-4 flex gap-3 flex-wrap">
                  {project.links.live && (
                     <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-(--btn-bg) border-2 border-(--card-border) rounded-lg font-bold hover:shadow-(--shadow-lg) hover:-translate-y-1 transition-all"
                     >
                        <FiExternalLink /> Live Demo
                     </a>
                  )}
                  {project.links.github && (
                     <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-(--card-bg) border-2 border-(--card-border) rounded-lg font-bold hover:shadow-(--shadow-lg) hover:-translate-y-1 transition-all"
                     >
                        <FiGithub /> Source Code
                     </a>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};
