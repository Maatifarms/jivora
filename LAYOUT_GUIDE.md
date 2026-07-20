# JIVORA — Layout System Guide

This document details the usage of JIVORA's role-based and layout container system (`@/layouts`).

---

## 1. Available Layout Containers

### A. Public Layout (`PublicLayoutContainer`)
Used for all public-facing marketing, marketplace, and resource pages.
- Integrates `Navbar` at top.
- Wraps children in main content body.
- Integrates `Footer` at bottom.

### B. Auth Layout (`AuthLayoutContainer`)
Used for all login, registration, and password recovery pages.
- Left-hand side: Split-screen visual trade branding panel (hidden on mobile).
- Right-hand side: Centered form card container with `ModeToggle`.

### C. Dashboard Shell (`DashboardShell`)
The core frame for all role-based dashboards:
- Collapsible `Sidebar` with local storage persistence.
- Top Header with notification icon badge, `ModeToggle`, and `UserNavDropdown`.
- Automatic breadcrumb trail generation (`Breadcrumbs`).
- `DashboardContentArea` view container.

---

## 2. Role-Based Layout Shells (`@/layouts`)

Each business role extends `DashboardShell` automatically injecting the correct navigation menu from `src/config/navigation/`:

| Role Shell | Export Name | Role Config Source | Target Developers |
| :--- | :--- | :--- | :--- |
| **Buyer Layout** | `BuyerLayout` | `buyer-nav.config.ts` | Dev 8 (Buyer Team) |
| **Supplier Layout** | `SupplierLayout` | `supplier-nav.config.ts` | Dev 9 (Supplier Team) |
| **Manufacturer Layout** | `ManufacturerLayout` | `manufacturer-nav.config.ts` | Dev 10 (Manufacturer Team) |
| **Exporter Layout** | `ExporterLayout` | `exporter-nav.config.ts` | Dev 11 (Exporter Team) |
| **Admin Layout** | `AdminLayout` | `admin-nav.config.ts` | Dev 12 (Admin Team) |

---

## 3. Sample Code Usage

```tsx
import { BuyerLayout } from "@/layouts";
import { PageWrapper, Container } from "@/components/layout";

export default function BuyerDashboardPage() {
  return (
    <BuyerLayout title="Buyer Sourcing Console">
      <PageWrapper
        title="Sourcing Overview"
        description="Track active RFQs, purchase contracts, and verified suppliers."
      >
        {/* Page content injected here */}
      </PageWrapper>
    </BuyerLayout>
  );
}
```
