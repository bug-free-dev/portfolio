import clsx from "clsx";

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
   className,
   ...props
}) => <div className={clsx("px-4 py-4 text-sm", className)} {...props} />;
