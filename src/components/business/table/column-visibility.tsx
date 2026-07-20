import { SlidersHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export interface ColumnItem {
  key: string;
  header: string;
  visible: boolean;
}

export interface ColumnVisibilityProps {
  columns: ColumnItem[];
  onToggleColumn: (key: string) => void;
}

export function ColumnVisibility({ columns, onToggleColumn }: ColumnVisibilityProps) {
  return (
    <DropdownMenu
      trigger={
        <Button variant="outline" size="sm" className="flex items-center space-x-1.5 text-xs">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span>Columns</span>
        </Button>
      }
    >
      <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {columns.map((col) => (
        <DropdownMenuItem key={col.key} onClick={() => onToggleColumn(col.key)}>
          <div className="flex items-center justify-between w-full text-xs">
            <span>{col.header}</span>
            <span className="text-[10px] font-mono text-primary">{col.visible ? "✓ Visible" : "Hidden"}</span>
          </div>
        </DropdownMenuItem>
      ))}
    </DropdownMenu>
  );
}
