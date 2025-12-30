import { useState } from "react";
import { Hero, Footer, Projects } from "./components/sections";
import { Navbar } from "./components/ui/Navbar";
import { TerminalOverlay } from "./components/ui/Terminal";

const App = () => {  
   const [terminalOpen, setTerminalOpen] = useState(false);
   
   return (
      <div className="min-h-screen bg-(--app-bg) text-(--app-fg) flex flex-col">
         <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
         <Hero onOpenTerminal={() => setTerminalOpen(true)} />
         <Projects/>
         <Footer />
         <TerminalOverlay open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      </div>
   );
}
export default App;