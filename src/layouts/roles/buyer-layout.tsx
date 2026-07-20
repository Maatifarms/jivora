import { ReactNode } from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";

export interface BuyerLayoutProps {
  title?: string;
  children: ReactNode;
}

export function BuyerLayout({ title = "Buyer Console", children }: BuyerLayoutProps) {
  return (
    <DashboardShell role="BUYER" title={title}>
      {children}
    </DashboardShell>
  );
}
