import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroHeaderProps {
  badge?: string;
  title: string;
  description: string;
  primaryAction?: { label: string; onClick?: () => void; href?: string };
  secondaryAction?: { label: string; onClick?: () => void; href?: string };
  className?: string;
}

export function HeroHeader({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: HeroHeaderProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden space-y-6 shadow-2xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-3xl space-y-4">
        {badge && (
          <Badge variant="success" className="text-xs px-3 py-1 uppercase tracking-wider font-semibold">
            {badge}
          </Badge>
        )}
        <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          {description}
        </p>

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {primaryAction && (
              <Button variant="b2b-gradient" size="lg" onClick={primaryAction.onClick}>
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="lg"
                onClick={secondaryAction.onClick}
                className="text-white border-white/20 hover:bg-white/10"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
