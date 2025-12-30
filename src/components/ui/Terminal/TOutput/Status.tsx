import { FiCheckCircle, FiXCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";

/** Status: Success message */
export const TerminalSuccess: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="flex items-start gap-2 text-(--success) text-sm">
      <FiCheckCircle className="mt-0.5 shrink-0" />
      <span className="flex-1">{children}</span>
   </div>
);

/** Status: Error message */
export const TerminalError: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="flex items-start gap-2 text-(--error) text-sm">
      <FiXCircle className="mt-0.5 shrink-0" />
      <span className="flex-1">{children}</span>
   </div>
);

/** Status: Warning message */
export const TerminalWarning: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="flex items-start gap-2 text-(--warning) text-sm">
      <FiAlertTriangle className="mt-0.5 shrink-0" />
      <span className="flex-1">{children}</span>
   </div>
);

/** Status: Info message */
export const TerminalInfo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="flex items-start gap-2 text-(--info) text-sm">
      <FiInfo className="mt-0.5 shrink-0" />
      <span className="flex-1">{children}</span>
   </div>
);
