import React from "react";
import clsx from "clsx";
import { FiUser, FiFolder, FiStar, FiGithub, FiTerminal, FiDroplet } from "react-icons/fi";

interface NavItem {
   label: string;
   icon: React.ReactNode;
   href?: string;
   action?: () => void;
}

export const Navbar: React.FC<{ onOpenTerminal: () => void }> = ({ onOpenTerminal }) => {
   const navItems: NavItem[] = [
      { label: "About", icon: <FiUser />, href: "#about" },
      { label: "Projects", icon: <FiFolder />, href: "#projects" },
      { label: "Skills", icon: <FiStar />, href: "#skills" },
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
            "sticky top-0 z-50 w-full backdrop-blur",
            "bg-(--nav-bg)",
            "border-b border-(--nav-border)"
         )}
      >
         <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-14 items-center justify-between gap-4">
               {/* Brand */}
               <span className="text-sm font-semibold tracking-wide text-(--accent)">
                  <a href="/">🧊</a>
               </span>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center gap-6">
                  {navItems.map((item) =>
                     item.action ? (
                        <button
                           key={item.label}
                           onClick={item.action}
                           className="group flex items-center gap-2 text-sm
                             text-(--muted) hover:text-(--accent)
                             transition-colors"
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
                             text-(--muted) hover:text-(--accent)
                             transition-colors"
                        >
                           <span className="text-base opacity-70 group-hover:opacity-100">
                              {item.icon}
                           </span>
                           {item.label}
                        </a>
                     )
                  )}
               </nav>

               {/* Right actions */}
               <div className="flex items-center gap-2">
                  {/* Theme / Palette */}
                  <button
                     className={clsx(
                        "inline-flex items-center justify-center",
                        "h-9 w-9 rounded-md border",
                        "border-(--btn-border)",
                        "bg-(--btn-bg)",
                        "text-(--btn-fg)",
                        "hover:bg-(--btn-bg-soft)",
                        "transition-colors"
                     )}
                     aria-label="Theme palette"
                  >
                     <FiDroplet className="text-base opacity-80" />
                  </button>

                  {/* Mobile Terminal Shortcut */}
                  <button
                     onClick={onOpenTerminal}
                     className={clsx(
                        "md:hidden inline-flex items-center justify-center",
                        "h-9 w-9 rounded-md border",
                        "border-(--btn-border)",
                        "bg-(--btn-bg)",
                        "text-(--btn-fg)",
                        "hover:bg-(--btn-bg-soft)",
                        "transition-colors"
                     )}
                     aria-label="Open terminal"
                  >
                     <FiTerminal className="text-base opacity-80" />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};
