"use client";

import Link from "next/link";
import { Search, Globe, Bell, ChevronDown, LogOut, Settings, Package } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { publicNavConfig } from "@/config/navigation/public-nav.config";
import { isRouteActive } from "@/lib/navigation-utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  // Mock logged-in user profile state for UI foundation
  const mockUser = {
    name: "Anjali Sharma",
    email: "anjali@jivora.com",
    role: "BUYER",
  };

  const dropdownKeys: Array<keyof typeof publicNavConfig.dropdowns> = [
    "categories",
    "products",
    "solutions",
    "resources",
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top B2B Announcement Utility Bar */}
      <div className="hidden lg:block border-b bg-muted/40 text-[11px] py-1 text-muted-foreground">
        <div className="b2b-container flex justify-between items-center">
          <div className="flex space-x-4">
            <span>🌐 Enterprise Trade Network</span>
            <span>⚡ 50,000+ Verified Suppliers</span>
            <span>🛡️ Trade Assurance Escrow Protected</span>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/help" className="hover:text-foreground transition-colors">Help Center</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-foreground transition-colors">Support</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar Row */}
      <div className="b2b-container flex h-16 items-center justify-between space-x-4">
        {/* Left Brand & Mobile Trigger */}
        <div className="flex items-center space-x-4">
          <MobileNav />
          <Logo />
        </div>

        {/* Center Config-Driven Navigation Links & Dropdowns */}
        <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium">
          {dropdownKeys.map((key) => {
            const dropdown = publicNavConfig.dropdowns[key];
            return (
              <DropdownMenu
                key={dropdown.id}
                trigger={
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <span>{dropdown.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Button>
                }
              >
                <DropdownMenuLabel>{dropdown.label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {dropdown.categories.map((cat) => (
                  <div key={cat.id} className="p-2 space-y-1">
                    <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">{cat.title}</div>
                    {cat.items.map((item) => (
                      <DropdownMenuItem key={item.id}>
                        <Link href={item.href} className="w-full">
                          <div className="text-xs font-semibold">{item.label}</div>
                          {item.description && (
                            <div className="text-[11px] text-muted-foreground line-clamp-1">{item.description}</div>
                          )}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                ))}
              </DropdownMenu>
            );
          })}

          {publicNavConfig.mainNav.map((item) => {
            const active = isRouteActive(pathname, item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary",
                  active ? "text-primary font-semibold bg-primary/5" : "text-foreground/80"
                )}
              >
                {item.label}
                {item.badge && (
                  <Badge variant="success" className="ml-1 text-[9px] px-1 py-0">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Placeholders & Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Search Placeholder Trigger */}
          <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2 text-muted-foreground">
            <Search className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs">Search...</span>
            <kbd className="hidden md:inline-block pointer-events-none rounded border bg-muted px-1.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </Button>

          {/* Language Selector Placeholder */}
          <DropdownMenu
            align="right"
            trigger={
              <Button variant="ghost" size="icon" aria-label="Language selector">
                <Globe className="h-4 w-4 text-muted-foreground" />
              </Button>
            }
          >
            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>🇺🇸 English (US)</DropdownMenuItem>
            <DropdownMenuItem>🇪🇸 Español</DropdownMenuItem>
            <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
            <DropdownMenuItem>🇩🇪 Deutsch</DropdownMenuItem>
            <DropdownMenuItem>🇦🇪 العربية</DropdownMenuItem>
          </DropdownMenu>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Notification Icon Placeholder */}
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
          </Button>

          {/* Auth CTA & User Menu Placeholder */}
          <div className="hidden sm:flex items-center space-x-2 border-l pl-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="b2b-gradient" size="sm">
                Join Now
              </Button>
            </Link>
          </div>

          <DropdownMenu
            align="right"
            trigger={
              <button className="flex items-center space-x-2 rounded-full focus:outline-none b2b-focus-ring">
                <Avatar fallback={mockUser.name} size="sm" status="online" />
              </button>
            }
          >
            <div className="px-3 py-2 border-b">
              <p className="text-xs font-semibold">{mockUser.name}</p>
              <p className="text-[11px] text-muted-foreground truncate">{mockUser.email}</p>
            </div>
            <DropdownMenuItem>
              <Link href="/dashboard/buyer" className="flex items-center w-full">
                <Package className="mr-2 h-4 w-4 text-primary" /> Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings" className="flex items-center w-full">
                <Settings className="mr-2 h-4 w-4" /> Account Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem destructive>
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
