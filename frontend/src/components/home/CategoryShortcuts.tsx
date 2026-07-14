import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data/categories";

export default function CategoryShortcuts() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-8" aria-labelledby="categories-heading">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 id="categories-heading" className="text-2xl font-bold text-foreground">Shop by Category</h2>
          <p className="text-muted-foreground text-sm mt-0.5">Find everything you need, all in one place</p>
        </div>
        <Link
          href="/categories"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
        >
          All Categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {FEATURED_CATEGORIES.map((cat, i) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="group flex flex-col items-center gap-2 animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Icon circle */}
            <div
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              style={{ backgroundColor: cat.color + "18" }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="64px"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: cat.color }}
              />
            </div>
            <span className="text-xs font-medium text-center text-foreground group-hover:text-primary transition-colors leading-tight">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
