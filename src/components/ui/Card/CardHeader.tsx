import clsx from "clsx";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
   className,
   ...props
}) => (
   <div
      className={clsx(
         "border-b border-(--card-border) px-4 py-3 font-semibold uppercase text-xs tracking-wide",
         className
      )}
      {...props}
   />
);
