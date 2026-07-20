import { Spinner } from "./spinner";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

export interface LoadingStateProps {
  type?: "spinner" | "skeleton";
  message?: string;
  className?: string;
}

export function LoadingState({ type = "spinner", message = "Loading content...", className }: LoadingStateProps) {
  if (type === "skeleton") {
    return (
      <div className={cn("space-y-4 p-6 border rounded-xl bg-card my-4 animate-fade-in", className)}>
        <Skeleton shape="text" className="h-6 w-1/3" />
        <Skeleton shape="rectangle" className="h-24 w-full" />
        <div className="flex space-x-2">
          <Skeleton shape="rectangle" className="h-8 w-20" />
          <Skeleton shape="rectangle" className="h-8 w-20" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center my-4 space-y-3", className)}>
      <Spinner size="lg" />
      <p className="text-sm font-medium text-muted-foreground">{message}</p>
    </div>
  );
}
