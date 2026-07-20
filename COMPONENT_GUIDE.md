# JIVORA — Component Catalog Guide

This catalog lists all 65+ reusable components across Shared UI, Business, Authentication, Navigation, and Layout categories.

---

## 1. Shared UI Components (`@/components/ui`)

| Component | Purpose | Key Props / Variants |
| :--- | :--- | :--- |
| `Button` | Primary action button | `variant` (`default`, `destructive`, `outline`, `secondary`, `ghost`, `b2b-gradient`, `success`), `size` (`sm`, `md`, `lg`, `icon`), `isLoading`, `leftIcon`, `rightIcon` |
| `Input` | Text input control | `label`, `error`, `helperText`, `leftIcon`, `rightIcon` |
| `Textarea` | Multiline text control | `label`, `error`, `helperText`, `rows` |
| `Label` | Field label with asterisk | `required`, `htmlFor` |
| `Select` | Form select dropdown | `options`: `Array<{ value, label }>`, `error` |
| `Checkbox` | Custom SVG checkbox | `label`, `checked`, `onChange` |
| `RadioGroup` | Radio button group | Compound `RadioGroup` and `RadioGroupItem` |
| `Switch` | Accessible toggle switch | `label`, `checked`, `onChange` |
| `OtpInput` | 6-digit OTP input | `value`, `onChange`, `error` |
| `PasswordInput` | Eye toggle password input | `showStrength`, `value`, `onChange`, `error` |
| `Card` | Card container | `variant` (`default`, `outline`, `glass`, `elevated`), `CardHeader`, `CardTitle`, `CardContent` |
| `Badge` | Status pill badge | `variant` (`default`, `secondary`, `destructive`, `outline`, `success`, `warning`, `info`) |
| `Avatar` | Profile image fallback | `src`, `fallback`, `size` (`sm`, `md`, `lg`, `xl`), `status` (`online`, `offline`, `busy`) |
| `Separator` | Divider line | `orientation` (`horizontal`, `vertical`) |
| `Skeleton` | Loading skeleton | `shape` (`rectangle`, `circle`, `text`) |
| `Spinner` | SVG loading spinner | `size` (`sm`, `md`, `lg`, `xl`), `variant` |
| `Alert` | Alert notification box | `variant` (`default`, `info`, `success`, `warning`, `destructive`), `title`, `description` |
| `Dialog` | Modal dialog window | `isOpen`, `onClose`, `DialogHeader`, `DialogFooter`, `DialogTitle` |
| `Sheet` | Slide-out drawer | `isOpen`, `onClose`, `side` (`top`, `bottom`, `left`, `right`) |
| `Popover` | Floating popover box | Floating trigger & panel |
| `Tooltip` | Hover tooltip | `content`, `position` (`top`, `bottom`, `left`, `right`) |
| `DropdownMenu` | Dropdown action menu | `trigger`, `DropdownMenuItem`, `DropdownMenuLabel` |
| `ContextMenu` | Right-click context menu | Desktop right-click trigger & menu |
| `Breadcrumb` | Breadcrumb navigation | Compound `BreadcrumbList`, `Item`, `Link` |
| `Pagination` | Page switcher | `currentPage`, `totalPages`, `onPageChange` |
| `Tabs` | Tab switcher | `TabsList`, `TabsTrigger`, `TabsContent` |
| `Accordion` | Collapsible item | `title`, `children` |
| `EmptyState` | Empty state placeholder | `icon`, `title`, `description`, `actionLabel`, `onAction` |
| `ErrorState` | Error boundary card | `title`, `description`, `onRetry` |
| `LoadingState` | Full page loader | `text`, `variant` |

---

## 2. Business Components (`@/components/business`)

| Component | Purpose | Key Props |
| :--- | :--- | :--- |
| `SearchBar` | Search input with clear button | `value`, `onChange`, `onSearch`, `placeholder` |
| `GlobalSearchInput` | Command palette trigger | `onOpenPalette`, `placeholder` |
| `SearchFilters` | Collapsible filter panel | `title`, `isOpen`, `onReset` |
| `FilterChips` | Active filter chips | `chips`, `onRemoveChip`, `onClearAll` |
| `SortDropdown` | Sort order selector | `value`, `onChange`, `options` |
| `SearchResultsHeader` | Results counter & view mode | `totalResults`, `query`, `viewMode`, `sortValue` |
| `SectionHeader` | Heading for page sections | `title`, `subtitle`, `action`, `align` |
| `HeroHeader` | Marketing hero banner | `badge`, `title`, `description`, `primaryAction`, `secondaryAction` |
| `PageTitleBlock` | Standard page title block | `title`, `badge`, `description` |
| `StatsCard` | Stat with trend arrow | `title`, `value`, `change`, `trend` (`up`, `down`, `neutral`) |
| `CompanyCard` | B2B factory/supplier card | `name`, `category`, `location`, `verificationBadge` |
| `ProductSummaryCard` | B2B product preview card | `title`, `priceRange`, `moq`, `supplierName` |
| `DataTable<T>` | Generic typed table | `columns`, `data`, `isLoading`, `emptyText`, `onRowClick` |
| `TableToolbar` | Table search & CSV export | `searchQuery`, `onSearchChange`, `onExport` |
| `StatusBadge` | Pre-styled B2B status badge | `status` (`APPROVED`, `PENDING`, `VERIFIED`, `REJECTED`) |
| `ProgressIndicator` | Progress bar | `value` (0-100), `label`, `showPercentage` |
| `TimelineItem` | Vertical timeline node | `title`, `timestamp`, `isCompleted`, `isCurrent` |
| `StepIndicator` | Wizard step tracker | `steps`, `currentStepIndex` |
| `ActionMenu` | Row action dropdown | `label`, `items` |
| `ConfirmActionDialog` | Modal confirmation | `isOpen`, `onConfirm`, `title`, `description` |
