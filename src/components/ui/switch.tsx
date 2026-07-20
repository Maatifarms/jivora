"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, label, disabled, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked);

    const activeState = props.value !== undefined ? Boolean(props.value) : isChecked;

    const toggle = () => {
      if (disabled) return;
      const next = !activeState;
      setIsChecked(next);
      if (onCheckedChange) onCheckedChange(next);
    };

    return (
      <label className={cn("inline-flex items-center space-x-3 cursor-pointer select-none", disabled && "cursor-not-allowed opacity-50")}>
        <button
          type="button"
          role="switch"
          aria-checked={activeState}
          disabled={disabled}
          ref={ref}
          onClick={toggle}
          className={cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors b2b-focus-ring",
            activeState ? "bg-primary" : "bg-input",
            className
          )}
          {...props}
        >
          <span
            className={cn(
              "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
              activeState ? "translate-x-5" : "translate-x-0"
            )}
          />
        </button>
        {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      </label>
    );
  }
);
Switch.displayName = "Switch";
