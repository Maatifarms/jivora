import { SidebarConfig } from "@/types/navigation.types";
import { LayoutDashboard, Package, FileCheck, DollarSign, Settings, Shield } from "lucide-react";

export const supplierNavConfig: SidebarConfig = {
  role: "SUPPLIER",
  sections: [
    {
      title: "Supplier Workspace",
      items: [
        { id: "s-dash", label: "Overview", href: "/dashboard/supplier", icon: LayoutDashboard },
        {
          id: "s-catalog",
          label: "Product Catalog",
          href: "/dashboard/supplier/catalog",
          icon: Package,
          children: [
            { id: "s-cat-list", label: "All Products", href: "/dashboard/supplier/catalog/list" },
            { id: "s-cat-add", label: "Add Product", href: "/dashboard/supplier/catalog/new" },
          ],
        },
        { id: "s-rfqs", label: "Incoming RFQs", href: "/dashboard/supplier/rfqs", icon: FileCheck, badge: "New" },
        { id: "s-payouts", label: "Payouts & Escrow", href: "/dashboard/supplier/payouts", icon: DollarSign },
      ],
    },
    {
      title: "Compliance",
      items: [
        { id: "s-verify", label: "Verification Badge", href: "/dashboard/supplier/verification", icon: Shield },
        { id: "s-settings", label: "Company Settings", href: "/settings", icon: Settings },
      ],
    },
  ],
};
