import * as React from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";
import { ProfileClient } from "./profile-client";
import { UserRole } from "@/types/auth.types";

const currentRole: UserRole = "BUYER"; // Derived from session

export default function ProfilePage() {
  const initialProfile = {
    role: currentRole,
    fullName: "Alex Rivera",
    companyName: "Rivera Procurement LLC",
    email: "alex@riveraprocurement.com",
    phone: "+1 (555) 019-2831",
    procurementBudget: "$500k - $1M",
  };

  return (
    <DashboardShell role={currentRole} title="My Profile">
      <ProfileClient initialData={initialProfile} />
    </DashboardShell>
  );
}
