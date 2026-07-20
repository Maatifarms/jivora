import { UserRole } from "@/types/auth.types";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateLoginForm(data: { email?: string; password?: string }): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.email || !data.email.trim()) {
    errors.email = "Business email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateRegisterForm(data: {
  fullName?: string;
  email?: string;
  companyName?: string;
  taxId?: string;
  role?: UserRole;
  password?: string;
  termsAccepted?: boolean;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || !data.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!data.email || !data.email.trim()) {
    errors.email = "Business email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.companyName || !data.companyName.trim()) {
    errors.companyName = "Registered company name is required";
  }

  if (!data.taxId || !data.taxId.trim()) {
    errors.taxId = "Business Tax ID / VAT number is required";
  }

  if (!data.password || data.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (!data.termsAccepted) {
    errors.termsAccepted = "You must accept the terms of service";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
