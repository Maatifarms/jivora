import { Sparkles, Check, AlertCircle, HelpCircle } from "lucide-react";

interface AIProps {
  onApplySuggestions: () => void;
}

export default function AIRFQAssistant({ onApplySuggestions }: AIProps) {
  const suggestions = [
    "Add Pantone color code (e.g. Pantone 19-4052) for precise yarn dyeing",
    "Specify GSM density (240 GSM) to prevent material ambiguity",
    "Recommend Incoterms DDP (Delivered Duty Paid) to pre-clear UK customs",
    "Request factory quality control audit report before dispatch"
  ];

  return (
    <div className="rounded-2xl border border-brand-sky-accent/30 bg-brand-sky-light/20 p-6 space-y-5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-sky opacity-10 blur-2xl"></div>

      <div className="flex items-center justify-between border-b border-brand-sky-accent/20 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-sky" />
          <h3 className="text-sm font-extrabold text-navy">AI RFQ Optimization Assistant</h3>
        </div>
        <span className="rounded bg-brand-sky/20 px-2 py-0.5 text-[10px] font-bold text-brand-sky-dark">
          Quality Score: 98%
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <p className="text-navy-muted leading-relaxed">
          Jivora AI has analyzed your request against 1,200+ successful UK-EU export contracts to ensure complete requirement accuracy:
        </p>

        <div className="space-y-2 bg-white rounded-xl p-3.5 border border-grey-border/50 shadow-sm">
          <span className="text-[10px] uppercase font-extrabold text-brand-sky-dark block">
            Suggested Specification Enhancements:
          </span>
          <ul className="space-y-1.5">
            {suggestions.map((s, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-navy font-semibold">
                <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={onApplySuggestions}
        className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-brand-sky py-2.5 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-sm"
      >
        <Sparkles className="h-3.5 w-3.5" />
        <span>Apply AI Suggestions to Form</span>
      </button>
    </div>
  );
}
