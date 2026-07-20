import { Mail, Phone, Clock, MapPin, MessageSquare, FileText } from "lucide-react";

interface ContactProps {
  companyName: string;
  country: string;
  onChatClick: () => void;
  onRfqClick: () => void;
}

export default function CompanyContact({
  companyName,
  country,
  onChatClick,
  onRfqClick
}: ContactProps) {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <h3 className="text-lg font-extrabold text-navy">Direct Factory Contact & Inquiries</h3>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">🟢 Sales Desk Online</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Left: Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <Mail className="h-4 w-4 text-brand-sky flex-shrink-0" />
            <div>
              <span className="text-navy-muted block text-[10px] uppercase font-bold">Verified Sales Email</span>
              <span className="font-extrabold text-navy">export-sales@{companyName.toLowerCase().replace(/[^a-z]/g, "")}.eu</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <Phone className="h-4 w-4 text-brand-sky flex-shrink-0" />
            <div>
              <span className="text-navy-muted block text-[10px] uppercase font-bold">Direct Export Desk</span>
              <span className="font-extrabold text-navy">+351 22 981 0422 (Porto, Portugal)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <Clock className="h-4 w-4 text-brand-sky flex-shrink-0" />
            <div>
              <span className="text-navy-muted block text-[10px] uppercase font-bold">Factory Working Hours</span>
              <span className="font-extrabold text-navy">Mon - Fri: 08:00 - 18:00 WET (GMT+0)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <MapPin className="h-4 w-4 text-brand-sky flex-shrink-0" />
            <div>
              <span className="text-navy-muted block text-[10px] uppercase font-bold">Factory & Warehouse Address</span>
              <span className="font-extrabold text-navy">Rua da Industria 420, 4400 Porto, Portugal</span>
            </div>
          </div>
        </div>

        {/* Right: Quick Action Banner */}
        <div className="rounded-xl bg-navy text-white p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <h4 className="text-base font-extrabold">Start Business with {companyName}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with factory sales engineers for custom MOQ quotes, sample requests, or Incoterm shipping rates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button 
              onClick={onChatClick}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 py-3 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <MessageSquare className="h-4 w-4 text-brand-sky-accent" />
              <span>Chat Now</span>
            </button>
            <button 
              onClick={onRfqClick}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-sky py-3 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
            >
              <FileText className="h-4 w-4" />
              <span>Generate RFQ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
