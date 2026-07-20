import Link from "next/link";
import { MessageSquare, Sparkles, ArrowRight, HelpCircle } from "lucide-react";

export default function HelpCTA() {
  return (
    <div className="rounded-3xl border border-grey-border bg-navy text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

      <div className="space-y-3 max-w-2xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-brand-sky-accent border border-white/15">
          <HelpCircle className="h-4 w-4" />
          <span>24/7 Global Customer Support</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Still Need Help?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Our senior trade engineers and AI support specialists are standing by to assist with custom RFQs, customs clearance, or supplier audits.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
        <button
          onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-brand-sky px-6 py-3.5 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Contact Support</span>
        </button>

        <button
          onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-brand-sky-accent" />
          <span>Chat with AI</span>
        </button>

        <Link
          href="/marketplace"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          <span>Explore Marketplace</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
