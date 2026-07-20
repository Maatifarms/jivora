"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input, InputProps } from "./input";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  showStrength?: boolean;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, error, showStrength = false, value = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const valString = String(value);

    // Simple B2B password strength calculator
    const getStrength = (pass: string) => {
      if (!pass) return 0;
      let score = 0;
      if (pass.length >= 8) score++;
      if (/[A-Z]/.test(pass)) score++;
      if (/[0-9]/.test(pass)) score++;
      if (/[^A-Za-z0-9]/.test(pass)) score++;
      return score;
    };

    const strength = getStrength(valString);

    return (
      <div className="w-full space-y-1.5">
        <Input
          type={showPassword ? "text" : "password"}
          ref={ref}
          value={value}
          error={error}
          className={className}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-muted-foreground hover:text-foreground focus:outline-none"
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
          {...props}
        />

        {showStrength && valString.length > 0 && (
          <div className="flex items-center space-x-1">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  idx < strength
                    ? strength <= 1
                      ? "bg-destructive"
                      : strength <= 2
                      ? "bg-amber-500"
                      : "bg-emerald-500"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";
