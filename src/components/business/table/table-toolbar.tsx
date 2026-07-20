import * as React from "react";
import { SearchBar } from "../search/search-bar";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface TableToolbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onExport?: () => void;
  action?: React.ReactNode;
}

export function TableToolbar({
  searchQuery = "",
  onSearchChange,
  onExport,
  action,
}: TableToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-2">
      {onSearchChange && (
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Filter table records..."
          className="max-w-xs"
        />
      )}

      <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
        {onExport && (
          <Button variant="outline" size="sm" onClick={onExport} className="flex items-center space-x-1.5 text-xs">
            <Download className="h-3.5 w-3.5" />
            <span>Export CSV</span>
          </Button>
        )}
        {action}
      </div>
    </div>
  );
}
