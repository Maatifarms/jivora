import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ActionMenuItem } from "./action-menu";

export interface MoreMenuProps {
  items: ActionMenuItem[];
}

export function MoreMenu({ items }: MoreMenuProps) {
  return (
    <DropdownMenu
      trigger={
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="h-4 w-4" />
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
