import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { projects, type Project } from "../../data";
import { ProjectCard } from "../ui/Card/ProjectCard";
import { ProjectOverlay } from "../ui/ProjectOverlay";

const Projects: React.FC = () => {
   const ref = useRef<HTMLElement>(null);
   const [visible, setVisible] = useState(false);
   const [active, setActive] = useState<Project | null>(null);

   useEffect(() => {
      const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
         threshold: 0.15,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      ref.current && obs.observe(ref.current);
      return () => obs.disconnect();
   }, []);

   return (
      <>
         <section id="projects" ref={ref} className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
            <header
               className={clsx(
                  "mb-12 transition-all",
                  visible ? "animate-fade-in-up" : "opacity-0"
               )}
            >
               <h2 className="text-4xl font-bold">Projects</h2>
               <p className="text-(--muted) mt-2">Click a project to explore more</p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
               {projects.map((p, i) => (
                  <div
                     key={p.id}
                     style={{ animationDelay: `${i * 120}ms` }}
                     className={clsx("opacity-0", visible && "animate-fade-in-up")}
                  >
                     <ProjectCard project={p} onOpen={setActive} />
                  </div>
               ))}
            </div>
         </section>

         {active && <ProjectOverlay project={active} onClose={() => setActive(null)} />}
      </>
   );
};

export default Projects;
