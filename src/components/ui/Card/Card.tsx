import React from "react";
import clsx from "clsx";

type CardVariant = "solid" | "outline" | "accent";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const base = "relative transition-all duration-300 ease-out text-[var(--card-fg)] overflow-hidden";

const variants: Record<CardVariant, string> = {
   solid: clsx(
      "bg-[var(--card-bg)]",
      "border border-[var(--card-border)]",
      "hover:shadow-[var(--card-shadow-hover)]"
   ),
   outline: clsx(
      "bg-transparent",
      "border border-[var(--card-border)]",
      "hover:bg-[var(--card-bg-soft,rgba(0,0,0,0.03))]"
   ),
   accent: clsx(
      "bg-[var(--accent)]",
      "hover:shadow-[var(--card-shadow-hover)]"
   ),
};

const Card: React.FC<CardProps> = ({
  variant = "solid",
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        base,
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export default Card;
