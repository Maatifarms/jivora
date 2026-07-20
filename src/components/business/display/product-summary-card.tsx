import * as React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductSummaryCardProps {
  title: string;
  category?: string;
  priceRange: string;
  moq: string;
  supplierName?: string;
  badge?: string;
  onInquire?: () => void;
  className?: string;
}

export function ProductSummaryCard({
  title,
  category = "Industrial Equipment",
  priceRange,
  moq,
  supplierName,
  badge = "In Stock",
  onInquire,
  className,
}: ProductSummaryCardProps) {
  return (
    <Card variant="outline" className={cn("p-4 space-y-3 hover:shadow-md transition-all flex flex-col justify-between", className)}>
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Package className="h-5 w-5" />
          </div>
          {badge && <Badge variant="secondary" className="text-[10px]">{badge}</Badge>}
        </div>

        <div>
          <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">{category}</span>
          <h4 className="font-heading text-sm font-bold line-clamp-2">{title}</h4>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Price:</span>
          <strong className="text-primary font-bold">{priceRange}</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">MOQ:</span>
          <span className="font-medium">{moq}</span>
        </div>
        {supplierName && (
          <div className="text-[11px] text-muted-foreground truncate">
            Supplier: <span className="font-medium text-foreground">{supplierName}</span>
          </div>
        )}

        {onInquire && (
          <Button variant="b2b-gradient" size="sm" onClick={onInquire} className="w-full mt-2">
            Request RFQ Quote
          </Button>
        )}
      </div>
    </Card>
  );
}
