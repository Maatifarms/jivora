import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "card" | "glass";
}

export function ContentWrapper({
  variant = "default",
  className,
  children,
  ...props
}: ContentWrapperProps) {
  const variantMap = {
    default: "bg-background text-foreground",
    card: "b2b-card p-6",
    glass: "glass-panel p-6 rounded-xl shadow-lg",
  };

  return (
    <div className={cn("w-full transition-all", variantMap[variant], className)} {...props}>
      {children}
    </div>
  );
}
