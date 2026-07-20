export type UserRole = "BUYER" | "SUPPLIER" | "MANUFACTURER" | "EXPORTER" | "ADMIN";

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  companyName: string;
  role: UserRole;
  isVerified: boolean;
  avatarUrl?: string;
  taxId?: string;
  country?: string;
}

export interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  companyName: string;
  taxId: string;
  role: UserRole;
  password: string;
  termsAccepted: boolean;
}

export interface VerifyOtpPayload {
  email: string;
  code: string;
}
