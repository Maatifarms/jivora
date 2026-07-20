import { ComponentType, SVGProps } from "react";
import { UserRole } from "./auth.types";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: IconComponent;
  badge?: string;
  roles?: UserRole[];
}

export interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
  icon?: IconComponent;
  featured?: boolean;
}

export interface MegaMenuCategory {
  id: string;
  title: string;
  icon?: IconComponent;
  subcategories: MegaMenuItem[];
}

export interface HeaderNavConfig {
  mainNav: NavItem[];
  megaMenu: MegaMenuCategory[];
  quickActions: NavItem[];
}

export interface NavItemConfig {
  id: string;
  label: string;
  href: string;
  icon?: IconComponent;
  children?: NavItemConfig[];
  badge?: string;
  permissions?: string[];
  roles?: UserRole[];
  disabled?: boolean;
  external?: boolean;
  description?: string;
}

export interface NavDropdownCategory {
  id: string;
  title: string;
  icon?: IconComponent;
  items: NavItemConfig[];
}

export interface NavDropdownConfig {
  id: string;
  label: string;
  categories: NavDropdownCategory[];
}

export interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSectionConfig {
  id: string;
  title: string;
  links: FooterLinkItem[];
}

export interface SidebarSectionConfig {
  title?: string;
  items: NavItemConfig[];
}

export interface SidebarConfig {
  role: UserRole;
  sections: SidebarSectionConfig[];
}

export interface PublicNavConfig {
  mainNav: NavItemConfig[];
  dropdowns: {
    categories: NavDropdownConfig;
    products: NavDropdownConfig;
    solutions: NavDropdownConfig;
    resources: NavDropdownConfig;
  };
  footer: FooterSectionConfig[];
}
