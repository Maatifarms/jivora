import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { B2BRoleBadge } from "@/components/shared/status-indicator";
import { ShieldCheck, Layers, Cpu, Lock, ArrowRight } from "lucide-react";

export default function ArchitecturalLandingPage() {
  return (
    <div className="container py-12 md:py-20 space-y-16">
      {/* Hero Showcase Frame */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary border border-primary/20">
          <ShieldCheck className="h-4 w-4" />
          <span>JIVORA B2B Enterprise Architecture Initialized</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Next.js App Router B2B Foundation & Design System
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Architected by Developer 1 (Anjali). Complete scalable layout system, design tokens, ShadCN UI primitives, type registry, navigation foundation, and auth UI.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/register">
            <Button variant="b2b-gradient" size="lg" className="space-x-2">
              <span>Test Auth UI Foundation</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg">
              Sign In Portal
            </Button>
          </Link>
        </div>
      </div>

      {/* Role Badges & System Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:border-primary/50 transition-all">
          <CardHeader>
            <div className="mb-2">
              <B2BRoleBadge role="BUYER" />
            </div>
            <CardTitle className="text-lg">Enterprise Buyers</CardTitle>
            <CardDescription className="text-xs">
              Procurement & Sourcing dashboard shell contract initialized.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Ready for Dev 8 (Buyer Dashboard) to consume <code className="text-primary font-mono">&lt;DashboardShell role=&quot;BUYER&quot;&gt;</code>.
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-all">
          <CardHeader>
            <div className="mb-2">
              <B2BRoleBadge role="SUPPLIER" />
            </div>
            <CardTitle className="text-lg">Verified Suppliers</CardTitle>
            <CardDescription className="text-xs">
              Wholesale supplier catalog & RFQ response shell initialized.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Ready for Dev 9 (Supplier Dashboard) to consume <code className="text-primary font-mono">&lt;DashboardShell role=&quot;SUPPLIER&quot;&gt;</code>.
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-all">
          <CardHeader>
            <div className="mb-2">
              <B2BRoleBadge role="MANUFACTURER" />
            </div>
            <CardTitle className="text-lg">OEM Manufacturers</CardTitle>
            <CardDescription className="text-xs">
              Factory direct manufacturing & capacity listing shell.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Ready for Dev 10 (Manufacturer Dashboard) module injection.
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-all">
          <CardHeader>
            <div className="mb-2">
              <B2BRoleBadge role="EXPORTER" />
            </div>
            <CardTitle className="text-lg">Global Exporters</CardTitle>
            <CardDescription className="text-xs">
              Logistics & customs clearance trade container shell.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Ready for Dev 11 (Exporter Dashboard) module injection.
          </CardContent>
        </Card>
      </div>

      {/* Architecture Highlights */}
      <div className="rounded-2xl border bg-card p-8 shadow-lg space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold">Reusable Architectural Modules for Dev 2 – N</h3>
            <p className="text-xs text-muted-foreground">Standardized system contracts established across the codebase</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs">
          <div className="space-y-1">
            <div className="font-semibold text-foreground flex items-center space-x-1">
              <Cpu className="h-4 w-4 text-primary" />
              <span>Strict Type Safety</span>
            </div>
            <p className="text-muted-foreground">Zero <code className="font-mono text-destructive">any</code> types used across all components, contracts, and schema validators.</p>
          </div>

          <div className="space-y-1">
            <div className="font-semibold text-foreground flex items-center space-x-1">
              <Lock className="h-4 w-4 text-primary" />
              <span>Auth UI Foundation</span>
            </div>
            <p className="text-muted-foreground">Login, Registration (Role Selection), and 6-digit OTP verification UI cards ready.</p>
          </div>

          <div className="space-y-1">
            <div className="font-semibold text-foreground flex items-center space-x-1">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Accessibility & Theme</span>
            </div>
            <p className="text-muted-foreground">Dark/Light Mode support with HSL design tokens and full keyboard ARIA compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
