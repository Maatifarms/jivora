import { Select } from "@/components/ui/select";

export interface CountryFilterProps {
  value?: string;
  onChange?: (val: string) => void;
}

export function CountryFilter({ value = "all", onChange }: CountryFilterProps) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-muted-foreground">Country / Region</label>
      <Select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        options={[
          { value: "all", label: "All Regions" },
          { value: "us", label: "🇺🇸 United States" },
          { value: "de", label: "🇩🇪 Germany" },
          { value: "cn", label: "🇨🇳 China" },
          { value: "in", label: "🇮🇳 India" },
          { value: "ae", label: "🇦🇪 UAE" },
          { value: "sg", label: "🇸🇬 Singapore" },
        ]}
        className="text-xs"
      />
    </div>
  );
}
