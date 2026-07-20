"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "./auth-card";
import { AuthHeader } from "./auth-header";
import { AuthFooter } from "./auth-footer";
import { AuthFormContainer } from "./auth-form-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export interface ForgotPasswordFormProps {
  onSubmitEmail?: (email: string) => void;
}

export function ForgotPasswordForm({ onSubmitEmail }: ForgotPasswordFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid work email address");
      return;
    }

    setError("");
    setIsLoading(true);

    if (onSubmitEmail) {
      onSubmitEmail(email);
    }

    setTimeout(() => {
      setIsLoading(false);
      router.push("/auth-success?type=password-reset");
    }, 1000);
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Forgot Password?"
        description="Enter your registered work email to receive password reset instructions."
      />

      <AuthFormContainer onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <Label required htmlFor="email">Work Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
        </div>

        <Button type="submit" variant="b2b-gradient" className="w-full" isLoading={isLoading}>
          Send Reset Instructions
        </Button>
      </AuthFormContainer>

      <AuthFooter>
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Return to Sign In
        </Link>
      </AuthFooter>
    </AuthCard>
  );
}
