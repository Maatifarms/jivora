import * as React from "react";
import { AdminLayout } from "@/layouts/roles/admin-layout";
import { StatCard, ActivityFeedItem } from "@/components/business/display";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, ShieldAlert, FileWarning } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <AdminLayout title="Admin Dashboard">
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Total Users"
          value="1,482"
          icon={<Users className="h-4 w-4" />}
          description="Active accounts across all roles"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Pending Product Approvals"
          value={34}
          icon={<ShieldAlert className="h-4 w-4" />}
          description="Awaiting manual review"
          trend={{ value: 12, isPositive: false }}
        />
        <StatCard
          title="Flagged Items"
          value={7}
          icon={<FileWarning className="h-4 w-4" />}
          description="Reported by users or automated scans"
          trend={{ value: 2, isPositive: false }}
        />
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Platform Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 divide-y">
            <ActivityFeedItem
              id="1"
              title="New Supplier Verification"
              description="GlobalTech Industries has submitted documents for verification."
              timestamp="15 minutes ago"
              status="pending"
              avatarInitials="GT"
            />
            <ActivityFeedItem
              id="2"
              title="Product Rejected"
              description="Item #8832 (Counterfeit Electronics) was rejected and flagged."
              timestamp="1 hour ago"
              status="destructive"
              avatarInitials="PR"
            />
            <ActivityFeedItem
              id="3"
              title="New User Signup"
              description="Buyer account created: procure@megacorp.com"
              timestamp="3 hours ago"
              status="success"
              avatarInitials="MC"
            />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
