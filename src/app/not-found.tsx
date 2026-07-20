import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background">
      <Logo size="lg" />
      <h1 className="font-heading text-6xl font-black text-primary mt-6">404</h1>
      <h2 className="font-heading text-xl font-semibold mt-2">Resource Not Found</h2>
      <p className="text-sm text-muted-foreground max-w-sm mt-2 mb-6">
        The B2B route or resource you are looking for does not exist or has been relocated.
      </p>
      <Link href="/">
        <Button variant="b2b-gradient">Return to Safety</Button>
      </Link>
    </div>
  );
}
