import { ShieldCheck, Globe, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AuthIllustrationProps {
  className?: string;
}

export function AuthIllustration({ className }: AuthIllustrationProps) {
  return (
    <div className={cn("p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white space-y-4 max-w-sm", className)}>
      <div className="flex space-x-3 items-center">
        <div className="p-2.5 rounded-xl bg-primary text-white shadow-md">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm">Verified Enterprise Trade</h4>
          <p className="text-xs text-slate-300">ISO & Tax Compliant B2B Partners</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-white/10">
        <div className="flex items-center space-x-1.5">
          <Globe className="h-3.5 w-3.5 text-primary-foreground" />
          <span>120+ Countries</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <Building2 className="h-3.5 w-3.5 text-primary-foreground" />
          <span>50k+ Factories</span>
        </div>
      </div>
    </div>
  );
}
