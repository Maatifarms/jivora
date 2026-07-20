import { PublicNavConfig } from "@/types/navigation.types";
import { Grid, Layers, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

export const publicNavConfig: PublicNavConfig = {
  mainNav: [
    { id: "marketplace", label: "Marketplace", href: "/marketplace" },
    { id: "rfq", label: "RFQ Hub", href: "/rfq", badge: "Live" },
    { id: "suppliers", label: "Verified Suppliers", href: "/suppliers" },
    { id: "exporters", label: "Global Exporters", href: "/exporters" },
  ],
  dropdowns: {
    categories: {
      id: "categories",
      label: "Categories",
      categories: [
        {
          id: "industrial",
          title: "Industrial & Heavy Machinery",
          icon: Grid,
          items: [
            { id: "cat-1", label: "Excavators & Mining Rig", href: "/categories/heavy-equipment", description: "Heavy earthmoving & industrial drills" },
            { id: "cat-2", label: "PLC & Robotics Automation", href: "/categories/automation", description: "Industrial sensors & robotic arms" },
            { id: "cat-3", label: "Raw Polymers & Steel", href: "/categories/raw-materials", description: "Structural alloys & chemical resins" },
          ],
        },
        {
          id: "textiles",
          title: "Textiles & Garment Manufacturing",
          icon: Layers,
          items: [
            { id: "cat-4", label: "Bulk Organic Cotton", href: "/categories/bulk-fabrics", description: "Certificated raw weaves & yarns" },
            { id: "cat-5", label: "OEM Apparel Production", href: "/categories/garments", description: "Private label clothing factories" },
          ],
        },
      ],
    },
    products: {
      id: "products",
      label: "Products",
      categories: [
        {
          id: "trending",
          title: "Trending B2B Goods",
          icon: Sparkles,
          items: [
            { id: "prod-1", label: "Solar Energy Panels", href: "/products/solar", description: "Tier 1 Monocrystalline modules" },
            { id: "prod-2", label: "EV Battery Cells", href: "/products/ev-batteries", description: "Lithium iron phosphate packs" },
          ],
        },
      ],
    },
    solutions: {
      id: "solutions",
      label: "Solutions",
      categories: [
        {
          id: "services",
          title: "Global Trade Services",
          icon: ShieldCheck,
          items: [
            { id: "sol-1", label: "Trade Assurance Escrow", href: "/trade-assurance", description: "Protected global payment clearance" },
            { id: "sol-2", label: "Freight & Customs Inspection", href: "/logistics", description: "Door-to-door sea & air freight" },
          ],
        },
      ],
    },
    resources: {
      id: "resources",
      label: "Resources",
      categories: [
        {
          id: "insights",
          title: "Trade Knowledge",
          icon: BookOpen,
          items: [
            { id: "res-1", label: "Global Trade Compliance Guide", href: "/resources/compliance", description: "HS codes & import tariffs" },
            { id: "res-2", label: "2026 B2B Sourcing Report", href: "/resources/sourcing-report", description: "Market trends & pricing benchmarks" },
          ],
        },
      ],
    },
  },
  footer: [
    {
      id: "company",
      title: "Company",
      links: [
        { label: "About JIVORA", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press & News", href: "/press" },
      ],
    },
    {
      id: "products-footer",
      title: "Products & Hub",
      links: [
        { label: "Marketplace", href: "/marketplace" },
        { label: "RFQ Hub", href: "/rfq" },
        { label: "Verified Suppliers", href: "/suppliers" },
      ],
    },
    {
      id: "resources-footer",
      title: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Compliance & Tariffs", href: "/compliance" },
        { label: "Trade Blog", href: "/blog" },
      ],
    },
    {
      id: "legal",
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Security & Escrow", href: "/security" },
      ],
    },
  ],
};
