import React from "react";

export const TerminalSuccess: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="text-(--success) flex items-start gap-2">
      <span>✓</span>
      <span>{children}</span>
   </div>
);

export const TerminalError: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="text-(--error) flex items-start gap-2">
      <span>✗</span>
      <span>{children}</span>
   </div>
);

export const TerminalWarning: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="text-(--warning) flex items-start gap-2">
      <span>⚠</span>
      <span>{children}</span>
   </div>
);

export const TerminalInfo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <div className="text-(--info) flex items-start gap-2">
      <span>ℹ</span>
      <span>{children}</span>
   </div>
);

export const TerminalList: React.FC<{ items: string[] }> = ({ items }) => (
   <div className="space-y-1">
      {items.map((item, idx) => (
         <div key={idx} className="flex gap-2">
            <span className="text-(--accent)">•</span>
            <span>{item}</span>
         </div>
      ))}
   </div>
);

export const TerminalCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <pre className="bg-(--card-bg-soft) p-2 rounded-sm mt-1 overflow-x-auto">
      <code className="text-(--accent)">{children}</code>
   </pre>
);

export default null;
