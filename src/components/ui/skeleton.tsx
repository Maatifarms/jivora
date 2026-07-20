import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: "rectangle" | "circle" | "text";
}

function Skeleton({ className, shape = "rectangle", ...props }: SkeletonProps) {
  const shapeClasses = {
    rectangle: "rounded-md",
    circle: "rounded-full aspect-square",
    text: "rounded h-4 w-3/4",
  };

  return (
    <div
      className={cn("animate-pulse bg-muted/80", shapeClasses[shape], className)}
      {...props}
    />
  );
}

export { Skeleton };
