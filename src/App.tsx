import { useState } from "react";
import { Hero, Footer, Projects, About, TipSection } from "./components/sections";
import { Navbar } from "./components/ui/Navbar";
import { TerminalOverlay, TerminalDivider as Divider } from "./components/ui/Terminal";

const App = () => {
   const [terminalOpen, setTerminalOpen] = useState(false);

   return (
      <div className="min-h-screen bg-(--app-bg) text-(--app-fg) flex flex-col max-w-full">
         {/* Navbar & Hero */}
         <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
         <Hero onOpenTerminal={() => setTerminalOpen(true)} />

         {/** Divider highlighting current section */}
         <Divider
            label="About me"
            badgeColor="var(--accent)"
            sectionId="about"
         />
         {/* About Section */}
         <About />

         {/* Divider highlighting current section */}
         <Divider
            label="My Projects"
            badgeColor="var(--success)"
            sectionId="projects"
         />

         {/* Projects Section */}
         <Projects />

         {/* Divider highlighting current section */}
         <Divider
            label="Tips"
            badgeColor="oklch(71.2% 0.194 13.428)"
            sectionId="tips"
         />

         {/* Tips Section */}
         <TipSection onOpenTerminal={() => setTerminalOpen(true)} />

         {/** Thank you */}
         <Divider
            label="Thank you for being here!"
         />
         {/* Footer */}
         <Footer />

         {/* Terminal Overlay */}
         <TerminalOverlay open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      </div>
   );
};

export default App;
