import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { publicNavConfig } from "@/config/navigation/public-nav.config";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="b2b-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              {siteConfig.description}
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Email: {siteConfig.contact.email}</p>
              <p>Support: {siteConfig.contact.phone}</p>
            </div>
          </div>

          {/* Config-driven Footer Link Columns */}
          {publicNavConfig.footer.map((section) => (
            <div key={section.id}>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">{section.title}</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright & Currency/Language Selectors */}
        <div className="border-t mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} JIVORA Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0 items-center">
            <span>🇺🇸 English (US)</span>
            <span>•</span>
            <span>USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
