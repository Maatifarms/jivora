"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GlobalSearchInputProps {
  onOpenPalette?: () => void;
  placeholder?: string;
}

export function GlobalSearchInput({
  onOpenPalette,
  placeholder = "Search marketplace, suppliers & HS codes...",
}: GlobalSearchInputProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onOpenPalette}
      className="w-full sm:w-80 flex items-center justify-between text-muted-foreground bg-muted/40 border-input hover:bg-accent"
    >
      <div className="flex items-center space-x-2 truncate">
        <Search className="h-4 w-4 text-primary shrink-0" />
        <span className="text-xs truncate">{placeholder}</span>
      </div>
      <kbd className="hidden md:inline-block pointer-events-none rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        ⌘K
      </kbd>
    </Button>
  );
}
