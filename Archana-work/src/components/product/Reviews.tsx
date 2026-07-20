import { Star, ShieldCheck, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      buyer: "Alexander Wright",
      company: "London Sustainable Retail Ltd",
      country: "🇬🇧 UK",
      rating: 5,
      comment: "We ordered 2,000 units for our UK retail chain. Customs clearance at Felixstowe was seamless thanks to pre-filed HMRC docs. Quality exceeds GOTS standards."
    },
    {
      buyer: "Elena Rostova",
      company: "Berlin Eco Goods GmbH",
      country: "🇩🇪 Germany",
      rating: 5,
      comment: "Outstanding supplier response time. Sample arrived in Berlin within 3 days. Production run was delivered on time with zero defects."
    }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-grey-border/50 pb-4">
        <div>
          <h3 className="text-lg font-extrabold text-navy">Verified Buyer Reviews & Trade Success Stories</h3>
          <p className="text-xs text-navy-muted">Real trade feedback from audited UK and European wholesale buyers.</p>
        </div>
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-extrabold text-navy">4.9 / 5.0</span>
          <span className="text-xs text-navy-muted">(48 Trade Reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {reviews.map((r, idx) => (
          <div key={idx} className="rounded-xl border border-grey-border bg-grey-light p-5 space-y-3 relative">
            <Quote className="absolute right-4 top-4 h-6 w-6 text-grey-border" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-navy">{r.buyer}</span>
              <span className="text-xs text-navy-muted">• {r.company} ({r.country})</span>
            </div>
            <div className="flex text-amber-400">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-navy leading-relaxed italic">"{r.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
