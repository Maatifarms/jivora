import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import WhyJivora from "@/components/sections/WhyJivora";
import Categories from "@/components/sections/Categories";
import FeaturedSuppliers from "@/components/sections/FeaturedSuppliers";
import TrendingProducts from "@/components/sections/TrendingProducts";
import AICopilot from "@/components/sections/AICopilot";
import HowItWorks from "@/components/sections/HowItWorks";
import MarketInsights from "@/components/sections/MarketInsights";
import SuccessStories from "@/components/sections/SuccessStories";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      {/* 1. Hero Page (Value Prop, Dual CTAs, Ask AI search, Interactive simulation, scroll indicator) */}
      <Hero />

      {/* 2. Global statistics (Counters for Countries, Businesses, Products, Success Rate) & Trusted By flags */}
      <TrustStats />

      {/* 3. Sourcing Comparison (Why Jivora Solves Sourcing Problems vs legacy platforms) */}
      <WhyJivora />

      {/* 4. Sourcing Directories (Categories grid) */}
      <Categories />

      {/* 5. Vetted manufacturer directories (Featured Suppliers) */}
      <FeaturedSuppliers />

      {/* 6. Live Sourcing products (Trending Products) */}
      <TrendingProducts />

      {/* 7. Unique Selling Point dashboard (AI Trade Copilot Simulator) */}
      <AICopilot />

      {/* 8. Sourcing journeys (Buyer workflow & Supplier workflow) */}
      <HowItWorks />

      {/* 9. Trade Intelligence widgets (insights, demand indices, regulations) */}
      <MarketInsights />

      {/* 10. Success cases (Client testimonials) */}
      <SuccessStories />

      {/* 11. Final Conversion banner */}
      <CtaBanner />
    </>
  );
}
