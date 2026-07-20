import { SidebarConfig } from "@/types/navigation.types";
import { LayoutDashboard, Users, ShieldCheck, FileCheck, BarChart3, Settings } from "lucide-react";

export const adminNavConfig: SidebarConfig = {
  role: "ADMIN",
  sections: [
    {
      title: "Platform Administration",
      items: [
        { id: "a-dash", label: "Admin Console", href: "/dashboard/admin", icon: LayoutDashboard },
        { id: "a-users", label: "User Verification", href: "/dashboard/admin/users", icon: Users, badge: "12 Pending" },
        { id: "a-compliance", label: "KYB & Tax Audit", href: "/dashboard/admin/compliance", icon: ShieldCheck },
        { id: "a-rfq-audit", label: "RFQ Moderation", href: "/dashboard/admin/rfq", icon: FileCheck },
        { id: "a-analytics", label: "Platform Metrics", href: "/dashboard/admin/metrics", icon: BarChart3 },
      ],
    },
    {
      title: "System Control",
      items: [{ id: "a-settings", label: "Platform Settings", href: "/admin/settings", icon: Settings }],
    },
  ],
};
