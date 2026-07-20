import { XCircle, CheckCircle2, Sparkles, Shield, FileSpreadsheet, Eye, HelpCircle } from "lucide-react";

export default function WhyJivora() {
  return (
    <section id="problem-solves" className="bg-grey-light py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">THE JIVORA DIFFERENCE</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Why Jivora?
          </h2>
          <p className="text-base text-navy-muted">
            Traditional trade platforms haven't evolved in decades. We designed JIVORA from the ground up to solve critical friction in cross-border commerce.
          </p>
        </div>

        {/* Side-by-Side Sourcing Comparison Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Legacy Platform Pain Points */}
          <div className="rounded-2xl border border-grey-border bg-white p-8 space-y-6 card-shadow-premium">
            <div className="space-y-2 border-b border-grey-border/50 pb-4">
              <h3 className="text-lg font-bold text-navy">Traditional Trade Platforms</h3>
              <p className="text-xs text-navy-muted">Legacy directories (e.g. IndiaMART, Alibaba) lead to massive sourcing overhead.</p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Hard to Find Genuine Partners</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">Buyers are flooded with unvetted spam requests. Suppliers waste time chasing fake leads.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Complicated Export Process</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">Calculating customs duties, organizing freight forwarding, and handling import tariffs requires manual brokers.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy">No Transparency</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">Opaque broker margins, undisclosed pricing, and missing sustainability metrics make fair trading difficult.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Difficult Compliance Checks</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">Manually checking GOTS, ISO, CE, and UK-EU REACH chemical directives can delay shipments by weeks.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Jivora Sourcing Solutions */}
          <div className="rounded-2xl border-2 border-brand-sky-accent/40 bg-white p-8 space-y-6 card-shadow-premium relative overflow-hidden">
            {/* Glowing top highlight */}
            <div className="absolute right-0 top-0 rounded-bl-xl bg-brand-sky px-3 py-1 font-mono text-[9px] font-bold text-white uppercase tracking-widest flex items-center gap-1 shadow-sm">
              <Sparkles className="h-3 w-3" />
              <span>Modern Sourcing</span>
            </div>

            <div className="space-y-2 border-b border-grey-border/50 pb-4">
              <h3 className="text-lg font-bold text-brand-sky-dark">The Jivora Experience</h3>
              <p className="text-xs text-navy-muted">An intelligent, AI-first operating system designed to remove global barriers.</p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy flex items-center gap-1.5">
                    <span>AI Supplier Matching</span>
                    <span className="rounded bg-brand-sky-light/80 px-1.5 py-0.25 text-[9px] font-bold text-brand-sky-dark">USP</span>
                  </h4>
                  <p className="text-xs text-navy-muted leading-relaxed">Our search models analyze company capacity, trust metrics, and certifications to match you with exactly the right partners.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Vetted & Verified Businesses</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">Every company undergoes strict VAT, registry, and quality audits prior to onboarding, ensuring maximum trust.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Easy Automated RFQs</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">Generate technical specifications, MOQ requirements, and trade terms (FOB/CIF) instantly with AI assistance.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Trade Guidance & Compliance Support</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">Real-time alerts for UK VAT and EU environmental regulations (CBAM, GOTS, CE). Cross-border trade is automated.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
