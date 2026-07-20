import * as React from "react";
import { Badge } from "@/components/ui/badge";

export type B2BStatusType =
  | "PENDING"
  | "APPROVED"
  | "VERIFIED"
  | "REJECTED"
  | "ACTIVE"
  | "CANCELLED"
  | "IN_TRANSIT"
  | "DELIVERED";

export interface StatusBadgeProps {
  status: B2BStatusType | string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const normalized = status.toUpperCase();

  const variantMap: Record<string, "success" | "warning" | "destructive" | "info" | "secondary"> = {
    APPROVED: "success",
    VERIFIED: "success",
    ACTIVE: "success",
    DELIVERED: "success",
    PENDING: "warning",
    IN_TRANSIT: "info",
    REJECTED: "destructive",
    CANCELLED: "destructive",
  };

  const variant = variantMap[normalized] || "secondary";

  return (
    <Badge variant={variant} className={className}>
      {status}
    </Badge>
  );
}
