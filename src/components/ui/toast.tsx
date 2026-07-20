"use client";

import { useToast } from "@/providers/toast-provider";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 max-w-md w-full px-4 pointer-events-none">
      {toasts.map((toast) => {
        const isDestructive = toast.variant === "destructive";
        const isSuccess = toast.variant === "success";

        return (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto flex items-start space-x-3 rounded-lg border p-4 shadow-lg transition-all animate-fade-in bg-background text-foreground",
              isDestructive && "border-destructive/50 bg-destructive/10 text-destructive",
              isSuccess && "border-emerald-500/50 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200"
            )}
          >
            {isSuccess && <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />}
            {isDestructive && <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />}
            {!isSuccess && !isDestructive && <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />}

            <div className="flex-1">
              <h4 className="font-medium text-sm">{toast.title}</h4>
              {toast.description && <p className="text-xs opacity-90 mt-0.5">{toast.description}</p>}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-foreground/60 hover:text-foreground p-1 rounded-md"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
