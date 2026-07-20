import { Building2, Target, Eye, Layers } from "lucide-react";

interface AboutProps {
  companyName: string;
}

export default function AboutCompany({ companyName }: AboutProps) {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">About {companyName}</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Established 2012</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Story & Overview */}
        <div className="md:col-span-2 space-y-3 text-xs text-navy leading-relaxed">
          <h4 className="text-sm font-bold text-navy">Company Profile & Overview</h4>
          <p>
            <strong>{companyName}</strong> is an audited European manufacturer specializing in high-grade GOTS certified textiles, eco-friendly apparel, and technical industrial fabrics. Operating out of a state-of-the-art 15,000 m² facility in Porto, Portugal, the company supplies major retail chains across the UK, Germany, France, and the Nordics.
          </p>
          <p>
            Equipped with 6 automated production looms and dedicated quality testing labs, {companyName} maintains zero-water waste manufacturing and pre-filed HMRC customs clearance for seamless B2B trade into the UK.
          </p>

          <div className="pt-2">
            <h5 className="text-xs font-bold text-navy-muted uppercase tracking-wider mb-2">Core Target Industries:</h5>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-grey-medium px-2.5 py-1 text-xs font-bold text-navy">Sustainable Textiles</span>
              <span className="rounded bg-grey-medium px-2.5 py-1 text-xs font-bold text-navy">Private Label Apparel</span>
              <span className="rounded bg-grey-medium px-2.5 py-1 text-xs font-bold text-navy">Organic Home Goods</span>
              <span className="rounded bg-grey-medium px-2.5 py-1 text-xs font-bold text-navy">Eco Packaging</span>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="space-y-4">
          <div className="rounded-xl bg-grey-light p-4 space-y-2 border border-grey-border/40">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-navy">
              <Target className="h-4 w-4 text-emerald-600" />
              <span>Company Mission</span>
            </div>
            <p className="text-[11px] text-navy-muted leading-relaxed">
              To deliver zero-carbon, GOTS-certified textiles to European buyers with unmatched lead times and transparent B2B pricing.
            </p>
          </div>

          <div className="rounded-xl bg-grey-light p-4 space-y-2 border border-grey-border/40">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-navy">
              <Eye className="h-4 w-4 text-brand-sky" />
              <span>Company Vision</span>
            </div>
            <p className="text-[11px] text-navy-muted leading-relaxed">
              To lead Southern Europe's sustainable manufacturing sector through 100% renewable power and automated compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
