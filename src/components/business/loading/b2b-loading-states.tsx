import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function TableLoading() {
  return (
    <div className="w-full space-y-3 p-4 border rounded-xl bg-card">
      <div className="flex justify-between items-center pb-2">
        <Skeleton shape="rectangle" className="h-8 w-48" />
        <Skeleton shape="rectangle" className="h-8 w-24" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} shape="rectangle" className="h-10 w-full" />
        ))}
      </div>
    </div>
  );
}

export function CardLoading() {
  return (
    <Card variant="outline" className="p-5 space-y-4">
      <div className="flex justify-between items-start">
        <Skeleton shape="circle" className="h-10 w-10" />
        <Skeleton shape="rectangle" className="h-4 w-16" />
      </div>
      <Skeleton shape="text" className="h-5 w-3/4" />
      <Skeleton shape="text" className="h-4 w-1/2" />
      <Skeleton shape="rectangle" className="h-8 w-full mt-4" />
    </Card>
  );
}

export function DashboardLoading() {
  return (
    <div className="space-y-6 w-full animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} variant="elevated" className="p-5 space-y-3">
            <Skeleton shape="text" className="h-4 w-24" />
            <Skeleton shape="text" className="h-8 w-32" />
          </Card>
        ))}
      </div>
      <TableLoading />
    </div>
  );
}

export function SearchLoading() {
  return (
    <div className="space-y-4 w-full">
      <div className="flex justify-between items-center border-b pb-3">
        <Skeleton shape="text" className="h-6 w-48" />
        <Skeleton shape="rectangle" className="h-8 w-32" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardLoading key={i} />
        ))}
      </div>
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="space-y-6 w-full p-6 max-w-7xl mx-auto">
      <div className="space-y-2">
        <Skeleton shape="text" className="h-8 w-64" />
        <Skeleton shape="text" className="h-4 w-96" />
      </div>
      <DashboardLoading />
    </div>
  );
}
