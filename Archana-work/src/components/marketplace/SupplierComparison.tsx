"use client";

import { X, Check, ShieldCheck, Scale } from "lucide-react";
import { ProductItem } from "./ProductGrid";

interface CompareProps {
  compareList: ProductItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (product: ProductItem) => void;
  onOpen: () => void;
}

export default function SupplierComparison({ compareList, isOpen, onClose, onRemove, onOpen }: CompareProps) {
  
  if (compareList.length === 0) return null;

  // Sticky bottom action bar when drawer is closed
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 rounded-full border border-navy bg-navy px-6 py-3.5 text-white shadow-xl flex items-center gap-4 animate-bounce">
        <div className="flex items-center gap-2">
          <Scale className="h-4.5 w-4.5 text-brand-sky-accent" />
          <span className="text-xs font-semibold">{compareList.length} / 3 Items Selected</span>
        </div>
        <div className="h-4 w-[1px] bg-white/20"></div>
        <button 
          onClick={onOpen}
          className="text-xs font-bold text-brand-sky-accent hover:text-white transition-colors"
        >
          Compare Now
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end justify-center transition-all duration-300">
      
      {/* Comparison Drawer Sheet */}
      <div className="w-full max-w-5xl rounded-t-3xl border-t border-grey-border bg-white p-6 shadow-2xl space-y-6 max-h-[80vh] overflow-y-auto transform translate-y-0 transition-transform">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-brand-sky" />
            <h3 className="text-base font-extrabold text-navy">Supplier & Product Sourcing Comparison</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-grey-medium transition-colors"
          >
            <X className="h-5 w-5 text-navy-muted" />
          </button>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-grey-border/50">
                <th className="py-3 px-4 font-bold text-navy-muted w-1/4">Specification</th>
                {compareList.map((item) => (
                  <th key={item.id} className="py-3 px-4 font-bold text-navy w-1/4 relative">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate">{item.name}</span>
                      <button 
                        onClick={() => onRemove(item)}
                        className="text-rose-500 hover:bg-rose-50 p-1 rounded-full transition-colors"
                        title="Remove"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-[10px] font-semibold text-navy-muted block mt-0.5">{item.supplier}</span>
                  </th>
                ))}
                {/* Pad columns to 3 if less are selected */}
                {[...Array(3 - compareList.length)].map((_, idx) => (
                  <th key={idx} className="py-3 px-4 font-semibold text-slate-300 w-1/4 italic">Empty slot</th>
                ))}
              </tr>
            </thead>
            
            <tbody className="divide-y divide-grey-border/40 text-navy">
              {/* Price */}
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-muted bg-grey-light">FOB Price</td>
                {compareList.map((item) => (
                  <td key={item.id} className="py-3.5 px-4 font-semibold">{item.price}</td>
                ))}
                {[...Array(3 - compareList.length)].map((_, idx) => (
                  <td key={idx} className="py-3.5 px-4"></td>
                ))}
              </tr>

              {/* MOQ */}
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-muted bg-grey-light">Min Order (MOQ)</td>
                {compareList.map((item) => (
                  <td key={item.id} className="py-3.5 px-4 font-semibold">{item.moq}</td>
                ))}
                {[...Array(3 - compareList.length)].map((_, idx) => (
                  <td key={idx} className="py-3.5 px-4"></td>
                ))}
              </tr>

              {/* Lead Time */}
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-muted bg-grey-light">Lead Time</td>
                {compareList.map((item) => (
                  <td key={item.id} className="py-3.5 px-4 font-semibold">{item.leadTime}</td>
                ))}
                {[...Array(3 - compareList.length)].map((_, idx) => (
                  <td key={idx} className="py-3.5 px-4"></td>
                ))}
              </tr>

              {/* Trust Score */}
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-muted bg-grey-light">Trust Score</td>
                {compareList.map((item) => (
                  <td key={item.id} className="py-3.5 px-4">
                    <span className="rounded bg-brand-sky-light/80 px-2 py-0.5 font-bold text-brand-sky-dark">
                      {item.trustScore} / 10
                    </span>
                  </td>
                ))}
                {[...Array(3 - compareList.length)].map((_, idx) => (
                  <td key={idx} className="py-3.5 px-4"></td>
                ))}
              </tr>

              {/* Country */}
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-muted bg-grey-light">Origin Country</td>
                {compareList.map((item) => (
                  <td key={item.id} className="py-3.5 px-4 font-semibold flex items-center gap-1.5 pt-4">
                    <span>{item.flag}</span>
                    <span>{item.country}</span>
                  </td>
                ))}
                {[...Array(3 - compareList.length)].map((_, idx) => (
                  <td key={idx} className="py-3.5 px-4"></td>
                ))}
              </tr>

              {/* Sustainability */}
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-muted bg-grey-light">Sustainability rating</td>
                {compareList.map((item) => (
                  <td key={item.id} className="py-3.5 px-4 text-emerald-700 font-bold">🌿 {item.sustainability}</td>
                ))}
                {[...Array(3 - compareList.length)].map((_, idx) => (
                  <td key={idx} className="py-3.5 px-4"></td>
                ))}
              </tr>

              {/* Compliance / Export status */}
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-muted bg-grey-light">UK/EU Customs Ready</td>
                {compareList.map((item) => (
                  <td key={item.id} className="py-3.5 px-4">
                    {item.exportReady ? (
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <Check className="h-4 w-4" />
                        <span>Pre-cleared</span>
                      </span>
                    ) : (
                      <span className="text-navy-muted">Under Review</span>
                    )}
                  </td>
                ))}
                {[...Array(3 - compareList.length)].map((_, idx) => (
                  <td key={idx} className="py-3.5 px-4"></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action triggers */}
        <div className="flex justify-end gap-3 border-t border-grey-border/50 pt-4">
          <button 
            onClick={onClose}
            className="rounded-lg border border-grey-border px-4 py-2 font-semibold hover:bg-grey-medium transition-colors"
          >
            Close Sourcing Sheet
          </button>
          <button 
            onClick={() => alert("Batch RFQ Sent to Selected Factories!")}
            className="rounded-lg bg-navy px-5 py-2 font-bold text-white hover:bg-navy-light transition-all shadow-md"
          >
            Dispatch Batch RFQ
          </button>
        </div>

      </div>
    </div>
  );
}
