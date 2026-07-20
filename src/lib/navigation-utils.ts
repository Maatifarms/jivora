import { NavItemConfig } from "@/types/navigation.types";

/**
 * Checks if a given route URL is active relative to the current pathname.
 * @param pathname Current router pathname
 * @param href Navigation item target href
 * @param exact If true, requires exact path match
 */
export function isRouteActive(pathname: string, href: string, exact = false): boolean {
  if (!pathname || !href) return false;

  if (href === "/") {
    return pathname === "/";
  }

  if (exact) {
    return pathname === href;
  }

  return pathname.startsWith(href);
}

/**
 * Automatically generates breadcrumb trail items from the current pathname.
 */
export function generateBreadcrumbs(pathname: string): Array<{ title: string; href: string }> {
  if (!pathname || pathname === "/") return [];

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: Array<{ title: string; href: string }> = [];

  let accumulatedPath = "";

  segments.forEach((segment) => {
    accumulatedPath += `/${segment}`;
    
    // Format title segment cleanly
    const formattedTitle = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    breadcrumbs.push({
      title: formattedTitle,
      href: accumulatedPath,
    });
  });

  return breadcrumbs;
}

/**
 * Filters a list of navigation items based on user permissions or roles.
 */
export function filterNavByPermissions(
  items: NavItemConfig[],
  userPermissions?: string[]
): NavItemConfig[] {
  if (!userPermissions || userPermissions.length === 0) return items;

  return items.filter((item) => {
    if (item.permissions && item.permissions.length > 0) {
      const hasPermission = item.permissions.some((perm) => userPermissions.includes(perm));
      if (!hasPermission) return false;
    }
    return true;
  });
}
