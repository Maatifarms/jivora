import * as React from "react";
import { PageHeader } from "@/components/shared/page-header";
import { BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { cn } from "@/lib/utils";

export interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  action?: React.ReactNode;
}

export function PageWrapper({
  title,
  description,
  breadcrumbs,
  action,
  className,
  children,
  ...props
}: PageWrapperProps) {
  return (
    <div className={cn("w-full space-y-6 animate-fade-in", className)} {...props}>
      {title && (
        <PageHeader
          title={title}
          description={description}
          breadcrumbs={breadcrumbs}
          action={action}
        />
      )}
      <div>{children}</div>
    </div>
  );
}
