import { ReactNode } from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";

export interface ExporterLayoutProps {
  title?: string;
  children: ReactNode;
}

export function ExporterLayout({ title = "Global Trade Logistics", children }: ExporterLayoutProps) {
  return (
    <DashboardShell role="EXPORTER" title={title}>
      {children}
    </DashboardShell>
  );
}
