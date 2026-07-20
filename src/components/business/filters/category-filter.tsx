import { Select } from "@/components/ui/select";

export interface CategoryOption {
  value: string;
  label: string;
}

export interface CategoryFilterProps {
  value?: string;
  onChange?: (val: string) => void;
  options?: CategoryOption[];
}

const defaultCategories: CategoryOption[] = [
  { value: "all", label: "All Categories" },
  { value: "industrial", label: "Industrial Machinery" },
  { value: "textiles", label: "Textiles & Apparel" },
  { value: "electronics", label: "Consumer Electronics" },
  { value: "chemicals", label: "Chemicals & Plastics" },
  { value: "energy", label: "Solar & Clean Energy" },
];

export function CategoryFilter({
  value = "all",
  onChange,
  options = defaultCategories,
}: CategoryFilterProps) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-muted-foreground">Product Category</label>
      <Select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        options={options}
        className="text-xs"
      />
    </div>
  );
}
