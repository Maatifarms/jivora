import { ReactNode } from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";

export interface AdminLayoutProps {
  title?: string;
  children: ReactNode;
}

export function AdminLayout({ title = "Platform Administration", children }: AdminLayoutProps) {
  return (
    <DashboardShell role="ADMIN" title={title}>
      {children}
    </DashboardShell>
  );
}
