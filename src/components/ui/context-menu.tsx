"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ContextMenuProps {
  children: React.ReactNode;
  menu: React.ReactNode;
  className?: string;
}

export function ContextMenu({ children, menu, className }: ContextMenuProps) {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisible(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  React.useEffect(() => {
    const handleClick = () => setVisible(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div onContextMenu={handleContextMenu} className={cn("inline-block", className)} ref={ref}>
      {children}
      {visible && (
        <div
          style={{ top: position.y, left: position.x }}
          className="fixed z-50 min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-scale-in"
        >
          {menu}
        </div>
      )}
    </div>
  );
}
