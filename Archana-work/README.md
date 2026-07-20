# JIVORA — AI-Powered B2B & D2C Trade Platform
**Developer:** Archana  
**Role:** Full-Stack Lead & Product Engineer  
**Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS, Lucide Icons  

---

## 🌟 Executive Overview
JIVORA is a premium, AI-powered digital operating system for global trade connecting buyers, suppliers, exporters, and manufacturers across the UK and Europe.

This directory (`Archana-work`) contains the complete 11-module frontend application, designed with Stripe, Linear, and Shopify-grade aesthetics.

---

## 🚀 11 Complete Feature Modules Built

### 1. 🏠 Homepage (`/`)
* **Hero Section:** Dynamic search bar, interactive AI trade copilot demo, and live stats ticker.
* **Problem & Solution Cards:** Transparency breakdown for UK-EU cross-border trade friction.
* **Audited Supplier Highlights:** Factory trust badges, certification indicators, and instant CTAs.

### 2. 🏪 Global Marketplace (`/marketplace`)
* **Product Catalog:** Filterable grid with MOQ, unit price, lead times, and factory location.
* **Side-by-Side Supplier Comparison:** Compare pricing, audit scores, and capacity metrics.
* **Filter Controls:** Multi-criteria filtering by country (UK, Germany, France, Portugal), MOQ, and GOTS/ISO certs.

### 3. 📁 Industry Directory (`/marketplace/categories`)
* **Sector Hubs:** 10 core categories including Sustainable Textiles, Bio-Packaging, Clean Energy, and Medical Supplies.
* **Supplier Count Badges:** Verified manufacturer counters per category.

### 4. 📦 Product Details Page (`/marketplace/product/[id]`)
* **Interactive Image Gallery:** Multi-angle HD factory product shots.
* **Technical Specifications:** GSM density, Pantone color dyes, packaging terms, and cert downloads.
* **Instant Supplier Direct Chat & RFQ Launchers.**

### 5. 🏢 Audited Company Profile (`/company/[id]`)
* **Verified Trust Rating (9.9/10):** Audited certification badges (GOTS, ISO 9001, CE, FSC, FDA, RoHS) with PDF downloads.
* **Factory Floor Gallery:** Loom lines, QA labs, and warehouse facilities.
* **Export Destination Shares:** Interactive distribution charts (UK 42%, Germany 28%, France 18%).

### 6. 📋 AI-Powered RFQ Module (`/rfq`)
* **4-Step Wizard:** Step 1: Requirements -> Step 2: Specifications -> Step 3: Logistics -> Step 4: Review.
* **Real-Time AI Freight Estimator:** Sea Freight (£1,850–£2,100), Transit Time (22–28 days).
* **Save Draft & Continue Later:** Multi-session draft state with reference numbers (`RFQ-2026-8910`).

### 7. 📊 Market Insights & Trade Intelligence (`/market-insights`)
* **Executive Reports:** Executive trade analysis for UK FMCG, EU Packaging, and Solar Tariffs with PDF downloads.
* **8 Sector Trend Sparklines:** Real-time growth % and export volume meters.
* **HMRC & EU PPWR Regulation Timeline.**

### 8. ❓ Help Center & Support (`/help`)
* **Hero Search Bar:** Voice Search UI, AI Search button, and popular search chips.
* **10 Category Cards & FAQ Accordion:** Comprehensive answers for B2B sourcing and customs clearance.
* **Support Ticket Creation Modal & Live System Status Indicators.**

### 9. 🔍 AI Global Search Engine (`/search`)
* **Multi-Modal Search:** Voice search simulation, Image search trigger, and recent query chips.
* **Smart Filter Tabs:** All, Products, Suppliers, Companies, Categories, Articles, Insights.
* **Explainable AI Rationale & Floating Comparison Drawer.**

### 10. 🤖 JIVORA AI Copilot (`/ai-copilot`)
* **Multi-Turn AI Sourcing Assistant:** Interactive chat engine for Incoterms 2026 (FOB vs CIF vs DDP), factory audits, and customs clearance.
* **8 Quick Action Flow Cards & Saved Conversation History Sessions.**

### 11. ⚙️ Platform Integration & Active Navigation (`Navbar.tsx` & `Footer.tsx`)
* **Dynamic Active State Tracking:** Underline indicator syncs across all 11 routes using `usePathname()`.
* **Reusable Skeletons (`LoadingSkeleton.tsx`) & Empty States (`EmptyState.tsx`).**
* **Custom 404 Page (`not-found.tsx`).**

---

## 🛠️ How to Run Archana's Work Locally

1. Navigate to the `Archana-work` directory:
   ```bash
   cd Archana-work
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open **`http://localhost:3000`** in your browser.
