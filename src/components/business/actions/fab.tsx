import * as React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FloatingActionButtonProps {
  icon?: React.ReactNode;
  label?: string;
  onClick: () => void;
  className?: string;
}

export function FloatingActionButton({
  icon = <Plus className="h-5 w-5" />,
  label,
  onClick,
  className,
}: FloatingActionButtonProps) {
  return (
    <Button
      variant="b2b-gradient"
      size={label ? "md" : "icon"}
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-40 shadow-2xl rounded-full flex items-center space-x-2 transition-transform hover:scale-105",
        !label && "h-12 w-12 rounded-full",
        className
      )}
    >
      {icon}
      {label && <span className="font-semibold text-sm pr-1">{label}</span>}
    </Button>
  );
}
