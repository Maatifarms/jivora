import { Factory, Eye } from "lucide-react";

export default function FactoryGallery() {
  const photos = [
    { title: "Automated Production Floor", desc: "Computerized loom weaving machinery in Porto, Portugal." },
    { title: "Quality Control Station", desc: "Laser density inspection & tensile strength testing." },
    { title: "Warehouse & Raw Material", desc: "Climate-controlled organic yarn storage." },
    { title: "Master Export Packaging", desc: "Automated strapping & Euro pallet wrapping facility." },
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Factory className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Audited Factory & Production Facility</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">On-Site Inspection 2026</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((p, idx) => (
          <div key={idx} className="group relative rounded-xl border border-grey-border bg-grey-light p-4 space-y-2 hover:border-brand-sky transition-all cursor-pointer">
            <div className="h-28 w-full rounded-lg bg-gradient-to-br from-brand-sky-light/60 to-brand-sky-light/20 flex flex-col items-center justify-center p-2 text-center border border-grey-border/40">
              <span className="text-xs font-extrabold text-navy group-hover:text-brand-sky transition-colors">{p.title}</span>
              <Eye className="h-4 w-4 text-navy-muted mt-2 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] text-navy-muted leading-tight">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
