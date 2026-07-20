"use client";

import { useState, useMemo } from "react";
import CategoryHero from "@/components/categories/CategoryHero";
import SuccessMetrics from "@/components/categories/SuccessMetrics";
import FeaturedCategories, { CategoryData } from "@/components/categories/FeaturedCategories";
import TrendingMarkets from "@/components/categories/TrendingMarkets";
import PopularCategories from "@/components/categories/PopularCategories";
import CategoryPreview from "@/components/categories/CategoryPreview";
import AIRecommendations from "@/components/categories/AIRecommendations";
import MarketInsights from "@/components/categories/MarketInsights";
import SustainabilitySection from "@/components/categories/SustainabilitySection";
import CTASection from "@/components/categories/CTASection";
import CategoryAssistant from "@/components/categories/CategoryAssistant";

const allCategoriesData: CategoryData[] = [
  {
    id: "cat1",
    name: "FMCG",
    iconName: "ShoppingCart",
    supplierCount: "120+",
    productCount: "1,400+",
    topCountry: "UK",
    flag: "🇬🇧",
    growthTrend: "↑ 14%",
    avgMoq: "500 units",
    isEco: true,
    ecoBadge: "Carbon Neutral Goods",
    description: "Fast-moving consumer goods optimized for UK and EU supermarket distribution and wholesale logistics.",
    leadTime: "10 Days",
    certifications: ["ISO 9001", "BRCGS Food Safety"],
    businessType: ["all", "manufacturer", "exporter", "wholesaler"]
  },
  {
    id: "cat2",
    name: "Toys",
    iconName: "ToyBrick",
    supplierCount: "85+",
    productCount: "950+",
    topCountry: "Italy",
    flag: "🇮🇹",
    growthTrend: "↑ 19%",
    avgMoq: "100 units",
    isEco: true,
    ecoBadge: "FSC Wood Certified",
    description: "Non-toxic, FSC certified wooden and bio-plastic educational toys compliant with EU EN71 safety standards.",
    leadTime: "14 Days",
    certifications: ["CE Certified", "FSC Wood Certified", "EN71"],
    businessType: ["all", "manufacturer", "exporter", "privatelabel"]
  },
  {
    id: "cat3",
    name: "Agriculture",
    iconName: "Sprout",
    supplierCount: "90+",
    productCount: "1,100+",
    topCountry: "Spain",
    flag: "🇪🇸",
    growthTrend: "↑ 12%",
    avgMoq: "1,000 kg",
    isEco: true,
    ecoBadge: "EU Organic Certified",
    description: "Bulk raw produce, organic grains, and agricultural export goods certified for European food accords.",
    leadTime: "7 Days",
    certifications: ["EU Organic", "ISO 22000"],
    businessType: ["all", "supplier", "exporter", "wholesaler"]
  },
  {
    id: "cat4",
    name: "Food & Beverages",
    iconName: "Utensils",
    supplierCount: "150+",
    productCount: "2,200+",
    topCountry: "France",
    flag: "🇫🇷",
    growthTrend: "↑ 16%",
    avgMoq: "250 units",
    isEco: true,
    ecoBadge: "Bio-based Packaging",
    description: "Gourmet preserves, organic wines, and artisan food manufacture under strict European safety auditing.",
    leadTime: "8 Days",
    certifications: ["IFS Food", "BRCGS", "ISO 22000"],
    businessType: ["all", "manufacturer", "supplier", "distributor"]
  },
  {
    id: "cat5",
    name: "Furniture",
    iconName: "Armchair",
    supplierCount: "70+",
    productCount: "600+",
    topCountry: "Italy",
    flag: "🇮🇹",
    growthTrend: "↑ 22%",
    avgMoq: "50 units",
    isEco: true,
    ecoBadge: "FSC Sustainable Wood",
    description: "Commercial and residential furniture manufactured using sustainably harvested FSC timber and low-VOC finishes.",
    leadTime: "21 Days",
    certifications: ["FSC Certified", "ISO 9001"],
    businessType: ["all", "manufacturer", "privatelabel", "exporter"]
  },
  {
    id: "cat6",
    name: "Packaging",
    iconName: "Package",
    supplierCount: "140+",
    productCount: "1,800+",
    topCountry: "Denmark",
    flag: "🇩🇰",
    growthTrend: "↑ 31%",
    avgMoq: "2,500 units",
    isEco: true,
    ecoBadge: "100% Biodegradable",
    description: "Food-grade PLA cups, compostable mailers, and circular packaging solutions compliant with 2026 EU plastic rules.",
    leadTime: "10 Days",
    certifications: ["EN 13432", "FSC Certified"],
    businessType: ["all", "manufacturer", "supplier", "wholesaler"]
  },
  {
    id: "cat7",
    name: "Electronics",
    iconName: "Cpu",
    supplierCount: "110+",
    productCount: "1,500+",
    topCountry: "Germany",
    flag: "🇩🇪",
    growthTrend: "↑ 28%",
    avgMoq: "100 units",
    isEco: false,
    description: "Precision PCBs, microcontrollers, and grid-tied solar microinverters engineered in Germany.",
    leadTime: "12 Days",
    certifications: ["CE Certified", "RoHS Compliant", "ISO 9001"],
    businessType: ["all", "manufacturer", "exporter", "distributor"]
  },
  {
    id: "cat8",
    name: "Healthcare",
    iconName: "HeartPulse",
    supplierCount: "95+",
    productCount: "850+",
    topCountry: "Germany",
    flag: "🇩🇪",
    growthTrend: "↑ 25%",
    avgMoq: "500 units",
    isEco: true,
    ecoBadge: "Recycled PPE Materials",
    description: "Medical disposables, diagnostic hardware, and personal protective equipment compliant with EU MDR regulations.",
    leadTime: "5 Days",
    certifications: ["MDR Compliant", "CE Certified", "ISO 13485"],
    businessType: ["all", "manufacturer", "supplier", "exporter"]
  },
  {
    id: "cat9",
    name: "Industrial Equipment",
    iconName: "HardHat",
    supplierCount: "80+",
    productCount: "720+",
    topCountry: "Germany",
    flag: "🇩🇪",
    growthTrend: "↑ 18%",
    avgMoq: "10 units",
    isEco: false,
    description: "Heavy CNC machinery, industrial fasteners, and automated assembly line components.",
    leadTime: "30 Days",
    certifications: ["ISO 9001", "TUV Rheinland"],
    businessType: ["all", "manufacturer", "distributor", "exporter"]
  },
  {
    id: "cat10",
    name: "Home Decor",
    iconName: "Home",
    supplierCount: "65+",
    productCount: "540+",
    topCountry: "Portugal",
    flag: "🇵🇹",
    growthTrend: "↑ 15%",
    avgMoq: "200 units",
    isEco: true,
    ecoBadge: "Handcrafted Ceramic & Linen",
    description: "Handcrafted Iberian ceramics, woven organic tapestries, and eco-friendly home furnishings.",
    leadTime: "18 Days",
    certifications: ["GOTS Organic", "ISO 9001"],
    businessType: ["all", "manufacturer", "privatelabel"]
  },
  {
    id: "cat11",
    name: "Fashion",
    iconName: "Shirt",
    supplierCount: "130+",
    productCount: "1,900+",
    topCountry: "Portugal",
    flag: "🇵🇹",
    growthTrend: "↑ 24%",
    avgMoq: "300 units",
    isEco: true,
    ecoBadge: "GOTS Organic Cotton",
    description: "Ethical apparel manufacturing using GOTS organic cotton and zero-toxic dye processing.",
    leadTime: "15 Days",
    certifications: ["GOTS Organic", "OEKO-TEX 100"],
    businessType: ["all", "manufacturer", "exporter", "privatelabel"]
  },
  {
    id: "cat12",
    name: "Sustainable Products",
    iconName: "Recycle",
    supplierCount: "160+",
    productCount: "2,500+",
    topCountry: "Netherlands",
    flag: "🇳🇱",
    growthTrend: "↑ 35%",
    avgMoq: "100 units",
    isEco: true,
    ecoBadge: "Carbon Neutral & Circular",
    description: "Comprehensive catalog of circular economy products, upcycled raw materials, and carbon-neutral goods.",
    leadTime: "7 Days",
    certifications: ["ISO 14001", "GOTS Organic", "FSC Certified"],
    businessType: ["all", "manufacturer", "supplier", "privatelabel", "wholesaler"]
  }
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);

  // Filter categories by search input & Business Type selection
  const filteredCategories = useMemo(() => {
    return allCategoriesData.filter((cat) => {
      // 1. Text filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = cat.name.toLowerCase().includes(query);
        const matchesDesc = cat.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      // 2. Business type filter
      if (selectedBusinessType !== "all") {
        if (!cat.businessType.includes(selectedBusinessType)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedBusinessType]);

  const handleAskAi = () => {
    setSearchQuery("Sustainable Packaging");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* 1. Hero banner with AI search & Business Type bar */}
        <CategoryHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedBusinessType={selectedBusinessType}
          setSelectedBusinessType={setSelectedBusinessType}
        />

        {/* 2. Success metrics bar (Requirement 6) */}
        <SuccessMetrics />

        {/* 3. 12 Featured Categories Grid & Empty State */}
        <FeaturedCategories
          categories={filteredCategories}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onAskAiClick={handleAskAi}
        />

        {/* 4. Trending Markets strip (Requirement 4) */}
        <TrendingMarkets />

        {/* 5. Popular Categories horizontal scroll */}
        <PopularCategories
          categories={allCategoriesData}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 6. Explainable AI Recommendations */}
        <AIRecommendations />

        {/* 7. Trade Market Insights */}
        <MarketInsights />

        {/* 8. Sustainability & ESG Highlight */}
        <SustainabilitySection />

        {/* 9. Final CTA */}
        <CTASection onAskAi={handleAskAi} />
      </div>

      {/* 10. Interactive Category Preview Sheet */}
      <CategoryPreview
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />

      {/* 11. Floating Category AI Assistant widget */}
      <CategoryAssistant />
    </>
  );
}
