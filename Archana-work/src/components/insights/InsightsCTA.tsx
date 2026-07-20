import Link from "next/link";
import { ArrowRight, FileText, MessageSquare, Globe2 } from "lucide-react";

export default function InsightsCTA() {
  return (
    <div className="rounded-3xl border border-grey-border bg-navy text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

      <div className="space-y-3 max-w-2xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-brand-sky-accent border border-white/15">
          <Globe2 className="h-4 w-4" />
          <span>Global B2B & D2C Sourcing Platform</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready to Expand Your Business Globally?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Discover thousands of factory-vetted suppliers, compare live price benchmarks, and generate HMRC-compliant RFQs instantly.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
        <Link
          href="/marketplace"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-brand-sky px-6 py-3.5 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
        >
          <span>Explore Marketplace</span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/rfq"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          <FileText className="h-4 w-4 text-brand-sky-accent" />
          <span>Generate Official RFQ</span>
        </Link>

        <Link
          href="/company/s1"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          <MessageSquare className="h-4 w-4 text-brand-sky-accent" />
          <span>Contact Suppliers</span>
        </Link>
      </div>
    </div>
  );
}
