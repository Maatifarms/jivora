import { Checkbox } from "@/components/ui/checkbox";

export interface MultiSelectOption {
  id: string;
  label: string;
}

export interface MultiSelectFilterProps {
  label: string;
  options: MultiSelectOption[];
  selected?: string[];
  onChange?: (selected: string[]) => void;
}

export function MultiSelectFilter({
  label,
  options,
  selected = [],
  onChange,
}: MultiSelectFilterProps) {
  const handleToggle = (id: string) => {
    if (!onChange) return;
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
        {options.map((opt) => (
          <Checkbox
            key={opt.id}
            id={`multi-${opt.id}`}
            label={opt.label}
            checked={selected.includes(opt.id)}
            onChange={() => handleToggle(opt.id)}
          />
        ))}
      </div>
    </div>
  );
}
