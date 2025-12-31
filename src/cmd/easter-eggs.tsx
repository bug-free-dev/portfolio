import { TerminalCard, TerminalList, TerminalSection } from "../components/ui/Terminal/TOutput";

export const sudo = (args: string[]) => {
   const messages = [
      "Nice try! But you don't have root access here 😏",
      "[sudo] password for saurabh: █ ... Access Denied!",
      "With great power comes great responsibility. You're not ready yet.",
      "sudo make me a sandwich? How about you try 'contact' instead 😄",
      "Error: You must be a maintainer to run this command",
   ];

   const randomMessage = messages[Math.floor(Math.random() * messages.length)];

   return (
      <TerminalCard variant="accent">
         <div className="space-y-2 text-sm">
            <div className="font-mono">{randomMessage}</div>
            {args.length > 0 && (
               <div className="text-xs text-(--muted)">
                  Attempted command: sudo {args.join(" ")}
               </div>
            )}
         </div>
      </TerminalCard>
   );
};

export const hack = () => {
   return (
      <div className="space-y-2">
         <TerminalCard variant="success">
            <div className="font-mono text-sm space-y-1 text-(--success)">
               <div>🎮 INITIATING HACK SEQUENCE...</div>
               <div>▓▓▓▓▓▓▓▓░░ 80%</div>
               <div>ACCESSING MAINFRAME...</div>
               <div>BYPASSING FIREWALL...</div>
               <div>💚 HACK COMPLETE</div>
            </div>
         </TerminalCard>
         <TerminalCard variant="muted">
            <div className="text-sm text-(--muted)">
               Just kidding! Check out my real projects with{" "}
               <code className="text-(--accent)">projects</code>
            </div>
         </TerminalCard>
      </div>
   );
};

export const coffee = () => {
   const coffeeArt = `
    (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
     _____________
    <_____________>
       I      I
       I      I
       I      I
       I______I
   `;

   return (
      <div className="space-y-3">
         <TerminalCard variant="accent">
            <pre className="text-(--accent) text-xs font-mono">{coffeeArt}</pre>
         </TerminalCard>
         <div className="text-sm text-(--muted)">☕ Taking a coffee break... BRB!</div>
      </div>
   );
};

export const fortune = () => {
   const fortunes = [
      "The best way to predict the future is to invent it. - Alan Kay",
      "Code is like humor. When you have to explain it, it's bad. - Cory House",
      "First, solve the problem. Then, write the code. - John Johnson",
      "Simplicity is the soul of efficiency. - Austin Freeman",
      "Make it work, make it right, make it fast. - Kent Beck",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
      "Truth can only be found in one place: the code. - Robert C. Martin",
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery",
      "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
      "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
   ];

   const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

   return (
      <TerminalCard variant="accent">
         <div className="text-sm italic">"{randomFortune}"</div>
      </TerminalCard>
   );
};

export const matrix = () => {
   return (
      <TerminalCard variant="success">
         <div className="font-mono text-sm space-y-1 text-(--success)">
            <div>01001000 01100101 01101100 01101100 01101111</div>
            <div>01010111 01101111 01110010 01101100 01100100</div>
            <div className="mt-2 text-(--muted)">
               Translation: "Hello World" - The Matrix knows all
            </div>
         </div>
      </TerminalCard>
   );
};

export const konami = () => {
   return (
      <div className="space-y-3">
         <TerminalCard variant="success">
            <div className="text-sm space-y-2">
               <div className="text-xl">🎮 KONAMI CODE ACTIVATED! 🎮</div>
               <div>↑ ↑ ↓ ↓ ← → ← → B A</div>
            </div>
         </TerminalCard>
         <TerminalCard variant="accent">
            <div className="text-sm">
               🎁 Achievement Unlocked: <strong>"Secret Seeker"</strong>
               <div className="text-xs text-(--muted) mt-1">You found an easter egg! +100 XP</div>
            </div>
         </TerminalCard>
      </div>
   );
};

export const joke = () => {
   const jokes = [
      {
         setup: "Why do programmers prefer dark mode?",
         punchline: "Because light attracts bugs! 🐛",
      },
      {
         setup: "How many programmers does it take to change a light bulb?",
         punchline: "None. It's a hardware problem. 💡",
      },
      {
         setup: "Why did the developer go broke?",
         punchline: "Because they used up all their cache! 💸",
      },
      {
         setup: "What's a programmer's favorite hangout place?",
         punchline: "Foo Bar! 🍺",
      },
   ];

   const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

   return (
      <TerminalCard variant="accent">
         <div className="text-sm space-y-2">
            <div className="font-semibold">{randomJoke.setup}</div>
            <div className="text-(--muted)">{randomJoke.punchline}</div>
         </div>
      </TerminalCard>
   );
};

export const rickroll = () => {
   return (
      <TerminalCard variant="warning">
         <div className="text-sm space-y-2">
            <div className="text-lg">🎵 Never gonna give you up... 🎵</div>
            <div className="text-(--muted)">
               Nice try! But I'm not rickrolling you. Check out my{" "}
               <code className="text-(--accent)">projects</code> instead!
            </div>
         </div>
      </TerminalCard>
   );
};

export const xyzzy = () => {
   return (
      <TerminalCard variant="info">
         <div className="text-sm">
            Nothing happens. (You have been teleported to the same location)
         </div>
      </TerminalCard>
   );
};

export const credits = () => {
   return (
      <div className="space-y-3">
         <TerminalSection title="Credits">
            <TerminalList
               items={[
                  "Built with ❤️ by bugfreedev",
                  "Powered by React + TypeScript + Vite",
                  "Terminal UI inspired by zsh",
                  "Design system with custom CSS variables",
               ]}
               icon="→"
            />
         </TerminalSection>
         <TerminalCard variant="accent">
            <div className="text-sm">
               🌟 Special thanks to <strong>you</strong> for exploring this portfolio!
            </div>
         </TerminalCard>
      </div>
   );
};
