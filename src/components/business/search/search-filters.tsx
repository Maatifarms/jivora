import * as React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface SearchFiltersProps {
  title?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onReset?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function SearchFilters({
  title = "Filters",
  isOpen = true,
  onToggle,
  onReset,
  children,
  className,
}: SearchFiltersProps) {
  return (
    <Card variant="outline" className={cn("p-4 space-y-4", className)}>
      <div className="flex items-center justify-between border-b pb-3">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          <h4 className="font-heading text-sm font-bold">{title}</h4>
        </div>
        <div className="flex items-center space-x-2">
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Reset All
            </button>
          )}
          {onToggle && (
            <Button variant="ghost" size="sm" onClick={onToggle} className="h-7 text-xs">
              {isOpen ? "Hide" : "Show"}
            </Button>
          )}
        </div>
      </div>

      {isOpen && <div className="space-y-4">{children}</div>}
    </Card>
  );
}
