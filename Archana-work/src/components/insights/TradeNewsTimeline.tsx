import { Clock, ShieldCheck, Scale, AlertCircle, CheckCircle2 } from "lucide-react";

export default function TradeNewsTimeline() {
  const events = [
    {
      date: "July 18, 2026",
      category: "UK-EU Trade Accord",
      title: "HMRC Fast-Track Pre-Clearance Expanded for Certified Exporters",
      summary: "UK Customs announced zero-delay border processing for Portuguese and Spanish audited factories importing GOTS fabrics and bio-packaging.",
      badge: "UK Compliance",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      date: "July 12, 2026",
      category: "EU Sustainability Directive",
      title: "EU PPWR Plastic Regulation Enforcement Takes Effect Across 27 Nations",
      summary: "Mandatory 100% recyclable packaging requirement for wholesale retail imports. Non-compliant suppliers subject to 15% port penalty tariffs.",
      badge: "EU Law Mandate",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      date: "July 05, 2026",
      category: "Tariff Adjustment",
      title: "Zero-Duty Exemptions Applied to Solar Hardware & Eco Building Materials",
      summary: "Germany and the Netherlands waive import tariffs on verified European-manufactured clean tech hardware to accelerate green transition.",
      badge: "0% Duty Exemption",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      date: "June 28, 2026",
      category: "Export Market Update",
      title: "UK Retail Restocking Volume Reaches 3-Year High in Q3 Sourcing",
      summary: "London and Manchester B2B distributors increase purchase orders by 24% for organic home textiles and biodegradable packaging.",
      badge: "High Demand",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">UK & EU Regulatory & Trade News Timeline</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Updated Daily</span>
      </div>

      <div className="relative border-l-2 border-brand-sky-accent/40 ml-4 space-y-6 pl-6">
        {events.map((ev, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-brand-sky group-hover:scale-125 transition-transform shadow-sm"></div>

            <div className="rounded-xl border border-grey-border bg-grey-light/60 p-4 space-y-2 hover:bg-white hover:border-brand-sky transition-all shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-navy-muted flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{ev.date}</span>
                  <span>•</span>
                  <span>{ev.category}</span>
                </span>
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold border ${ev.badgeColor}`}>
                  {ev.badge}
                </span>
              </div>

              <h4 className="text-sm font-extrabold text-navy">{ev.title}</h4>
              <p className="text-xs text-navy-muted leading-relaxed">{ev.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
