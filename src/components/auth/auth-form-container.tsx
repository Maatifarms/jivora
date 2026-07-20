import * as React from "react";
import { cn } from "@/lib/utils";

export type AuthFormContainerProps = React.FormHTMLAttributes<HTMLFormElement>;

export function AuthFormContainer({ className, children, ...props }: AuthFormContainerProps) {
  return (
    <form className={cn("space-y-4 w-full", className)} {...props}>
      {children}
    </form>
  );
}
