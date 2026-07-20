"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I submit an RFQ (Request for Quotation)?",
      a: "Navigate to any Product Details page, Supplier Profile, or click 'RFQ' in the top Navbar. Fill in your required order volume, target price, delivery address, material specs, and Incoterms (FOB/CIF/DDP), then click 'Submit Official RFQ'."
    },
    {
      q: "How does Jivora verify suppliers and factories?",
      a: "Every factory on Jivora undergoes on-site audits for GOTS organic certifications, ISO 9001 quality management, HMRC UK customs registration, zero-carbon power compliance, and verified past export shipment logs into Northern Europe."
    },
    {
      q: "How does Jivora AI Sourcing & Matching work?",
      a: "Jivora AI analyzes your technical requirements (GSM density, color dyeing, Incoterms, destination port) against 1,200+ audited European manufacturers to calculate a 0-100% Trust & Compatibility Score."
    },
    {
      q: "Which payment methods and trade protection options are supported?",
      a: "We support T/T bank transfers (30% deposit, 70% before dispatch), Letter of Credit (L/C at sight), and 100% Escrow Protection via Jivora Trade Guarantee, keeping funds safe until goods clear destination customs."
    },
    {
      q: "How can my manufacturing company become a Verified Exporter?",
      a: "Click 'Start Selling' in the Navbar to register your factory. Submit your ISO/GOTS audit certificates, business license, and HMRC export registration. Our verification team conducts an audit within 48 business hours."
    },
    {
      q: "What certifications are required for exporting into the UK and EU?",
      a: "Common requirements include GOTS (Global Organic Textile Standard) for fabrics, CE Marking for electronics & toys, FSC for paper & wood, and EU PPWR plastic-free compliance for retail packaging."
    },
    {
      q: "How do I contact a supplier directly?",
      a: "Click 'Chat Now' or 'Contact Supplier' on any product page or supplier profile to initiate a direct, encrypted chat line with factory sales engineers in Porto, Lisbon, Berlin, or Copenhagen."
    },
    {
      q: "What are typical shipping lead times for UK-EU B2B trade?",
      a: "Sample dispatch takes 1-3 business days. Sea freight from Portugal/Spain to UK ports (Felixstowe/London) takes 5-7 days. Air cargo takes 24-48 hours with pre-cleared HMRC customs."
    }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Popular Frequently Asked Questions</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Verified Answers</span>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-grey-border/60 bg-grey-light/50 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-navy text-xs sm:text-sm hover:bg-grey-medium/60 transition-colors gap-4"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown className={`h-4 w-4 text-navy-muted flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-sky" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs text-navy-muted leading-relaxed border-t border-grey-border/40 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
