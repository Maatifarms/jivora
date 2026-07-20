import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SortDropdown } from "./sort-dropdown";

export interface SearchResultsHeaderProps {
  totalResults: number;
  query?: string;
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
  sortValue?: string;
  onSortChange?: (value: string) => void;
}

export function SearchResultsHeader({
  totalResults,
  query,
  viewMode = "grid",
  onViewModeChange,
  sortValue,
  onSortChange,
}: SearchResultsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-3 border-b">
      <div>
        <h3 className="font-heading text-lg font-bold">
          {query ? `Search results for "${query}"` : "All Products & Catalog"}
        </h3>
        <p className="text-xs text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{totalResults.toLocaleString()}</span> items found
        </p>
      </div>

      <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
        <SortDropdown value={sortValue} onChange={onSortChange} />

        {onViewModeChange && (
          <div className="flex items-center border rounded-lg p-0.5 bg-muted/30">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => onViewModeChange("grid")}
              className="h-7 w-7"
              aria-label="Grid View"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => onViewModeChange("list")}
              className="h-7 w-7"
              aria-label="List View"
            >
              <List className="h-3.5 w-3.5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
