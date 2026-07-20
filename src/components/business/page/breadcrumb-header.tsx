import React from "react";
import { BreadcrumbItem, Breadcrumbs } from "@/components/shared/breadcrumbs";

export interface BreadcrumbHeaderProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbHeader({ items, className }: BreadcrumbHeaderProps) {
  return (
    <div className={className}>
      <Breadcrumbs items={items} />
    </div>
  );
}
