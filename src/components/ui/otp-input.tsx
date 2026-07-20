"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface OtpInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function OtpInput({
  length = 6,
  value = "",
  onChange,
  error,
  disabled = false,
  className,
}: OtpInputProps) {
  const inputsRef = React.useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const val = e.target.value.slice(-1);
    const newDigits = value.split("");
    newDigits[idx] = val;
    const combined = newDigits.join("");

    if (onChange) onChange(combined);

    if (val && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !value[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim().slice(0, length);
    if (onChange) onChange(pasted);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className={cn("flex space-x-2", className)}>
        {Array.from({ length }).map((_, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            disabled={disabled}
            value={value[idx] || ""}
            ref={(el) => {
              inputsRef.current[idx] = el;
            }}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            onPaste={handlePaste}
            className={cn(
              "h-12 w-10 text-center text-xl font-bold font-mono rounded-md border border-input bg-background b2b-focus-ring transition-all",
              error && "border-destructive focus-visible:ring-destructive"
            )}
          />
        ))}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
