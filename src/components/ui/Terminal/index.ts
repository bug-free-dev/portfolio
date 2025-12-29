export { default as Terminal } from "./Terminal";

export { TerminalHeader } from "./THeader";
export { TerminalBody } from "./TBody";
export { TerminalInput } from "./TInput";

export {
   TerminalSuccess,
   TerminalError,
   TerminalWarning,
   TerminalInfo,
   TerminalList,
   TerminalCode,
} from "./TOutput";

export type { TerminalCommand, TerminalStyle } from "./Ttypes";
export * from "./TOverlay";