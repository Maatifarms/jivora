import { cn } from "@/lib/utils";

export interface ProgressIndicatorProps {
  value: number; // 0 - 100
  label?: string;
  showPercentage?: boolean;
  className?: string;
}

export function ProgressIndicator({
  value,
  label,
  showPercentage = true,
  className,
}: ProgressIndicatorProps) {
  const percentage = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-xs text-muted-foreground font-medium">
          {label && <span>{label}</span>}
          {showPercentage && <span className="text-foreground font-bold">{percentage}%</span>}
        </div>
      )}
      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
