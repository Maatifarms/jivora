import * as React from "react";
import { BuyerLayout } from "@/layouts/roles/buyer-layout";
import { StatCard } from "@/components/business/display/stat-card";
import { ActivityFeedItem } from "@/components/business/display/activity-feed-item";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShoppingCart, PackageSearch, Bookmark } from "lucide-react";

export default function BuyerDashboardPage() {
  return (
    <BuyerLayout title="Buyer Dashboard">
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Open Inquiries"
          value={12}
          icon={<ShoppingCart className="h-4 w-4" />}
          description="Awaiting supplier response"
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Saved Suppliers"
          value={48}
          icon={<Bookmark className="h-4 w-4" />}
          description="From 5 different countries"
        />
        <StatCard
          title="Recent Orders"
          value={4}
          icon={<PackageSearch className="h-4 w-4" />}
          description="In transit"
          trend={{ value: 2, isPositive: false }}
        />
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 divide-y">
            <ActivityFeedItem
              id="1"
              title="RFQ Accepted"
              description="Supplier GlobalTech accepted your RFQ for Industrial Motors"
              timestamp="2 hours ago"
              status="success"
              avatarInitials="GT"
            />
            <ActivityFeedItem
              id="2"
              title="New Message"
              description="You have a new message from Precision Parts"
              timestamp="5 hours ago"
              status="info"
              avatarInitials="PP"
            />
            <ActivityFeedItem
              id="3"
              title="Order Shipped"
              description="Order #ORD-8992 has been shipped by the manufacturer"
              timestamp="1 day ago"
              status="success"
              avatarInitials="OM"
            />
          </CardContent>
        </Card>
      </div>
    </BuyerLayout>
  );
}
