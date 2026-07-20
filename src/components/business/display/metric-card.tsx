import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  className?: string;
}

export function MetricCard({ label, value, unit, className }: MetricCardProps) {
  return (
    <Card variant="outline" className={cn("p-4 space-y-1", className)}>
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="flex items-baseline space-x-1">
        <span className="font-heading text-xl font-bold">{value}</span>
        {unit && <span className="text-xs text-muted-foreground font-medium">{unit}</span>}
      </div>
    </Card>
  );
}
