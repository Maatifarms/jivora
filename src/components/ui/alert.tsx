import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        info: "border-blue-500/50 bg-blue-500/10 text-blue-900 dark:text-blue-200 [&>svg]:text-blue-600",
        success: "border-emerald-500/50 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 [&>svg]:text-emerald-600",
        warning: "border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-200 [&>svg]:text-amber-600",
        destructive: "border-destructive/50 bg-destructive/10 text-destructive dark:text-red-300 [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
}

export function Alert({ className, variant = "default", title, icon, children, ...props }: AlertProps) {
  const defaultIcons = {
    default: <Info className="h-4 w-4" />,
    info: <Info className="h-4 w-4" />,
    success: <CheckCircle2 className="h-4 w-4" />,
    warning: <AlertTriangle className="h-4 w-4" />,
    destructive: <AlertCircle className="h-4 w-4" />,
  };

  return (
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      {icon || defaultIcons[variant || "default"]}
      <div>
        {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
        {children && <div className="text-sm opacity-90">{children}</div>}
      </div>
    </div>
  );
}
