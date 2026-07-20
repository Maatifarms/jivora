import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface PageTitleBlockProps {
  title: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "success" | "warning" | "destructive" | "info";
  description?: string;
  className?: string;
}

export function PageTitleBlock({
  title,
  badge,
  badgeVariant = "success",
  description,
  className,
}: PageTitleBlockProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center space-x-3">
        <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          {title}
        </h1>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      </div>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}
