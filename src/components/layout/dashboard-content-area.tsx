import * as React from "react";
import { cn } from "@/lib/utils";

export type DashboardContentAreaProps = React.HTMLAttributes<HTMLDivElement>;

export function DashboardContentArea({ className, children, ...props }: DashboardContentAreaProps) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto space-y-6 animate-fade-in", className)} {...props}>
      {children}
    </div>
  );
}
