import { Metadata } from "next";
import { VerifyOtpForm } from "@/components/auth/verify-otp-form";

export const metadata: Metadata = {
  title: "Verify Security OTP",
  description: "Verify your email security code to complete authentication.",
};

export default function VerifyOtpPage() {
  return <VerifyOtpForm />;
}
