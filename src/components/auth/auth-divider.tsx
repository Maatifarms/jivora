import { cn } from "@/lib/utils";

export interface AuthDividerProps {
  label?: string;
  className?: string;
}

export function AuthDivider({ label = "Or continue with Enterprise SSO", className }: AuthDividerProps) {
  return (
    <div className={cn("relative my-4 flex items-center justify-center", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border" />
      </div>
      <span className="relative bg-background px-3 text-[11px] font-semibold uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
