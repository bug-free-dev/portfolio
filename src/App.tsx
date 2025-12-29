import { useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { TerminalOverlay } from "./components/ui/Terminal";

import {
   TerminalSuccess,
   TerminalError,
   TerminalInfo,
   TerminalList,
} from "./components/ui/Terminal";

import { Card, CardHeader, CardBody, CardFooter } from "./components/ui/Card";
import Button from "./components/ui/Button";

export default function DemoApp() {
   const [terminalOpen, setTerminalOpen] = useState(false);

   const handleCommand = async (command: string) => {
      const cmd = command.trim().toLowerCase();

      switch (cmd) {
         case "help":
            return (
               <TerminalList
                  items={[
                     "help - Show commands",
                     "about - About me",
                     "projects - List projects",
                     "contact - Contact info",
                     "exit - Close terminal",
                  ]}
               />
            );

         case "about":
            return <TerminalSuccess>Hi! I’m Saurabh Kumar, Frontend Developer.</TerminalSuccess>;

         case "info":
            return <TerminalInfo>Portfolio v1.0 – React + Design System</TerminalInfo>;

         case "exit":
            setTerminalOpen(false);
            return "Closing terminal…";

         default:
            return <TerminalError>Command not found: {cmd}</TerminalError>;
      }
   };

   return (
      <>
         {/* NAVBAR */}
         <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

         {/* TERMINAL OVERLAY */}
         <TerminalOverlay
            open={terminalOpen}
            onClose={() => setTerminalOpen(false)}
            onCommand={handleCommand}
         />

         {/* PAGE CONTENT */}
         <div className="min-h-screen bg-(--app-bg) text-(--app-fg) p-10 space-y-10">

            {/* Cards */}
            <div className="flex gap-8">
               <Card className="w-[320px]">
                  <CardHeader>💻 Terminal</CardHeader>
                  <CardBody>Open the terminal to see the work and craftsmanship.</CardBody>
                  <CardFooter>
                     <Button size="sm" onClick={()=>setTerminalOpen(true)}>Launch</Button>
                  </CardFooter>
               </Card>
            </div>
         </div>
         <Footer />
      </>
   );
}
