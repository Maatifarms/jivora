import { ReactNode } from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";

export interface ManufacturerLayoutProps {
  title?: string;
  children: ReactNode;
}

export function ManufacturerLayout({ title = "Factory Operations", children }: ManufacturerLayoutProps) {
  return (
    <DashboardShell role="MANUFACTURER" title={title}>
      {children}
    </DashboardShell>
  );
}
