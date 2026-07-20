import { Select } from "@/components/ui/select";

export interface SortOption {
  value: string;
  label: string;
}

export interface SortDropdownProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: SortOption[];
}

const defaultOptions: SortOption[] = [
  { value: "relevance", label: "Most Relevant" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "moq-low", label: "Minimum Order: Low to High" },
  { value: "rating", label: "Supplier Verification Score" },
];

export function SortDropdown({
  value = "relevance",
  onChange,
  options = defaultOptions,
}: SortDropdownProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs text-muted-foreground whitespace-nowrap">Sort by:</span>
      <Select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        options={options}
        className="text-xs h-9 py-1"
      />
    </div>
  );
}
