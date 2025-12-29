import  { useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/sections/Footer";
import { TerminalOverlay } from "./components/ui/Terminal/TOverlay";
import Button from "./components/ui/Button";

function App() {
   const [terminalOpen, setTerminalOpen] = useState(false);

   return (
      <div className="min-h-screen flex flex-col">
         <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

         <main className="flex-1">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
               <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Saurabh Kumar</h1>
                  <p className="text-xl text-(--muted) max-w-2xl">
                     Frontend Engineer building elegant interfaces with React, Next.js, and modern
                     web technologies.
                  </p>

                  <div className="flex flex-wrap gap-3">
                     <Button
                        variant="solid"
                        size="lg"
                        leftIcon="🚀"
                        onClick={() => setTerminalOpen(true)}
                     >
                        Launch Terminal
                     </Button>
                     <Button
                        variant="outline"
                        size="lg"
                        leftIcon="🐙"
                        onClick={() => window.open("https://github.com/bug-free-dev", "_blank")}
                     >
                        GitHub
                     </Button>
                  </div>
               </div>
            </section>

            {/* Add your other sections here */}
            {/* About Section */}
            {/* Projects Section */}
            {/* Skills Section */}
            {/* Contact Section */}
         </main>

         <Footer />

         {/* Terminal Overlay */}
         <TerminalOverlay open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      </div>
   );
}

export default App;
