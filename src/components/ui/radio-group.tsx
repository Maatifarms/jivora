"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RadioGroupContextType {
  value?: string;
  name?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = React.createContext<RadioGroupContextType | undefined>(undefined);

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
}

export function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  name,
  disabled,
  className,
  children,
  ...props
}: RadioGroupProps) {
  const [selected, setSelected] = React.useState(value || defaultValue || "");

  const currentValue = value !== undefined ? value : selected;

  const handleChange = (val: string) => {
    if (value === undefined) setSelected(val);
    if (onValueChange) onValueChange(val);
  };

  return (
    <RadioGroupContext.Provider value={{ value: currentValue, name, onChange: handleChange, disabled }}>
      <div role="radiogroup" className={cn("grid gap-2", className)} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
}

export const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, label, disabled, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext);
    if (!context) throw new Error("RadioGroupItem must be used inside RadioGroup");

    const isChecked = context.value === value;
    const isDisabled = disabled || context.disabled;

    return (
      <label className={cn("inline-flex items-center space-x-2 cursor-pointer select-none", isDisabled && "cursor-not-allowed opacity-50")}>
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            ref={ref}
            name={context.name}
            value={value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={() => context.onChange && context.onChange(value)}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "h-4 w-4 rounded-full border border-input bg-background transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-checked:border-primary flex items-center justify-center",
              className
            )}
          >
            {isChecked && <div className="h-2 w-2 rounded-full bg-primary" />}
          </div>
        </div>
        {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      </label>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";
