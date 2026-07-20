import { Factory, Eye } from "lucide-react";

export default function FactoryGallery() {
  const photos = [
    { title: "Main Weaving Production Hall", desc: "Automated high-capacity loom machinery running 24/7." },
    { title: "Quality Assurance Lab", desc: "Tensile strength, thread count, & colorfastness testing." },
    { title: "Climate-Controlled Warehouse", desc: "15,000 m² raw GOTS organic yarn storage." },
    { title: "Automated Packaging Station", desc: "Euro pallet strapping & barcode shipping labeling." },
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Factory className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Factory Floor & Production Facilities</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">On-Site Inspection 2026</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((p, idx) => (
          <div key={idx} className="group relative rounded-xl border border-grey-border bg-grey-light p-4 space-y-2 hover:border-brand-sky transition-all cursor-pointer">
            <div className="h-32 w-full rounded-lg bg-gradient-to-br from-brand-sky-light/60 to-brand-sky-light/20 flex flex-col items-center justify-center p-3 text-center border border-grey-border/40">
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
