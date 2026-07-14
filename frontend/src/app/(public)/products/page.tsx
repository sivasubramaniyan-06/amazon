"use client";

import { useState } from "react";
import { Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { CATEGORIES } from "@/lib/data/categories";
import { BRANDS } from "@/lib/data/misc";
import ProductCard from "@/components/product/ProductCard";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SORT_OPTIONS = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Average Rating", value: "rating" },
];

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Products" }]} className="mb-6" />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <div className="space-y-2">
              {CATEGORIES.slice(0, 8).map(c => (
                <label key={c.id} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer">
                  <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                  {c.name}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Brands</h3>
            <div className="space-y-2">
              {BRANDS.map(b => (
                <label key={b.id} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer">
                  <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                  {b.name}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer">
                <input type="radio" name="price" className="border-border text-primary focus:ring-primary" />
                Under ₹5,000
              </label>
              <label className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer">
                <input type="radio" name="price" className="border-border text-primary focus:ring-primary" />
                ₹5,000 - ₹20,000
              </label>
              <label className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer">
                <input type="radio" name="price" className="border-border text-primary focus:ring-primary" />
                Over ₹20,000
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">All Products</h1>
              <p className="text-sm text-muted-foreground mt-1">Showing {PRODUCTS.length} results</p>
            </div>

            <div className="flex items-center gap-2">
              {/* Mobile Filter Trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden gap-2">
                    <Filter className="w-4 h-4" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="py-4 space-y-6">
                    {/* Mobile Filters Content - Same as Desktop Sidebar */}
                    <div>
                      <h3 className="font-semibold text-sm mb-3">Categories</h3>
                      <div className="space-y-2">
                        {CATEGORIES.slice(0, 5).map(c => (
                          <label key={c.id} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <input type="checkbox" className="rounded" /> {c.name}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="hidden sm:inline">Sort by:</span> {sortBy.label}
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {SORT_OPTIONS.map(opt => (
                    <DropdownMenuItem 
                      key={opt.value} 
                      onClick={() => setSortBy(opt)}
                      className={sortBy.value === opt.value ? "bg-muted font-medium" : ""}
                    >
                      {opt.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS.map((product, i) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
