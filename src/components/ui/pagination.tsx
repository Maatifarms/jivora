import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const pages: Array<number | string> = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav role="navigation" aria-label="pagination" className={cn("mx-auto flex w-full justify-center space-x-1 items-center", className)}>
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        leftIcon={<ChevronLeft className="h-4 w-4" />}
      >
        Previous
      </Button>

      {pages.map((p, idx) => {
        if (typeof p === "string") {
          return (
            <span key={idx} className="flex h-9 w-9 items-center justify-center text-sm text-muted-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </span>
          );
        }

        const isCurrent = p === currentPage;

        return (
          <Button
            key={idx}
            variant={isCurrent ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(p)}
            className="h-9 w-9 p-0"
          >
            {p}
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        rightIcon={<ChevronRight className="h-4 w-4" />}
      >
        Next
      </Button>
    </nav>
  );
}
