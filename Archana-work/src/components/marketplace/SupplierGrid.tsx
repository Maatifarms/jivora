"use client";

import Link from "next/link";
import { ShieldCheck, MessageSquare, FileText, Globe2, Clock, Check, Heart, Award, ArrowUpRight } from "lucide-react";

export interface SupplierItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  trustScore: string;
  factoryVerified: boolean;
  yearsInBusiness: number;
  responseRate: string;
  countriesExported: string;
  certifications: string[];
  sustainability: string;
  languages: string[];
  isSme?: boolean;
}

interface GridProps {
  suppliers: SupplierItem[];
  onRfqClick: (supplier: SupplierItem) => void;
}

export default function SupplierGrid({ suppliers, onRfqClick }: GridProps) {
  
  // Separate SMEs for the dedicated small business discovery widget
  const normalSuppliers = suppliers.filter(s => !s.isSme);
  const smeSuppliers = suppliers.filter(s => s.isSme);

  const renderCard = (s: SupplierItem) => (
    <div 
      key={s.id}
      className="group rounded-2xl border border-grey-border bg-white p-6 space-y-6 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1.5 flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* Card Header: Logo, Name, Flag, Trust Score */}
        <div className="flex items-start justify-between">
          <div className="space-y-1.5">
            <span className="flex items-center gap-1 text-[11px] font-bold text-navy-muted">
              <span>{s.flag}</span>
              <span>{s.country}</span>
            </span>
            <h3 className="text-base font-bold text-navy group-hover:text-brand-sky transition-colors">{s.name}</h3>
            {s.isSme && (
              <span className="inline-block rounded bg-brand-sky-light/80 border border-brand-sky-accent/20 px-1.5 py-0.25 text-[9px] font-bold text-brand-sky-dark">
                Verified SME
              </span>
            )}
          </div>
          
          <div className="flex flex-col items-end gap-1.5">
            {s.factoryVerified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 border border-emerald-200">
                <ShieldCheck className="h-3 w-3" />
                <span>Factory Vetted</span>
              </span>
            )}
            <span className="rounded bg-brand-sky-light/50 px-2 py-0.5 text-xs font-extrabold text-brand-sky-dark">
              Score: {s.trustScore}/10
            </span>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-2 gap-2 text-[10px] bg-grey-light rounded-xl p-3 border border-grey-border/40 text-navy">
          <div className="space-y-0.5">
            <span className="text-navy-muted font-bold flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Response</span>
            </span>
            <span className="font-bold">{s.responseRate}</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-navy-muted font-bold flex items-center gap-1">
              <Globe2 className="h-3 w-3" />
              <span>Export Hubs</span>
            </span>
            <span className="font-bold truncate block">{s.countriesExported}</span>
          </div>
          <div className="space-y-0.5 pt-1.5 border-t border-grey-border/40">
            <span className="text-navy-muted font-bold">Experience</span>
            <span className="font-bold block">{s.yearsInBusiness} Years Exporting</span>
          </div>
          <div className="space-y-0.5 pt-1.5 border-t border-grey-border/40">
            <span className="text-navy-muted font-bold">Languages</span>
            <span className="font-bold truncate block">{s.languages.join(", ")}</span>
          </div>
        </div>

        {/* Certifications list */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-1.5 text-[11px] text-navy-muted">
            <Award className="h-4 w-4 text-brand-sky" />
            <span className="font-semibold text-navy">Certificates:</span>
            <div className="flex flex-wrap gap-1">
              {s.certifications.map((cert, index) => (
                <span key={index} className="rounded bg-grey-medium px-2 py-0.5 text-[9px] font-bold text-navy border border-grey-border/50">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          
          {/* Sustainability Index */}
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="text-emerald-600 font-bold">🌿 Sustainability:</span>
            <span className="rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 border border-emerald-100">
              {s.sustainability}
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="border-t border-grey-border/50 pt-4 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button 
            title="Save Supplier"
            className="p-2 text-navy-muted hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button 
            title="Message Chat"
            className="p-2 text-navy-muted hover:text-brand-sky hover:bg-brand-sky-light/30 rounded-lg transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={() => onRfqClick(s)}
            className="flex items-center gap-1 rounded-lg border border-grey-border px-3 py-1.5 text-[11px] font-bold text-navy hover:bg-grey-medium transition-colors"
          >
            <FileText className="h-3 w-3 text-navy-muted" />
            <span>RFQ</span>
          </button>
          <Link 
            href={`/company/${s.id}`}
            className="flex items-center gap-1 rounded-lg bg-navy px-3.5 py-1.5 text-[11px] font-bold text-white hover:bg-navy-light transition-all"
          >
            <span>Profile</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      
      {/* 1. Verified Exporters list */}
      <div className="space-y-6">
        <h3 className="text-lg font-extrabold text-navy border-b border-grey-border/40 pb-3">Verified Supplier Profiles</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {normalSuppliers.map(renderCard)}
        </div>
      </div>

      {/* 2. Newly Verified SMEs (Support Small Businesses Discovery Widget - Req 11) */}
      {smeSuppliers.length > 0 && (
        <div className="rounded-2xl border-2 border-brand-sky-accent/20 bg-brand-sky-light/10 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-brand-sky-accent/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌟</span>
              <div>
                <h3 className="text-base font-extrabold text-brand-sky-dark">Newly Verified SMEs</h3>
                <p className="text-[11px] text-navy-muted">Support small and local businesses with certified supply chains exporting from Portugal & Europe.</p>
              </div>
            </div>
            <span className="rounded bg-brand-sky/20 px-2 py-0.5 text-[10px] font-bold text-brand-sky-dark">Support Local</span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {smeSuppliers.map(renderCard)}
          </div>
        </div>
      )}

    </div>
  );
}
