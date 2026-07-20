import * as React from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";
import { NotificationItem } from "@/components/business/display/notification-item";
import { UserRole } from "@/types/auth.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Assuming role is derived from session context in a real app
const currentRole: UserRole = "BUYER"; 

export default function NotificationsPage() {
  const notifications = [
    {
      id: "1",
      type: "order" as const,
      title: "Order #8892 Shipped",
      message: "Your recent order from GlobalTech has been shipped.",
      timestamp: "10 mins ago",
      initialRead: false,
    },
    {
      id: "2",
      type: "message" as const,
      title: "New message from Supplier",
      message: "Can we discuss the bulk discount terms on your recent RFQ?",
      timestamp: "1 hour ago",
      initialRead: false,
    },
    {
      id: "3",
      type: "alert" as const,
      title: "Action Required: Verify Email",
      message: "Please verify your email address to continue using all platform features.",
      timestamp: "2 days ago",
      initialRead: true,
    },
  ];

  return (
    <DashboardShell role={currentRole} title="Notifications">
      <Card>
        <CardHeader>
          <CardTitle>All Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {notifications.map((n) => (
            <NotificationItem key={n.id} {...n} />
          ))}
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
