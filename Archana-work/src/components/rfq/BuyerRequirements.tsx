"use client";

import { ShoppingBag, MapPin, Calendar, DollarSign } from "lucide-react";

interface RequirementsProps {
  quantity: string;
  setQuantity: (val: string) => void;
  unit: string;
  setUnit: (val: string) => void;
  targetPrice: string;
  setTargetPrice: (val: string) => void;
  currency: string;
  setCurrency: (val: string) => void;
  deliveryCountry: string;
  setDeliveryCountry: (val: string) => void;
  deliveryAddress: string;
  setDeliveryAddress: (val: string) => void;
  deliveryDate: string;
  setDeliveryDate: (val: string) => void;
}

export default function BuyerRequirements({
  quantity,
  setQuantity,
  unit,
  setUnit,
  targetPrice,
  setTargetPrice,
  currency,
  setCurrency,
  deliveryCountry,
  setDeliveryCountry,
  deliveryAddress,
  setDeliveryAddress,
  deliveryDate,
  setDeliveryDate
}: RequirementsProps) {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Order Quantity & Target Destination</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Step 1 of 4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        {/* Quantity & Unit */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Order Volume Quantity</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 1000"
              className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy text-sm outline-none focus:border-brand-sky"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="rounded-xl border border-grey-border p-3 font-bold text-navy outline-none focus:border-brand-sky bg-grey-light"
            >
              <option value="pcs">pcs</option>
              <option value="meters">meters</option>
              <option value="tons">tons</option>
              <option value="pallets">pallets</option>
            </select>
          </div>
        </div>

        {/* Target Price & Currency */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Target Price Per Unit</label>
          <div className="flex gap-2">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="rounded-xl border border-grey-border p-3 font-bold text-navy outline-none focus:border-brand-sky bg-grey-light"
            >
              <option value="GBP">GBP (£)</option>
              <option value="EUR">EUR (€)</option>
              <option value="USD">USD ($)</option>
            </select>
            <input
              type="text"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
              placeholder="e.g. 7.80"
              className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy text-sm outline-none focus:border-brand-sky"
            />
          </div>
        </div>

        {/* Delivery Country */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Delivery Destination Country</label>
          <select
            value={deliveryCountry}
            onChange={(e) => setDeliveryCountry(e.target.value)}
            className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy text-xs outline-none focus:border-brand-sky bg-white"
          >
            <option value="United Kingdom">🇬🇧 United Kingdom</option>
            <option value="Germany">🇩🇪 Germany</option>
            <option value="France">🇫🇷 France</option>
            <option value="Netherlands">🇳🇱 Netherlands</option>
            <option value="Spain">🇪🇸 Spain</option>
            <option value="Italy">🇮🇹 Italy</option>
          </select>
        </div>

        {/* Preferred Delivery Date */}
        <div className="space-y-1.5">
          <label className="font-extrabold text-navy">Preferred Delivery Date</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="w-full rounded-xl border border-grey-border p-3 font-bold text-navy text-xs outline-none focus:border-brand-sky"
          />
        </div>

        {/* Delivery Address */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="font-extrabold text-navy">Full Delivery Address & Postal Code</label>
          <input
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="e.g. 142 Commercial Road, London E1 6BF, United Kingdom"
            className="w-full rounded-xl border border-grey-border p-3 text-xs text-navy outline-none focus:border-brand-sky"
          />
        </div>
      </div>
    </div>
  );
}
