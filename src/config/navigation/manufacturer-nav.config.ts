import { SidebarConfig } from "@/types/navigation.types";
import { LayoutDashboard, Factory, Cpu, Layers, Settings } from "lucide-react";

export const manufacturerNavConfig: SidebarConfig = {
  role: "MANUFACTURER",
  sections: [
    {
      title: "Factory Operations",
      items: [
        { id: "m-dash", label: "Production Overview", href: "/dashboard/manufacturer", icon: LayoutDashboard },
        { id: "m-capacity", label: "Factory Capacity", href: "/dashboard/manufacturer/capacity", icon: Factory },
        { id: "m-oem", label: "OEM Custom Orders", href: "/dashboard/manufacturer/oem", icon: Cpu, badge: "5 Requests" },
        { id: "m-materials", label: "Raw Material Inbound", href: "/dashboard/manufacturer/materials", icon: Layers },
      ],
    },
    {
      title: "System",
      items: [{ id: "m-settings", label: "Factory Settings", href: "/settings", icon: Settings }],
    },
  ],
};
