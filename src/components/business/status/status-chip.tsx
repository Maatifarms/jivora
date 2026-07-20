import { cn } from "@/lib/utils";

export interface StatusChipProps {
  label: string;
  dotColor?: "green" | "yellow" | "red" | "blue" | "gray";
  className?: string;
}

export function StatusChip({ label, dotColor = "green", className }: StatusChipProps) {
  const dotMap = {
    green: "bg-emerald-500",
    yellow: "bg-amber-500",
    red: "bg-rose-500",
    blue: "bg-blue-500",
    gray: "bg-slate-400",
  };

  return (
    <div className={cn("inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-muted/60 text-xs font-medium text-foreground", className)}>
      <span className={cn("h-2 w-2 rounded-full animate-pulse", dotMap[dotColor])} />
      <span>{label}</span>
    </div>
  );
}
