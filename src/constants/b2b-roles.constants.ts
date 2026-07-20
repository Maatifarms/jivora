import { UserRole } from "@/types/auth.types";

export interface RoleMeta {
  role: UserRole;
  label: string;
  description: string;
  badgeColor: string;
}

export const B2B_ROLES_CONFIG: Record<UserRole, RoleMeta> = {
  BUYER: {
    role: "BUYER",
    label: "Enterprise Buyer",
    description: "Sourcing goods, placing RFQs, managing procurement contracts.",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  },
  SUPPLIER: {
    role: "SUPPLIER",
    label: "Verified Supplier",
    description: "Selling wholesale, responding to RFQs, managing catalog.",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  MANUFACTURER: {
    role: "MANUFACTURER",
    label: "OEM/ODM Manufacturer",
    description: "Factory direct manufacturing, bulk custom production.",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  },
  EXPORTER: {
    role: "EXPORTER",
    label: "Global Exporter",
    description: "Cross-border logistics, customs trade clearance, international freight.",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  },
  ADMIN: {
    role: "ADMIN",
    label: "Platform Admin",
    description: "System management, verifications, compliance & platform operations.",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  },
};
