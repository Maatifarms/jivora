import { ReactNode } from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";

export interface SupplierLayoutProps {
  title?: string;
  children: ReactNode;
}

export function SupplierLayout({ title = "Supplier Workspace", children }: SupplierLayoutProps) {
  return (
    <DashboardShell role="SUPPLIER" title={title}>
      {children}
    </DashboardShell>
  );
}
