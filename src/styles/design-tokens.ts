/**
 * JIVORA B2B Design Tokens Registry
 * Strongly typed single source of truth for programmatic token access.
 * Role: Developer 1 (Frontend Architect)
 */

export const colors = {
  primary: "hsl(var(--primary))",
  primaryForeground: "hsl(var(--primary-foreground))",
  secondary: "hsl(var(--secondary))",
  secondaryForeground: "hsl(var(--secondary-foreground))",
  accent: "hsl(var(--accent))",
  accentForeground: "hsl(var(--accent-foreground))",
  success: "hsl(var(--success))",
  successForeground: "hsl(var(--success-foreground))",
  warning: "hsl(var(--warning))",
  warningForeground: "hsl(var(--warning-foreground))",
  error: "hsl(var(--destructive))",
  errorForeground: "hsl(var(--destructive-foreground))",
  info: "hsl(var(--info))",
  infoForeground: "hsl(var(--info-foreground))",
  background: "hsl(var(--background))",
  surface: "hsl(var(--card))",
  surfaceForeground: "hsl(var(--card-foreground))",
  surfaceElevated: "hsl(var(--surface-elevated))",
  surfaceElevatedForeground: "hsl(var(--surface-elevated-foreground))",
  foreground: "hsl(var(--foreground))",
  border: "hsl(var(--border))",
  borderSubtle: "hsl(var(--border-subtle))",
  borderFocus: "hsl(var(--ring))",
  muted: "hsl(var(--muted))",
  mutedForeground: "hsl(var(--muted-foreground))",
} as const;

export const typographyScale = {
  display: {
    fontSize: "var(--font-size-display)",
    lineHeight: "var(--line-height-tight)",
    fontWeight: "800",
    letterSpacing: "-0.025em",
  },
  h1: {
    fontSize: "var(--font-size-h1)",
    lineHeight: "var(--line-height-tight)",
    fontWeight: "700",
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: "var(--font-size-h2)",
    lineHeight: "var(--line-height-snug)",
    fontWeight: "700",
    letterSpacing: "-0.015em",
  },
  h3: {
    fontSize: "var(--font-size-h3)",
    lineHeight: "var(--line-height-snug)",
    fontWeight: "600",
    letterSpacing: "-0.01em",
  },
  h4: {
    fontSize: "var(--font-size-h4)",
    lineHeight: "var(--line-height-snug)",
    fontWeight: "600",
  },
  bodyLarge: {
    fontSize: "var(--font-size-body-lg)",
    lineHeight: "var(--line-height-relaxed)",
    fontWeight: "400",
  },
  body: {
    fontSize: "var(--font-size-body)",
    lineHeight: "var(--line-height-normal)",
    fontWeight: "400",
  },
  small: {
    fontSize: "var(--font-size-small)",
    lineHeight: "var(--line-height-normal)",
    fontWeight: "500",
  },
  caption: {
    fontSize: "var(--font-size-caption)",
    lineHeight: "var(--line-height-normal)",
    fontWeight: "400",
  },
  label: {
    fontSize: "var(--font-size-label)",
    lineHeight: "var(--line-height-none)",
    fontWeight: "600",
    letterSpacing: "0.025em",
  },
} as const;

export const spacingScale = {
  "2xs": "var(--spacing-2xs)",
  xs: "var(--spacing-xs)",
  sm: "var(--spacing-sm)",
  md: "var(--spacing-md)",
  lg: "var(--spacing-lg)",
  xl: "var(--spacing-xl)",
  "2xl": "var(--spacing-2xl)",
  "3xl": "var(--spacing-3xl)",
  "4xl": "var(--spacing-4xl)",
} as const;

export const borderRadiusTokens = {
  none: "var(--radius-none)",
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  full: "var(--radius-full)",
} as const;

export const shadowLevels = {
  none: "var(--shadow-none)",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  xl: "var(--shadow-xl)",
  "2xl": "var(--shadow-2xl)",
  inner: "var(--shadow-inner)",
  glass: "var(--shadow-glass)",
} as const;

export const motionTokens = {
  easeSubtle: "var(--ease-subtle)",
  easeBounce: "var(--ease-bounce)",
  durationFast: "var(--duration-fast)",
  durationNormal: "var(--duration-normal)",
  durationSlow: "var(--duration-slow)",
} as const;

export const designTokens = {
  colors,
  typographyScale,
  spacingScale,
  borderRadiusTokens,
  shadowLevels,
  motionTokens,
} as const;

export type DesignTokens = typeof designTokens;
