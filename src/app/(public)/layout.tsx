import { ReactNode } from "react";
import { PublicLayoutContainer } from "@/layouts/public-layout-container";

export default function PublicRouteGroupLayout({ children }: { children: ReactNode }) {
  return <PublicLayoutContainer>{children}</PublicLayoutContainer>;
}
