import * as React from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";
import { ReportsTable } from "@/components/business/display/reports-table";
import { UserRole } from "@/types/auth.types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const currentRole: UserRole = "BUYER"; // Example default

const reportsData = [
  {
    id: "1",
    name: "Q3 Procurement Summary",
    dateRange: "Jul 1, 2026 - Sep 30, 2026",
    status: "ready" as const,
  },
  {
    id: "2",
    name: "Supplier Performance Matrix",
    dateRange: "Jan 1, 2026 - Present",
    status: "processing" as const,
  },
  {
    id: "3",
    name: "Compliance Audit Log",
    dateRange: "Oct 1, 2026 - Oct 15, 2026",
    status: "failed" as const,
  },
];

export default function ReportsPage() {
  return (
    <DashboardShell role={currentRole} title="Reports">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-medium">Generated Reports</h2>
          <p className="text-sm text-muted-foreground">Download your historical data and analysis.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Generate New Report
        </Button>
      </div>

      <ReportsTable data={reportsData} />
    </DashboardShell>
  );
}
