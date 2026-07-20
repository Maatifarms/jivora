"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { navigationConfig } from "@/config/navigation.config";
import { NavItem, MegaMenuCategory } from "@/types/navigation.types";

export function MobileNavDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="md:hidden"
        aria-label="Open Mobile Menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} side="left">
        <div className="mb-6 flex items-center justify-between">
          <Logo size="sm" />
        </div>

        <nav className="flex flex-col space-y-4">
          <div className="border-b pb-4">
            <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Navigation</p>
            <div className="flex flex-col space-y-2">
              {navigationConfig.mainNav.map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors py-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Categories</p>
            <div className="flex flex-col space-y-2">
              {navigationConfig.megaMenu.map((cat: MegaMenuCategory) => (
                <div key={cat.id} className="text-xs text-muted-foreground font-semibold">
                  {cat.title}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t flex flex-col space-y-2">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>
              <Button variant="b2b-gradient" className="w-full">
                Register Business
              </Button>
            </Link>
          </div>
        </nav>
      </Sheet>
    </>
  );
}
