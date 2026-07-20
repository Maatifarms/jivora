import { Pagination } from "@/components/ui/pagination";
import { Select } from "@/components/ui/select";

export interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

export function TablePagination({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}: TablePaginationProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-2 text-xs text-muted-foreground">
      <div className="flex items-center space-x-3">
        <span>
          Showing <strong className="text-foreground font-semibold">{startItem}-{endItem}</strong> of{" "}
          <strong className="text-foreground font-semibold">{totalItems}</strong> entries
        </span>

        <div className="flex items-center space-x-1.5 border-l pl-3">
          <span>Rows per page:</span>
          <Select
            value={String(pageSize)}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            options={[
              { value: "5", label: "5" },
              { value: "10", label: "10" },
              { value: "25", label: "25" },
              { value: "50", label: "50" },
            ]}
            className="text-xs h-7 py-0 px-2"
          />
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
