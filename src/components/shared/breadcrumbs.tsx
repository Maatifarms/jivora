import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-xs text-muted-foreground", className)}>
      <ol className="flex items-center space-x-1 sm:space-x-2">
        <li>
          <Link href="/" className="flex items-center hover:text-foreground transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center space-x-1 sm:space-x-2">
              <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" />
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-foreground font-medium transition-colors">
                  {item.title}
                </Link>
              ) : (
                <span className="font-semibold text-foreground truncate max-w-[200px]">{item.title}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
