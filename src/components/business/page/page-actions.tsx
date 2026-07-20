import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageActionsProps {
  children: React.ReactNode;
  className?: string;
}

export function PageActions({ children, className }: PageActionsProps) {
  return (
    <div className={cn("flex items-center space-x-2 shrink-0", className)}>
      {children}
    </div>
  );
}
