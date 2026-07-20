import * as React from "react";
import { Card, CardProps } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type AuthCardProps = CardProps;

export function AuthCard({ className, children, ...props }: AuthCardProps) {
  return (
    <Card
      variant="elevated"
      className={cn("w-full max-w-md border-none sm:border bg-background shadow-xl p-6 sm:p-8 space-y-6", className)}
      {...props}
    >
      {children}
    </Card>
  );
}
