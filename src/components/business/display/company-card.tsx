import * as React from "react";
import { ShieldCheck, MapPin, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CompanyCardProps {
  name: string;
  category: string;
  location: string;
  verificationBadge?: string;
  yearEstablished?: number;
  responseRate?: string;
  onContactSupplier?: () => void;
  className?: string;
}

export function CompanyCard({
  name,
  category,
  location,
  verificationBadge = "Verified Supplier",
  yearEstablished = 2012,
  responseRate = "98.5%",
  onContactSupplier,
  className,
}: CompanyCardProps) {
  return (
    <Card variant="outline" className={cn("p-5 space-y-4 hover:shadow-lg transition-all", className)}>
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Building2 className="h-4 w-4 text-primary" />
            <h4 className="font-heading text-base font-bold">{name}</h4>
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>

        {verificationBadge && (
          <Badge variant="success" className="flex items-center space-x-1">
            <ShieldCheck className="h-3 w-3" />
            <span>{verificationBadge}</span>
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground border-y py-2">
        <div className="flex items-center space-x-1">
          <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="truncate">{location}</span>
        </div>
        <div>Established: <strong className="text-foreground">{yearEstablished}</strong></div>
        <div>Response Rate: <strong className="text-emerald-600 font-semibold">{responseRate}</strong></div>
      </div>

      {onContactSupplier && (
        <Button variant="outline" size="sm" onClick={onContactSupplier} className="w-full">
          Contact Supplier
        </Button>
      )}
    </Card>
  );
}
