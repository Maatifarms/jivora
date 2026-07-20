import { Sparkles, ShoppingBag, Euro, Award, Tag, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Premium Organic Linen Fabric",
    category: "Sustainable Textiles",
    fobPrice: "€2.40 - €3.10 / meter",
    moq: "500 meters",
    supplier: "LoomCraft Textiles Lda",
    countryFlag: "🇵🇹",
    sustainability: "GOTS Organic & Carbon Neutral",
    desc: "Premium post-industrial organic linen fiber, suitable for high-end fashion manufacture and retail sourcing.",
    badge: "Hot Sourcing"
  },
  {
    name: "Food-Grade Recycled PET Pellets (rPET)",
    category: "Circular Plastics",
    fobPrice: "€850 - €920 / ton",
    moq: "10 tons",
    supplier: "Nordic Bio-Pack ApS",
    countryFlag: "🇩🇰",
    sustainability: "100% Recycled & FSC Raw Material",
    desc: "High-purity food-contact certified rPET granules designed for packaging and beverage bottle manufacturers.",
    badge: "High Demand"
  },
  {
    name: "Solar PV Microinverter (Grid-tied)",
    category: "Renewable Energy",
    fobPrice: "€120 - €145 / unit",
    moq: "100 units",
    supplier: "SolarGrid Technology GmbH",
    countryFlag: "🇩🇪",
    sustainability: "CE Certified & RoHS Compliant",
    desc: "Smart grid-tied microinverters with integrated power optimization and real-time efficiency telemetry.",
    badge: "Energy Trend"
  }
];

export default function TrendingProducts() {
  return (
    <section className="bg-white py-20 md:py-24 border-t border-grey-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-sky font-sans">LIVE DEMAND ENGINE</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Trending Products
          </h2>
          <p className="text-base text-navy-muted">
            The most sought-after goods and raw materials in UK-EU trade routes based on real-time search and RFQ volumes.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group rounded-2xl border border-grey-border bg-grey-light p-6 space-y-6 hover:border-brand-sky hover:bg-white transition-all duration-300 card-shadow-premium hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Badge & Category */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-navy-muted font-semibold">{product.category}</span>
                  <span className="rounded bg-brand-sky-light/80 border border-brand-sky-accent/20 px-2 py-0.5 text-[9px] font-bold text-brand-sky-dark uppercase">
                    {product.badge}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-base font-bold text-navy group-hover:text-brand-sky transition-colors">{product.name}</h3>
                
                {/* Description */}
                <p className="text-xs text-navy-muted leading-relaxed line-clamp-3">{product.desc}</p>
                
                {/* Pricing & MOQ info */}
                <div className="space-y-2 border-t border-grey-border/50 pt-4 text-xs text-navy">
                  <div className="flex items-center justify-between">
                    <span className="text-navy-muted flex items-center gap-1 font-semibold">
                      <Euro className="h-3.5 w-3.5" />
                      <span>FOB Price:</span>
                    </span>
                    <span className="font-bold">{product.fobPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-navy-muted flex items-center gap-1 font-semibold">
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>Min Order:</span>
                    </span>
                    <span className="font-bold">{product.moq}</span>
                  </div>
                </div>

                {/* Sustainability Accords */}
                <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-2.5 flex items-center gap-2 text-[10px] font-bold text-emerald-800">
                  <Award className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>🌿 {product.sustainability}</span>
                </div>
              </div>

              {/* Bottom: Supplier reference & CTA */}
              <div className="border-t border-grey-border/50 pt-4 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-navy/80">
                  <span>{product.countryFlag}</span>
                  <span className="truncate max-w-[120px]">{product.supplier}</span>
                </div>
                
                <button className="flex items-center gap-1 text-[11px] font-bold text-brand-sky-dark group-hover:text-brand-sky hover:underline">
                  <span>Request Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
