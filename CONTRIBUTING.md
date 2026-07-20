# JIVORA — Developer Contribution & Extension Guidelines

This guide instructs Developers 2 through N on how to build feature modules (Marketplace, RFQ, Company Profiles, Buyer/Supplier Dashboards) on top of Developer 1's architecture foundation.

---

## 1. Golden Rules for Developers

1. **DO NOT MODIFY Core Infrastructure Files**:
   - Do NOT edit `src/styles/tokens.css` or `src/styles/design-tokens.ts`.
   - Do NOT edit `src/providers/` context providers.
   - Do NOT edit components in `src/components/ui/` unless adding a missing primitive.

2. **Use Existing Barrel Exports**:
   - Always import primitives from `@/components/ui`.
   - Always import business cards and tables from `@/components/business`.
   - Always import layouts from `@/layouts`.

3. **Follow Role Layout Standards**:
   - Buyer feature pages MUST wrap children with `BuyerLayout`.
   - Supplier feature pages MUST wrap children with `SupplierLayout`.
   - Admin feature pages MUST wrap children with `AdminLayout`.

4. **Strict Type Safety**:
   - Always write explicit TypeScript interfaces for props and API responses.
   - Running `npx tsc --noEmit` MUST produce zero errors before submitting PRs.

---

## 2. Step-by-Step Workflow to Create a New Feature Page

### Example: Developer 8 building "Buyer Invoices Page"

#### Step 1: Create Page File under App Router
Create `src/app/dashboard/buyer/invoices/page.tsx`:
```tsx
import { Metadata } from "next";
import { BuyerLayout } from "@/layouts";
import { PageWrapper, Container } from "@/components/layout";
import { DataTable, TableToolbar, StatsCard, StatusBadge } from "@/components/business";

export const metadata: Metadata = {
  title: "Invoices & Billing",
  description: "View purchase invoices and escrow receipts",
};

export default function BuyerInvoicesPage() {
  return (
    <BuyerLayout title="Invoices & Billing">
      <PageWrapper
        title="Escrow Receipts & Tax Invoices"
        description="Download official tax invoices for your B2B trade orders."
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatsCard title="Total Paid" value="$84,200" change="+8.1%" trend="up" />
          </div>

          <TableToolbar onExport={() => {}} />
          <DataTable
            columns={[
              { key: "invNo", header: "Invoice No.", sortable: true },
              { key: "vendor", header: "Supplier Name" },
              { key: "amount", header: "Amount" },
              {
                key: "status",
                header: "Status",
                accessor: (row) => <StatusBadge status={String(row.status)} />,
              },
            ]}
            data={[
              { invNo: "INV-2026-001", vendor: "Steel Works Ltd", amount: "$12,400", status: "VERIFIED" },
            ]}
          />
        </div>
      </PageWrapper>
    </BuyerLayout>
  );
}
```

#### Step 2: Add Route Link to Navigation Config
If the page needs to appear on the Buyer sidebar, edit `src/config/navigation/buyer-nav.config.ts`:
```typescript
{ id: "b-invoices", label: "Invoices", href: "/dashboard/buyer/invoices", icon: FileText }
```
