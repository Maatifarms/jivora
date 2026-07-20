import { Sparkles, ArrowRight } from "lucide-react";

interface CTAProps {
  onAskAi: () => void;
}

export default function CTASection({ onAskAi }: CTAProps) {
  return (
    <section className="relative bg-navy-dark text-white rounded-3xl p-10 md:p-14 overflow-hidden border border-navy-border/40 shadow-2xl">
      {/* Background flare */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sky opacity-15 blur-3xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky/10 px-3.5 py-1 text-xs font-bold text-brand-sky-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Custom Sector Matching</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Can't find your category?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Tell Jivora AI your custom product parameters, required certifications, or target country. Our AI engine will match you directly to specialized factories.
          </p>
        </div>

        <button
          onClick={onAskAi}
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-sky px-7 py-4 text-sm font-bold text-white hover:bg-brand-sky-dark transition-all shadow-lg hover:scale-105 flex-shrink-0"
        >
          <Sparkles className="h-4.5 w-4.5" />
          <span>Ask Jivora AI</span>
        </button>
      </div>
    </section>
  );
}
