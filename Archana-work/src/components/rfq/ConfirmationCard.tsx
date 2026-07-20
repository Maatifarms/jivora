"use client";

import { CheckCircle2, Clock, FileText, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface ConfirmationProps {
  referenceNumber: string;
  supplierName: string;
  quantity: string;
  unit: string;
  deliveryCountry: string;
  onReset: () => void;
}

export default function ConfirmationCard({
  referenceNumber,
  supplierName,
  quantity,
  unit,
  deliveryCountry,
  onReset
}: ConfirmationProps) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 text-center space-y-6 card-shadow-premium max-w-3xl mx-auto my-6 animate-in fade-in zoom-in-95 duration-300">
      
      {/* Success Icon Badge */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
        <CheckCircle2 className="h-10 w-10" />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Jivora Trade Guarantee Protected</span>
        </div>
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl tracking-tight">
          Your RFQ Has Been Successfully Sent!
        </h2>
        <p className="text-xs text-navy-muted max-w-md mx-auto leading-relaxed">
          Your quotation request has been pre-cleared by Jivora AI and dispatched directly to the factory sales engineers at <strong>{supplierName}</strong>.
        </p>
      </div>

      {/* Confirmation Metrics Box */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-grey-light rounded-2xl p-4 border border-grey-border/50 text-xs text-left max-w-xl mx-auto">
        <div>
          <span className="text-[10px] uppercase font-bold text-navy-muted block">RFQ Reference</span>
          <span className="font-extrabold text-navy font-mono text-sm">{referenceNumber}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-navy-muted block">Estimated Response</span>
          <span className="font-extrabold text-emerald-700 font-mono text-sm">&lt; 1 Hour</span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-navy-muted block">Order Volume</span>
          <span className="font-extrabold text-navy text-sm">{quantity} {unit}</span>
        </div>
      </div>

      {/* Action Buttons: View My RFQs & Track RFQ */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-grey-border/50 max-w-md mx-auto">
        <Link
          href="/marketplace"
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-xl border border-grey-border bg-white py-3 px-5 text-xs font-bold text-navy hover:bg-grey-medium transition-colors"
        >
          <FileText className="h-4 w-4 text-brand-sky" />
          <span>View My RFQs</span>
        </Link>

        <button
          onClick={onReset}
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-xl bg-navy py-3 px-6 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md"
        >
          <span>Track RFQ Status</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
}
