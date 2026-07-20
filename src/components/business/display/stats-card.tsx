import * as React from "react";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  trend = "up",
  subtitle,
  icon,
  className,
}: StatsCardProps) {
  return (
    <Card variant="elevated" className={cn("p-5 space-y-3", className)}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        {icon && <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>}
      </div>

      <div className="flex items-baseline justify-between">
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">{value}</h3>
        {change && (
          <div
            className={cn(
              "flex items-center text-xs font-bold px-2 py-0.5 rounded-full",
              trend === "up" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
              trend === "down" && "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
              trend === "neutral" && "bg-muted text-muted-foreground"
            )}
          >
            {trend === "up" && <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />}
            {trend === "down" && <ArrowDownRight className="h-3.5 w-3.5 mr-0.5" />}
            {trend === "neutral" && <Minus className="h-3.5 w-3.5 mr-0.5" />}
            <span>{change}</span>
          </div>
        )}
      </div>

      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </Card>
  );
}
