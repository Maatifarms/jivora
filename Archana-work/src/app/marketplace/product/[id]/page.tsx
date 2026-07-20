"use client";

import { useState, use } from "react";
import ProductGallery from "@/components/product/ProductGallery";
import SupplierOverview from "@/components/product/SupplierOverview";
import AISummary from "@/components/product/AISummary";
import Specifications from "@/components/product/Specifications";
import MoqPricingTable from "@/components/product/MoqPricingTable";
import Certifications from "@/components/product/Certifications";
import FactoryGallery from "@/components/product/FactoryGallery";
import MarketInsights from "@/components/product/MarketInsights";
import RelatedProducts from "@/components/product/RelatedProducts";
import Reviews from "@/components/product/Reviews";
import CTASection from "@/components/product/CTASection";
import FloatingAIAssistant from "@/components/product/FloatingAIAssistant";
import { X, Send, Sparkles } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id || "p1";

  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [rfqQty, setRfqQty] = useState("500");
  const [incoterm, setIncoterm] = useState("FOB");

  // Mock product mapping
  const productData = {
    id: productId,
    name: productId === "p2" 
      ? "Grid-Tied Solar Microinverter (1200W)" 
      : productId === "p3" 
      ? "Food-Grade Recycled PET Pellets (rPET)"
      : productId === "p4"
      ? "Bio-degradable PLA Cold Cups"
      : "Premium Organic Linen Fabric",
    category: productId === "p2" ? "Renewable Energy" : productId === "p3" ? "Circular Plastics" : productId === "p4" ? "Biodegradable Packaging" : "Sustainable Textiles",
    originCountry: productId === "p2" ? "Germany" : productId === "p3" ? "Denmark" : "Portugal",
    flag: productId === "p2" ? "🇩🇪" : productId === "p3" ? "🇩🇰" : "🇵🇹",
    supplierName: productId === "p2" ? "SolarGrid Technology GmbH" : productId === "p3" ? "Nordic Bio-Pack ApS" : "LoomCraft Textiles Lda",
    trustScore: "9.9",
    yearsInBusiness: 12,
    responseRate: "< 1 hour",
    countriesExported: "UK, Germany, France, Nordics",
    certifications: ["GOTS Organic", "OEKO-TEX 100", "ISO 9001"],
    sustainability: "Carbon Neutral Production",
    languages: ["English", "Portuguese", "Spanish"]
  };

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`RFQ successfully generated for ${rfqQty} units under ${incoterm} terms! Direct factory quote sent to your email.`);
    setRfqModalOpen(false);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* 1. Product Hero Gallery & Sticky Action Panel */}
        <ProductGallery
          productName={productData.name}
          category={productData.category}
          originCountry={productData.originCountry}
          flag={productData.flag}
          supplierName={productData.supplierName}
          trustScore={productData.trustScore}
          onRfqClick={() => window.location.href = `/rfq?productId=${productId}`}
          onChatClick={() => setChatModalOpen(true)}
        />

        {/* 2. Supplier Credibility Overview */}
        <SupplierOverview
          supplierName={productData.supplierName}
          country={productData.originCountry}
          flag={productData.flag}
          trustScore={productData.trustScore}
          yearsInBusiness={productData.yearsInBusiness}
          responseRate={productData.responseRate}
          countriesExported={productData.countriesExported}
          certifications={productData.certifications}
          sustainability={productData.sustainability}
          languages={productData.languages}
          onChatClick={() => setChatModalOpen(true)}
          onRfqClick={() => setRfqModalOpen(true)}
        />

        {/* 3. AI Product Summary & Rationale */}
        <AISummary productName={productData.name} />

        {/* 4. Technical Product Specifications */}
        <Specifications />

        {/* 5. Tiered MOQ Pricing & Logistics Details */}
        <MoqPricingTable />

        {/* 6. Certifications & Trade Compliance Documents */}
        <Certifications />

        {/* 7. Audited Factory Gallery */}
        <FactoryGallery />

        {/* 8. Market Intelligence & Trade Trends */}
        <MarketInsights />

        {/* 9 & 10. Similar Products & Alternative Verified Suppliers */}
        <RelatedProducts />

        {/* 11. Verified Buyer Reviews & Testimonials */}
        <Reviews />

        {/* 12. Conversion CTA Banner */}
        <CTASection
          onRfqClick={() => setRfqModalOpen(true)}
          onChatClick={() => setChatModalOpen(true)}
        />

      </div>

      {/* Floating AI Product Copilot */}
      <FloatingAIAssistant productName={productData.name} />

      {/* RFQ Modal Draft Builder */}
      {rfqModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl border border-grey-border bg-white p-6 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-sky" />
                <h3 className="text-lg font-extrabold text-navy">Generate Official RFQ</h3>
              </div>
              <button onClick={() => setRfqModalOpen(false)} className="p-1 rounded-full hover:bg-grey-medium">
                <X className="h-5 w-5 text-navy-muted" />
              </button>
            </div>

            <form onSubmit={handleRfqSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-extrabold text-navy">Target Product</label>
                <input type="text" readOnly value={productData.name} className="w-full rounded-xl bg-grey-light p-3 font-semibold text-navy outline-none border border-grey-border/60" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-navy">Target Quantity (Units)</label>
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
                <label className="font-extrabold text-navy">Custom Notes / Specs</label>
                <textarea rows={3} placeholder="Add custom logo printing, packaging requirements or destination port..." className="w-full rounded-xl border border-grey-border p-3 text-navy outline-none focus:border-brand-sky"></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy py-3.5 font-bold text-white hover:bg-navy-light transition-all shadow-md">
                <Send className="h-4 w-4" />
                <span>Submit RFQ to Factory</span>
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
              <h3 className="text-base font-extrabold text-navy">Chat with {productData.supplierName}</h3>
              <button onClick={() => setChatModalOpen(false)} className="p-1 rounded-full hover:bg-grey-medium">
                <X className="h-5 w-5 text-navy-muted" />
              </button>
            </div>
            <div className="rounded-xl bg-grey-light p-4 text-xs text-navy space-y-2">
              <p className="font-semibold text-emerald-700">🟢 Factory Sales Engineer Online</p>
              <p className="text-navy-muted">Encrypted direct line to factory in Portugal. Typical response time is under 1 hour.</p>
            </div>
            <textarea rows={3} placeholder="Type your message or inquiry..." className="w-full rounded-xl border border-grey-border p-3 text-xs text-navy outline-none focus:border-brand-sky"></textarea>
            <button onClick={() => { alert("Message sent to factory!"); setChatModalOpen(false); }} className="w-full rounded-xl bg-navy py-3 text-xs font-bold text-white hover:bg-navy-light">
              Send Message
            </button>
          </div>
        </div>
      )}
    </>
  );
}
