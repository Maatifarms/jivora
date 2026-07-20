import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepItem {
  id: string;
  label: string;
}

export interface StepIndicatorProps {
  steps: StepItem[];
  currentStepIndex: number;
  className?: string;
}

export function StepIndicator({ steps, currentStepIndex, className }: StepIndicatorProps) {
  return (
    <nav aria-label="Progress" className={cn("w-full py-4", className)}>
      <ol className="flex items-center justify-between w-full">
        {steps.map((step, sIdx) => {
          const isCompleted = sIdx < currentStepIndex;
          const isCurrent = sIdx === currentStepIndex;

          return (
            <li key={step.id} className="relative flex-1 flex flex-col items-center">
              {/* Step Connector Line */}
              {sIdx < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute top-4 left-1/2 w-full h-0.5 z-0",
                    isCompleted ? "bg-primary" : "bg-border"
                  )}
                />
              )}

              <div
                className={cn(
                  "relative z-10 h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                  isCompleted && "bg-primary text-primary-foreground",
                  isCurrent && "bg-background text-primary border-2 border-primary ring-4 ring-primary/20",
                  !isCompleted && !isCurrent && "bg-muted text-muted-foreground border border-border"
                )}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : sIdx + 1}
              </div>

              <span
                className={cn(
                  "text-xs font-medium mt-2 text-center truncate max-w-[90px]",
                  isCurrent && "text-primary font-bold",
                  isCompleted && "text-foreground",
                  !isCompleted && !isCurrent && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
