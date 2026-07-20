"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthCard } from "./auth-card";
import { AuthHeader } from "./auth-header";
import { AuthFooter } from "./auth-footer";
import { AuthFormContainer } from "./auth-form-container";
import { OtpInput } from "@/components/ui/otp-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/providers/toast-provider";

export function VerifyOtpForm() {
  const router = useRouter();
  const { addToast } = useToast();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      setError("Please enter a valid 6-digit verification code");
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      addToast({
        title: "Security Verified",
        description: "2FA / Email verification successful. Welcome to JIVORA!",
        variant: "success",
      });
      router.push("/auth-success?type=verification-complete");
    }, 1000);
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Verify Account Security"
        description="Enter the 6-digit security OTP code sent to your registered work email."
      />

      <AuthFormContainer onSubmit={handleSubmit}>
        <div className="space-y-1 text-center">
          <Label required htmlFor="otp" className="sr-only">6-Digit Verification Code</Label>
          <OtpInput value={otp} onChange={setOtp} error={error} />
        </div>

        <Button type="submit" variant="b2b-gradient" className="w-full" isLoading={isLoading}>
          Verify & Continue
        </Button>
      </AuthFormContainer>

      <AuthFooter>
        <button
          type="button"
          onClick={() =>
            addToast({
              title: "Code Resent",
              description: "A new 6-digit verification code has been dispatched.",
            })
          }
          className="text-primary hover:underline font-medium"
        >
          Didn&apos;t receive code? Resend OTP
        </button>
      </AuthFooter>
    </AuthCard>
  );
}
