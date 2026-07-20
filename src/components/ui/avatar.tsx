import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "busy";
}

export function Avatar({
  src,
  alt = "Avatar",
  fallback = "JV",
  size = "md",
  status,
  className,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = React.useState(false);

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
  };

  const statusClasses = {
    online: "bg-emerald-500",
    offline: "bg-slate-400",
    busy: "bg-rose-500",
  };

  return (
    <div className="relative inline-block">
      <div
        className={cn(
          "relative flex shrink-0 overflow-hidden rounded-full border bg-muted font-medium items-center justify-center text-muted-foreground",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src && !hasError ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 64px"
            onError={() => setHasError(true)}
            className="aspect-square h-full w-full object-cover"
            unoptimized
          />
        ) : (
          <span className="font-semibold uppercase text-foreground/80">{fallback.slice(0, 2)}</span>
        )}
      </div>

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-background",
            statusClasses[status]
          )}
        />
      )}
    </div>
  );
}
