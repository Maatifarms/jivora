import Link from "next/link";
import { Sparkles, ArrowRight, HelpCircle, Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full rounded-3xl border border-grey-border bg-gradient-to-br from-white via-brand-sky-light/20 to-grey-light p-8 sm:p-12 text-center space-y-6 card-shadow-premium relative overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

        <div className="space-y-3 relative z-10">
          <span className="rounded-full bg-brand-sky-light border border-brand-sky-accent/30 px-3.5 py-1 text-xs font-extrabold text-brand-sky-dark inline-block">
            404 • Page Not Found
          </span>
          <h1 className="text-4xl font-extrabold text-navy sm:text-5xl tracking-tight">
            Lost Your Sourcing Route?
          </h1>
          <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
            The page or supplier profile you are looking for may have moved or is temporarily undergoing audit updates.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 relative z-10">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md"
          >
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/search"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-brand-sky px-6 py-3.5 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
          >
            <Search className="h-4 w-4" />
            <span>Global Search</span>
          </Link>

          <Link
            href="/help"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-grey-border bg-white px-6 py-3.5 text-xs font-bold text-navy hover:bg-grey-medium transition-all shadow-sm"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Help Center</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
