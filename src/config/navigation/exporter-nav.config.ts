import { SidebarConfig } from "@/types/navigation.types";
import { LayoutDashboard, Ship, FileText, Globe, Settings } from "lucide-react";

export const exporterNavConfig: SidebarConfig = {
  role: "EXPORTER",
  sections: [
    {
      title: "Global Trade Logistics",
      items: [
        { id: "e-dash", label: "Shipment Console", href: "/dashboard/exporter", icon: LayoutDashboard },
        { id: "e-freight", label: "Active Container Freight", href: "/dashboard/exporter/freight", icon: Ship },
        { id: "e-customs", label: "Customs Clearance", href: "/dashboard/exporter/customs", icon: FileText },
        { id: "e-[#countries]", label: "Export Destination Port", href: "/dashboard/exporter/ports", icon: Globe },
      ],
    },
    {
      title: "System",
      items: [{ id: "e-settings", label: "Logistics Settings", href: "/settings", icon: Settings }],
    },
  ],
};
