"use client";

import { useState, use } from "react";
import RFQHero from "@/components/rfq/RFQHero";
import ProductInformation from "@/components/rfq/ProductInformation";
import BuyerRequirements from "@/components/rfq/BuyerRequirements";
import ProductSpecifications from "@/components/rfq/ProductSpecifications";
import ShippingTerms from "@/components/rfq/ShippingTerms";
import DocumentUploader, { UploadedFile } from "@/components/rfq/DocumentUploader";
import AIRFQAssistant from "@/components/rfq/AIRFQAssistant";
import SupplierSelection from "@/components/rfq/SupplierSelection";
import RFQSummary from "@/components/rfq/RFQSummary";
import ConfirmationCard from "@/components/rfq/ConfirmationCard";

interface RFQPageProps {
  searchParams?: Promise<{ productId?: string; supplierId?: string }>;
}

export default function RFQPage({ searchParams }: RFQPageProps) {
  const resolvedSearchParams = searchParams ? use(searchParams) : {};
  const productId = resolvedSearchParams?.productId || "p1";
  const supplierId = resolvedSearchParams?.supplierId || "s1";

  // Mock product catalog lookup
  const productData = productId === "p2"
    ? { name: "High-Efficiency Solar Modules 450W", category: "Solar Energy & Clean Tech", supplier: "SolarGrid Technology GmbH", country: "Germany", flag: "🇩🇪", trust: "9.8" }
    : productId === "p3"
    ? { name: "Bio-degradable Food Packaging Trays", category: "Biodegradable Packaging", supplier: "Nordic Bio-Pack ApS", country: "Denmark", flag: "🇩🇰", trust: "9.7" }
    : { name: "Premium Organic Linen Fabric", category: "Sustainable Textiles", supplier: "LoomCraft Textiles Lda", country: "Portugal", flag: "🇵🇹", trust: "9.9" };

  // Wizard Step & Status
  const [currentStep, setCurrentStep] = useState(1);
  const [rfqStatus, setRfqStatus] = useState<"editing" | "submitted">("editing");
  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("RFQ-2026-8910");

  // Form State
  const [quantity, setQuantity] = useState("1000");
  const [unit, setUnit] = useState("meters");
  const [targetPrice, setTargetPrice] = useState("7.80");
  const [currency, setCurrency] = useState("GBP");
  const [deliveryCountry, setDeliveryCountry] = useState("United Kingdom");
  const [deliveryAddress, setDeliveryAddress] = useState("142 Commercial Road, London E1 6BF, United Kingdom");
  const [deliveryDate, setDeliveryDate] = useState("2026-08-15");

  // Specifications State
  const [material, setMaterial] = useState("100% GOTS Organic Cotton");
  const [size, setSize] = useState("150cm width rolls");
  const [color, setColor] = useState("Natural Off-White / Pantone 19-4052");
  const [packaging, setPackaging] = useState("Individual FSC polybags in Master Euro-Pallets");
  const [isPrivateLabel, setIsPrivateLabel] = useState(true);
  const [isOem, setIsOem] = useState(false);
  const [certifications, setCertifications] = useState<string[]>(["GOTS Organic", "ISO 9001", "CE Certified"]);

  // Shipping & Trade Terms State
  const [incoterm, setIncoterm] = useState("FOB");
  const [shippingMethod, setShippingMethod] = useState("Sea Freight");
  const [destinationPort, setDestinationPort] = useState("Felixstowe Port, UK");
  const [paymentTerms, setPaymentTerms] = useState("30/70");
  const [insuranceRequired, setInsuranceRequired] = useState(true);
  const [sendToMultiple, setSendToMultiple] = useState(true);

  // Attachments State
  const [attachments, setAttachments] = useState<UploadedFile[]>([
    { id: "1", name: "Technical_Yarn_Specs.pdf", size: "2.4 MB", type: "PDF Document" }
  ]);

  const handleAddAttachment = (file: UploadedFile) => {
    setAttachments([...attachments, file]);
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments(attachments.filter((a) => a.id !== id));
  };

  const handleSaveDraft = () => {
    setIsDraftSaved(true);
    setTimeout(() => setIsDraftSaved(false), 4000);
  };

  const handleSubmitRfq = () => {
    const randomRef = `RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceNumber(randomRef);
    setRfqStatus("submitted");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleApplyAiSuggestions = () => {
    setMaterial("100% GOTS Organic Cotton (240 GSM High Density)");
    setColor("Pantone 19-4052 Classic Navy (Azo-Free Dyeing)");
    setIncoterm("DDP");
    alert("AI suggestions applied to your specifications and trade terms!");
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {rfqStatus === "submitted" ? (
        <ConfirmationCard
          referenceNumber={referenceNumber}
          supplierName={productData.supplier}
          quantity={quantity}
          unit={unit}
          deliveryCountry={deliveryCountry}
          onReset={() => {
            setRfqStatus("editing");
            setCurrentStep(1);
          }}
        />
      ) : (
        <>
          {/* Hero & Progress Steps */}
          <RFQHero
            currentStep={currentStep}
            onStepClick={(s) => setCurrentStep(s)}
            onAiOptimize={handleApplyAiSuggestions}
          />

          {/* Target Product & Supplier Header Box */}
          <ProductInformation
            productName={productData.name}
            category={productData.category}
            productId={productId}
            supplierName={productData.supplier}
            flag={productData.flag}
            country={productData.country}
            onEditToggle={() => setCurrentStep(1)}
          />

          {/* 2-Column Responsive Form Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Steps & Attachments */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Step 1: Buyer Requirements */}
              {currentStep === 1 && (
                <BuyerRequirements
                  quantity={quantity}
                  setQuantity={setQuantity}
                  unit={unit}
                  setUnit={setUnit}
                  targetPrice={targetPrice}
                  setTargetPrice={setTargetPrice}
                  currency={currency}
                  setCurrency={setCurrency}
                  deliveryCountry={deliveryCountry}
                  setDeliveryCountry={setDeliveryCountry}
                  deliveryAddress={deliveryAddress}
                  setDeliveryAddress={setDeliveryAddress}
                  deliveryDate={deliveryDate}
                  setDeliveryDate={setDeliveryDate}
                />
              )}

              {/* Step 2: Technical Specifications */}
              {currentStep === 2 && (
                <ProductSpecifications
                  material={material}
                  setMaterial={setMaterial}
                  size={size}
                  setSize={setSize}
                  color={color}
                  setColor={setColor}
                  packaging={packaging}
                  setPackaging={setPackaging}
                  isPrivateLabel={isPrivateLabel}
                  setIsPrivateLabel={setIsPrivateLabel}
                  isOem={isOem}
                  setIsOem={setIsOem}
                  certifications={certifications}
                  setCertifications={setCertifications}
                />
              )}

              {/* Step 3: Shipping & Trade Terms */}
              {currentStep === 3 && (
                <ShippingTerms
                  incoterm={incoterm}
                  setIncoterm={setIncoterm}
                  shippingMethod={shippingMethod}
                  setShippingMethod={setShippingMethod}
                  destinationPort={destinationPort}
                  setDestinationPort={setDestinationPort}
                  paymentTerms={paymentTerms}
                  setPaymentTerms={setPaymentTerms}
                  insuranceRequired={insuranceRequired}
                  setInsuranceRequired={setInsuranceRequired}
                  quantity={quantity}
                  deliveryCountry={deliveryCountry}
                />
              )}

              {/* Step 4: Supplier Selection & Review */}
              {currentStep === 4 && (
                <SupplierSelection
                  supplierName={productData.supplier}
                  flag={productData.flag}
                  country={productData.country}
                  trustScore={productData.trust}
                  sendToMultiple={sendToMultiple}
                  setSendToMultiple={setSendToMultiple}
                />
              )}

              {/* Document Attachments Uploader */}
              <DocumentUploader
                attachments={attachments}
                onAddAttachment={handleAddAttachment}
                onRemoveAttachment={handleRemoveAttachment}
              />

              {/* Bottom Wizard Navigation Controls */}
              <div className="flex items-center justify-between border-t border-grey-border/50 pt-6">
                <button
                  disabled={currentStep === 1}
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="rounded-xl border border-grey-border px-5 py-2.5 text-xs font-bold text-navy hover:bg-grey-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Previous Step
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                    className="rounded-xl bg-navy px-6 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm"
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitRfq}
                    className="rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-all shadow-md"
                  >
                    Submit Official RFQ ✓
                  </button>
                )}
              </div>

            </div>

            {/* Right Column: Sticky AI Assistant & Summary Preview */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* AI Assistant Suggestions */}
              <AIRFQAssistant onApplySuggestions={handleApplyAiSuggestions} />

              {/* Live Pre-Submission Summary */}
              <RFQSummary
                productName={productData.name}
                supplierName={productData.supplier}
                quantity={quantity}
                unit={unit}
                targetPrice={targetPrice}
                currency={currency}
                deliveryCountry={deliveryCountry}
                deliveryAddress={deliveryAddress}
                incoterm={incoterm}
                shippingMethod={shippingMethod}
                attachments={attachments}
                isDraftSaved={isDraftSaved}
                onSaveDraft={handleSaveDraft}
                onSubmitRfq={handleSubmitRfq}
              />
            </div>

          </div>
        </>
      )}
    </div>
  );
}
