import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ResetFiltersButtonProps {
  onReset: () => void;
}

export function ResetFiltersButton({ onReset }: ResetFiltersButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onReset}
      className="w-full flex items-center justify-center space-x-1.5 text-xs"
    >
      <RotateCcw className="h-3.5 w-3.5" />
      <span>Reset Filters</span>
    </Button>
  );
}
