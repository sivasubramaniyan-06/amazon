"use client";

import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Search } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const results = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.brand.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Search Results" }]} className="mb-6" />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          Search results for "{query}"
        </h1>
        <p className="text-muted-foreground mt-1">{results.length} items found</p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {results.map((product, i) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 flex flex-col items-center">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
            <Search className="w-8 h-8 text-muted-foreground opacity-50" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">No results found</h2>
          <p className="text-muted-foreground">Try checking your spelling or using more general terms.</p>
        </div>
      )}
    </div>
  );
}
