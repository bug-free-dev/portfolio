import { portfolioCommands } from "./myCmd.tsx";
import { linuxCommands } from "./TCmd";

export const commands = {
   ...portfolioCommands,
   ...linuxCommands,
};
