import React from "react";
import { EmptyState } from "@/components/ui/empty-state";
import { PackageSearch, Building2, ShoppingCart, MessageSquare, Bell, Search } from "lucide-react";

export interface PresetEmptyStateProps {
  actionLabel?: string;
  onAction?: () => void;
}

export function NoProductsState({ actionLabel = "Post Product RFQ", onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={<PackageSearch className="h-10 w-10 text-muted-foreground" />}
      title="No Products Found"
      description="No catalog items matched your current search filters or category parameters."
      actionLabel={actionLabel}
      onAction={onAction}
    />
  );
}

export function NoCompaniesState({ actionLabel = "Browse Supplier Hub", onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={<Building2 className="h-10 w-10 text-muted-foreground" />}
      title="No Verified Companies"
      description="No verified trade suppliers or factory profiles were found for this query."
      actionLabel={actionLabel}
      onAction={onAction}
    />
  );
}

export function NoOrdersState({ actionLabel = "Create New Order", onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={<ShoppingCart className="h-10 w-10 text-muted-foreground" />}
      title="No Active Trade Contracts"
      description="You currently have no active purchase orders or trade escrow agreements."
      actionLabel={actionLabel}
      onAction={onAction}
    />
  );
}

export function NoMessagesState({ actionLabel = "Start Trade Inquiry", onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={<MessageSquare className="h-10 w-10 text-muted-foreground" />}
      title="No Conversations Yet"
      description="Inquiries and direct trade messages from buyers and suppliers will appear here."
      actionLabel={actionLabel}
      onAction={onAction}
    />
  );
}

export function NoNotificationsState({ actionLabel, onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={<Bell className="h-10 w-10 text-muted-foreground" />}
      title="All Caught Up"
      description="You have no unread trade alerts, RFQ quotes, or system notifications."
      actionLabel={actionLabel}
      onAction={onAction}
    />
  );
}

export function NoSearchResultsState({ actionLabel = "Reset Filters", onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={<Search className="h-10 w-10 text-muted-foreground" />}
      title="No Matching Results"
      description="Try adjusting your keywords, price range, or country filters to find what you need."
      actionLabel={actionLabel}
      onAction={onAction}
    />
  );
}
