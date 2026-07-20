import * as React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export interface ReportItem {
  id: string;
  name: string;
  dateRange: string;
  status: "ready" | "processing" | "failed";
}

export interface ReportsTableProps {
  data: ReportItem[];
}

export function ReportsTable({ data }: ReportsTableProps) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="px-6 py-4 font-medium text-foreground">Report Name</th>
              <th className="px-6 py-4 font-medium text-foreground">Date Range</th>
              <th className="px-6 py-4 font-medium text-foreground">Status</th>
              <th className="px-6 py-4 font-medium text-foreground text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-muted/20 transition-colors">
                <td className="px-6 py-4 font-medium">{row.name}</td>
                <td className="px-6 py-4 text-muted-foreground">{row.dateRange}</td>
                <td className="px-6 py-4">
                  <Badge variant={
                    row.status === "ready" ? "success" : 
                    row.status === "processing" ? "warning" : "destructive"
                  }>
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="sm" disabled={row.status !== "ready"}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            No reports generated yet.
          </div>
        )}
      </div>
    </Card>
  );
}
