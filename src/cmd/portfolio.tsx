import { projects, skills, skillsByCategory } from "../data";
import {
   TerminalSection,
   TerminalList,
   TerminalBadge,
   TerminalProgress,
   TerminalLink,
   TerminalCard,
   TerminalEmptyState,
   TerminalGrid,
   TerminalCode,
} from "../components/ui/Terminal/TOutput";
import { FiFolder } from "react-icons/fi";
import { ProjectCard } from "../components/ui/Card";

export const projectsCmd = () => (
   <div className="space-y-4">
      <TerminalSection title="Featured Projects">
         <TerminalGrid cols={2}>
            {projects.map((project) => (
               <ProjectCard key={project.id} project={project} />
            ))}
         </TerminalGrid>
      </TerminalSection>

      <TerminalCard variant="muted">
         <div className="text-sm">
            Use <TerminalCode inline>project &lt;name&gt;</TerminalCode> for detailed view.
            Available: {projects.map((p) => p.id).join(", ")}
         </div>
      </TerminalCard>
   </div>
);

export const projectCmd = (args: string[]) => {
   const projectName = args[0]?.toLowerCase();

   if (!projectName) {
      return (
         <div className="space-y-3">
            <TerminalCard variant="accent">
               <div className="text-sm space-y-1">
                  <div className="font-semibold">Usage</div>
                  <TerminalCode inline>project &lt;name&gt;</TerminalCode>
               </div>
            </TerminalCard>
            <div className="text-xs text-(--muted)">
               Available: {projects.map((p) => p.id).join(", ")}
            </div>
         </div>
      );
   }

   const project = projects.find((p) => p.id.toLowerCase() === projectName);

   if (!project) {
      return (
         <TerminalEmptyState
            icon={<FiFolder className="text-4xl" />}
            message={`Project "${projectName}" not found. Available: ${projects
               .map((p) => p.id)
               .join(", ")}`}
         />
      );
   }

   return (
      <div className="space-y-4">
         <TerminalSection title={project.name}>
            <div className="space-y-3">
               <div className="flex items-center gap-2 flex-wrap">
                  <TerminalBadge
                     variant={
                        project.status === "live"
                           ? "success"
                           : project.status === "wip"
                           ? "warning"
                           : "default"
                     }
                  >
                     {project.status.toUpperCase()}
                  </TerminalBadge>
                  <span className="text-sm text-(--muted)">Built in {project.year}</span>
               </div>

               <p className="text-sm font-semibold text-(--accent)">{project.tagline}</p>

               {project.longDescription && (
                  <div className="space-y-2">
                     {project.longDescription.map((para, idx) => (
                        <p key={idx} className="text-sm leading-relaxed text-(--app-fg)">
                           {para}
                        </p>
                     ))}
                  </div>
               )}
            </div>
         </TerminalSection>

         <TerminalSection title="Tech Stack">
            <div className="flex flex-wrap gap-2">
               {project.tech.map((tech, idx) => (
                  <TerminalBadge key={idx} variant="info">
                     {tech}
                  </TerminalBadge>
               ))}
            </div>
         </TerminalSection>

         {project.highlights && (
            <>
               
               <TerminalSection title="Key Features">
                  <TerminalList items={project.highlights} />
               </TerminalSection>
            </>
         )}

         

         <TerminalCard variant="default">
            <div className="space-y-2">
               <div className="font-semibold text-sm">Links</div>
               <div className="flex gap-4 flex-wrap">
                  {project.links.live && (
                     <TerminalLink href={project.links.live}>Live Demo</TerminalLink>
                  )}
                  {project.links.github && (
                     <TerminalLink href={project.links.github}>Source Code</TerminalLink>
                  )}
               </div>
            </div>
         </TerminalCard>

         {project.stats && (
            <TerminalCard variant="accent">
               <div className="flex items-center gap-6 text-sm">
                  <span className="font-mono">{project.stats.stars} stars</span>
                  <span className="font-mono">{project.stats.forks} forks</span>
               </div>
            </TerminalCard>
         )}
      </div>
   );
};

export const skillsCmd = () => (
   <div className="space-y-6">
      <TerminalSection title="Technical Skills">
         {skillsByCategory.map((category) => (
            <div key={category.key} className="space-y-3 mb-6">
               {/* Category Header */}
               <div className="flex items-center gap-2 text-sm font-semibold text-(--accent) uppercase tracking-wide">
                  <category.icon className="size-4 opacity-80" />
                  <span>{category.title}</span>
               </div>

               {/* Skills */}
               <div className="space-y-3">
                  {category.skills.map((skill) => {
                     const Icon = skill.icon;
                     return (
                        <TerminalProgress
                           key={skill.name}
                           label={
                              <span className="flex items-center gap-2">
                                 <Icon className="size-4 opacity-80" />
                                 <span>{skill.name}</span>
                              </span>
                           }
                           value={skill.level}
                           showValue
                        />
                     );
                  })}
               </div>
            </div>
         ))}
      </TerminalSection>

      {/* Learning & Growth */}
      <TerminalCard variant="muted">
         <div className="space-y-3">
            <div className="font-semibold text-sm">Learning & Growth</div>

            <TerminalList
               items={[
                  "Currently strengthening design thinking, core engineering skills, and first-principles reasoning",
                  "Learning Java as part of my academic curriculum",
                  "Actively exploring new technologies to build tools that make people's lives easier and better",
                  "Deepening understanding of DevOps, system design, and developer experience",
                  "Always open to guidance, feedback, and learning from experienced engineers",
               ]}
            />
         </div>
      </TerminalCard>
   </div>
);

export const github = () => {
   window.open("https://github.com/bug-free-dev", "_blank");
   return (
      <TerminalCard variant="success">
         <div className="text-sm">Opening GitHub profile in new tab...</div>
      </TerminalCard>
   );
};

export const stats = () => (
   <div className="space-y-4">
      <TerminalSection title="Portfolio Stats">
         <TerminalGrid cols={2}>
            <TerminalCard variant="accent">
               <div className="text-center">
                  <div className="text-3xl font-bold text-(--accent)">{projects.length}</div>
                  <div className="text-(--muted) text-xs mt-1">Projects Built</div>
               </div>
            </TerminalCard>
            <TerminalCard variant="accent">
               <div className="text-center">
                  <div className="text-3xl font-bold text-(--accent)">{skills.length}</div>
                  <div className="text-(--muted) text-xs mt-1">Technologies</div>
               </div>
            </TerminalCard>
            <TerminalCard variant="success">
               <div className="text-center">
                  <div className="text-3xl font-bold text-(--success)">
                     {projects.filter((p) => p.status === "live").length}
                  </div>
                  <div className="text-(--muted) text-xs mt-1">Live Apps</div>
               </div>
            </TerminalCard>
            <TerminalCard variant="info">
               <div className="text-center">
                  <div className="text-3xl font-bold text-(--info)">100%</div>
                  <div className="text-(--muted) text-xs mt-1">Passion</div>
               </div>
            </TerminalCard>
         </TerminalGrid>
      </TerminalSection>
   </div>
);
