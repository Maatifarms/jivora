# JIVORA — Navigation System Guide

This document explains how to configure and extend JIVORA's configuration-driven navigation system.

---

## 1. Modular Configuration Structure (`src/config/navigation/`)

Navigation items are declared as data arrays rather than hardcoded in UI components.

- `public-nav.config.ts`: Public Navbar dropdowns (Categories, Products, Solutions, Resources) & Footer sections.
- `buyer-nav.config.ts`: Buyer Dashboard sidebar items and nested submenus.
- `supplier-nav.config.ts`: Supplier Dashboard sidebar items.
- `manufacturer-nav.config.ts`: Factory/Manufacturer sidebar items.
- `exporter-nav.config.ts`: Exporter Logistics sidebar items.
- `admin-nav.config.ts`: Platform Admin sidebar items.

---

## 2. Navigation Item Schema (`NavItemConfig`)

```typescript
export interface NavItemConfig {
  id: string;               // Unique menu item ID
  label: string;            // Text label displayed in menu
  href: string;             // Next.js target URL
  icon?: IconComponent;     // Lucide SVG icon component
  children?: NavItemConfig[]; // Nested submenu items (renders Accordion)
  badge?: string;           // Optional badge text (e.g. "Live", "New", "3 Active")
  permissions?: string[];   // Optional permission strings required to view
  disabled?: boolean;       // If true, grays out link
}
```

---

## 3. How to Add a New Sidebar Link for a Dashboard Role

To add a new link to the **Supplier Sidebar**, open `src/config/navigation/supplier-nav.config.ts` and add an item to the array:

```typescript
export const supplierNavConfig: SidebarConfig = {
  role: "SUPPLIER",
  sections: [
    {
      title: "Supplier Workspace",
      items: [
        { id: "s-dash", label: "Overview", href: "/dashboard/supplier", icon: LayoutDashboard },
        // Add new item here:
        { id: "s-certificates", label: "ISO Certificates", href: "/dashboard/supplier/certificates", icon: ShieldCheck, badge: "Verified" }
      ]
    }
  ]
};
```
No changes to `Sidebar.tsx` or layout components are needed!
