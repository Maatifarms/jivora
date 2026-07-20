import { ShieldCheck, Sparkles, MapPin, Award, Clock, ShoppingBag, ArrowUpRight } from "lucide-react";

const suppliers = [
  {
    name: "LoomCraft Textiles Lda",
    country: "Portugal",
    flag: "🇵🇹",
    trustScore: "9.9",
    verified: true,
    certifications: ["OEKO-TEX 100", "GOTS Organic", "ISO 9001"],
    responseRate: "< 1 hour",
    moq: "500 meters",
    sustainability: "Carbon Neutral Production",
    specialty: "Organic Cotton & Premium Linen sourcing",
    esg: "AAA Rating"
  },
  {
    name: "SolarGrid Technology GmbH",
    country: "Germany",
    flag: "🇩🇪",
    trustScore: "9.8",
    verified: true,
    certifications: ["CE Certified", "TUV Rheinland", "ISO 14001"],
    responseRate: "< 2 hours",
    moq: "50 units",
    sustainability: "95% Recycled Alloys",
    specialty: "B2B Solar mounting & PV frame components",
    esg: "AA Rating"
  },
  {
    name: "Nordic Bio-Pack ApS",
    country: "Denmark",
    flag: "🇩🇰",
    trustScore: "9.7",
    verified: true,
    certifications: ["FSC Certified", "BRCGS Food Grade", "ISO 50001"],
    responseRate: "< 30 mins",
    moq: "10,000 units",
    sustainability: "100% Biodegradable Materials",
    specialty: "Zero-waste food and beverage packaging",
    esg: "AAA Rating"
  }
];

export default function FeaturedSuppliers() {
  return (
    <section id="suppliers" className="bg-grey-light py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">TRUSTED GLOBAL PARTNERS</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Featured Verified Suppliers
          </h2>
          <p className="text-base text-navy-muted">
            Connect with pre-audited European manufacturers possessing certified supply chains and verified ESG credentials.
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {suppliers.map((supplier, i) => (
            <div 
              key={i}
              className="rounded-2xl border border-grey-border bg-white p-6 space-y-6 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Name, Country, Verified badge */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1 text-xs font-bold text-navy-muted">
                      <span className="text-base">{supplier.flag}</span>
                      <span>{supplier.country}</span>
                    </span>
                    <h3 className="text-lg font-bold text-navy">{supplier.name}</h3>
                  </div>
                  
                  {/* Verified & Trust Score badges */}
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Verified</span>
                    </span>
                    <span className="rounded bg-brand-sky-light/60 px-2 py-0.5 text-xs font-extrabold text-brand-sky-dark">
                      Trust: {supplier.trustScore}/10
                    </span>
                  </div>
                </div>

                <p className="text-xs font-semibold text-navy/80">{supplier.specialty}</p>

                {/* Certifications & Badges */}
                <div className="space-y-2.5 border-t border-grey-border/50 pt-4">
                  <div className="flex items-center gap-2 text-xs text-navy/70">
                    <Award className="h-4 w-4 text-brand-sky flex-shrink-0" />
                    <span className="font-semibold text-navy">Certs:</span>
                    <div className="flex flex-wrap gap-1">
                      {supplier.certifications.map((cert, index) => (
                        <span key={index} className="rounded bg-grey-medium px-2 py-0.5 text-[10px] font-bold text-navy-muted border border-grey-border/50">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sustainability Badge */}
                  <div className="flex items-center gap-2 text-xs text-navy/70">
                    <Sparkles className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span className="font-semibold text-navy">Sustainability:</span>
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-100">
                      🌿 {supplier.sustainability}
                    </span>
                  </div>
                </div>

                {/* Trade details: Response & MOQ */}
                <div className="grid grid-cols-2 gap-2 bg-grey-light rounded-xl p-3 border border-grey-border/40 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Response</span>
                    </span>
                    <span className="font-bold text-navy">{supplier.responseRate}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
                      <ShoppingBag className="h-3 w-3" />
                      <span>Min Order (MOQ)</span>
                    </span>
                    <span className="font-bold text-navy">{supplier.moq}</span>
                  </div>
                </div>
              </div>

              {/* Action Button & ESG */}
              <div className="border-t border-grey-border/50 pt-4 mt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">
                  ESG: {supplier.esg}
                </span>
                
                <a 
                  href="#"
                  className="flex items-center gap-1.5 rounded-lg bg-navy px-3.5 py-2 text-xs font-bold text-white hover:bg-navy-light transition-all"
                >
                  <span>View Company Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
