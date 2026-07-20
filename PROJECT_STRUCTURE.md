# JIVORA — Directory & Folder Structure Documentation

This document explains the responsibility of every directory in the JIVORA frontend workspace.

```
jivora-b2b/
├── public/                 # Static public assets, favicon, brand logos
├── src/                    # Source code root
│   ├── app/                # Next.js 15 App Router pages & route groups
│   │   ├── (auth)/         # Authentication route group (Login, Register, OTP, Password Reset)
│   │   ├── (public)/       # Public marketing & marketplace route group
│   │   ├── dashboard/      # Role-based dashboard route group
│   │   │   ├── buyer/      # Buyer dashboard views
│   │   │   ├── supplier/   # Supplier dashboard views
│   │   │   ├── manufacturer/ # Manufacturer dashboard views
│   │   │   ├── exporter/   # Exporter dashboard views
│   │   │   └── admin/      # Admin dashboard views
│   │   ├── globals.css     # Global CSS rules, typography utilities, focus ring
│   │   ├── layout.tsx      # Root layout wrapping AppProviders & metadata
│   │   ├── page.tsx        # Homepage baseline landing view
│   │   └── providers.tsx   # Composite AppProviders component
│   │
│   ├── components/         # Reusable UI component library
│   │   ├── auth/           # Reusable Auth components (AuthCard, SocialLoginButtons, Forms)
│   │   ├── business/       # Reusable Business components (DataTables, Search, Stats, Filters)
│   │   │   ├── search/     # SearchBar, GlobalSearchInput, FilterChips, SortDropdown
│   │   │   ├── page/       # SectionHeader, HeroHeader, PageActions, PageTitleBlock
│   │   │   ├── display/    # StatsCard, KpiCard, MetricCard, ProfileCard, CompanyCard
│   │   │   ├── table/      # DataTable, TableToolbar, ColumnVisibility, TablePagination
│   │   │   ├── filters/    # DateFilter, CategoryFilter, CountryFilter, StatusFilter, RangeFilter
│   │   │   ├── status/     # StatusBadge, StatusChip, ProgressIndicator, TimelineItem
│   │   │   ├── actions/    # ActionMenu, MoreMenu, QuickActions, FloatingActionButton
│   │   │   ├── empty/      # Preset Empty States (NoProducts, NoOrders, NoCompanies)
│   │   │   └── loading/    # Preset Skeleton Loaders (TableLoading, DashboardLoading)
│   │   ├── layout/         # Layout primitives (Container, Section, PageWrapper, ResponsiveGrid)
│   │   ├── navigation/     # Navigation components (Navbar, Sidebar, MobileNav, Footer)
│   │   ├── shared/         # Shared helpers (Logo, ModeToggle, StatusIndicator, Breadcrumbs)
│   │   └── ui/             # 30+ Shared ShadCN UI primitives (Button, Input, Card, Badge, Alert)
│   │
│   ├── config/             # Configuration files
│   │   ├── navigation/     # Role-based navigation configs (buyer-nav, supplier-nav, admin-nav)
│   │   ├── app.config.ts   # Application metadata & environment config
│   │   └── site.config.ts  # SEO metadata & brand configuration
│   │
│   ├── hooks/              # Custom React hooks (useNavigationState, useToast, useModal)
│   ├── layouts/            # Page layouts & role-based shells
│   │   ├── roles/          # Role layouts (BuyerLayout, SupplierLayout, AdminLayout)
│   │   ├── auth-layout-container.tsx   # Split-screen Auth layout
│   │   ├── public-layout-container.tsx # Header + Main + Footer Public layout
│   │   └── dashboard-shell.tsx         # Dashboard Shell with Sidebar & Header
│   │
│   ├── lib/                # Pure utility functions & schema validators
│   │   ├── navigation-utils.ts # Route matching & breadcrumbs generation
│   │   ├── utils.ts        # Tailwind merge & clsx utility (`cn`)
│   │   └── validators/     # Zod-style validation schemas for Auth & Forms
│   │
│   ├── providers/          # Global React Context providers
│   │   ├── theme-provider.tsx # NextThemes theme switcher
│   │   ├── query-provider.tsx # TanStack React Query client singleton
│   │   ├── toast-provider.tsx # Global Toast notification queue
│   │   ├── modal-provider.tsx # Global Modal dialog manager
│   │   └── index.ts        # Barrel export
│   │
│   ├── styles/             # Design System CSS & TypeScript design tokens
│   │   ├── tokens.css      # HSL CSS custom properties for Light & Dark mode
│   │   └── design-tokens.ts # Strongly-typed TypeScript token registry
│   │
│   └── types/              # Global TypeScript interfaces & types
│       ├── auth.types.ts   # User role, authentication payload types
│       ├── navigation.types.ts # Navigation item, dropdown, sidebar config types
│       └── ui.types.ts     # Component variant & size types
│
├── tailwind.config.ts      # Extended Tailwind CSS theme config
├── tsconfig.json           # Strict TypeScript rules & @/* path alias
├── components.json         # ShadCN UI configuration
└── package.json            # Project dependencies & scripts
```

---

## Folder Responsibilities

| Directory | Responsibility | Owner |
| :--- | :--- | :--- |
| `src/app/` | Next.js App Router route pages & layouts. Only container pages should reside here. | Dev 1 – Dev N |
| `src/components/ui/` | Standardized ShadCN UI primitive widgets. Do not add business logic here. | Dev 1 (Architect) |
| `src/components/business/` | Domain-agnostic B2B UI components (Tables, Stats, Search, Filters). | Dev 1 (Architect) |
| `src/components/auth/` | Reusable Authentication screens and form components. | Dev 1 (Architect) |
| `src/components/navigation/` | Top Navbar, Dashboard Sidebar, Mobile Drawer, and Footer. | Dev 1 (Architect) |
| `src/components/layout/` | Layout primitives (`Container`, `Section`, `PageWrapper`, `ResponsiveGrid`). | Dev 1 (Architect) |
| `src/config/navigation/` | Role-based navigation menu item arrays (`buyer-nav`, `supplier-nav`, etc.). | Dev 1 (Architect) |
| `src/layouts/` | Page layout wrappers and role shells (`BuyerLayout`, `AdminLayout`, etc.). | Dev 1 (Architect) |
| `src/providers/` | Global state context providers (`ThemeProvider`, `QueryProvider`, `ToastProvider`). | Dev 1 (Architect) |
| `src/styles/` | Single source of truth for design tokens (`tokens.css` and `design-tokens.ts`). | Dev 1 (Architect) |
