import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimelineItemProps {
  title: string;
  timestamp: string;
  description?: string;
  isCompleted?: boolean;
  isCurrent?: boolean;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  timestamp,
  description,
  isCompleted = false,
  isCurrent = false,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex items-start space-x-3">
      {/* Vertical Connecting Line */}
      {!isLast && (
        <span className="absolute top-6 left-3 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
      )}

      {/* Circle Icon */}
      <div
        className={cn(
          "h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold z-10",
          isCompleted && "bg-emerald-500 text-white",
          isCurrent && "bg-primary text-primary-foreground ring-4 ring-primary/20",
          !isCompleted && !isCurrent && "bg-muted text-muted-foreground border border-border"
        )}
      >
        {isCompleted ? <Check className="h-3.5 w-3.5" /> : null}
      </div>

      <div className="flex-1 space-y-0.5 pb-6">
        <div className="flex justify-between items-baseline">
          <h5 className={cn("text-xs font-bold", isCurrent && "text-primary")}>{title}</h5>
          <span className="text-[10px] text-muted-foreground">{timestamp}</span>
        </div>
        {description && <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>}
      </div>
    </div>
  );
}
