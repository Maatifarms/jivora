import { Leaf, ShieldCheck, Zap, Recycle } from "lucide-react";

export default function Sustainability() {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-200/60 pb-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-emerald-600" />
          <div>
            <h3 className="text-lg font-extrabold text-navy">ESG & Sustainability Credentials</h3>
            <p className="text-xs text-navy-muted">Audited environmental compliance & ethical labor standards.</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider self-start sm:self-auto">
          EU ESG Compliant
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 text-xs">
        <div className="rounded-xl bg-white p-4 border border-emerald-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <Zap className="h-4 w-4 text-emerald-600" />
            <span>Carbon Neutral Facilities</span>
          </div>
          <p className="text-[11px] text-navy-muted leading-relaxed">
            100% solar powered manufacturing loom lines in Porto, Portugal.
          </p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-emerald-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <Recycle className="h-4 w-4 text-emerald-600" />
            <span>Water-Recycling Closed Loop</span>
          </div>
          <p className="text-[11px] text-navy-muted leading-relaxed">
            98% water recycling in textile dyeing and wash cycles.
          </p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-emerald-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <Leaf className="h-4 w-4 text-emerald-600" />
            <span>GOTS Organic Fibers</span>
          </div>
          <p className="text-[11px] text-navy-muted leading-relaxed">
            Zero synthetic pesticide raw cotton sourced from certified European farms.
          </p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-emerald-100 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Ethical Fair Labor</span>
          </div>
          <p className="text-[11px] text-navy-muted leading-relaxed">
            Audited under European Union labor laws with fair living wage guarantees.
          </p>
        </div>
      </div>
    </div>
  );
}
