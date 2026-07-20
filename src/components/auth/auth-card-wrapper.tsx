import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Logo } from "@/components/shared/logo";

interface AuthCardWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function AuthCardWrapper({ title, description, children, footer }: AuthCardWrapperProps) {
  return (
    <Card className="w-full max-w-md border-none sm:border bg-background shadow-xl">
      <CardHeader className="space-y-2 text-center pb-4">
        <div className="flex justify-center mb-2">
          <Logo size="lg" showText={false} />
        </div>
        <CardTitle className="text-2xl font-extrabold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter className="flex justify-center border-t pt-4 text-xs text-muted-foreground">{footer}</CardFooter>}
    </Card>
  );
}
