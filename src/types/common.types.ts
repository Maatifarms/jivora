import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export type DynamicComponentProps<T extends ElementType> = BaseComponentProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseComponentProps> & {
    as?: T;
  };

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export type StatusType = "active" | "inactive" | "pending" | "suspended" | "verified";
