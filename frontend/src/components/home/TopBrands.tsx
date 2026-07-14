import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRANDS } from "@/lib/data/misc";

export default function TopBrands() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-8" aria-labelledby="brands-heading">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 id="brands-heading" className="text-2xl font-bold text-foreground">Top Brands</h2>
          <p className="text-muted-foreground text-sm mt-0.5">Shop from world-class brands</p>
        </div>
        <Link href="/products" className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
          All Brands <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {BRANDS.map((brand, i) => (
          <Link
            key={brand.id}
            href={`/products?brand=${brand.name}`}
            className="group flex flex-col items-center gap-2 bg-card border border-border/60 rounded-2xl p-4 hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="w-12 h-10 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
              {/* Brand logo text fallback since SVG external URLs may not load */}
              <span className="text-sm font-bold text-foreground text-center leading-tight">{brand.name}</span>
            </div>
            <span className="text-[11px] text-muted-foreground">{brand.productCount}+ items</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
