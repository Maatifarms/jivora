"use client";

import { Award, Download, FileCheck, ShieldCheck, FileText } from "lucide-react";

export default function Certifications() {
  const certs = [
    { name: "GOTS Organic", code: "GOTS-EU-2026", authority: "Global Organic Textile Standard" },
    { name: "OEKO-TEX 100", code: "SH015-182", authority: "Hohenstein Textile Testing" },
    { name: "CE Certified", code: "CE-9810-EU", authority: "European Conformity Assured" },
    { name: "ISO 9001", code: "ISO-Q-4819", authority: "TUV Rheinland Quality Management" },
  ];

  const handleDownload = (docName: string) => {
    alert(`Downloading ${docName} PDF...`);
  };

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Audited Certifications & Compliance Documents</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Verifiable Audit</span>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certs.map((c, idx) => (
          <div key={idx} className="rounded-xl border border-grey-border bg-grey-light p-4 space-y-2 hover:border-brand-sky transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-navy">{c.name}</span>
              <FileCheck className="h-4 w-4 text-emerald-600" />
            </div>
            <p className="text-[10px] text-navy-muted font-mono">{c.code}</p>
            <p className="text-[9px] text-navy-muted leading-tight">{c.authority}</p>
          </div>
        ))}
      </div>

      {/* Compliance & Trade Documents (Req 4) */}
      <div className="rounded-xl bg-brand-sky-light/20 p-4 border border-brand-sky-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-extrabold text-navy flex items-center gap-1.5 justify-center sm:justify-start">
            <ShieldCheck className="h-4 w-4 text-brand-sky" />
            <span>Official Export Compliance Package</span>
          </div>
          <p className="text-[11px] text-navy-muted">
            HS Code: <strong>5205.11</strong> • Country of Origin: <strong>Portugal (🇵🇹)</strong> • Active Export License
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <button 
            onClick={() => handleDownload("Product Datasheet")}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-lg border border-grey-border bg-white px-3 py-2 text-xs font-bold text-navy hover:bg-grey-medium transition-colors shadow-sm"
          >
            <Download className="h-3.5 w-3.5 text-brand-sky" />
            <span>Datasheet (PDF)</span>
          </button>
          <button 
            onClick={() => handleDownload("Safety Data Sheet (SDS)")}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-lg bg-navy px-3 py-2 text-xs font-bold text-white hover:bg-navy-light transition-colors shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Safety SDS</span>
          </button>
        </div>
      </div>

    </div>
  );
}
