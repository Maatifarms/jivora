"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRole } from "@/types/auth.types";
import { getSidebarConfigByRole } from "@/config/navigation";
import { isRouteActive } from "@/lib/navigation-utils";
import { Logo } from "@/components/shared/logo";
import { B2BRoleBadge } from "@/components/shared/status-indicator";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { AccordionItem } from "@/components/ui/accordion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  role: UserRole;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}

export function Sidebar({ role, isCollapsed = false, onToggleCollapse, className }: SidebarProps) {
  const pathname = usePathname();
  const config = getSidebarConfigByRole(role);

  return (
    <aside
      className={cn(
        "relative flex flex-col justify-between border-r bg-background transition-all duration-300 z-30 p-4",
        isCollapsed ? "w-20" : "w-64",
        className
      )}
    >
      <div className="space-y-4">
        {/* Brand & Collapse Button Header */}
        <div className="flex items-center justify-between border-b pb-4">
          {!isCollapsed && <Logo size="sm" />}
          {isCollapsed && <Logo size="sm" showText={false} className="mx-auto" />}

          {onToggleCollapse && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleCollapse}
              aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              className="h-8 w-8 b2b-focus-ring hidden md:flex"
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          )}
        </div>

        {/* Role Badge */}
        {!isCollapsed && (
          <div className="mb-4">
            <B2BRoleBadge role={role} />
          </div>
        )}

        {/* Navigation Sections */}
        <nav className="space-y-6">
          {config.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-1">
              {section.title && !isCollapsed && (
                <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {section.title}
                </p>
              )}

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active = isRouteActive(pathname, item.href);
                  const hasChildren = item.children && item.children.length > 0;

                  if (hasChildren && !isCollapsed) {
                    return (
                      <AccordionItem
                        key={item.id}
                        title={
                          <div className="flex items-center space-x-3 text-sm">
                            {Icon && <Icon className="h-4 w-4 text-primary shrink-0" />}
                            <span>{item.label}</span>
                          </div>
                        }
                      >
                        <div className="ml-7 space-y-1 border-l pl-3">
                          {item.children?.map((child) => {
                            const childActive = isRouteActive(pathname, child.href);
                            return (
                              <Link
                                key={child.id}
                                href={child.href}
                                className={cn(
                                  "block px-2 py-1.5 text-xs font-medium rounded-md transition-colors hover:text-primary",
                                  childActive ? "text-primary font-semibold bg-primary/10" : "text-muted-foreground"
                                )}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </AccordionItem>
                    );
                  }

                  const itemContent = (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors b2b-focus-ring",
                        isCollapsed && "justify-center px-0",
                        active
                          ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4 shrink-0" />}
                      {!isCollapsed && <span className="truncate">{item.label}</span>}

                      {!isCollapsed && item.badge && (
                        <Badge variant="secondary" className="ml-auto text-[10px]">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );

                  if (isCollapsed) {
                    return (
                      <Tooltip key={item.id} content={item.label} position="right">
                        {itemContent}
                      </Tooltip>
                    );
                  }

                  return itemContent;
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer System Version */}
      <div className="border-t pt-4 text-center">
        {!isCollapsed ? (
          <p className="text-[11px] text-muted-foreground">JIVORA B2B Console v1.0</p>
        ) : (
          <span className="text-[10px] text-muted-foreground font-mono">v1.0</span>
        )}
      </div>
    </aside>
  );
}
