import { ReactNode } from "react";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Logo } from "@/components/shared/logo";

export interface AuthLayoutContainerProps {
  children: ReactNode;
}

export function AuthLayoutContainer({ children }: AuthLayoutContainerProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Visual Brand Panel */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10">
          <Logo className="text-white" />
        </div>

        <div className="relative z-10 space-y-4 max-w-lg">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-foreground border border-primary/30">
            Enterprise B2B Infrastructure
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight leading-tight">
            Empowering Global Trade with Verified Suppliers & Seamless RFQs
          </h1>
          <p className="text-sm text-slate-300">
            Connect directly with verified OEMs, global exporters, and buyers. Protected by JIVORA Trade Assurance.
          </p>
        </div>

        <div className="relative z-10 text-xs text-slate-400">
          © {new Date().getFullYear()} JIVORA Inc. All Rights Reserved.
        </div>
      </div>

      {/* Right Form Container */}
      <div className="flex flex-col justify-between p-6 sm:p-12 bg-background relative">
        <div className="flex justify-between items-center w-full max-w-md mx-auto">
          <div className="lg:hidden">
            <Logo size="sm" />
          </div>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>

        <div className="flex items-center justify-center my-auto py-8">
          {children}
        </div>

        <div className="text-center text-xs text-muted-foreground">
          Protected by Enterprise 256-bit SSL Encryption
        </div>
      </div>
    </div>
  );
}
