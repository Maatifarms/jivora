import { Sparkles, Check, ArrowRight } from "lucide-react";

const aiCategoryRecommendations = [
  {
    name: "Sustainable Textiles & Fibers",
    growth: "+24% MoM",
    reasons: [
      "High import demand in UK & Northern Europe",
      "Matches your previous searches for organic cotton",
      "Qualifies for UK-EU zero-carbon tariff exemptions"
    ]
  },
  {
    name: "Biodegradable Food Packaging",
    growth: "+31% MoM",
    reasons: [
      "Growing market in Germany & France",
      "Complies with new 2026 EU single-use plastic directives",
      "Supported by 85+ vetted European suppliers"
    ]
  }
];

export default function AIRecommendations() {
  return (
    <div className="rounded-2xl border border-brand-sky-accent/30 bg-brand-sky-light/20 p-6 space-y-6 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-sky opacity-10 blur-2xl"></div>

      <div className="flex items-center justify-between border-b border-brand-sky-accent/20 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-sky" />
          <div>
            <h3 className="text-base font-extrabold text-brand-sky-dark">Recommended Categories For You</h3>
            <p className="text-[11px] text-navy-muted">Explainable AI category analysis based on buying patterns & European demand.</p>
          </div>
        </div>
        <span className="rounded bg-brand-sky/20 px-2 py-0.5 text-[10px] font-bold text-brand-sky-dark">Explainable AI</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {aiCategoryRecommendations.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-grey-border bg-white p-5 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold text-navy">{item.name}</h4>
                <span className="rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-extrabold">
                  {item.growth}
                </span>
              </div>

              {/* Explainable AI Checklist (Req 3) */}
              <div className="rounded-lg bg-grey-light p-3.5 space-y-2 border border-grey-border/40">
                <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-brand-sky-dark flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  <span>Recommended because:</span>
                </h5>
                <ul className="space-y-1.5">
                  {item.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-1.5 text-[11px] text-navy font-medium">
                      <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-grey-border/50 text-xs">
              <span className="text-[10px] text-navy-muted">Real-time Trade Alignment</span>
              <a href="/marketplace" className="font-bold text-brand-sky-dark hover:text-brand-sky flex items-center gap-1">
                <span>Browse Category</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
