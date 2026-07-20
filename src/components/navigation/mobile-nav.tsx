"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { publicNavConfig } from "@/config/navigation/public-nav.config";
import { AccordionItem } from "@/components/ui/accordion";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="lg:hidden b2b-focus-ring"
        aria-label="Open Mobile Navigation Menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} side="left">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <Logo size="sm" />
        </div>

        <nav className="flex flex-col space-y-4 overflow-y-auto max-h-[calc(100vh-120px)] pr-2">
          {/* Main Public Nav Links */}
          <div className="space-y-2 border-b pb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Main Sourcing
            </p>
            {publicNavConfig.mainNav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Categories & Products Accordions */}
          <div className="space-y-2 border-b pb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Categories & Solutions
            </p>

            <AccordionItem title="Categories">
              <div className="space-y-2 pl-2">
                {publicNavConfig.dropdowns.categories.categories.map((cat) => (
                  <div key={cat.id} className="space-y-1">
                    <p className="text-xs font-semibold text-primary">{cat.title}</p>
                    {cat.items.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-xs text-muted-foreground hover:text-foreground py-1"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </AccordionItem>

            <AccordionItem title="Trade Solutions">
              <div className="space-y-1 pl-2">
                {publicNavConfig.dropdowns.solutions.categories[0]?.items.map((sub) => (
                  <Link
                    key={sub.id}
                    href={sub.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-xs text-muted-foreground hover:text-foreground py-1"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </AccordionItem>
          </div>

          {/* Auth Actions */}
          <div className="pt-4 flex flex-col space-y-2">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>
              <Button variant="b2b-gradient" className="w-full">
                Join Now (Business)
              </Button>
            </Link>
          </div>
        </nav>
      </Sheet>
    </>
  );
}
