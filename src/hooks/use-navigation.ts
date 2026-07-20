"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { isRouteActive, generateBreadcrumbs } from "@/lib/navigation-utils";

export function useNavigationState() {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Load persistent sidebar collapse preference on client mount
  useEffect(() => {
    const saved = localStorage.getItem("jivora_sidebar_collapsed");
    if (saved !== null) {
      setIsSidebarCollapsed(saved === "true");
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("jivora_sidebar_collapsed", String(next));
      return next;
    });
  }, []);

  const openMobileDrawer = useCallback(() => setIsMobileDrawerOpen(true), []);
  const closeMobileDrawer = useCallback(() => setIsMobileDrawerOpen(false), []);

  const activeCheck = useCallback(
    (href: string, exact?: boolean) => isRouteActive(pathname, href, exact),
    [pathname]
  );

  const breadcrumbs = generateBreadcrumbs(pathname);

  return {
    pathname,
    breadcrumbs,
    isRouteActive: activeCheck,
    isSidebarCollapsed,
    toggleSidebar,
    isMobileDrawerOpen,
    openMobileDrawer,
    closeMobileDrawer,
  };
}
