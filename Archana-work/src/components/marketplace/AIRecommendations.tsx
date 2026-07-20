import { Sparkles, ShieldCheck, Clock, Check, ArrowRight } from "lucide-react";

interface RecommendedSupplier {
  name: string;
  country: string;
  flag: string;
  trustScore: string;
  matchScore: number;
  aiExplanation: string[];
  specialty: string;
}

const recommendedList: RecommendedSupplier[] = [
  {
    name: "TomiToy Ecological Factories",
    country: "Italy",
    flag: "🇮🇹",
    trustScore: "9.9",
    matchScore: 98,
    specialty: "SFC Beechwood and Organic Plastics B2B manufacturing",
    aiExplanation: [
      "Ships to UK & Northern Europe regularly",
      "FSC Wood Certified supply chain",
      "Average response time is under 15 minutes",
      "8 Years of export experience under CE regulations"
    ]
  },
  {
    name: "Gaston BioToys SpA",
    country: "France",
    flag: "🇫🇷",
    trustScore: "9.7",
    matchScore: 94,
    specialty: "Recycled Cardboard and Felt Toys",
    aiExplanation: [
      "Customs pre-cleared for UK & Germany",
      "OEKO-TEX Certified recycled fabrics",
      "Carbon Neutral manufacturing verification",
      "Low minimum order options (MOQ: 100 units)"
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
            <h3 className="text-base font-extrabold text-brand-sky-dark">Recommended for You</h3>
            <p className="text-[11px] text-navy-muted">Based on your recent search for: <strong className="text-navy font-bold">"Eco-friendly Toys"</strong></p>
          </div>
        </div>
        <span className="rounded bg-brand-sky/20 px-2 py-0.5 text-[10px] font-bold text-brand-sky-dark">AI Matching Active</span>
      </div>

      {/* Grid of recommended suppliers */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {recommendedList.map((sup, idx) => (
          <div key={idx} className="rounded-xl border border-grey-border bg-white p-5 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-navy-muted">
                    <span>{sup.flag}</span>
                    <span>{sup.country}</span>
                  </span>
                  <h4 className="text-sm font-bold text-navy">{sup.name}</h4>
                  <p className="text-[10px] text-navy-muted">{sup.specialty}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-emerald-600">{sup.matchScore}% Match</div>
                  <span className="text-[9px] font-semibold text-navy-muted">Trust: {sup.trustScore}</span>
                </div>
              </div>

              {/* Explainable AI Checklist (Why this Supplier?) - Req 13 */}
              <div className="rounded-lg bg-grey-light p-3.5 space-y-2 border border-grey-border/40">
                <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-brand-sky-dark flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  <span>Why Jivora AI Recommends:</span>
                </h5>
                <ul className="space-y-1.5">
                  {sup.aiExplanation.map((reason, index) => (
                    <li key={index} className="flex items-start gap-1.5 text-[11px] text-navy">
                      <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center justify-between pt-2 border-t border-grey-border/50">
              <span className="text-[9px] text-navy-muted">Audit Date: July 2026</span>
              <button className="flex items-center gap-1 text-xs font-bold text-brand-sky-dark hover:text-brand-sky transition-colors">
                <span>View Matches</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}
