"use client";

import type { ComponentProps, MouseEvent } from "react";
import { CLOUD_REDIRECT_EVENT, isCloudUrl, trackCloudRedirect } from "@/lib/analytics";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  trackSource?: string;
};

const variants = {
  primary:
    "bg-foreground text-background shadow-sm hover:bg-foreground/90 active:scale-[0.98]",
  outline:
    "border border-border-strong bg-surface text-foreground hover:bg-surface-raised active:scale-[0.98]",
  ghost: "text-muted hover:text-foreground hover:bg-surface-raised/80",
};

const sizes = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-11 px-6 text-sm",
  lg: "min-h-12 px-8 text-sm",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  trackSource,
  href,
  onClick,
  children,
  ...props
}: ButtonLinkProps) {
  const cloudLink = isCloudUrl(href);
  const source = trackSource ?? "cloud";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (cloudLink) {
      trackCloudRedirect(source);
    }
    onClick?.(event);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      {...(cloudLink
        ? {
            "data-umami-event": CLOUD_REDIRECT_EVENT,
            "data-umami-event-source": source,
          }
        : {})}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
