export default function LoadingSkeleton({ count = 3, type = "card" }: { count?: number; type?: "card" | "list" | "table" }) {
  if (type === "list") {
    return (
      <div className="space-y-3 w-full animate-pulse">
        {[...Array(count)].map((_, i) => (
          <div key={i} className="h-16 w-full rounded-2xl bg-grey-medium/60 border border-grey-border/40"></div>
        ))}
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="space-y-2 w-full animate-pulse">
        <div className="h-10 w-full rounded-xl bg-grey-medium/70"></div>
        {[...Array(count)].map((_, i) => (
          <div key={i} className="h-12 w-full rounded-lg bg-grey-medium/40"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="rounded-2xl border border-grey-border/60 bg-white p-6 space-y-4 shadow-sm">
          <div className="h-40 w-full rounded-xl bg-grey-medium/60"></div>
          <div className="space-y-2">
            <div className="h-4 w-3/4 rounded bg-grey-medium/60"></div>
            <div className="h-3 w-1/2 rounded bg-grey-medium/40"></div>
          </div>
          <div className="h-10 w-full rounded-xl bg-grey-medium/50 pt-2"></div>
        </div>
      ))}
    </div>
  );
}
