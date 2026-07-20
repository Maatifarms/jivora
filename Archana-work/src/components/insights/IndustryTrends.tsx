import { TrendingUp, ShoppingBag, Shirt, Box, Cpu, Armchair, HeartPulse, Sprout } from "lucide-react";

export default function IndustryTrends() {
  const industries = [
    {
      name: "FMCG & Consumer Goods",
      growth: "↑ 24%",
      imports: "£1.8B",
      exports: "£1.2B",
      aiRecommendation: "High UK retail re-stocking demand. Sourcing from Portugal & Spain yields 18% cost margin.",
      icon: ShoppingBag,
      color: "text-blue-600",
      sparkline: "M0,25 Q15,18 30,22 T60,10 T90,5"
    },
    {
      name: "Eco Packaging & Paper",
      growth: "↑ 31%",
      imports: "£2.4B",
      exports: "£1.9B",
      aiRecommendation: "EU PPWR law enforcement driving 300% demand surge for GOTS/FSC certified compostable bags.",
      icon: Box,
      color: "text-emerald-600",
      sparkline: "M0,28 Q15,20 30,12 T60,8 T90,2"
    },
    {
      name: "Fashion & Sustainable Textiles",
      growth: "↑ 19%",
      imports: "£3.1B",
      exports: "£2.2B",
      aiRecommendation: "GOTS organic linen & cotton demand up in London & Paris. Direct Porto looms recommended.",
      icon: Shirt,
      color: "text-purple-600",
      sparkline: "M0,22 Q15,24 30,15 T60,10 T90,4"
    },
    {
      name: "Clean Electronics & Hardware",
      growth: "↑ 16%",
      imports: "£4.2B",
      exports: "£3.5B",
      aiRecommendation: "RoHS-2026 certified components experiencing steady wholesale demand in Germany & Benelux.",
      icon: Cpu,
      color: "text-indigo-600",
      sparkline: "M0,20 Q15,18 30,16 T60,12 T90,6"
    },
    {
      name: "Healthcare & Medical Supplies",
      growth: "↑ 28%",
      imports: "£2.9B",
      exports: "£2.1B",
      aiRecommendation: "ISO 13485 audited medical PPE and sanitization gear showing high European NHS & hospital procurement.",
      icon: HeartPulse,
      color: "text-rose-600",
      sparkline: "M0,26 Q15,19 30,14 T60,9 T90,3"
    },
    {
      name: "Sustainable Wooden Furniture",
      growth: "↑ 22%",
      imports: "£1.6B",
      exports: "£1.1B",
      aiRecommendation: "FSC-certified solid oak and flatpack modular furniture trending in German & Scandinavian markets.",
      icon: Armchair,
      color: "text-amber-600",
      sparkline: "M0,24 Q15,20 30,18 T60,11 T90,5"
    },
    {
      name: "Eco Toys & Crafts",
      growth: "↑ 27%",
      imports: "£980M",
      exports: "£650M",
      aiRecommendation: "CE-marked non-toxic organic wooden toys in high demand for Q3/Q4 European holiday distribution.",
      icon: Sprout,
      color: "text-teal-600",
      sparkline: "M0,27 Q15,22 30,15 T60,8 T90,4"
    },
    {
      name: "Agri-Tech & Organic Produce",
      growth: "↑ 18%",
      imports: "£2.1B",
      exports: "£1.7B",
      aiRecommendation: "Organic olive oil, bio-fertilizers, and cold-pressed seed oils leading UK import volume.",
      icon: Sprout,
      color: "text-emerald-700",
      sparkline: "M0,23 Q15,21 30,17 T60,12 T90,7"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">UK & European Industry Growth Trends</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Real-Time Trade Data</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-grey-border bg-white p-5 space-y-4 hover:border-brand-sky transition-all duration-300 card-shadow-premium flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-grey-light ${ind.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-extrabold text-emerald-700 border border-emerald-200">
                    {ind.growth}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-navy">{ind.name}</h4>
                  <div className="flex gap-3 text-[11px] text-navy-muted font-medium mt-1">
                    <span>Import: <strong className="text-navy">{ind.imports}</strong></span>
                    <span>•</span>
                    <span>Export: <strong className="text-navy">{ind.exports}</strong></span>
                  </div>
                </div>

                {/* Trend Sparkline Graph */}
                <div className="h-10 w-full pt-1">
                  <svg className="h-full w-full overflow-visible" viewBox="0 0 100 30">
                    <path
                      d={ind.sparkline}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-emerald-500"
                    />
                  </svg>
                </div>

                <p className="text-[11px] text-navy-muted leading-relaxed border-t border-grey-border/40 pt-2">
                  <strong className="text-navy">AI Note:</strong> {ind.aiRecommendation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
