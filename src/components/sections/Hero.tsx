import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FiTerminal } from "react-icons/fi";
import Button from "../ui/Button";
import { TerminalBadge } from "../ui/Terminal";
import { useTheme } from "../../theme/useTheme";

interface HeroProps {
   onOpenTerminal?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
   const fullName = "Saurabh Kumar";
   const [index, setIndex] = useState(0);
   const [cursor, setCursor] = useState(true);
   const [showContent, setShowContent] = useState(false);
   const { theme } = useTheme();

   useEffect(() => {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      if (index < fullName.length) {
         const t = setTimeout(() => setIndex(index + 1), 90);
         return () => clearTimeout(t);
      }
   }, [index]);

   useEffect(() => {
      const i = setInterval(() => setCursor((c) => !c), 500);
      return () => clearInterval(i);
   }, []);

   const badges = [
      { label: "Available", variant: "success" as const },
      { label: "React / TypeScript", variant: "info" as const },
      { label: "Design Systems", variant: "default" as const },
      { label: "Terminal UI", variant: "warning" as const },
      { label: "Opinionated", variant: "error" as const },
   ];

   return (
      <section className="relative min-h-screen w-full font-mono overflow-hidden">
         {/* Animated Background */}
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 animate-gradient-shift bg-linear-to-br from-(--accent)/5 via-transparent to-(--muted)/10" />
            <img
               src={theme === "dark" ? "/hero-dark.svg" : "/hero-light.svg"}
               alt="Hero background"
               className="w-full h-full object-cover border-b border-(--card-border) opacity-90"
            />
         </div>

         <div
            className={clsx(
               "relative z-10 mx-auto max-w-7xl px-6",
               "min-h-svh md:min-h-screen",
               "grid grid-cols-1 md:grid-cols-2",
               "items-start md:items-center",
               "gap-6 sm:gap-8 md:gap-6 lg:gap-10"
            )}
         >
            {/* Profile Image - Right side on desktop */}
            <div
               className={clsx(
                  "order-1 md:order-2 flex justify-center md:justify-end md:mb-0 mt-10 md:mt-0",
                  showContent && "animate-fade-in-right"
               )}
            >
               <div className="relative animate-float">
                  
                  {/* Main ring */}
                  <div className="absolute -inset-1 rounded-full ring-4 ring-(--muted)/40 animate-breathe" />

                  {/* Profile Image */}
                  <img
                     src="/pfp.png"
                     alt="Saurabh Kumar"
                     className={clsx(
                        "relative z-10 w-64 h-64 md:w-120 md:h-120 rounded-full object-cover",
                        "transition-transform duration-300 hover:scale-105"
                     )}
                  />
               </div>
            </div>

            {/* Text Content - Left side on desktop */}
            <div className="order-2 md:order-1 space-y-10 text-(--app-fg)">
               {/* Name with typing effect */}
               <h1
                  className={clsx(
                     "text-4xl sm:text-5xl md:text-6xl font-bold leading-tight",
                     showContent && "animate-fade-in-left"
                  )}
               >
                  {fullName.slice(0, index)}
                  <span
                     className={clsx(
                        "inline-block ml-1 w-0.5 h-[1em] bg-(--accent)",
                        cursor ? "opacity-100" : "opacity-0",
                        "transition-opacity duration-150"
                     )}
                  />
               </h1>

               {/* Animated Badges */}
               <div
                  className={clsx(
                     "flex flex-wrap gap-3",
                     showContent && "animate-fade-in-left animation-delay-200"
                  )}
               >
                  {badges.map((badge, i) => (
                     <div
                        key={badge.label}
                        className={clsx(
                           "animate-badge-pop",
                           "hover:scale-110 transition-transform duration-200"
                        )}
                        style={{ animationDelay: `${300 + i * 100}ms`, opacity: 0 }}
                     >
                        <TerminalBadge variant={badge.variant}>{badge.label}</TerminalBadge>
                     </div>
                  ))}
               </div>

               {/* Action Buttons */}
               <div
                  className={clsx(
                     "flex items-center gap-4 pt-4",
                     showContent && "animate-scale-in animation-delay-800"
                  )}
                  style={{ opacity: 0 }}
               >
                  <Button
                     variant="solid"
                     rightIcon={<FiTerminal />}
                     onClick={onOpenTerminal}
                     className="group relative overflow-hidden"
                  >
                     <span className="relative z-10">Open Terminal</span>
                     
                  </Button>
                  <Button
                     variant="outline"
                     className="hover:scale-105 transition-transform duration-200"
                  >
                     View Work
                  </Button>
               </div>
            </div>
         </div>

         {/* Decorative floating elements */}
         <div className="absolute top-20 left-10 w-20 h-20 bg-(--accent)/10 rounded-full blur-xl animate-float animation-delay-300" />
         <div className="absolute bottom-40 right-20 w-32 h-32 bg-(--muted)/10 rounded-full blur-2xl animate-float animation-delay-500" />
      </section>
   );
};

export default Hero;
