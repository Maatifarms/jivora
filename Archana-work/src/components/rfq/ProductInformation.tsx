"use client";

import { Package, ShieldCheck, Edit3 } from "lucide-react";

interface ProductInfoProps {
  productName: string;
  category: string;
  productId: string;
  supplierName: string;
  flag: string;
  country: string;
  onEditToggle: () => void;
}

export default function ProductInformation({
  productName,
  category,
  productId,
  supplierName,
  flag,
  country,
  onEditToggle
}: ProductInfoProps) {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-5 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Target Product & Supplier Details</h3>
        </div>
        <button 
          onClick={onEditToggle}
          className="flex items-center gap-1 text-xs font-bold text-brand-sky-dark hover:underline"
        >
          <Edit3 className="h-3.5 w-3.5" />
          <span>Edit Details</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Product Visual Box */}
        <div className="md:col-span-4 h-32 rounded-xl bg-gradient-to-tr from-brand-sky-light/40 to-brand-sky-light/70 border border-brand-sky-accent/20 flex flex-col items-center justify-center p-3 text-center">
          <span className="text-sm font-extrabold text-navy">{productName}</span>
          <span className="text-[10px] font-bold text-navy-muted mt-1">ID: {productId}</span>
          <span className="rounded bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 text-[9px] mt-2">
            FACTORY VETTED
          </span>
        </div>

        {/* Info Grid */}
        <div className="md:col-span-8 grid grid-cols-2 gap-4 text-xs">
          <div className="space-y-1 p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <span className="text-[10px] uppercase font-bold text-navy-muted">Target Product Name</span>
            <span className="font-extrabold text-navy block">{productName}</span>
          </div>

          <div className="space-y-1 p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <span className="text-[10px] uppercase font-bold text-navy-muted">Sector Category</span>
            <span className="font-extrabold text-navy block">{category}</span>
          </div>

          <div className="space-y-1 p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <span className="text-[10px] uppercase font-bold text-navy-muted">Target Supplier</span>
            <span className="font-extrabold text-navy block">{supplierName}</span>
          </div>

          <div className="space-y-1 p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <span className="text-[10px] uppercase font-bold text-navy-muted">Manufacturing Country</span>
            <span className="font-extrabold text-navy block">{flag} {country}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
