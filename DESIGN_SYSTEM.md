# JIVORA — Design System & Token Specification

This document defines the Design Tokens, Color Palette, Typography Scale, Spacing Grid, Elevation Shadows, and Utility Classes for JIVORA.

---

## 1. HSL Semantic Color Tokens (`tokens.css`)

Colors are defined using HSL variables to support instant theme switching.

| Token Name | Light HSL | Dark HSL | Usage |
| :--- | :--- | :--- | :--- |
| `--primary` | `220 90% 48%` | `217 91% 60%` | Primary B2B Brand Blue |
| `--secondary` | `215 25% 27%` | `217 19% 27%` | Slate Neutral Accent |
| `--accent` | `210 40% 96%` | `215 25% 15%` | Subtle Highlight Surface |
| `--success` | `158 75% 38%` | `158 64% 45%` | Emerald Verified / Approved |
| `--warning` | `38 92% 50%` | `38 92% 50%` | Amber Pending / Caution |
| `--destructive` | `0 84% 60%` | `0 62% 30%` | Rose Error / Cancelled |
| `--info` | `199 89% 48%` | `199 89% 60%` | Sky Blue In-Transit |
| `--background` | `0 0% 100%` | `222 47% 11%` | Page Background |
| `--surface` | `210 40% 98%` | `217 33% 17%` | Surface Cards |
| `--border` | `214 32% 91%` | `217 19% 27%` | Component Borders |
| `--ring` | `220 90% 48%` | `217 91% 60%` | Accessible Focus Ring |

---

## 2. Typography Scale

- **Display**: `2.5rem` / `3.5rem` (Font Weight: 900)
- **H1**: `2rem` / `2.5rem` (Font Weight: 800)
- **H2**: `1.5rem` / `2rem` (Font Weight: 700)
- **H3**: `1.25rem` / `1.75rem` (Font Weight: 700)
- **H4**: `1.125rem` / `1.5rem` (Font Weight: 600)
- **Body Large**: `1rem` / `1.5rem`
- **Body**: `0.875rem` / `1.25rem`
- **Small**: `0.75rem` / `1rem`

---

## 3. Custom CSS Utility Classes (`globals.css`)

- `.b2b-container`: Centered container (`max-w-7xl px-4 sm:px-6 lg:px-8`).
- `.b2b-section`: Standardized section vertical padding (`py-10 sm:py-16`).
- `.b2b-focus-ring`: Accessible outline ring (`focus-visible:ring-2 focus-visible:ring-ring`).
- `.b2b-card`: Card surface styled with radius & subtle border.
- `.glass-panel`: Dynamic glassmorphism backdrop (`backdrop-blur bg-background/80`).
- `.bg-b2b-gradient`: Primary-to-indigo brand gradient.
