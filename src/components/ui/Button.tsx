import React from "react";
import clsx from "clsx";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: Variant;
   size?: Size;
   leftIcon?: React.ReactNode;
   rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
   variant = "solid",
   size = "md",
   leftIcon,
   rightIcon,
   className,
   children,
   ...props
}) => {
   const baseStyles =
      "relative inline-flex items-center justify-center gap-2 " +
      "select-none font-semibold uppercase tracking-wide " +
      "transition-all duration-200 ease-out focus:outline-none ";

   const sizeStyles: Record<Size, string> = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
   };

   const variantStyles: Record<Variant, string> = {
      solid: clsx(
         "bg-[var(--btn-bg)] text-[var(--btn-fg)]",
         "border border-[var(--btn-border)]",
         "shadow-[var(--btn-shadow)]",
         "hover:shadow-[var(--btn-shadow-hover)]",
         "active:translate-x-[2px] active:translate-y-[2px]",
         "active:shadow-none"
      ),

      outline: clsx(
         "bg-transparent text-[var(--btn-fg)]",
         "border border-[var(--btn-border)]",
         "hover:bg-[var(--btn-bg-soft)]",
         "active:opacity-80"
      ),

      ghost: clsx(
         "bg-transparent text-[var(--btn-fg)]",
         "hover:bg-[var(--btn-bg-soft)]",
         "active:opacity-70"
      ),
   };

   return (
      <button
         {...props}
         className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
         {leftIcon && <span className="text-lg leading-none">{leftIcon}</span>}
         <span className="relative z-10">{children}</span>
         {rightIcon && <span className="text-lg leading-none">{rightIcon}</span>}
      </button>
   );
};

export default Button;
