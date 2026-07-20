# JIVORA — Architecture & Frontend Principles

This document defines the architectural guidelines and design principles for the JIVORA B2B Marketplace codebase.

---

## 1. Core Principles

1. **Separation of Concerns**:
   - UI presentation components MUST reside in `src/components/`.
   - Page containers in `src/app/` ONLY compose layout shells and business components.
   - Business data fetching logic MUST use custom hooks (`src/hooks/`) or TanStack Query.

2. **Configuration-Driven Design**:
   - Navigation menus, sidebars, and dropdowns are NOT hardcoded. They are declared in configuration files under `src/config/navigation/`.

3. **Server vs. Client Component Boundaries**:
   - By default, all Next.js App Router files in `src/app/` are **Server Components**.
   - Add `"use client"` at the top of a file ONLY when interactive React hooks (`useState`, `useEffect`, `usePathname`, event listeners) are required.

4. **Zero-Any TypeScript Policy**:
   - The type `any` is strictly prohibited. Use generics (`<T>`), union types, or `unknown` with type guards.

---

## 2. Component Layer Hierarchy

```
+-------------------------------------------------------------+
|                      Next.js Page (app/)                    |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|                   Role Layout / DashboardShell               |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|              Business Component (components/business/)       |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|               Shared UI Component (components/ui/)         |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|             Design System Tokens (styles/tokens.css)        |
+-------------------------------------------------------------+
```

---

## 3. Single Source of Truth for Design Tokens

All CSS variables and color tokens resolve through HSL variables in `src/styles/tokens.css` and `src/styles/design-tokens.ts`:
- Light Theme & Dark Theme automatic toggle via class `.dark` applied to `<html>`.
- Tailored color palette: `primary`, `secondary`, `accent`, `success`, `warning`, `destructive`, `info`, `background`, `surface`, `border`, `ring`.

---

## 4. Path Alias Convention

Always use the `@/` path alias mapped to `src/`:
- `import { Button } from "@/components/ui"`
- `import { BuyerLayout } from "@/layouts"`
- `import { useToast } from "@/providers/toast-provider"`
