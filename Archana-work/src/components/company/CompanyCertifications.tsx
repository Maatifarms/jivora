"use client";

import { Award, Download, FileCheck, ShieldCheck } from "lucide-react";

export default function CompanyCertifications() {
  const certs = [
    { name: "GOTS Organic", code: "GOTS-EU-2026", authority: "Global Organic Textile Standard", pdf: "GOTS_Audit_2026.pdf" },
    { name: "OEKO-TEX 100", code: "SH015-182", authority: "Hohenstein Textile Testing", pdf: "OekoTex_100_Cert.pdf" },
    { name: "CE Certified", code: "CE-9810-EU", authority: "European Conformity Assured", pdf: "CE_Conformity_Doc.pdf" },
    { name: "ISO 9001", code: "ISO-Q-4819", authority: "TUV Rheinland Quality Management", pdf: "ISO_9001_TUV.pdf" },
    { name: "FSC Certified", code: "FSC-C10928", authority: "Forest Stewardship Council", pdf: "FSC_Chain_Custody.pdf" },
    { name: "RoHS Compliant", code: "RoHS-2026-EU", authority: "EU Eco-Directive", pdf: "RoHS_Compliance.pdf" },
  ];

  const handleDownload = (pdf: string) => {
    alert(`Downloading ${pdf}...`);
  };

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Audited Industrial Certifications</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">100% Verifiable</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, idx) => (
          <div key={idx} className="rounded-xl border border-grey-border bg-grey-light p-4 space-y-3 hover:border-brand-sky transition-colors flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-navy">{c.name}</span>
                <FileCheck className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-[11px] text-navy-muted font-mono">{c.code}</p>
              <p className="text-[10px] text-navy-muted leading-tight">{c.authority}</p>
            </div>

            <button 
              onClick={() => handleDownload(c.pdf)}
              className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-grey-border bg-white py-2 text-xs font-bold text-navy hover:bg-grey-medium transition-colors shadow-sm mt-2"
            >
              <Download className="h-3.5 w-3.5 text-brand-sky" />
              <span>Download PDF Certificate</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
