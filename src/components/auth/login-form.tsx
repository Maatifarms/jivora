"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "./auth-card";
import { AuthHeader } from "./auth-header";
import { AuthFooter } from "./auth-footer";
import { AuthDivider } from "./auth-divider";
import { AuthFormContainer } from "./auth-form-container";
import { SocialLoginButtons } from "./social-login-buttons";
import { RememberMeCheckbox } from "./remember-me-checkbox";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/providers/toast-provider";
import { validateLoginForm } from "@/lib/validators/auth.schema";

export function LoginForm() {
  const router = useRouter();
  const { addToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLoginForm({ email, password });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      addToast({
        title: "Signed in successfully",
        description: "Welcome back to JIVORA B2B Portal",
        variant: "success",
      });
      router.push("/verify-otp");
    }, 1000);
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Welcome Back"
        description="Sign in to your JIVORA enterprise business account"
      />

      <SocialLoginButtons />
      <AuthDivider label="Or sign in with work email" />

      <AuthFormContainer onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <Label required htmlFor="email">Work Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label required htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-xs text-primary font-medium hover:underline">
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <RememberMeCheckbox checked={rememberMe} onChange={setRememberMe} />
        </div>

        <Button type="submit" variant="b2b-gradient" className="w-full" isLoading={isLoading}>
          Sign In to Portal
        </Button>
      </AuthFormContainer>

      <AuthFooter>
        <span>
          Don&apos;t have a business account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Register Business
          </Link>
        </span>
      </AuthFooter>
    </AuthCard>
  );
}
