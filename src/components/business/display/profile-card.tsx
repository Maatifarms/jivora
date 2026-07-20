import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ProfileCardProps {
  name: string;
  roleTitle: string;
  companyName?: string;
  email?: string;
  avatarUrl?: string;
  status?: "online" | "offline" | "busy";
  badge?: string;
  className?: string;
}

export function ProfileCard({
  name,
  roleTitle,
  companyName,
  email,
  avatarUrl,
  status = "online",
  badge,
  className,
}: ProfileCardProps) {
  return (
    <Card variant="elevated" className={cn("p-5 flex items-center space-x-4", className)}>
      <Avatar src={avatarUrl} fallback={name} size="lg" status={status} />
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center space-x-2">
          <h4 className="font-heading text-sm font-bold truncate">{name}</h4>
          {badge && <Badge variant="success" className="text-[9px] px-1.5 py-0">{badge}</Badge>}
        </div>
        <p className="text-xs text-muted-foreground truncate">{roleTitle} {companyName ? `• ${companyName}` : ""}</p>
        {email && <p className="text-[11px] text-muted-foreground/80 truncate font-mono">{email}</p>}
      </div>
    </Card>
  );
}
