import { Calendar } from "lucide-react";
import { Select } from "@/components/ui/select";

export interface DateFilterProps {
  value?: string;
  onChange?: (val: string) => void;
}

export function DateFilter({ value = "30-days", onChange }: DateFilterProps) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-muted-foreground flex items-center space-x-1">
        <Calendar className="h-3.5 w-3.5 text-primary" />
        <span>Date Range</span>
      </label>
      <Select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        options={[
          { value: "today", label: "Today" },
          { value: "7-days", label: "Last 7 Days" },
          { value: "30-days", label: "Last 30 Days" },
          { value: "90-days", label: "Last 90 Days" },
          { value: "1-year", label: "Past Year" },
          { value: "all", label: "All Time" },
        ]}
        className="text-xs"
      />
    </div>
  );
}
