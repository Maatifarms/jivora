"use client";

import { UserRole } from "@/types/auth.types";
import { B2B_ROLES_CONFIG } from "@/constants/b2b-roles.constants";
import { cn } from "@/lib/utils";
import { Building2, ShoppingBag, Factory, Ship } from "lucide-react";

interface RoleSelectorProps {
  selectedRole: UserRole;
  onSelectRole: (role: UserRole) => void;
}

export function RoleSelector({ selectedRole, onSelectRole }: RoleSelectorProps) {
  const roles: Array<{ role: UserRole; icon: React.ReactNode }> = [
    { role: "BUYER", icon: <ShoppingBag className="h-4 w-4" /> },
    { role: "SUPPLIER", icon: <Building2 className="h-4 w-4" /> },
    { role: "MANUFACTURER", icon: <Factory className="h-4 w-4" /> },
    { role: "EXPORTER", icon: <Ship className="h-4 w-4" /> },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 my-4">
      {roles.map(({ role, icon }) => {
        const meta = B2B_ROLES_CONFIG[role];
        const isSelected = selectedRole === role;

        return (
          <button
            key={role}
            type="button"
            onClick={() => onSelectRole(role)}
            className={cn(
              "flex flex-col items-start p-3 rounded-lg border text-left transition-all",
              isSelected
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-input hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <div className="flex items-center space-x-2 font-medium text-xs">
              <span className={cn("p-1 rounded-md", isSelected ? "text-primary" : "text-muted-foreground")}>
                {icon}
              </span>
              <span>{meta.label}</span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-tight">
              {meta.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
