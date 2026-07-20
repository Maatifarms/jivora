import * as React from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";
import { StatCard } from "@/components/business/display/stat-card";
import { AnalyticsChart } from "@/components/business/display/analytics-chart";
import { UserRole } from "@/types/auth.types";
import { TrendingUp, BarChart2, MousePointerClick } from "lucide-react";

const currentRole: UserRole = "BUYER"; // Example default

const trendData = [
  { name: "Jan", views: 400 },
  { name: "Feb", views: 300 },
  { name: "Mar", views: 550 },
  { name: "Apr", views: 450 },
  { name: "May", views: 700 },
  { name: "Jun", views: 650 },
];

const categoryData = [
  { name: "Electronics", volume: 4000 },
  { name: "Apparel", volume: 3000 },
  { name: "Machinery", volume: 2000 },
  { name: "Automotive", volume: 2780 },
];

export default function AnalyticsPage() {
  return (
    <DashboardShell role={currentRole} title="Analytics Overview">
      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <StatCard
          title="Total Views"
          value="12,481"
          icon={<MousePointerClick className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Conversion Rate"
          value="3.4%"
          icon={<TrendingUp className="h-4 w-4" />}
          trend={{ value: 0.8, isPositive: true }}
        />
        <StatCard
          title="Monthly Revenue"
          value="$45,231"
          icon={<BarChart2 className="h-4 w-4" />}
          trend={{ value: 4, isPositive: false }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <AnalyticsChart 
          title="Traffic Trends" 
          description="Views over the last 6 months"
          type="line"
          data={trendData}
          categoryKey="name"
          dataKey="views"
        />
        <AnalyticsChart 
          title="Top Categories" 
          description="Volume distributed by sector"
          type="bar"
          data={categoryData}
          categoryKey="name"
          dataKey="volume"
        />
      </div>
    </DashboardShell>
  );
}
