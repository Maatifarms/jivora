"use client";

import * as React from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label="Theme switcher loading"
        disabled
        className="opacity-50"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <DropdownMenu
      align="right"
      trigger={
        <Button
          variant="outline"
          size="icon"
          aria-label="Select color theme mode"
          className="b2b-focus-ring b2b-transition relative"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      }
    >
      <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        Appearance
      </div>

      <DropdownMenuItem
        onClick={() => setTheme("light")}
        className={cn("flex items-center justify-between cursor-pointer", theme === "light" && "font-semibold text-primary")}
      >
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4 text-amber-500" />
          <span>Light</span>
        </div>
        {theme === "light" && <Check className="h-4 w-4 text-primary" />}
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={() => setTheme("dark")}
        className={cn("flex items-center justify-between cursor-pointer", theme === "dark" && "font-semibold text-primary")}
      >
        <div className="flex items-center space-x-2">
          <Moon className="h-4 w-4 text-indigo-400" />
          <span>Dark</span>
        </div>
        {theme === "dark" && <Check className="h-4 w-4 text-primary" />}
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={() => setTheme("system")}
        className={cn("flex items-center justify-between cursor-pointer", theme === "system" && "font-semibold text-primary")}
      >
        <div className="flex items-center space-x-2">
          <Monitor className="h-4 w-4 text-slate-500" />
          <span>System</span>
        </div>
        {theme === "system" && <Check className="h-4 w-4 text-primary" />}
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
