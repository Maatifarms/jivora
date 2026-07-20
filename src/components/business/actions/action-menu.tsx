import * as React from "react";
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export interface ActionMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  destructive?: boolean;
  onClick: () => void;
}

export interface ActionMenuProps {
  label?: string;
  items: ActionMenuItem[];
  variant?: "primary" | "secondary" | "outline";
}

export function ActionMenu({ label = "Actions", items, variant = "outline" }: ActionMenuProps) {
  return (
    <DropdownMenu
      trigger={
        <Button variant={variant} size="sm" className="flex items-center space-x-1.5 text-xs font-semibold">
          <span>{label}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </Button>
      }
    >
      {items.map((item) => (
        <DropdownMenuItem key={item.id} onClick={item.onClick} destructive={item.destructive}>
          <div className="flex items-center space-x-2 text-xs">
            {item.icon}
            <span>{item.label}</span>
          </div>
        </DropdownMenuItem>
      ))}
    </DropdownMenu>
  );
}
