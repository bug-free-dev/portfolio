import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { TerminalBadge, type BadgeVariant } from "../ui/Terminal/TOutput";
import Card from "../ui/Card/Card";
import { CardBody } from "../ui/Card/CardBody";

const identityTags = [
   { label: "Exploring", color: "#38bdf8" },
   { label: "Building", color: "#4ade80" },
   { label: "Learning in Public", color: "#a78bfa" },
   { label: "Design Systems", color: "#fb7185" },
   { label: "Intentional", color: "#94a3b8" },
   { label: "Curious", color: "#22d3ee" },
   { label: "Minimal", color: "#34d399" },
];

const commandTags: { label: string; color?: string; variant?: BadgeVariant }[] = [
   { label: "about", variant: "success" },
   { label: "skills", color: "#a1a1aa" },
   { label: "projects", variant: "warning" },
   { label: "contact", color: "#fca5a5" },
];

const About: React.FC = () => {
   const sectionRef = useRef<HTMLElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => entry.isIntersecting && setIsVisible(true),
         { threshold: 0.1 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
   }, []);

   return (
      <section
         ref={sectionRef}
         className="relative max-w-6xl px-6 mx-auto py-20 scroll-mt-20 overflow-hidden mt-10"
      >
         <div className="absolute top-16 left-12 w-40 h-40 bg-(--accent)/10 rounded-full blur-3xl animate-float" />
         <div className="absolute bottom-12 right-10 w-32 h-32 bg-(--accent)/10 rounded-full blur-3xl animate-float animation-delay-500" />

         <div className="relative z-10 space-y-12">
            {/* Header */}
            <div
               className={clsx(
                  "transition-all duration-700 delay-100",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
               )}
            >
               <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-12 bg-(--accent) rounded-full" />
                  <h2 className="text-4xl md:text-5xl font-bold">About</h2>
                  <div className="h-1 flex-1 bg-(--accent) rounded-full opacity-50" />
               </div>

               <p className="text-lg text-(--muted) max-w-6xl">
                  I’m exploring, breaking things, rebuilding them, and learning how systems actually
                  work.
               </p>
            </div>

            <div
               className={clsx(
                  "max-w-6xl space-y-5 text-sm leading-relaxed transition-all duration-700 delay-200",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
               )}
            >
               <p>
                  I enjoy working close to fundamentals — terminal-style interfaces, reusable UI
                  systems, and code that feels deliberate.
               </p>

               <p className="text-(--muted)">
                  This portfolio is an experiment. It evolves as I do. The terminal isn’t a gimmick
                  — it’s how I think.
               </p>
            </div>

            {/* Identity Tags */}
            <div
               className={clsx(
                  "flex flex-wrap gap-2 transition-all duration-700 delay-300 animate-badge-pop",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
               )}
            >
               {identityTags.map((tag) => (
                  <TerminalBadge key={tag.label} color={tag.color}>
                     {tag.label}
                  </TerminalBadge>
               ))}
            </div>

            {/* Pro tip highlight (ONE card only) */}
            <Card
               className={clsx("backdrop-blur-sm", isVisible ? "animate-fade-in-up" : "opacity-0")}
            >
               <CardBody className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-sm">
                     <span className="font-semibold text-(--accent)">💡 Pro tip</span>
                     <span className="text-(--muted)">
                        {" "}
                        — use terminal commands for deeper context
                     </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                     {commandTags.map((cmd) => (
                        <TerminalBadge key={cmd.label} color={cmd.color} variant={cmd.variant}>
                           {cmd.label}
                        </TerminalBadge>
                     ))}
                  </div>
               </CardBody>
            </Card>
         </div>
      </section>
   );
};

export default About;
