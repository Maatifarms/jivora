import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, checked, disabled, onChange, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <label className={cn("inline-flex items-center space-x-2 cursor-pointer select-none", disabled && "cursor-not-allowed opacity-50")}>
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              ref={ref}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                "h-4 w-4 rounded border border-input bg-background transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center text-primary-foreground",
                error && "border-destructive",
                className
              )}
            >
              <Check className="h-3 w-3 opacity-0 peer-checked:opacity-100 transition-opacity stroke-[3]" />
            </div>
          </div>

          {label && <span className="text-sm font-medium text-foreground">{label}</span>}
        </label>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
