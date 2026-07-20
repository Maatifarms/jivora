import { Globe2, ArrowUpRight } from "lucide-react";

export default function ExportMarkets() {
  const markets = [
    { flag: "🇬🇧", name: "United Kingdom", share: "42% Volume", note: "Primary retail distribution to London & Manchester" },
    { flag: "🇩🇪", name: "Germany", share: "28% Volume", note: "Direct supply to Berlin eco-retail networks" },
    { flag: "🇫🇷", name: "France", share: "18% Volume", note: "Organic textile imports for Paris fashion brands" },
    { flag: "🇳🇱", name: "Netherlands", share: "12% Volume", note: "Rotterdam packaging distribution hub" },
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Globe2 className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Global Export Markets & Distribution Hubs</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">UK-EU Accord Approved</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {markets.map((m, idx) => (
          <div key={idx} className="rounded-xl border border-grey-border bg-grey-light p-4 space-y-2 hover:border-brand-sky transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-2xl">{m.flag}</span>
              <span className="rounded bg-brand-sky-light/60 px-2 py-0.5 text-[10px] font-bold text-brand-sky-dark">{m.share}</span>
            </div>
            <h4 className="text-sm font-bold text-navy">{m.name}</h4>
            <p className="text-[10px] text-navy-muted leading-tight">{m.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
