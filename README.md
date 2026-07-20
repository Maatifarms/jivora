# JIVORA — Enterprise B2B Global Trade Marketplace Architecture

Welcome to the **JIVORA** frontend architecture codebase. JIVORA is a multi-role, enterprise-grade B2B trade marketplace built for buyers, suppliers, factories/manufacturers, global exporters, and platform administrators.

> **Role & Responsibility**: Formulated and maintained by **Developer 1 (Anjali — Senior Frontend Architect)**.  
> This baseline contains the **Design System**, **Theme System**, **Global Providers**, **Shared UI Components**, **Navigation System**, **Layout System**, **Authentication UI**, and **Reusable Business Component Library**.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router with Server/Client boundary separation)
- **Library**: React 19
- **Language**: TypeScript (Strict Mode with zero `any` usage)
- **Styling**: Tailwind CSS v3 & HSL Design Tokens (`tokens.css` + `design-tokens.ts`)
- **UI Architecture**: ShadCN UI CVA conventions
- **Theme**: `next-themes` (Light, Dark, System preference persistence)
- **State & Data Fetching**: TanStack React Query v5
- **Icons**: `lucide-react`

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Development Server
```bash
# 1. Install project dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open browser at http://localhost:3000
```

### Verification & Quality Scripts
```bash
# Run strict TypeScript type check
npx tsc --noEmit

# Run ESLint linting rules
npm run lint

# Build production bundle
npm run build
```

---

## 📚 Documentation Index

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)**: Responsibility mapping of every directory under `src/`.
- **[ARCHITECTURE.md](./ARCHITECTURE.md)**: Core architectural principles, Server vs. Client component boundaries, and SOLID patterns.
- **[CONTRIBUTING.md](./CONTRIBUTING.md)**: Rules for Developer 2 – Developer N on contributing without breaking core code.
- **[COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)**: Complete catalog of 65+ UI, Business, Auth, Navigation, and Layout components.
- **[LAYOUT_GUIDE.md](./LAYOUT_GUIDE.md)**: Guide to using Public, Auth, and Dashboard role layouts.
- **[NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md)**: Configuration-driven navigation guide.
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**: Design system tokens, color scale, typography, and utility classes.

---

## 🔒 Architecture Guarantee for Other Developers

Developer 1 (Anjali) has provided clean barrel exports for every foundational layer:
- `@/components/ui`: 30+ Shared UI Primitives (`Button`, `Input`, `Card`, `Badge`, `Alert`, etc.)
- `@/components/business`: 35+ Business Components (`DataTable`, `StatsCard`, `SearchBar`, `StatusBadge`, etc.)
- `@/layouts`: Role Layouts (`BuyerLayout`, `SupplierLayout`, `ManufacturerLayout`, `ExporterLayout`, `AdminLayout`)
- `@/config/navigation`: Configuration-driven navigation structures.

**Developers 2–N are prohibited from modifying files in `src/styles/`, `src/providers/`, `src/components/ui/`, or `src/layouts/` without architect review.**
