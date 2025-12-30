import { FiFile, FiFolder } from "react-icons/fi";

export const FileItem: React.FC<{
   name: string;
   type: "file" | "folder";
}> = ({ name, type }) => (
   <div className="flex items-center gap-2 text-sm py-1 hover:bg-(--card-bg-soft) px-2 rounded transition-colors">
      {type === "folder" ? (
         <FiFolder className="text-(--terminal-accent)" />
      ) : (
         <FiFile className="text-(--muted)" />
      )}
      <span className={type === "folder" ? "font-semibold" : ""}>{name}</span>
   </div>
);
