import React from "react";
import clsx from "clsx";
import { FiGithub, FiTwitter, FiMail, FiGlobe, FiInstagram } from "react-icons/fi";
import { SiNpm } from "react-icons/si";

const Footer: React.FC = () => {
   return (
      <footer
         className={clsx(
            "mt-28 border-t",
            "border-(--footer-border)",
            "bg-(--footer-bg) text-(--footer-fg)"
         )}
      >
         <div className="mx-auto max-w-7xl px-6 py-16">
            {/* ----------- Top Grid ----------- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {/* ---------- Brand / Ethos ---------- */}
               <div className="md:col-span-2 space-y-4">
                  <h3 className="text-lg font-semibold text-(--app-fg)">Saurabh Kumar</h3>

                  <p className="text-sm max-w-md leading-relaxed">
                     Frontend engineer building reliable interfaces, scalable design systems, and
                     developer-centric products.
                  </p>

                  <div className="space-y-1 text-sm">
                     <p>✔ React · TypeScript · UI Architecture</p>
                     <p>✔ Open-source contributor & system thinker</p>
                     <p>✔ Design systems over one-off components</p>
                  </div>
               </div>

               {/* ---------- Ecosystem ---------- */}
               <div className="space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-(--app-fg)">
                     Ecosystem
                  </h4>

                  <ul className="space-y-3 text-sm">
                     <li>
                        <a
                           href="https://github.com/bug-free-dev"
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex items-center gap-3 hover:text-(--accent) transition-colors"
                        >
                           <FiGithub />
                           GitHub
                        </a>
                     </li>

                     <li>
                        <a
                           href="https://npmjs.com/~bugfreedev"
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex items-center gap-3 hover:text-(--accent) transition-colors"
                        >
                           <SiNpm className="text-[#CB3837]" />
                           npm
                        </a>
                     </li>

                     <li>
                        <a
                           href="/"
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex items-center gap-3 hover:text-(--accent) transition-colors"
                        >
                           <FiGlobe />
                           Portfolio
                        </a>
                     </li>
                  </ul>
               </div>

               {/* ---------- Connect ---------- */}
               <div className="space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-(--app-fg)">
                     Connect
                  </h4>

                  <ul className="space-y-3 text-sm">

                     <li>
                        <a
                           href="https://twitter.com/"
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex items-center gap-3 hover:text-(--accent) transition-colors"
                        >
                           <FiTwitter />
                           Twitter / X
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.instagram.com/itsme.shadow11/"
                           target="_blank"
                           className="inline-flex items-center gap-3 hover:text-(--accent) transition-colors"
                        >
                           <FiInstagram />
                           bug-free-dev
                        </a>
                     </li>
                     <li>
                        <a
                           href="mailto:bugfreedev07@gmail.com"
                           className="inline-flex items-center gap-3 hover:text-(--accent) transition-colors"
                        >
                           <FiMail />
                           bugfreedev07@gmail.com
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            {/* ----------- Bottom Bar ----------- */}
            <div className="mt-16 pt-6 border-t border-(--footer-border)">
               <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <span>© {new Date().getFullYear()} Made with 💝 by Saurabh Kumar!</span>

                  <span className="opacity-70">
                     Clean code · Thoughtful design · Long-term systems
                  </span>
               </div>
            </div>
         </div>
      </footer>
   );
};
export default Footer;