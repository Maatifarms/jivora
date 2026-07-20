import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function ExportOpportunities() {
  const opportunities = [
    {
      product: "GOTS Organic Linen Fabrics",
      country: "United Kingdom 🇬🇧",
      buyerDemand: "High Demand (340+ Orders/mo)",
      competition: "Low-Medium Competition",
      growth: "+ 34%",
      aiScore: "99/100"
    },
    {
      product: "Compostable PLA Cold Drink Cups",
      country: "Netherlands 🇳🇱",
      buyerDemand: "Surging Demand (520+ Orders/mo)",
      competition: "Low Competition",
      growth: "+ 42%",
      aiScore: "98/100"
    },
    {
      product: "FSC Certified Flatpack Oak Tables",
      country: "Germany 🇩🇪",
      buyerDemand: "Moderate Demand (180+ Orders/mo)",
      competition: "Medium Competition",
      growth: "+ 22%",
      aiScore: "95/100"
    },
    {
      product: "CE Non-Toxic Organic Wooden Toys",
      country: "France 🇫🇷",
      buyerDemand: "High Demand (290+ Orders/mo)",
      competition: "Low Competition",
      growth: "+ 27%",
      aiScore: "97/100"
    }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">High-Margin Sourcing & Export Opportunities</h3>
        </div>
        <Link
          href="/marketplace"
          className="flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm self-start sm:self-auto"
        >
          <span>Explore Marketplace</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {opportunities.map((opp, idx) => (
          <div key={idx} className="p-4 rounded-xl border border-grey-border bg-grey-light/60 space-y-3 hover:bg-white hover:border-brand-sky transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-navy">{opp.product}</span>
              <span className="rounded bg-brand-sky-light/80 text-brand-sky-dark font-extrabold px-2 py-0.5 text-[10px]">
                {opp.aiScore} AI Score
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[10px] text-navy-muted block">Target Market:</span>
                <span className="font-bold text-navy">{opp.country}</span>
              </div>
              <div>
                <span className="text-[10px] text-navy-muted block">Buyer Demand:</span>
                <span className="font-bold text-emerald-700">{opp.buyerDemand}</span>
              </div>
              <div>
                <span className="text-[10px] text-navy-muted block">Supplier Competition:</span>
                <span className="font-bold text-navy">{opp.competition}</span>
              </div>
              <div>
                <span className="text-[10px] text-navy-muted block">YoY Market Growth:</span>
                <span className="font-bold text-emerald-600">{opp.growth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
