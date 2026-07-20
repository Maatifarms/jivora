"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, CheckCircle2 } from "lucide-react";
import { AuthCard } from "./auth-card";
import { AuthHeader } from "./auth-header";
import { AuthFooter } from "./auth-footer";
import { Button } from "@/components/ui/button";

export interface VerifyEmailFormProps {
  email?: string;
  onResendEmail?: () => void;
}

export function VerifyEmailForm({
  email = "user@company.com",
  onResendEmail,
}: VerifyEmailFormProps) {
  const [isSent, setIsSent] = useState(false);

  const handleResend = () => {
    setIsSent(true);
    if (onResendEmail) onResendEmail();
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <AuthCard>
      <div className="flex justify-center">
        <div className="p-4 rounded-full bg-primary/10 text-primary">
          <Mail className="h-8 w-8" />
        </div>
      </div>

      <AuthHeader
        title="Check Your Work Email"
        description={`We sent an email verification link to ${email}. Click the link inside to verify your enterprise account.`}
      />

      <div className="space-y-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={handleResend}
          disabled={isSent}
          className="w-full"
        >
          {isSent ? (
            <span className="flex items-center space-x-1 text-emerald-600">
              <CheckCircle2 className="h-4 w-4 mr-1" /> Link Resent Successfully
            </span>
          ) : (
            "Resend Verification Link"
          )}
        </Button>
      </div>

      <AuthFooter>
        <span>
          Wrong email address?{" "}
          <Link href="/register" className="text-primary font-semibold hover:underline">
            Register again
          </Link>
        </span>
      </AuthFooter>
    </AuthCard>
  );
}
