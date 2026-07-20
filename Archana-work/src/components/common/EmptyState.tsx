import Link from "next/link";
import { Search, Sparkles, ArrowRight, PackageX } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = "No Results Found",
  description = "We couldn't find any direct matches for your request. Try adjusting your search keywords or smart filters.",
  ctaText = "Explore Marketplace",
  ctaHref = "/marketplace",
  onAction
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-grey-border bg-white p-8 sm:p-12 text-center space-y-5 card-shadow-premium max-w-xl mx-auto my-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-sky-light/50 text-brand-sky mx-auto border border-brand-sky-accent/20">
        <PackageX className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-navy">{title}</h3>
        <p className="text-xs text-navy-muted leading-relaxed max-w-md mx-auto">
          {description}
        </p>
      </div>

      <div className="pt-2 flex justify-center">
        {onAction ? (
          <button
            onClick={onAction}
            className="flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md"
          >
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <Link
            href={ctaHref}
            className="flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md"
          >
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
