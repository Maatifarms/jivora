"use client";

import React, { ReactNode } from "react";
import { Sidebar } from "@/components/navigation/sidebar";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { UserNavDropdown } from "@/components/navigation/user-nav-dropdown";
import { UserRole } from "@/types/auth.types";
import { useNavigationState } from "@/hooks/use-navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { DashboardContentArea } from "@/components/layout/dashboard-content-area";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface DashboardShellProps {
  role: UserRole;
  title?: string;
  children: ReactNode;
}

export function DashboardShell({ role, title = "Dashboard", children }: DashboardShellProps) {
  const {
    breadcrumbs,
    isSidebarCollapsed,
    toggleSidebar,
    isMobileDrawerOpen,
    openMobileDrawer,
    closeMobileDrawer,
  } = useNavigationState();

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col md:flex-row">
      {/* Mobile Drawer Overlay */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMobileDrawer}
        />
      )}

      {/* Reusable Sidebar Component */}
      <Sidebar
        role={role}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={toggleSidebar}
        className={
          isMobileDrawerOpen
            ? "fixed inset-y-0 left-0 z-50 translate-x-0"
            : "hidden md:flex"
        }
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b bg-background px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={isMobileDrawerOpen ? closeMobileDrawer : openMobileDrawer}
              className="md:hidden"
              aria-label="Toggle mobile navigation drawer"
            >
              {isMobileDrawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="font-heading text-lg font-bold tracking-tight">{title}</h1>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
            </Button>
            <ModeToggle />
            <UserNavDropdown />
          </div>
        </header>

        {/* Dashboard Page Content Body with Breadcrumbs */}
        <main className="p-6 flex-1">
          <DashboardContentArea>
            {breadcrumbs.length > 0 && (
              <div className="mb-4">
                <Breadcrumbs items={breadcrumbs} />
              </div>
            )}
            {children}
          </DashboardContentArea>
        </main>
      </div>
    </div>
  );
}
