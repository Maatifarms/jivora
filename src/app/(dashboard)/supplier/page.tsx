import * as React from "react";
import { SupplierLayout } from "@/layouts/roles/supplier-layout";
import { StatCard, ActivityFeedItem } from "@/components/business/display";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Package, MessageSquare, Activity } from "lucide-react";

export default function SupplierDashboardPage() {
  return (
    <SupplierLayout title="Supplier Dashboard">
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Products Listed"
          value={124}
          icon={<Package className="h-4 w-4" />}
          description="Active catalog items"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Inquiries Received"
          value={18}
          icon={<MessageSquare className="h-4 w-4" />}
          description="Awaiting your response"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Response Rate"
          value="94%"
          icon={<Activity className="h-4 w-4" />}
          description="Average response time < 2h"
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Buyer Inquiries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 divide-y">
            <ActivityFeedItem
              id="1"
              title="New RFQ: Industrial Bearings"
              description="MegaCorp is requesting quotes for 5,000 units of ABEC-7 Bearings."
              timestamp="30 minutes ago"
              status="warning"
              avatarInitials="MC"
            />
            <ActivityFeedItem
              id="2"
              title="Message from BuildIt Inc."
              description="Question regarding shipping times for Aluminum Extrusions."
              timestamp="2 hours ago"
              status="info"
              avatarInitials="BI"
            />
            <ActivityFeedItem
              id="3"
              title="Sample Request Approved"
              description="Your sample request for TechVision has been processed."
              timestamp="1 day ago"
              status="success"
              avatarInitials="TV"
            />
          </CardContent>
        </Card>
      </div>
    </SupplierLayout>
  );
}
