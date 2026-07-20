import * as React from "react";
import { cn } from "@/lib/utils";

export interface QuickActionsProps {
  children: React.ReactNode;
  className?: string;
}

export function QuickActions({ children, className }: QuickActionsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {children}
    </div>
  );
}
