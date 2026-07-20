"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "./auth-card";
import { AuthHeader } from "./auth-header";
import { AuthFooter } from "./auth-footer";
import { AuthFormContainer } from "./auth-form-container";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export interface ResetPasswordFormProps {
  onSubmitNewPassword?: (password: string) => void;
}

export function ResetPasswordForm({ onSubmitNewPassword }: ResetPasswordFormProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    if (onSubmitNewPassword) {
      onSubmitNewPassword(password);
    }

    setTimeout(() => {
      setIsLoading(false);
      router.push("/auth-success?type=password-updated");
    }, 1000);
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Reset Password"
        description="Choose a new secure password for your JIVORA enterprise account."
      />

      <AuthFormContainer onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <Label required htmlFor="new-password">New Password</Label>
          <PasswordInput
            id="new-password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            showStrength
          />
        </div>

        <div className="space-y-1.5">
          <Label required htmlFor="confirm-password">Confirm New Password</Label>
          <PasswordInput
            id="confirm-password"
            placeholder="Re-enter new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />
        </div>

        <Button type="submit" variant="b2b-gradient" className="w-full" isLoading={isLoading}>
          Reset & Update Password
        </Button>
      </AuthFormContainer>

      <AuthFooter>
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Back to Sign In
        </Link>
      </AuthFooter>
    </AuthCard>
  );
}
