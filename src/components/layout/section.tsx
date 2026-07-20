import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: "none" | "sm" | "md" | "lg";
}

export function Section({ padding = "md", className, children, ...props }: SectionProps) {
  const paddingMap = {
    none: "py-0",
    sm: "py-6 sm:py-8",
    md: "py-10 sm:py-16",
    lg: "py-16 sm:py-24",
  };

  return (
    <section className={cn("w-full", paddingMap[padding], className)} {...props}>
      {children}
    </section>
  );
}
