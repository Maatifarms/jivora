import { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register Business",
  description: "Create a verified enterprise business account on JIVORA.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
