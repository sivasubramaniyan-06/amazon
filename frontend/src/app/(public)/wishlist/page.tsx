"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartOff, ShoppingCart, Trash2 } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import ProductCard from "@/components/product/ProductCard";

const INITIAL_WISHLIST = [PRODUCTS[1], PRODUCTS[3], PRODUCTS[4]];

export default function WishlistPage() {
  const [items, setItems] = useState(INITIAL_WISHLIST);

  if (items.length === 0) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <HeartOff className="w-10 h-10 text-muted-foreground opacity-50" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Your Wishlist is Empty</h1>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">Save items that you like in your wishlist. Review them anytime and easily move them to the cart.</p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/products">Explore Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Wishlist" }]} className="mb-6" />
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Wishlist</h1>
          <p className="text-sm text-muted-foreground mt-1">{items.length} items</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((product) => (
          <div key={product.id} className="relative group">
            <ProductCard product={product} />
            <button
              onClick={() => setItems(items.filter(i => i.id !== product.id))}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 shadow text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-50"
              title="Remove from wishlist"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
