import React from "react";
import { Input } from "@/components/ui/input";

export interface RangeFilterProps {
  label?: string;
  minPlaceholder?: string;
  maxPlaceholder?: string;
  minValue?: string;
  maxValue?: string;
  onMinChange?: (val: string) => void;
  onMaxChange?: (val: string) => void;
}

export function RangeFilter({
  label = "Price Range ($USD)",
  minPlaceholder = "Min",
  maxPlaceholder = "Max",
  minValue = "",
  maxValue = "",
  onMinChange,
  onMaxChange,
}: RangeFilterProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      <div className="flex items-center space-x-2">
        <Input
          type="number"
          placeholder={minPlaceholder}
          value={minValue}
          onChange={(e) => onMinChange && onMinChange(e.target.value)}
          className="text-xs py-1"
        />
        <span className="text-xs text-muted-foreground">-</span>
        <Input
          type="number"
          placeholder={maxPlaceholder}
          value={maxValue}
          onChange={(e) => onMaxChange && onMaxChange(e.target.value)}
          className="text-xs py-1"
        />
      </div>
    </div>
  );
}
