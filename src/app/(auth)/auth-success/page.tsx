import { Metadata } from "next";
import { AuthSuccessCard } from "@/components/auth/auth-success-card";

export const metadata: Metadata = {
  title: "Action Successful",
  description: "Authentication action completed successfully.",
};

export default function AuthSuccessPage() {
  return (
    <AuthSuccessCard
      title="Authentication Complete"
      description="Your account credentials and security preferences have been saved."
      buttonText="Go to Sign In"
      buttonHref="/login"
    />
  );
}
