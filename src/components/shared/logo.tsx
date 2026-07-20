import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: "h-6 w-6 text-base",
    md: "h-8 w-8 text-xl",
    lg: "h-10 w-10 text-2xl",
  };

  return (
    <Link href="/" className={cn("inline-flex items-center space-x-2 font-heading font-extrabold tracking-tight", className)}>
      <div className={cn("flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-indigo-700 text-white shadow-md", sizeMap[size])}>
        <span>J</span>
      </div>
      {showText && (
        <span className={cn("bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent font-bold", sizeMap[size])}>
          JIVORA<span className="text-primary font-light text-xs ml-1 tracking-widest uppercase">B2B</span>
        </span>
      )}
    </Link>
  );
}
