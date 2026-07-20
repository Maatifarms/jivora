import { HeaderNavConfig } from "@/types/navigation.types";

export const navigationConfig: HeaderNavConfig = {
  mainNav: [
    { title: "Marketplace", href: "/marketplace" },
    { title: "Categories", href: "/categories" },
    { title: "RFQ Hub", href: "/rfq", badge: "Live" },
    { title: "Verified Suppliers", href: "/suppliers" },
    { title: "Global Exporters", href: "/exporters" },
  ],
  megaMenu: [
    {
      id: "industrial",
      title: "Industrial & Machinery",
      subcategories: [
        { title: "Heavy Equipment", href: "/categories/heavy-equipment", description: "Excavators, cranes, industrial tools" },
        { title: "Automation & Robotics", href: "/categories/automation", description: "PLC systems, robotic arms, sensors" },
        { title: "Raw Materials", href: "/categories/raw-materials", description: "Steel, aluminum, polymers & chemicals" },
      ],
    },
    {
      id: "textiles",
      title: "Textiles & Apparel",
      subcategories: [
        { title: "Bulk Fabrics", href: "/categories/bulk-fabrics", description: "Cotton, silk, synthetic weaves" },
        { title: "Garment Manufacturing", href: "/categories/garments", description: "OEM/ODM apparel production" },
      ],
    },
    {
      id: "electronics",
      title: "Electronics & Components",
      subcategories: [
        { title: "Semiconductors", href: "/categories/semiconductors", description: "Microcontrollers, ICs, passive components" },
        { title: "Energy & Solar", href: "/categories/energy-solar", description: "Panels, inverters, battery storage" },
      ],
    },
  ],
  quickActions: [
    { title: "Post RFQ", href: "/rfq/create" },
    { title: "Become a Supplier", href: "/register?role=SUPPLIER" },
  ],
};
