import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { projects, type Project } from "../../data";
import { ProjectCard } from "../ui/Card/ProjectCard";
import { ProjectOverlay } from "../ui/ProjectOverlay";
import { Card, CardBody } from "../ui/Card";
import { TerminalBadge } from "../ui/Terminal";

const Projects: React.FC = () => {
   const sectionRef = useRef<HTMLElement>(null);
   const [isVisible, setIsVisible] = useState(false);
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
            }
         },
         { threshold: 0.1 }
      );

      if (sectionRef.current) {
         observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
   }, []);

   return (
      <>
         <section
            ref={sectionRef}
            className="relative max-w-4xl mx-auto px-6 py-20 scroll-mt-20 overflow-hidden"
         >
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-(--accent)/10 rounded-full blur-3xl animate-float animation-delay-200" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-(--accent)/10 rounded-full blur-3xl animate-float animation-delay-500" />

            <div className="relative z-10 space-y-12">
               {/* Header */}
               <div
                  className={clsx(
                     "transition-all duration-700 delay-100",
                     isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
                  )}
               >
                  <div className="flex items-center gap-4 mb-4">
                     <div className="h-1 w-12 bg-(--success) rounded-full" />
                     <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
                     <div className="h-1 flex-1 bg-lime-200 rounded-full" />
                  </div>
                  <p className="text-lg text-(--muted) mt-2">
                     Click on any project folder to explore in detail
                  </p>
               </div>

               {/* Projects Grid */}
               <div className={clsx(
                  "grid grid-cols-1 sm:grid-cols-2 gap-6",
                  isVisible ? "animate-scale-in" : "opacity-0"
               )}>
                  {projects.map((project) => (
                     <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
                  ))}
               </div>
            </div>

            {/* Pro Tip Card */}
            <Card
               className={clsx(
                  "backdrop-blur-sm mt-10",
                  isVisible ? "animate-fade-in-right opacity-100" : "opacity-0"
               )}
            >
               <CardBody className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-sm">
                     <span className="font-semibold text-(--accent)">💡 Pro tip</span>
                     <span className="text-(--muted)">
                        {" "}
                        — use terminal commands for more details
                     </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                     {/* General Projects Command */}
                     <TerminalBadge color="hsl(200,70%,80%)" variant="default">
                        projects
                     </TerminalBadge>

                     {/* Individual Project Commands */}
                        <TerminalBadge key={'firechat'} variant="warning">
                           {`project <name>`}
                        </TerminalBadge>
                  </div>
               </CardBody>
            </Card>
         </section>

         {/* Modal */}
         {selectedProject && (
            <ProjectOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />
         )}
      </>
   );
};

export default Projects;
