import { Layers, Package, Sliders, Factory } from "lucide-react";

export default function Specifications() {
  const specs = [
    { label: "Material Composition", value: "100% GOTS Organic Certified Fibers / Recycled Alloys" },
    { label: "Dimensions & Sizes", value: "Standard European Sizing & Custom OEM Specifications" },
    { label: "Weight / Density", value: "240 GSM Premium Heavyweight Grade" },
    { label: "Export Packaging", value: "Individual FSC Bio-polybags, Master Cartons on Euro Pallets" },
    { label: "Customization Options", value: "Custom Color Dyeing, Screen Printing, Laser Engraving" },
    { label: "Private Label Support", value: "Full OEM / ODM Support with Custom Woven Labels & Barcodes" },
    { label: "Monthly Capacity", value: "50,000 Units / Month with Scalable Factory Lines" },
    { label: "Sample Availability", value: "Samples dispatched within 3 business days" },
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Technical Product Specifications</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Audit Verified</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center p-3.5 rounded-xl bg-grey-light border border-grey-border/40 text-xs">
            <span className="font-bold text-navy-muted">{item.label}</span>
            <span className="font-extrabold text-navy text-right max-w-[220px]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
