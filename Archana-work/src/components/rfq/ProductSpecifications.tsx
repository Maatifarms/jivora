"use client";

import { Sliders, Award, CheckSquare } from "lucide-react";

interface SpecsProps {
  material: string;
  setMaterial: (val: string) => void;
  size: string;
  setSize: (val: string) => void;
  color: string;
  setColor: (val: string) => void;
  packaging: string;
  setPackaging: (val: string) => void;
  isPrivateLabel: boolean;
  setIsPrivateLabel: (val: boolean) => void;
  isOem: boolean;
  setIsOem: (val: boolean) => void;
  certifications: string[];
  setCertifications: (certs: string[]) => void;
}

export default function ProductSpecifications({
  material,
  setMaterial,
  size,
  setSize,
  color,
  setColor,
  packaging,
  setPackaging,
  isPrivateLabel,
  setIsPrivateLabel,
  isOem,
  setIsOem,
  certifications,
  setCertifications
}: SpecsProps) {
  const availableCerts = ["GOTS Organic", "ISO 9001", "CE Certified", "FSC Wood", "FDA Approved", "RoHS Compliant"];

  const toggleCert = (cert: string) => {
    if (certifications.includes(cert)) {
      setCertifications(certifications.filter((c) => c !== cert));
    } else {
      setCertifications([...certifications, cert]);
    }
  };

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Technical & Manufacturing Specifications</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Step 2 of 4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        {/* Material */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Material Composition</label>
          <input
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            placeholder="e.g. 100% GOTS Organic Cotton / Recycled PLA"
            className="w-full rounded-xl border border-grey-border p-3 text-xs text-navy outline-none focus:border-brand-sky"
          />
        </div>

        {/* Size */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Size & Dimensions</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="e.g. 150cm width / Custom Euro Sizing"
            className="w-full rounded-xl border border-grey-border p-3 text-xs text-navy outline-none focus:border-brand-sky"
          />
        </div>

        {/* Color */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Color & Pantone Dyeing</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="e.g. Natural Off-White / Pantone 19-4052"
            className="w-full rounded-xl border border-grey-border p-3 text-xs text-navy outline-none focus:border-brand-sky"
          />
        </div>

        {/* Packaging */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Export Packaging Specs</label>
          <input
            type="text"
            value={packaging}
            onChange={(e) => setPackaging(e.target.value)}
            placeholder="e.g. Individual FSC polybags in Master Cartons"
            className="w-full rounded-xl border border-grey-border p-3 text-xs text-navy outline-none focus:border-brand-sky"
          />
        </div>

        {/* Branding & Manufacturing Checkboxes */}
        <div className="md:col-span-2 flex flex-wrap gap-4 pt-2 border-t border-grey-border/40">
          <label className="flex items-center gap-2 cursor-pointer font-bold text-navy">
            <input
              type="checkbox"
              checked={isPrivateLabel}
              onChange={(e) => setIsPrivateLabel(e.target.checked)}
              className="h-4 w-4 rounded border-grey-border text-brand-sky accent-navy"
            />
            <span>Requires Private Label Woven Tags & Barcodes</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer font-bold text-navy">
            <input
              type="checkbox"
              checked={isOem}
              onChange={(e) => setIsOem(e.target.checked)}
              className="h-4 w-4 rounded border-grey-border text-brand-sky accent-navy"
            />
            <span>Requires OEM / ODM Custom Tooling</span>
          </label>
        </div>

        {/* Certifications Required */}
        <div className="md:col-span-2 space-y-2 pt-2 border-t border-grey-border/40">
          <label className="font-extrabold text-navy block">Required Factory Certifications</label>
          <div className="flex flex-wrap gap-2">
            {availableCerts.map((cert) => {
              const isSelected = certifications.includes(cert);
              return (
                <button
                  type="button"
                  key={cert}
                  onClick={() => toggleCert(cert)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all border ${
                    isSelected
                      ? "bg-navy text-white border-navy"
                      : "bg-grey-light text-navy-muted border-grey-border/60 hover:bg-white"
                  }`}
                >
                  {cert} {isSelected && "✓"}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
