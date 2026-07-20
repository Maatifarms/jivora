import { Checkbox } from "@/components/ui/checkbox";

export interface RememberMeCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function RememberMeCheckbox({ checked = false, onChange }: RememberMeCheckboxProps) {
  return (
    <Checkbox
      id="remember-me"
      label="Remember this enterprise device"
      checked={checked}
      onChange={(e) => onChange && onChange(e.target.checked)}
    />
  );
}
