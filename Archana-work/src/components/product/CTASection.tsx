import { Sparkles, FileText, MessageSquare } from "lucide-react";

interface CTAProps {
  onRfqClick: () => void;
  onChatClick: () => void;
}

export default function CTASection({ onRfqClick, onChatClick }: CTAProps) {
  return (
    <section className="relative bg-navy-dark text-white rounded-3xl p-10 md:p-14 overflow-hidden border border-navy-border/40 shadow-2xl">
      {/* Glow background flare */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sky opacity-15 blur-3xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky/10 px-3.5 py-1 text-xs font-bold text-brand-sky-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Direct Manufacturer Line</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Trade?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Generate an official RFQ with your target quantities or start a direct end-to-end encrypted chat with the factory sales engineer.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={onRfqClick}
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-sky px-6 py-4 text-sm font-bold text-white hover:bg-brand-sky-dark transition-all shadow-lg hover:scale-105"
          >
            <FileText className="h-4.5 w-4.5" />
            <span>Generate Official RFQ</span>
          </button>
          <button
            onClick={onChatClick}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            <MessageSquare className="h-4.5 w-4.5 text-brand-sky-accent" />
            <span>Chat with Supplier</span>
          </button>
        </div>
      </div>
    </section>
  );
}
