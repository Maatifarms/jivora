import * as React from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";
import { MessagesClient } from "./messages-client";
import { UserRole } from "@/types/auth.types";

const currentRole: UserRole = "BUYER"; // Derived from session in a real app

export default function MessagesPage() {
  // Mock data fetched in the Server Component
  const initialConversations = [
    {
      id: "1",
      name: "GlobalTech Industries",
      lastMessage: "Can we get an update on the shipping schedule?",
      timestamp: "10:30 AM",
      unread: true,
      avatarInitials: "GT"
    },
    {
      id: "2",
      name: "Precision Parts LLC",
      lastMessage: "The invoice has been paid.",
      timestamp: "Yesterday",
      unread: false,
      avatarInitials: "PP"
    }
  ];

  return (
    <DashboardShell role={currentRole} title="Messages">
      <MessagesClient initialConversations={initialConversations} />
    </DashboardShell>
  );
}
