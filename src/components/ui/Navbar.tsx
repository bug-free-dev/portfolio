import React, { useState } from "react";
import clsx from "clsx";
import {
   FiUser,
   FiFolder,
   FiGithub,
   FiTerminal,
   FiMoon,
   FiSun,
   FiMenu,
   FiX,
} from "react-icons/fi";
import { useTheme } from "../../theme/useTheme";
import { PiLightbulbFilamentBold } from "react-icons/pi";

interface NavItem {
   label: string;
   icon: React.ReactNode;
   href?: string;
   action?: () => void;
}

export const Navbar: React.FC<{ onOpenTerminal: () => void }> = ({ onOpenTerminal }) => {
   const { theme, toggleTheme } = useTheme();
   const [open, setOpen] = useState(false);

   const navItems: NavItem[] = [
      { label: "About", icon: <FiUser />, href: "#about" },
      { label: "Projects", icon: <FiFolder />, href: "#projects" },
      { label: "Tips", icon: <PiLightbulbFilamentBold/>, href: "#tips" },
      {
         label: "GitHub",
         icon: <FiGithub />,
         href: "https://github.com/bug-free-dev",
      },
      {
         label: "Terminal",
         icon: <FiTerminal />,
         action: onOpenTerminal,
      },
   ];

   return (
      <header
         className={clsx(
            "sticky top-0 z-50 w-full backdrop-blur-xl",
            "bg-(--nav-bg) border-b border-(--nav-border)"
         )}
      >
         <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-14 items-center justify-between gap-4">
               <a href="/" className="flex items-center gap-3">
                  <div className="relative">
                     <span className="absolute -inset-1 rounded-full bg-(--accent)/30 blur-md" />
                     <img
                        src="/pfp.png"
                        alt="Saurabh Kumar"
                        className="relative h-8 w-8 rounded-full object-cover ring-2 ring-(--muted)"
                     />
                  </div>
               </a>

               {/* ================= DESKTOP NAV ================= */}
               <nav className="hidden md:flex items-center gap-6">
                  {navItems.map((item) =>
                     item.action ? (
                        <button
                           key={item.label}
                           onClick={item.action}
                           className="group flex items-center gap-2 text-sm
                    text-(--muted) hover:text-(--accent) transition-colors"
                        >
                           <span className="text-base opacity-70 group-hover:opacity-100">
                              {item.icon}
                           </span>
                           {item.label}
                        </button>
                     ) : (
                        <a
                           key={item.label}
                           href={item.href}
                           target={item.href?.startsWith("https") ? "_blank" : undefined}
                           rel="noreferrer"
                           className="group flex items-center gap-2 text-sm
                    text-(--muted) hover:text-(--accent) transition-colors"
                        >
                           <span className="text-base opacity-70 group-hover:opacity-100">
                              {item.icon}
                           </span>
                           {item.label}
                        </a>
                     )
                  )}
               </nav>

               <div className="flex items-center gap-2">
                  <button
                     onClick={toggleTheme}
                     className={clsx(
                        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border",
                        "border-(--btn-border) bg-(--btn-bg)",
                        "hover:bg-(--btn-bg-soft) transition-colors"
                     )}
                     aria-label="Toggle theme"
                  >
                     <span
                        className={clsx(
                           "absolute transition-all duration-300",
                           theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                        )}
                     >
                        <FiSun />
                     </span>
                     <span
                        className={clsx(
                           "absolute transition-all duration-300",
                           theme === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                        )}
                     >
                        <FiMoon />
                     </span>
                  </button>

                  {/* Hamburger */}
                  <button
                     onClick={() => setOpen((o) => !o)}
                     className={clsx(
                        "md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border",
                        "border-(--btn-border) bg-(--btn-bg)",
                        "hover:bg-(--btn-bg-soft) transition-all"
                     )}
                     aria-label="Menu"
                  >
                     {open ? <FiX /> : <FiMenu />}
                  </button>
               </div>
            </div>
         </div>

         <div
            className={clsx(
               "md:hidden absolute left-0 right-0 top-full z-40",
               "origin-top transform-gpu transition-all duration-200 ease-out",
               open
                  ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
            )}
         >
            <nav
               className={clsx(
                  "bg-(--nav-bg)",
                  "border border-(--nav-border)",
                  "px-4 py-3 flex flex-col gap-1"
               )}
            >
               {navItems.map((item) =>
                  item.action ? (
                     <button
                        key={item.label}
                        onClick={() => {
                           item.action?.();
                           setOpen(false);
                        }}
                        className={clsx(
                           "group flex items-center gap-3",
                           "px-3 py-2.5 rounded-md",
                           "text-sm font-medium",
                           "text-(--muted)",
                           "hover:bg-(--btn-bg-soft) hover:text-(--accent)",
                           "transition-colors"
                        )}
                     >
                        <span className="text-base opacity-70 group-hover:opacity-100">
                           {item.icon}
                        </span>
                        {item.label}
                     </button>
                  ) : (
                     <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={clsx(
                           "group flex items-center gap-3",
                           "px-3 py-2.5 rounded-md",
                           "text-sm font-medium",
                           "text-(--muted)",
                           "hover:bg-(--btn-bg-soft) hover:text-(--accent)",
                           "transition-colors"
                        )}
                     >
                        <span className="text-base opacity-70 group-hover:opacity-100">
                           {item.icon}
                        </span>
                        {item.label}
                     </a>
                  )
               )}
            </nav>
         </div>
      </header>
   );
};
