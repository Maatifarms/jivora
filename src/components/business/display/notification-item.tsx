"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export interface NotificationItemProps {
  id: string;
  type: "alert" | "message" | "system" | "order";
  title: string;
  message: string;
  timestamp: string;
  initialRead?: boolean;
  className?: string;
}

export function NotificationItem({
  id,
  type,
  title,
  message,
  timestamp,
  initialRead = false,
  className,
}: NotificationItemProps) {
  const [isRead, setIsRead] = React.useState(initialRead);

  return (
    <div
      className={cn(
        "flex items-start gap-4 p-4 rounded-lg transition-colors border",
        isRead ? "bg-background border-transparent" : "bg-muted/50 border-border",
        className
      )}
    >
      <div className="mt-1">
        <Badge variant={type === "alert" ? "destructive" : type === "order" ? "success" : "secondary"}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className={cn("text-sm font-medium", !isRead && "text-foreground")}>{title}</p>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      {!isRead && (
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-xs"
          onClick={() => setIsRead(true)}
        >
          <Check className="mr-2 h-4 w-4" />
          Mark as read
        </Button>
      )}
    </div>
  );
}
