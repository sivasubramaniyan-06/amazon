import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/data/categories";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "All Categories | ShopArc",
  description: "Browse all product categories on ShopArc.",
};

export default function CategoriesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Categories" }]} className="mb-6" />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">All Categories</h1>
        <p className="text-muted-foreground mt-2">Find exactly what you're looking for by browsing our extensive categories.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, i) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="group flex flex-col items-center p-6 bg-card border border-border/60 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up text-center"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div 
              className="w-24 h-24 rounded-full overflow-hidden mb-4 relative flex items-center justify-center border-4 border-muted group-hover:border-primary/20 transition-all duration-300 group-hover:scale-105"
              style={{ backgroundColor: cat.color + "20" }}
            >
               <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">{cat.productCount.toLocaleString()} products</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
