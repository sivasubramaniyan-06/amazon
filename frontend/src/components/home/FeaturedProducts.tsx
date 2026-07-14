import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { FEATURED_PRODUCTS } from "@/lib/data/products";

export default function FeaturedProducts() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-8" aria-labelledby="featured-heading">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 id="featured-heading" className="text-2xl font-bold text-foreground">Featured Products</h2>
          <p className="text-muted-foreground text-sm mt-0.5">Handpicked by our experts just for you</p>
        </div>
        <Link href="/products" className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {FEATURED_PRODUCTS.slice(0, 8).map((product, i) => (
          <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
