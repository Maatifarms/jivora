"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value = "",
  onChange,
  onSearch,
  placeholder = "Search products, suppliers, or RFQs...",
  className,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = React.useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalValue(val);
    if (onChange) onChange(val);
  };

  const handleClear = () => {
    setInternalValue("");
    if (onChange) onChange("");
    if (onSearch) onSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(internalValue);
    }
  };

  return (
    <div className={cn("relative flex items-center w-full max-w-xl", className)}>
      <Input
        value={internalValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        leftIcon={<Search className="h-4 w-4 text-muted-foreground" />}
        rightIcon={
          internalValue ? (
            <button
              type="button"
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground p-0.5 rounded-full"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : undefined
        }
      />
      {onSearch && (
        <Button
          type="button"
          size="sm"
          variant="primary"
          onClick={() => onSearch(internalValue)}
          className="ml-2 shrink-0"
        >
          Search
        </Button>
      )}
    </div>
  );
}
