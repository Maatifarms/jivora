import { Leaf, ShieldCheck, Zap, Globe2 } from "lucide-react";

export default function SustainabilitySection() {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-200/60 pb-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-emerald-600" />
          <div>
            <h3 className="text-lg font-extrabold text-navy">Sustainable Sourcing & ESG Categories</h3>
            <p className="text-xs text-navy-muted">Align your supply chain with European Union zero-emission directives and GOTS/FSC standards.</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider self-start sm:self-auto">
          EU ESG Compliant
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 text-xs">
        <div className="rounded-xl bg-white p-4 border border-emerald-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <Leaf className="h-4 w-4 text-emerald-600" />
            <span>Eco-Friendly Products</span>
          </div>
          <p className="text-[11px] text-navy-muted leading-relaxed">
            Categories containing 100% biodegradable or recycled post-consumer materials.
          </p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-emerald-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>ESG Certified Suppliers</span>
          </div>
          <p className="text-[11px] text-navy-muted leading-relaxed">
            Audited manufacturers carrying GOTS, OEKO-TEX 100, and ISO 14001 certificates.
          </p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-emerald-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <Zap className="h-4 w-4 text-emerald-600" />
            <span>Carbon Neutral Lines</span>
          </div>
          <p className="text-[11px] text-navy-muted leading-relaxed">
            Zero-emission production lines verified for UK climate-tax exemptions.
          </p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-emerald-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <Globe2 className="h-4 w-4 text-emerald-600" />
            <span>Sustainable Manufacturing</span>
          </div>
          <p className="text-[11px] text-navy-muted leading-relaxed">
            Water-recycling factories and non-toxic dye processes in Portugal and Italy.
          </p>
        </div>
      </div>
    </div>
  );
}
