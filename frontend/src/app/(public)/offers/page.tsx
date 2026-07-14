import { Zap } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "Today's Offers & Deals | ShopArc",
};

export default function OffersPage() {
  const deals = PRODUCTS.filter(p => p.discountPercent > 0).sort((a, b) => b.discountPercent - a.discountPercent);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Offers & Deals" }]} className="mb-6" />

      {/* Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 rounded-2xl p-8 md:p-12 text-white mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 fill-white text-white animate-bounce-gentle" />
            <span className="font-bold uppercase tracking-wider text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Mega Sale</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Up to 70% Off on Top Brands</h1>
          <p className="text-white/90 text-lg">Don't miss out on these limited time offers across electronics, fashion, and more.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">Top Deals Right Now</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {deals.map((product, i) => (
          <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
