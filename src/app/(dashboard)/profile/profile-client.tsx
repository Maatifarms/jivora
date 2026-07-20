"use client";

import * as React from "react";
import { UserRole } from "@/types/auth.types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/ui/avatar";

interface UserProfileData {
  role: UserRole;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  // Role-specific fields
  taxId?: string; // For Supplier/Manufacturer
  procurementBudget?: string; // For Buyer
  exportLicense?: string; // For Exporter
}

export function ProfileClient({ initialData }: { initialData: UserProfileData }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [data, setData] = React.useState(initialData);

  const handleSave = () => {
    // API call would go here
    setIsEditing(false);
  };

  return (
    <div className="grid gap-6 max-w-4xl">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar 
            fallback={data.fullName.slice(0, 2).toUpperCase()} 
            size="xl" 
            className="h-20 w-20"
          />
          <div className="flex-1">
            <CardTitle>{data.fullName}</CardTitle>
            <CardDescription className="capitalize">{data.role.toLowerCase()} Profile</CardDescription>
          </div>
          <Button 
            variant={isEditing ? "default" : "outline"}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName"
                value={data.fullName}
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input 
                id="companyName"
                value={data.companyName}
                onChange={(e) => setData({ ...data, companyName: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            {/* Role-specific fields */}
            {(data.role === "SUPPLIER" || data.role === "MANUFACTURER") && (
              <div className="space-y-2">
                <Label htmlFor="taxId">Tax ID / VAT</Label>
                <Input 
                  id="taxId"
                  value={data.taxId || ""}
                  onChange={(e) => setData({ ...data, taxId: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            )}

            {data.role === "BUYER" && (
              <div className="space-y-2">
                <Label htmlFor="budget">Annual Procurement Budget</Label>
                <Input 
                  id="budget"
                  value={data.procurementBudget || ""}
                  onChange={(e) => setData({ ...data, procurementBudget: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            )}

            {data.role === "EXPORTER" && (
              <div className="space-y-2">
                <Label htmlFor="license">Export License No.</Label>
                <Input 
                  id="license"
                  value={data.exportLicense || ""}
                  onChange={(e) => setData({ ...data, exportLicense: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
