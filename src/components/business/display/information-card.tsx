import * as React from "react";
import { Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface InformationCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function InformationCard({
  title,
  description,
  icon = <Info className="h-5 w-5 text-primary" />,
  action,
  className,
}: InformationCardProps) {
  return (
    <Card variant="outline" className={cn("p-5 flex items-start space-x-4", className)}>
      <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">{icon}</div>
      <div className="flex-1 space-y-1">
        <h4 className="font-heading text-sm font-bold">{title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        {action && <div className="pt-2">{action}</div>}
      </div>
    </Card>
  );
}
