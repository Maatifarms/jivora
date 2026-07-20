import Link from "next/link";
import { ShieldCheck, Factory, Globe2, Clock, Award, MessageSquare, FileText, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface SupplierProps {
  supplierName: string;
  country: string;
  flag: string;
  trustScore: string;
  yearsInBusiness: number;
  responseRate: string;
  countriesExported: string;
  certifications: string[];
  sustainability: string;
  languages: string[];
  onChatClick: () => void;
  onRfqClick: () => void;
}

export default function SupplierOverview({
  supplierName,
  country,
  flag,
  trustScore,
  yearsInBusiness,
  responseRate,
  countriesExported,
  certifications,
  sustainability,
  languages,
  onChatClick,
  onRfqClick
}: SupplierProps) {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-grey-border/50 pb-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white text-xl font-extrabold shadow-md">
            {supplierName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Link href="/company/s1" className="text-xl font-extrabold text-navy hover:text-brand-sky transition-colors flex items-center gap-1.5 group">
                <span>{supplierName}</span>
                <ArrowUpRight className="h-4 w-4 text-brand-sky opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Factory Vetted</span>
              </span>
            </div>
            <p className="text-xs text-navy-muted mt-0.5">Primary Manufacturing Base: {flag} {country}</p>
          </div>
        </div>

        {/* Trust score badge */}
        <div className="rounded-xl bg-brand-sky-light/40 border border-brand-sky-accent/30 p-3 text-right self-start sm:self-auto">
          <div className="text-[10px] uppercase font-bold text-brand-sky-dark">Jivora Trust Score</div>
          <div className="text-2xl font-extrabold text-navy">{trustScore} <span className="text-xs font-semibold text-navy-muted">/ 10</span></div>
        </div>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 bg-grey-light rounded-2xl p-4 border border-grey-border/40 text-xs">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-brand-sky" />
            <span>Response Speed</span>
          </span>
          <span className="font-extrabold text-navy block">{responseRate}</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
            <Award className="h-3.5 w-3.5 text-emerald-600" />
            <span>Years Active</span>
          </span>
          <span className="font-extrabold text-navy block">{yearsInBusiness} Years Exporting</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
            <Globe2 className="h-3.5 w-3.5 text-purple-600" />
            <span>Major Export Hubs</span>
          </span>
          <span className="font-extrabold text-navy block">{countriesExported}</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            <span>ESG Sustainability</span>
          </span>
          <span className="font-extrabold text-emerald-700 block">{sustainability}</span>
        </div>
      </div>

      {/* Languages & Certifications strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs border-t border-grey-border/40 pt-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-navy-muted">Languages Spoken:</span>
          <div className="flex flex-wrap gap-1.5">
            {languages.map((lang, idx) => (
              <span key={idx} className="rounded bg-grey-medium px-2 py-0.5 font-bold text-navy">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={onChatClick}
            className="flex items-center gap-1.5 rounded-xl border border-grey-border px-4 py-2 text-xs font-bold text-navy hover:bg-grey-medium transition-colors"
          >
            <MessageSquare className="h-3.5 w-3.5 text-brand-sky" />
            <span>Chat Now</span>
          </button>
          <button 
            onClick={onRfqClick}
            className="flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Send RFQ</span>
          </button>
        </div>
      </div>
    </div>
  );
}
