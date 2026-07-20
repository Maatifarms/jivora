"use client";

import { Truck, Sparkles, Anchor, ShieldCheck } from "lucide-react";

interface ShippingProps {
  incoterm: string;
  setIncoterm: (val: string) => void;
  shippingMethod: string;
  setShippingMethod: (val: string) => void;
  destinationPort: string;
  setDestinationPort: (val: string) => void;
  paymentTerms: string;
  setPaymentTerms: (val: string) => void;
  insuranceRequired: boolean;
  setInsuranceRequired: (val: boolean) => void;
  quantity: string;
  deliveryCountry: string;
}

export default function ShippingTerms({
  incoterm,
  setIncoterm,
  shippingMethod,
  setShippingMethod,
  destinationPort,
  setDestinationPort,
  paymentTerms,
  setPaymentTerms,
  insuranceRequired,
  setInsuranceRequired,
  quantity,
  deliveryCountry
}: ShippingProps) {
  // Enhancement 2: AI Shipping Cost Calculator Mock
  const calculateFreight = () => {
    const qty = parseInt(quantity) || 1000;
    if (shippingMethod === "Air Cargo") {
      return { cost: "£3,200 – £3,800", transit: "4 – 6 Days", mode: "Air Freight" };
    } else if (shippingMethod === "Express Courier") {
      return { cost: "£4,500 – £5,200", transit: "2 – 3 Days", mode: "DHL / FedEx Express" };
    } else {
      return { cost: "£1,850 – £2,100", transit: "22 – 28 Days", mode: "Sea Freight" };
    }
  };

  const freight = calculateFreight();

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Truck className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Shipping & International Trade Terms</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Step 3 of 4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        {/* Incoterms Selector */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Preferred Incoterms</label>
          <select
            value={incoterm}
            onChange={(e) => setIncoterm(e.target.value)}
            className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy text-xs outline-none focus:border-brand-sky bg-white"
          >
            <option value="FOB">FOB - Free on Board (Port of Origin)</option>
            <option value="CIF">CIF - Cost, Insurance & Freight</option>
            <option value="DDP">DDP - Delivered Duty Paid (Door to Door)</option>
            <option value="EXW">EXW - Ex Works (Factory Floor)</option>
          </select>
        </div>

        {/* Shipping Method */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Shipping Method</label>
          <select
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
            className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy text-xs outline-none focus:border-brand-sky bg-white"
          >
            <option value="Sea Freight">🚢 Sea Cargo (Best for Bulk)</option>
            <option value="Air Cargo">✈️ Air Freight (Balanced Speed)</option>
            <option value="Express Courier">📦 Express Courier (Samples & Fast)</option>
          </select>
        </div>

        {/* Destination Port */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Destination Customs Port</label>
          <input
            type="text"
            value={destinationPort}
            onChange={(e) => setDestinationPort(e.target.value)}
            placeholder="e.g. Felixstowe / London Gateway / Hamburg"
            className="w-full rounded-xl border border-grey-border p-3 text-xs text-navy outline-none focus:border-brand-sky"
          />
        </div>

        {/* Payment Terms */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Preferred Payment Terms</label>
          <select
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
            className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy text-xs outline-none focus:border-brand-sky bg-white"
          >
            <option value="30/70">30% Deposit, 70% before Dispatch (T/T)</option>
            <option value="LC">Letter of Credit (L/C at Sight)</option>
            <option value="100-Escrow">100% Escrow Protection via Jivora Trade Guarantee</option>
          </select>
        </div>

        {/* Cargo Insurance Checkbox */}
        <div className="md:col-span-2 pt-1">
          <label className="flex items-center gap-2 cursor-pointer font-bold text-navy">
            <input
              type="checkbox"
              checked={insuranceRequired}
              onChange={(e) => setInsuranceRequired(e.target.checked)}
              className="h-4 w-4 rounded border-grey-border text-brand-sky accent-navy"
            />
            <span>Include Full Marine Cargo Insurance Policy</span>
          </label>
        </div>
      </div>

      {/* AI Estimated Shipping Cost Calculator Widget (Enhancement 2) */}
      <div className="rounded-xl bg-brand-sky-light/20 p-4 border border-brand-sky-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-sky text-white font-bold flex-shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="space-y-0.5">
            <div className="font-extrabold text-navy uppercase tracking-wider text-[10px]">Real-Time AI Shipping Estimate</div>
            <div className="text-navy-muted">
              Destination: <strong>{deliveryCountry}</strong> • Terms: <strong>{incoterm}</strong>
            </div>
          </div>
        </div>

        <div className="flex gap-4 bg-white px-4 py-2 rounded-xl border border-grey-border/50 text-right">
          <div>
            <span className="text-[10px] text-navy-muted block font-semibold">Estimated Freight</span>
            <span className="font-extrabold text-navy text-sm">{freight.cost}</span>
          </div>
          <div className="border-l border-grey-border/40 pl-4">
            <span className="text-[10px] text-navy-muted block font-semibold">Transit Time</span>
            <span className="font-extrabold text-emerald-700 text-sm">{freight.transit}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
