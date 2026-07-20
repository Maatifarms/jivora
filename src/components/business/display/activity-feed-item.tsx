import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ActivityFeedItemProps {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status?: "pending" | "success" | "warning" | "info" | "default" | "secondary" | "destructive" | "outline";
  avatarInitials?: string;
  avatarSrc?: string;
  className?: string;
}

export function ActivityFeedItem({
  title,
  description,
  timestamp,
  status,
  avatarInitials,
  avatarSrc,
  className
}: ActivityFeedItemProps) {
  return (
    <div className={cn("flex items-start gap-4 py-3", className)}>
      <Avatar fallback={avatarInitials} src={avatarSrc} size="md" />
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium leading-none">{title}</p>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {status && (
        <Badge variant={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      )}
    </div>
  );
}
