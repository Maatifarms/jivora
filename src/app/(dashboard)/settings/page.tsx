import * as React from "react";
import { DashboardShell } from "@/layouts/dashboard-shell";
import { SettingsClient } from "./settings-client";
import { UserRole } from "@/types/auth.types";

const currentRole: UserRole = "BUYER"; // Derived from session

export default function SettingsPage() {
  return (
    <DashboardShell role={currentRole} title="Settings">
      <SettingsClient />
    </DashboardShell>
  );
}
