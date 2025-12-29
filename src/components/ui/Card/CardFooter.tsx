import clsx from "clsx";

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
   className,
   ...props
}) => (
   <div
      className={clsx("border-t border-(--card-border) px-4 py-3 text-xs", className)}
      {...props}
   />
);
