import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { TRENDING_PRODUCTS } from "@/lib/data/products";

export default function TrendingProducts() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-8" aria-labelledby="trending-heading">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 id="trending-heading" className="text-2xl font-bold text-foreground">Trending Now</h2>
            <p className="text-muted-foreground text-sm">What everyone is buying this week</p>
          </div>
        </div>
        <Link href="/products?sort=trending" className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {TRENDING_PRODUCTS.slice(0, 5).map((product, i) => (
          <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="relative">
              <span className="absolute -top-2 -left-2 z-10 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow">
                {i + 1}
              </span>
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
