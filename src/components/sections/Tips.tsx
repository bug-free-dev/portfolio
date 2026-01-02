import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Card, CardBody } from "../ui/Card";
import { TerminalBadge } from "../ui/Terminal";

interface TipSectionProps {
   onOpenTerminal: () => void;
}

const experimentalTags = [
   { label: "Experimental", color: "#fb923c" },
   { label: "Exploring", color: "#f472b6" },
   { label: "Learning in Public", color: "#fbbf24" },
   { label: "Building", color: "#34d399" },
];

export const TipSection: React.FC<TipSectionProps> = ({ onOpenTerminal }) => {
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
         className="relative max-w-4xl mx-auto px-6 py-20 scroll-mt-20 overflow-hidden"
      >
         {/* Decorative Elements */}
         <div className="absolute top-16 left-12 w-40 h-40 bg-rose-300/10 rounded-full blur-3xl animate-float" />
         <div className="absolute bottom-12 right-10 w-32 h-32 bg-orange-300/10 rounded-full blur-3xl animate-float animation-delay-500" />

         <div className="relative z-10 space-y-12">
            {/* Header */}
            <div
               className={clsx(
                  "transition-all duration-700 delay-100",
                  isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
               )}
            >
               <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-12 bg-rose-400 rounded-full" />
                  <h2 className="text-4xl md:text-5xl font-bold">Experimental</h2>
                  <div className="h-1 flex-1 bg-rose-300 rounded-full" />
               </div>
               <p className="text-lg text-(--muted) mt-2 max-w-4xl">
                  This portfolio is currently experimental and evolving. It’s a playground where I
                  explore, build, and learn. If you’re on a PC or laptop, try using the terminal
                  commands for full experience.
               </p>
            </div>

            {/* Tags */}
            <div
               className={clsx(
                  "flex flex-wrap gap-3 transition-all duration-700 delay-200",
                 
               )}
            >
               {experimentalTags.map((tag) => (
                  <TerminalBadge key={tag.label} color={tag.color}>
                     {tag.label}
                  </TerminalBadge>
               ))}
            </div>

            {/* Pro Tip Card */}
            <Card
               className={clsx(
                  isVisible ? "animate-fade-in-left" : "opacity-0"
               )}
            >
               <CardBody className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-sm flex flex-wrap items-center gap-2">
                     <span className="font-semibold text-yellow-400">💡 Pro tip</span>
                     <span className="text-(--muted)">
                        — use{" "}
                        <TerminalBadge
                           color="var(--terminal-accent)"
                           onClick={onOpenTerminal}
                        >
                           terminal
                        </TerminalBadge>{" "}
                        for more details
                     </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                     <span className="text-(--muted)">Get started with</span>
                     <TerminalBadge
                        variant="default"
                        onClick={onOpenTerminal}
                     >
                        {"Help"}
                     </TerminalBadge>
                  </div>
               </CardBody>
            </Card>
         </div>
      </section>
   );
};

export default TipSection;
