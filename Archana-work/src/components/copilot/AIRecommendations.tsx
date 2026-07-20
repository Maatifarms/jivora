import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AIRecommendations() {
  const recs = [
    {
      type: "Supplier Match",
      title: "LoomCraft Textiles Lda (Porto, Portugal 🇵🇹)",
      desc: "GOTS organic linen weaver with 15,000 m² production facility. 9.9/10 Trust Score.",
      reason: "✓ High UK Demand • Zero EU Tariff Exemption",
      link: "/company/s1"
    },
    {
      type: "Recommended Product",
      title: "GOTS Organic Certified Raw Linen Fabric",
      desc: "100% organic European flax woven in Porto. Sample dispatch in 48 hours.",
      reason: "✓ Matched GSM Specs • Fast Sample Dispatch",
      link: "/marketplace/product/p1"
    },
    {
      type: "Category Directory",
      title: "Sustainable Textiles & Natural Yarns Directory",
      desc: "Browse 140+ pre-audited European textile looms and natural fabric dyers.",
      reason: "✓ 140+ Audited Looms • GOTS Verified",
      link: "/marketplace/categories"
    },
    {
      type: "Market Intelligence",
      title: "UK FMCG Import Outlook & Tariff Accords 2026",
      desc: "Executive trade report detailing HMRC customs accords and EU PPWR compliance.",
      reason: "✓ HMRC Customs Accord • Regulatory Update",
      link: "/market-insights"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">AI Smart Recommendations</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Real-Time Sourcing Matches</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {recs.map((r, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-grey-border bg-white p-5 space-y-3 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="rounded bg-grey-light font-extrabold text-navy px-2 py-0.5 text-[10px] uppercase border border-grey-border/50">
                  {r.type}
                </span>
                <span className="rounded-full bg-brand-sky-light/80 text-brand-sky-dark font-extrabold px-2 py-0.5 text-[9px] border border-brand-sky-accent/20">
                  99% Match
                </span>
              </div>

              <h4 className="text-sm font-extrabold text-navy group-hover:text-brand-sky transition-colors leading-snug">
                {r.title}
              </h4>
              <p className="text-xs text-navy-muted leading-relaxed line-clamp-2">{r.desc}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-grey-border/40">
              <span className="rounded bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 text-[10px] border border-emerald-100 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                <span>{r.reason}</span>
              </span>

              <Link
                href={r.link}
                className="flex items-center justify-between text-xs font-bold text-navy hover:text-brand-sky transition-colors pt-1"
              >
                <span>Explore Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
