"use client";

import { Building2, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

interface SupplierSelectionProps {
  supplierName: string;
  flag: string;
  country: string;
  trustScore: string;
  sendToMultiple: boolean;
  setSendToMultiple: (val: boolean) => void;
}

export default function SupplierSelection({
  supplierName,
  flag,
  country,
  trustScore,
  sendToMultiple,
  setSendToMultiple
}: SupplierSelectionProps) {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-5 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Target Factory & Dispatch Settings</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Step 4 of 4</span>
      </div>

      <div className="rounded-xl bg-grey-light p-4 border border-grey-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white text-lg font-extrabold">
            {supplierName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-extrabold text-navy">{supplierName}</h4>
              <span className="rounded bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 text-[10px]">
                Factory Vetted
              </span>
            </div>
            <p className="text-[11px] text-navy-muted">{flag} {country} • Trust Score: {trustScore}/10</p>
          </div>
        </div>
      </div>

      {/* Multi-Supplier Checkbox Option */}
      <div className="rounded-xl bg-brand-sky-light/20 p-4 border border-brand-sky-accent/20 space-y-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={sendToMultiple}
            onChange={(e) => setSendToMultiple(e.target.checked)}
            className="h-4 w-4 rounded border-grey-border text-brand-sky accent-navy mt-0.5"
          />
          <div className="text-xs space-y-0.5">
            <span className="font-extrabold text-navy block">
              Send RFQ to 3 Top-Rated Verified Factories simultaneously
            </span>
            <p className="text-[11px] text-navy-muted leading-relaxed">
              Dispatches your requirements to 2 additional pre-audited European textile factories to receive competitive price quotes and guarantee fast production slots.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
