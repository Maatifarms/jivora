import * as React from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ActivityCardProps {
  title: string;
  timestamp: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ActivityCard({
  title,
  timestamp,
  description,
  icon = <Clock className="h-4 w-4 text-primary" />,
  className,
}: ActivityCardProps) {
  return (
    <div className={cn("flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/40 transition-colors border-b last:border-b-0", className)}>
      <div className="p-2 rounded-full bg-primary/10 shrink-0 mt-0.5">{icon}</div>
      <div className="flex-1 min-w-0 space-y-0.5">
        <div className="flex justify-between items-baseline">
          <h5 className="font-heading text-xs font-bold truncate">{title}</h5>
          <span className="text-[10px] text-muted-foreground shrink-0">{timestamp}</span>
        </div>
        {description && <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>}
      </div>
    </div>
  );
}
