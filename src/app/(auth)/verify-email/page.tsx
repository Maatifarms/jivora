import { Metadata } from "next";
import { VerifyEmailForm } from "@/components/auth/verify-email-form";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Check your email for account verification instructions.",
};

export default function VerifyEmailPage() {
  return <VerifyEmailForm />;
}
