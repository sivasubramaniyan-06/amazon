import { Zap, ChevronRight, X } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="w-full gradient-brand py-2 px-4 text-white text-xs relative overflow-hidden">
      {/* Animated background shimmer */}
      <div className="absolute inset-0 opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />
      <div className="container mx-auto max-w-7xl flex items-center justify-center gap-4 relative">
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <span className="flex items-center gap-1.5 font-medium">
            <Zap className="w-3 h-3 fill-amber-300 text-amber-300" />
            <span className="text-amber-200">Flash Sale:</span>
            Up to 70% OFF on Electronics — Today Only!
          </span>
          <Link
            href="/offers"
            className="flex items-center gap-0.5 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-3 py-0.5 text-white font-semibold text-xs"
          >
            Shop Now <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <button
          aria-label="Dismiss announcement"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
