import { TrendingUp, Globe2, ShieldCheck, CheckCircle2, Lightbulb } from "lucide-react";

export default function InsightsDashboard() {
  const cards = [
    { title: "Trending Sourcing Products", val: "GOTS Organic Linen +34%", desc: "High wholesale demand across UK retail groups in Q3 2026." },
    { title: "High Demand Countries", val: "United Kingdom & Germany", desc: "Top destination ports: London Felixstowe & Hamburg." },
    { title: "Best Supplier Match Rate", val: "99.2% Compatibility", desc: "Factories in Porto & Cologne possess audited zero-carbon certs." },
    { title: "RFQ Success Tip", val: "Specify GSM & Incoterms", desc: "RFQs with detailed material specs receive quotes 4x faster." }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-grey-light p-6 space-y-4 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-emerald-600" />
          <h3 className="text-base font-extrabold text-navy">AI Sourcing Insights & Market Analytics</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">Live Trade Feed</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {cards.map((c, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white border border-grey-border/40 space-y-1.5 shadow-2xs">
            <span className="text-[10px] text-navy-muted font-bold block">{c.title}</span>
            <div className="font-extrabold text-navy text-sm">{c.val}</div>
            <p className="text-[11px] text-navy-muted leading-snug">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
