export const linuxCommands = {
   echo: (args: string[]) => args.join(" "),
   help: (availableCommands: string[]) => `Available commands: ${availableCommands.join(", ")}`,
   date: () => new Date().toString(),
};
