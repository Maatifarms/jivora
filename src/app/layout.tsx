import type { Metadata, Viewport } from "next";
import { fontSans, fontHeading } from "@/lib/fonts";
import { AppProviders } from "./providers";
import { Toaster } from "@/components/ui/toast";
import { ModalContainer } from "@/providers/modal-provider";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["B2B Marketplace", "Global Trade", "Verified Suppliers", "OEM Manufacturing", "RFQ Sourcing", "Exporters"],
  authors: [{ name: "JIVORA Architecture Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontHeading.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <AppProviders>
          {children}
          <Toaster />
          <ModalContainer />
        </AppProviders>
      </body>
    </html>
  );
}
