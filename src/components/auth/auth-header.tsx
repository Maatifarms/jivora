import * as React from "react";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

export interface AuthHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function AuthHeader({ title, description, className }: AuthHeaderProps) {
  return (
    <div className={cn("text-center space-y-2", className)}>
      <div className="flex justify-center mb-3">
        <Logo size="lg" showText={false} />
      </div>
      <h2 className="font-heading text-2xl font-extrabold tracking-tight">{title}</h2>
      {description && <p className="text-sm text-muted-foreground max-w-sm mx-auto">{description}</p>}
    </div>
  );
}
