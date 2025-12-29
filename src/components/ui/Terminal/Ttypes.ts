import type { ReactNode } from "react";

export type TerminalStyle = "zsh"

export interface TerminalCommand {
   input: string;
   output?: ReactNode | null;
   timestamp?: Date;
}
