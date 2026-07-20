import Link from "next/link";
import { Sparkles, FileText, ArrowRight, MessageSquare } from "lucide-react";

interface CTAProps {
  onNewChat: () => void;
}

export default function CopilotCTA({ onNewChat }: CTAProps) {
  return (
    <div className="rounded-3xl border border-grey-border bg-navy text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

      <div className="space-y-3 max-w-2xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-brand-sky-accent border border-white/15">
          <Sparkles className="h-4 w-4" />
          <span>AI Sourcing Operating System</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready to Source Smarter?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Connect directly with verified European manufacturers, generate instant custom RFQs, and eliminate trade friction.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
        <button
          onClick={onNewChat}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-brand-sky px-6 py-3.5 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Start New Conversation</span>
        </button>

        <Link
          href="/marketplace"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          <span>Explore Marketplace</span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/rfq"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          <FileText className="h-4 w-4 text-brand-sky-accent" />
          <span>Generate RFQ</span>
        </Link>
      </div>
    </div>
  );
}
