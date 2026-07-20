import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { AuthCard } from "./auth-card";
import { AuthHeader } from "./auth-header";
import { AuthFooter } from "./auth-footer";
import { Button } from "@/components/ui/button";

export interface AuthSuccessCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function AuthSuccessCard({
  title = "Authentication Action Successful",
  description = "Your account security state has been updated successfully on JIVORA.",
  buttonText = "Continue to Portal",
  buttonHref = "/login",
}: AuthSuccessCardProps) {
  return (
    <AuthCard>
      <div className="flex justify-center">
        <div className="p-4 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
          <CheckCircle2 className="h-10 w-10" />
        </div>
      </div>

      <AuthHeader title={title} description={description} />

      <div className="pt-2">
        <Link href={buttonHref}>
          <Button variant="b2b-gradient" className="w-full">
            {buttonText}
          </Button>
        </Link>
      </div>

      <AuthFooter>
        <Link href="/" className="text-primary font-semibold hover:underline">
          Return to JIVORA Homepage
        </Link>
      </AuthFooter>
    </AuthCard>
  );
}
