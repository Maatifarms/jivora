"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Grid } from "lucide-react";
import { navigationConfig } from "@/config/navigation.config";
import { Button } from "@/components/ui/button";

export function MegaMenuTrigger() {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center space-x-1.5 font-medium"
      >
        <Grid className="h-4 w-4 text-primary" />
        <span>All Categories</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-200" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-[600px] rounded-xl border bg-popover p-6 shadow-2xl animate-fade-in grid grid-cols-2 gap-6">
          {navigationConfig.megaMenu.map((cat) => (
            <div key={cat.id} className="space-y-2">
              <h4 className="font-heading text-sm font-semibold text-primary">{cat.title}</h4>
              <ul className="space-y-1">
                {cat.subcategories.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-xs font-medium">{sub.title}</div>
                      {sub.description && (
                        <div className="text-[11px] text-muted-foreground line-clamp-1">{sub.description}</div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
