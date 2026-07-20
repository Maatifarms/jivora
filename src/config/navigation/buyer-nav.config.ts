import { SidebarConfig } from "@/types/navigation.types";
import { LayoutDashboard, ShoppingBag, FileText, Bookmark, Settings, HelpCircle } from "lucide-react";

export const buyerNavConfig: SidebarConfig = {
  role: "BUYER",
  sections: [
    {
      title: "Sourcing Console",
      items: [
        { id: "b-dash", label: "Dashboard", href: "/dashboard/buyer", icon: LayoutDashboard },
        {
          id: "b-orders",
          label: "My Orders",
          href: "/dashboard/buyer/orders",
          icon: ShoppingBag,
          badge: "3 Active",
          children: [
            { id: "b-orders-active", label: "Active Contracts", href: "/dashboard/buyer/orders/active" },
            { id: "b-orders-history", label: "Order History", href: "/dashboard/buyer/orders/history" },
          ],
        },
        {
          id: "b-rfq",
          label: "RFQ Management",
          href: "/dashboard/buyer/rfq",
          icon: FileText,
          children: [
            { id: "b-rfq-post", label: "Post New RFQ", href: "/dashboard/buyer/rfq/new" },
            { id: "b-rfq-submitted", label: "Submitted Quotes", href: "/dashboard/buyer/rfq/quotes" },
          ],
        },
        { id: "b-saved", label: "Saved Suppliers", href: "/dashboard/buyer/saved", icon: Bookmark },
      ],
    },
    {
      title: "Account & Support",
      items: [
        { id: "b-settings", label: "Settings", href: "/settings", icon: Settings },
        { id: "b-help", label: "Help & Support", href: "/help", icon: HelpCircle },
      ],
    },
  ],
};
