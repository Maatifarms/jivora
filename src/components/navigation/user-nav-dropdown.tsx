"use client";

import Link from "next/link";
import { User, Settings, ShieldCheck, PackageCheck } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function UserNavDropdown() {
  // Mock session user contract for UI foundation
  const mockUser = {
    name: "Anjali Sharma",
    email: "anjali@jivora.com",
    role: "BUYER",
  };

  return (
    <DropdownMenu
      align="right"
      trigger={
        <button className="flex items-center space-x-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring">
          <Avatar fallback={mockUser.name} size="sm" />
        </button>
      }
    >
      <div className="px-3 py-2 border-b">
        <p className="text-xs font-semibold">{mockUser.name}</p>
        <p className="text-[11px] text-muted-foreground truncate">{mockUser.email}</p>
      </div>

      <DropdownMenuItem>
        <Link href="/dashboard/buyer" className="flex items-center w-full">
          <PackageCheck className="mr-2 h-4 w-4 text-primary" /> Dashboard
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href="/profile" className="flex items-center w-full">
          <User className="mr-2 h-4 w-4" /> Company Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href="/settings" className="flex items-center w-full">
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Link>
      </DropdownMenuItem>

      <div className="border-t my-1" />

      <DropdownMenuItem destructive>
        <ShieldCheck className="mr-2 h-4 w-4" /> Sign Out
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
