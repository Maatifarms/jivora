import { FilterChips, FilterChipItem } from "./filter-chips";

export interface ActiveFiltersDisplayProps {
  filters: FilterChipItem[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export function ActiveFiltersDisplay({ filters, onRemove, onClearAll }: ActiveFiltersDisplayProps) {
  if (!filters || filters.length === 0) return null;

  return (
    <div className="py-2">
      <FilterChips chips={filters} onRemoveChip={onRemove} onClearAll={onClearAll} />
    </div>
  );
}
