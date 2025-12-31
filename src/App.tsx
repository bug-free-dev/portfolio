import { useState } from "react";
import { Hero, Footer, Projects, About } from "./components/sections";
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
         <Divider label="About me" lineColor="var(--accent)" badgeColor="var(--accent)" sectionId="about"/>
         {/* About Section */}
         <About />

         {/* Divider highlighting current section */}
         <Divider label="My Projects" lineColor="var(--success)" badgeColor="var(--success)" sectionId="projects"/>

         {/* Projects Section */}
         <Projects />

         {/* Footer */}
         <Footer />

         {/* Terminal Overlay */}
         <TerminalOverlay open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      </div>
   );
};

export default App;
