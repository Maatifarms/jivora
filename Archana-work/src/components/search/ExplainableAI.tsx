import { ShieldCheck, Check, Sparkles } from "lucide-react";

export default function ExplainableAI() {
  const points = [
    { title: "Direct Requirement Match", desc: "Matched against GOTS organic linen GSM density and UK-EU port logistics." },
    { title: "High Retail Demand in UK", desc: "Sourcing volume in London and Manchester up 34% for certified natural textiles." },
    { title: "100% Factory Vetted", desc: "Audited Portuguese loom facility with pre-cleared HMRC UK customs accord." },
    { title: "Guaranteed Response Speed", desc: "Supplier responds to wholesale price RFQs in under 1 hour." }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
      <div className="flex items-center gap-2 border-b border-grey-border/50 pb-3">
        <Sparkles className="h-5 w-5 text-brand-sky" />
        <h4 className="text-base font-extrabold text-navy">Explainable AI Search Rationale</h4>
      </div>

      <p className="text-xs text-navy-muted leading-relaxed">
        Jivora AI ranks search results based on real-time UK-EU tariff accords, factory audit scores, and verified export transaction logs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {points.map((p, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-grey-light border border-grey-border/40 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-navy">
              <Check className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
              <span>{p.title}</span>
            </div>
            <p className="text-[11px] text-navy-muted leading-tight">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
