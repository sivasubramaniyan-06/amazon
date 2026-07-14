export function SkeletonCard() {
  return (
    <div className="flex flex-col bg-card border border-border/60 rounded-2xl overflow-hidden">
      {/* Image */}
      <div className="aspect-[4/3] shimmer" />
      {/* Content */}
      <div className="p-3 space-y-2.5">
        <div className="h-3 w-1/3 shimmer rounded-full" />
        <div className="h-4 w-full shimmer rounded-full" />
        <div className="h-4 w-3/4 shimmer rounded-full" />
        <div className="h-3 w-1/2 shimmer rounded-full" />
        <div className="h-5 w-2/5 shimmer rounded-full" />
        <div className="h-8 w-full shimmer rounded-full mt-1" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonBanner() {
  return (
    <div className="w-full aspect-[21/9] shimmer rounded-2xl" />
  );
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 shimmer rounded-full"
          style={{ width: `${100 - i * 10}%` }}
        />
      ))}
    </div>
  );
}
