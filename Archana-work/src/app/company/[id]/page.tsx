"use client";

import { useState, use } from "react";
import CompanyHero from "@/components/company/CompanyHero";
import AboutCompany from "@/components/company/AboutCompany";
import CompanyStats from "@/components/company/CompanyStats";
import CompanyCertifications from "@/components/company/CompanyCertifications";
import FactoryGallery from "@/components/company/FactoryGallery";
import CompanyProducts from "@/components/company/CompanyProducts";
import ExportMarkets from "@/components/company/ExportMarkets";
import AICompanyInsights from "@/components/company/AICompanyInsights";
import Sustainability from "@/components/company/Sustainability";
import CompanyContact from "@/components/company/CompanyContact";
import RelatedSuppliers from "@/components/company/RelatedSuppliers";
import { X, Send, Sparkles } from "lucide-react";

interface CompanyPageProps {
  params: Promise<{ id: string }>;
}

export default function CompanyProfilePage({ params }: CompanyPageProps) {
  const resolvedParams = use(params);
  const supplierId = resolvedParams.id || "s1";

  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [rfqQty, setRfqQty] = useState("1000");
  const [incoterm, setIncoterm] = useState("FOB");

  // Mock supplier data mapping
  const supplierData = {
    id: supplierId,
    name: supplierId === "s2" 
      ? "SolarGrid Technology GmbH" 
      : supplierId === "s3" 
      ? "Nordic Bio-Pack ApS"
      : supplierId === "s4"
      ? "Vilar Tex Factory"
      : supplierId === "s5"
      ? "Eco-Toy Crafts S.r.l."
      : supplierId === "s6"
      ? "GreenPack Spain Lda"
      : "LoomCraft Textiles Lda",
    country: supplierId === "s2" ? "Germany" : supplierId === "s3" ? "Denmark" : supplierId === "s5" ? "Italy" : supplierId === "s6" ? "Spain" : "Portugal",
    flag: supplierId === "s2" ? "🇩🇪" : supplierId === "s3" ? "🇩🇰" : supplierId === "s5" ? "🇮🇹" : supplierId === "s6" ? "🇪🇸" : "🇵🇹",
    trustScore: supplierId === "s2" ? "9.8" : supplierId === "s3" ? "9.7" : "9.9",
    yearsInBusiness: supplierId === "s2" ? 10 : supplierId === "s3" ? 5 : 12,
    responseRate: supplierId === "s3" ? "< 30 mins" : "< 1 hour",
    industry: supplierId === "s2" ? "Renewable Energy & Hardware" : supplierId === "s3" ? "Circular Bio-Packaging" : "Sustainable Textiles & Fibers"
  };

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`RFQ successfully sent to ${supplierData.name} for ${rfqQty} units under ${incoterm} terms! Direct factory quote sent to your email.`);
    setRfqModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* 1. Hero Header & Quick Actions */}
      <CompanyHero
        companyName={supplierData.name}
        country={supplierData.country}
        flag={supplierData.flag}
        trustScore={supplierData.trustScore}
        yearsInBusiness={supplierData.yearsInBusiness}
        responseRate={supplierData.responseRate}
        industry={supplierData.industry}
        onChatClick={() => setChatModalOpen(true)}
        onRfqClick={() => window.location.href = `/rfq?supplierId=${supplierData.id}`}
      />

      {/* 2. Company Statistics Counter Bar */}
      <CompanyStats />

      {/* 3. About Company Overview */}
      <AboutCompany companyName={supplierData.name} />

      {/* 4. Audited Certifications */}
      <CompanyCertifications />

      {/* 5. Factory Floor & Production Gallery */}
      <FactoryGallery />

      {/* 6. Factory Product Catalog */}
      <CompanyProducts />

      {/* 7. Export Markets & Logistics */}
      <ExportMarkets />

      {/* 8. Explainable AI Insights */}
      <AICompanyInsights companyName={supplierData.name} />

      {/* 9. Sustainability & ESG Credentials */}
      <Sustainability />

      {/* 10. Direct Contact & Inquiries */}
      <CompanyContact
        companyName={supplierData.name}
        country={supplierData.country}
        onChatClick={() => setChatModalOpen(true)}
        onRfqClick={() => setRfqModalOpen(true)}
      />

      {/* 11. Related Verified Suppliers */}
      <RelatedSuppliers />

      {/* RFQ Modal Draft Builder */}
      {rfqModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl border border-grey-border bg-white p-6 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-sky" />
                <h3 className="text-lg font-extrabold text-navy">Generate Factory RFQ</h3>
              </div>
              <button onClick={() => setRfqModalOpen(false)} className="p-1 rounded-full hover:bg-grey-medium">
                <X className="h-5 w-5 text-navy-muted" />
              </button>
            </div>

            <form onSubmit={handleRfqSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-extrabold text-navy">Target Factory</label>
                <input type="text" readOnly value={supplierData.name} className="w-full rounded-xl bg-grey-light p-3 font-semibold text-navy outline-none border border-grey-border/60" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-navy">Target Order Volume</label>
                  <input type="number" value={rfqQty} onChange={(e) => setRfqQty(e.target.value)} className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy outline-none focus:border-brand-sky" />
                </div>
                <div className="space-y-1">
                  <label className="font-extrabold text-navy">Incoterms</label>
                  <select value={incoterm} onChange={(e) => setIncoterm(e.target.value)} className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy outline-none focus:border-brand-sky">
                    <option value="FOB">FOB (Free on Board)</option>
                    <option value="CIF">CIF (Cost, Insurance, Freight)</option>
                    <option value="EXW">EXW (Ex Works)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-navy">Custom Notes / Material Specs</label>
                <textarea rows={3} placeholder="Add custom logo printing, packaging requirements or destination port..." className="w-full rounded-xl border border-grey-border p-3 text-navy outline-none focus:border-brand-sky"></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy py-3.5 font-bold text-white hover:bg-navy-light transition-all shadow-md">
                <Send className="h-4 w-4" />
                <span>Submit Direct Factory RFQ</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Direct Chat Dialog Modal */}
      {chatModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl border border-grey-border bg-white p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
              <h3 className="text-base font-extrabold text-navy">Chat with {supplierData.name}</h3>
              <button onClick={() => setChatModalOpen(false)} className="p-1 rounded-full hover:bg-grey-medium">
                <X className="h-5 w-5 text-navy-muted" />
              </button>
            </div>
            <div className="rounded-xl bg-grey-light p-4 text-xs text-navy space-y-2">
              <p className="font-semibold text-emerald-700">🟢 Direct Factory Sales Engineer Online</p>
              <p className="text-navy-muted">Encrypted direct line to factory in {supplierData.country}. Guaranteed response under 1 hour.</p>
            </div>
            <textarea rows={3} placeholder="Type your message or inquiry..." className="w-full rounded-xl border border-grey-border p-3 text-xs text-navy outline-none focus:border-brand-sky"></textarea>
            <button onClick={() => { alert("Message sent to factory!"); setChatModalOpen(false); }} className="w-full rounded-xl bg-navy py-3 text-xs font-bold text-white hover:bg-navy-light">
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
