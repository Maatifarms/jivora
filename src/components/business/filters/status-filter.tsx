import { Checkbox } from "@/components/ui/checkbox";

export interface StatusItem {
  id: string;
  label: string;
}

export interface StatusFilterProps {
  statuses?: StatusItem[];
  selected?: string[];
  onChange?: (selected: string[]) => void;
}

const defaultStatuses: StatusItem[] = [
  { id: "VERIFIED", label: "Verified Supplier" },
  { id: "ACTIVE", label: "Active Quotation" },
  { id: "PENDING", label: "Under Inspection" },
];

export function StatusFilter({
  statuses = defaultStatuses,
  selected = [],
  onChange,
}: StatusFilterProps) {
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
      <label className="text-xs font-semibold text-muted-foreground">Verification & Status</label>
      <div className="space-y-1.5">
        {statuses.map((item) => (
          <Checkbox
            key={item.id}
            id={`status-${item.id}`}
            label={item.label}
            checked={selected.includes(item.id)}
            onChange={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
