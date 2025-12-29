import { projects, skills, skillsByCategory } from "../data";
import { Card, CardHeader, CardBody, CardFooter } from "../components/ui/Card";
import {
   TerminalSection,
   TerminalList,
   TerminalBadge,
   TerminalProgress,
   TerminalDivider,
   TerminalLink,
   TerminalCard,
   TerminalEmptyState,
} from "../components/ui/Terminal/TOutput";

export const projectsCmd = () => (
   <div className="space-y-4">
      <TerminalSection title="Featured Projects">
         <div className="space-y-4">
            {projects.map((project) => (
               <Card key={project.id} variant="solid" className="rounded-md">
                  <CardHeader className="flex items-start justify-between">
                     <div className="space-y-1">
                        <div className="flex items-center gap-2">
                           <span className="text-base font-bold">{project.name}</span>
                           <TerminalBadge
                              variant={
                                 project.status === "live"
                                    ? "success"
                                    : project.status === "wip"
                                    ? "warning"
                                    : "default"
                              }
                           >
                              {project.status}
                           </TerminalBadge>
                        </div>
                        <div className="text-(--muted)-xs">{project.tagline}</div>
                     </div>
                  </CardHeader>

                  <CardBody className="space-y-3">
                     <p className="text-sm leading-relaxed">{project.description}</p>

                     {project.highlights && (
                        <div className="space-y-1">
                           <div className="text-xs font-semibold text-(--accent)">
                              Highlights:
                           </div>
                           <TerminalList items={project.highlights} icon="→" />
                        </div>
                     )}

                     <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, idx) => (
                           <TerminalBadge key={idx}>{tech}</TerminalBadge>
                        ))}
                     </div>
                  </CardBody>

                  <CardFooter className="flex items-center gap-4 text-xs">
                     {project.links.live && (
                        <TerminalLink href={project.links.live}>🌐 Live Demo</TerminalLink>
                     )}
                     {project.links.github && (
                        <TerminalLink href={project.links.github}>🐙 GitHub</TerminalLink>
                     )}
                     {project.stats && (
                        <span className="text-(--muted) ml-auto">
                           ⭐ {project.stats.stars} • 🍴 {project.stats.forks}
                        </span>
                     )}
                  </CardFooter>
               </Card>
            ))}
         </div>
      </TerminalSection>

      <TerminalCard variant="muted">
         <div className="text-sm">
            💡 Use <code className="text-(--accent)">project &lt;name&gt;</code> for detailed
            view
         </div>
      </TerminalCard>
   </div>
);

export const projectCmd = (args: string[]) => {
   const projectName = args[0]?.toLowerCase();

   if (!projectName) {
      return (
         <div className="space-y-2">
            <TerminalSection title="Usage">
               <TerminalCard variant="accent">
                  <code className="text-sm">project &lt;name&gt;</code>
               </TerminalCard>
            </TerminalSection>
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
            icon="🔍"
            message={`Project "${projectName}" not found. Try: ${projects
               .map((p) => p.id)
               .join(", ")}`}
         />
      );
   }

   return (
      <div className="space-y-4">
         <TerminalSection title={project.name}>
            <div className="space-y-3">
               <div className="flex items-center gap-2">
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
                        <p key={idx} className="text-sm leading-relaxed">
                           {para}
                        </p>
                     ))}
                  </div>
               )}
            </div>
         </TerminalSection>

         <TerminalDivider />

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
               <TerminalDivider />
               <TerminalSection title="Key Features">
                  <TerminalList items={project.highlights} icon="✓" />
               </TerminalSection>
            </>
         )}

         <TerminalDivider />

         <TerminalSection title="Links">
            <div className="flex gap-4">
               {project.links.live && (
                  <TerminalLink href={project.links.live}>🌐 Live Demo</TerminalLink>
               )}
               {project.links.github && (
                  <TerminalLink href={project.links.github}>🐙 Source Code</TerminalLink>
               )}
            </div>
         </TerminalSection>

         {project.stats && (
            <TerminalCard variant="accent">
               <div className="flex items-center gap-6 text-sm">
                  <span>⭐ {project.stats.stars} stars</span>
                  <span>🍴 {project.stats.forks} forks</span>
               </div>
            </TerminalCard>
         )}
      </div>
   );
};

export const skillsCmd = () => (
   <div className="space-y-4">
      <TerminalSection title="Technical Skills">
         {skillsByCategory.map((category, idx) => (
            <div key={idx} className="space-y-3 mb-6">
               <div className="text-sm font-semibold text-(--accent) uppercase tracking-wide">
                  {category.category}
               </div>
               <div className="space-y-2">
                  {category.skills.map((skill) => (
                     <TerminalProgress
                        key={skill.name}
                        label={`${skill.icon} ${skill.name}`}
                        value={skill.level}
                        showValue
                     />
                  ))}
               </div>
            </div>
         ))}
      </TerminalSection>

      <TerminalCard variant="muted">
         <div className="text-sm space-y-2">
            <div className="font-semibold">🎯 Learning Focus:</div>
            <TerminalList
               items={[
                  "Advanced TypeScript patterns",
                  "System design & architecture",
                  "Developer tooling & CLI apps",
               ]}
               icon="→"
            />
         </div>
      </TerminalCard>
   </div>
);

export const github = () => {
   window.open("https://github.com/bug-free-dev", "_blank");
   return (
      <TerminalCard variant="default">
         <div className="text-sm">🐙 Opening GitHub profile in new tab...</div>
      </TerminalCard>
   );
};

export const stats = () => (
   <div className="space-y-4">
      <TerminalSection title="Portfolio Stats">
         <TerminalCard variant="accent">
            <div className="grid grid-cols-2 gap-4 text-sm">
               <div>
                  <div className="text-2xl font-bold text-(--accent)">{projects.length}</div>
                  <div className="text-(--muted) text-xs">Projects Built</div>
               </div>
               <div>
                  <div className="text-2xl font-bold text-(--accent)">{skills.length}</div>
                  <div className="text-(--muted) text-xs">Technologies</div>
               </div>
               <div>
                  <div className="text-2xl font-bold text-(--success)">
                     {projects.filter((p) => p.status === "live").length}
                  </div>
                  <div className="text-(--muted) text-xs">Live Apps</div>
               </div>
               <div>
                  <div className="text-2xl font-bold text-(--info)">100%</div>
                  <div className="text-(--muted) text-xs">Passion</div>
               </div>
            </div>
         </TerminalCard>
      </TerminalSection>
   </div>
);
