"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserRole } from "@/types/auth.types";
import { AuthCard } from "./auth-card";
import { AuthHeader } from "./auth-header";
import { AuthFooter } from "./auth-footer";
import { AuthFormContainer } from "./auth-form-container";
import { RoleSelector } from "./role-selector";
import { TermsAndConditionsCheckbox } from "./terms-checkbox";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/providers/toast-provider";
import { validateRegisterForm } from "@/lib/validators/auth.schema";

export function RegisterForm() {
  const router = useRouter();
  const { addToast } = useToast();

  const [role, setRole] = useState<UserRole>("BUYER");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateRegisterForm({
      fullName,
      email,
      companyName,
      taxId,
      role,
      password,
      termsAccepted,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      addToast({
        title: "Account Registered",
        description: "Please verify your email with the 6-digit OTP code sent.",
        variant: "success",
      });
      router.push("/verify-otp");
    }, 1200);
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Create Business Account"
        description="Join thousands of verified global trade partners on JIVORA"
      />

      <AuthFormContainer onSubmit={handleSubmit}>
        <div>
          <Label className="text-xs font-semibold text-muted-foreground uppercase">Select Account Role</Label>
          <RoleSelector selectedRole={role} onSelectRole={(r) => setRole(r)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label required htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Anjali Sharma"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={errors.fullName}
            />
          </div>

          <div className="space-y-1">
            <Label required htmlFor="email">Work Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="anjali@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label required htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              placeholder="Acme Global Inc."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              error={errors.companyName}
            />
          </div>

          <div className="space-y-1">
            <Label required htmlFor="taxId">Tax ID / VAT No.</Label>
            <Input
              id="taxId"
              placeholder="US-987654321"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
              error={errors.taxId}
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label required htmlFor="password">Password</Label>
          <PasswordInput
            id="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            showStrength
          />
        </div>

        <TermsAndConditionsCheckbox
          checked={termsAccepted}
          onChange={setTermsAccepted}
          error={errors.termsAccepted}
        />

        <Button type="submit" variant="b2b-gradient" className="w-full mt-2" isLoading={isLoading}>
          Create Business Account
        </Button>
      </AuthFormContainer>

      <AuthFooter>
        <span>
          Already registered?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign In
          </Link>
        </span>
      </AuthFooter>
    </AuthCard>
  );
}
