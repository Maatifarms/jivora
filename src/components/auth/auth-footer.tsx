import * as React from "react";
import { cn } from "@/lib/utils";

export interface AuthFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthFooter({ children, className }: AuthFooterProps) {
  return (
    <div className={cn("pt-4 border-t text-center text-xs text-muted-foreground", className)}>
      {children}
    </div>
  );
}
