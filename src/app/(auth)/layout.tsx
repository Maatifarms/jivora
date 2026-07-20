import { ReactNode } from "react";
import { AuthLayoutContainer } from "@/layouts/auth-layout-container";

export default function AuthRouteGroupLayout({ children }: { children: ReactNode }) {
  return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
}
