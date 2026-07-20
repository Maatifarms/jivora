import { UserRole } from "@/types/auth.types";
import { SidebarConfig } from "@/types/navigation.types";
import { publicNavConfig } from "./public-nav.config";
import { buyerNavConfig } from "./buyer-nav.config";
import { supplierNavConfig } from "./supplier-nav.config";
import { manufacturerNavConfig } from "./manufacturer-nav.config";
import { exporterNavConfig } from "./exporter-nav.config";
import { adminNavConfig } from "./admin-nav.config";

export { publicNavConfig };
export { buyerNavConfig };
export { supplierNavConfig };
export { manufacturerNavConfig };
export { exporterNavConfig };
export { adminNavConfig };

export const sidebarConfigRegistry: Record<UserRole, SidebarConfig> = {
  BUYER: buyerNavConfig,
  SUPPLIER: supplierNavConfig,
  MANUFACTURER: manufacturerNavConfig,
  EXPORTER: exporterNavConfig,
  ADMIN: adminNavConfig,
};

export function getSidebarConfigByRole(role: UserRole): SidebarConfig {
  return sidebarConfigRegistry[role] || buyerNavConfig;
}
