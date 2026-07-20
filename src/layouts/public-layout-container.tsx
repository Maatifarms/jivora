import { ReactNode } from "react";
import { MainHeader } from "@/components/navigation/main-header";
import { PublicFooter } from "@/components/navigation/public-footer";

export interface PublicLayoutContainerProps {
  children: ReactNode;
}

export function PublicLayoutContainer({ children }: PublicLayoutContainerProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <MainHeader />
      <main className="flex-1 w-full">{children}</main>
      <PublicFooter />
    </div>
  );
}
