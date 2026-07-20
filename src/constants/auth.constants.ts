export const AUTH_TOKEN_KEY = "jivora_auth_token";
export const REFRESH_TOKEN_KEY = "jivora_refresh_token";

export const AUTH_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  VERIFY_OTP: "/verify-otp",
  FORGOT_PASSWORD: "/forgot-password",
};

export const DEFAULT_POST_LOGIN_REDIRECT: Record<string, string> = {
  BUYER: "/dashboard/buyer",
  SUPPLIER: "/dashboard/supplier",
  MANUFACTURER: "/dashboard/manufacturer",
  EXPORTER: "/dashboard/exporter",
  ADMIN: "/dashboard/admin",
};
