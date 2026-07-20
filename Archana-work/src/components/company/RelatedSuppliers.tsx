import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RelatedSuppliers() {
  const suppliers = [
    {
      id: "s2",
      name: "SolarGrid Technology GmbH",
      country: "Germany",
      flag: "🇩🇪",
      trustScore: "9.8",
      yearsInBusiness: 10,
      responseRate: "< 2 hours",
      certifications: ["CE Certified", "TUV Rheinland"],
      sustainability: "95% Recycled Alloys"
    },
    {
      id: "s3",
      name: "Nordic Bio-Pack ApS",
      country: "Denmark",
      flag: "🇩🇰",
      trustScore: "9.7",
      yearsInBusiness: 5,
      responseRate: "< 30 mins",
      certifications: ["FSC Certified", "BRCGS"],
      sustainability: "100% Biodegradable Materials"
    },
    {
      id: "s5",
      name: "Eco-Toy Crafts S.r.l.",
      country: "Italy",
      flag: "🇮🇹",
      trustScore: "9.8",
      yearsInBusiness: 4,
      responseRate: "< 45 mins",
      certifications: ["CE Certified", "FSC Wood Certified"],
      sustainability: "100% Non-toxic wood paints"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <h3 className="text-lg font-extrabold text-navy">Related Verified Suppliers</h3>
        <span className="text-xs font-bold text-navy-muted">Matched by Sector & Audit Rating</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {suppliers.map((s) => (
          <div 
            key={s.id}
            className="group rounded-2xl border border-grey-border bg-white p-5 space-y-4 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-navy-muted">{s.flag} {s.country}</span>
                <span className="rounded bg-emerald-50 text-emerald-700 font-extrabold px-2 py-0.5 text-[10px]">
                  {s.trustScore} Trust
                </span>
              </div>

              <h4 className="text-base font-bold text-navy group-hover:text-brand-sky transition-colors">{s.name}</h4>

              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-navy-muted">
                  <span>Experience:</span>
                  <span className="font-extrabold text-navy">{s.yearsInBusiness} Years Exporting</span>
                </div>
                <div className="flex justify-between text-navy-muted">
                  <span>Response:</span>
                  <span className="font-extrabold text-navy">{s.responseRate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {s.certifications.map((cert, idx) => (
                  <span key={idx} className="rounded bg-grey-medium px-2 py-0.5 text-[10px] font-bold text-navy">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <Link 
              href={`/company/${s.id}`}
              className="mt-3 block text-center rounded-xl border border-grey-border bg-white py-2.5 text-xs font-bold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              View Supplier Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
