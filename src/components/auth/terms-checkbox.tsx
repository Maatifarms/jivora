import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export interface TermsAndConditionsCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  error?: string;
}

export function TermsAndConditionsCheckbox({
  checked = false,
  onChange,
  error,
}: TermsAndConditionsCheckboxProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms-checkbox"
          checked={checked}
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
        <label htmlFor="terms-checkbox" className="text-xs text-muted-foreground cursor-pointer select-none">
          I accept the JIVORA{" "}
          <Link href="/terms" className="text-primary font-medium hover:underline">
            Terms of Trade
          </Link>{" "}
          &{" "}
          <Link href="/privacy" className="text-primary font-medium hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
