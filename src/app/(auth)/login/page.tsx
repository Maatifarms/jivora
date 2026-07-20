import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your JIVORA enterprise business account.",
};

export default function LoginPage() {
  return <LoginForm />;
}
