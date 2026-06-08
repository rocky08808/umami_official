import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-foreground text-background shadow-sm hover:bg-foreground/90 active:scale-[0.98]",
  outline:
    "border border-border-strong bg-surface text-foreground hover:bg-surface-raised active:scale-[0.98]",
  ghost: "text-muted hover:text-foreground hover:bg-surface-raised/80",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-sm",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
