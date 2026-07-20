import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface FilterChipItem {
  id: string;
  label: string;
  value: string;
}

export interface FilterChipsProps {
  chips: FilterChipItem[];
  onRemoveChip: (id: string) => void;
  onClearAll?: () => void;
}

export function FilterChips({ chips, onRemoveChip, onClearAll }: FilterChipsProps) {
  if (!chips || chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs text-muted-foreground font-medium">Active:</span>
      {chips.map((chip) => (
        <Badge
          key={chip.id}
          variant="secondary"
          className="flex items-center space-x-1.5 py-1 px-2.5 text-xs font-normal"
        >
          <span>{chip.label}: <strong className="font-semibold">{chip.value}</strong></span>
          <button
            type="button"
            onClick={() => onRemoveChip(chip.id)}
            className="hover:text-destructive transition-colors ml-1"
            aria-label={`Remove filter ${chip.label}`}
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}

      {onClearAll && (
        <button
          type="button"
          onClick={onClearAll}
          className="text-xs text-primary font-semibold hover:underline ml-2"
        >
          Clear All
        </button>
      )}
    </div>
  );
}
