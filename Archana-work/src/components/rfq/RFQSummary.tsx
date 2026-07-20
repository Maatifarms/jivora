"use client";

import { FileText, Save, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { UploadedFile } from "./DocumentUploader";

interface SummaryProps {
  productName: string;
  supplierName: string;
  quantity: string;
  unit: string;
  targetPrice: string;
  currency: string;
  deliveryCountry: string;
  deliveryAddress: string;
  incoterm: string;
  shippingMethod: string;
  attachments: UploadedFile[];
  isDraftSaved: boolean;
  onSaveDraft: () => void;
  onSubmitRfq: () => void;
}

export default function RFQSummary({
  productName,
  supplierName,
  quantity,
  unit,
  targetPrice,
  currency,
  deliveryCountry,
  deliveryAddress,
  incoterm,
  shippingMethod,
  attachments,
  isDraftSaved,
  onSaveDraft,
  onSubmitRfq
}: SummaryProps) {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Pre-Submission RFQ Summary</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Ready for Factory Review</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-3 rounded-xl bg-grey-light border border-grey-border/40 space-y-1">
          <span className="text-[10px] uppercase font-bold text-navy-muted">Product & Supplier</span>
          <div className="font-extrabold text-navy">{productName}</div>
          <div className="text-[11px] text-navy-muted">Factory: {supplierName}</div>
        </div>

        <div className="p-3 rounded-xl bg-grey-light border border-grey-border/40 space-y-1">
          <span className="text-[10px] uppercase font-bold text-navy-muted">Volume & Target Price</span>
          <div className="font-extrabold text-navy">{quantity} {unit}</div>
          <div className="text-[11px] text-brand-sky-dark font-bold">Target: {currency === "GBP" ? "£" : "€"}{targetPrice} / {unit}</div>
        </div>

        <div className="p-3 rounded-xl bg-grey-light border border-grey-border/40 space-y-1">
          <span className="text-[10px] uppercase font-bold text-navy-muted">Delivery Destination</span>
          <div className="font-extrabold text-navy">{deliveryCountry}</div>
          <div className="text-[11px] text-navy-muted truncate">{deliveryAddress || "Address Provided"}</div>
        </div>

        <div className="p-3 rounded-xl bg-grey-light border border-grey-border/40 space-y-1">
          <span className="text-[10px] uppercase font-bold text-navy-muted">Trade Terms & Freight</span>
          <div className="font-extrabold text-navy">Incoterms: {incoterm}</div>
          <div className="text-[11px] text-navy-muted">Mode: {shippingMethod}</div>
        </div>
      </div>

      {/* Attachments preview summary */}
      {attachments.length > 0 && (
        <div className="text-xs pt-1 border-t border-grey-border/40">
          <span className="font-bold text-navy-muted block mb-1">Attached Specification Files:</span>
          <div className="flex flex-wrap gap-2">
            {attachments.map((a) => (
              <span key={a.id} className="rounded bg-grey-medium px-2.5 py-1 font-bold text-navy text-[11px]">
                {a.name} ({a.size})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Draft Notification Toast */}
      {isDraftSaved && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 font-bold flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>RFQ Draft saved! You can close this page and continue later from your account.</span>
          </span>
        </div>
      )}

      {/* Action Buttons: Save Draft & Submit RFQ */}
      <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-grey-border/50">
        <button
          onClick={onSaveDraft}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-grey-border bg-white py-3.5 text-xs font-bold text-navy hover:bg-grey-medium transition-colors shadow-sm"
        >
          <Save className="h-4 w-4 text-navy-muted" />
          <span>Save Draft & Continue Later</span>
        </button>

        <button
          onClick={onSubmitRfq}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-navy py-3.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md hover:-translate-y-0.5"
        >
          <Send className="h-4 w-4" />
          <span>Submit Official RFQ to Factory</span>
        </button>
      </div>
    </div>
  );
}
