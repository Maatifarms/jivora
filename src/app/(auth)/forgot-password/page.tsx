import { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Request a password reset link for your JIVORA business account.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
