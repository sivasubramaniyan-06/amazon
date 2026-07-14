"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingCart, Star, Eye, Zap, BadgeCheck, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  className?: string;
  compact?: boolean;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({ product, className, compact = false }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setWishlisted((prev) => !prev);
  };

  const stockBadge =
    product.stockStatus === "out_of_stock"
      ? { label: "Out of Stock", cls: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" }
      : product.stockStatus === "low_stock"
      ? { label: `Only ${product.stockCount} left`, cls: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" }
      : null;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex flex-col bg-card border border-border/60 rounded-2xl overflow-hidden transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl hover:border-primary/20",
        className
      )}
      style={{ boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 4px 16px -2px rgb(0 0 0 / 0.06)" }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted/30">
        <div className={cn("relative w-full", compact ? "aspect-[4/3]" : "aspect-[4/3]")}>
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Overlay Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {product.discountPercent >= 20 && (
            <Badge className="bg-red-500 hover:bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              -{product.discountPercent}%
            </Badge>
          )}
          {product.isFlashDeal && (
            <span className="badge-prime text-[10px]">
              <Zap className="w-2.5 h-2.5 fill-current" /> Flash
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={cn(
            "absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow",
            "opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0",
            wishlisted
              ? "bg-red-500 text-white scale-110"
              : "bg-white/90 dark:bg-card/90 text-muted-foreground hover:text-red-500 hover:bg-white"
          )}
        >
          <Heart className={cn("w-3.5 h-3.5", wishlisted && "fill-current")} />
        </button>

        {/* Quick View Button */}
        <div
          className={cn(
            "absolute bottom-2 left-2 right-2 transition-all duration-300",
            "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          )}
        >
          <Button
            variant="secondary"
            size="sm"
            className="w-full rounded-full text-xs gap-1 bg-white/90 dark:bg-card/90 hover:bg-white shadow"
            onClick={(e) => e.preventDefault()}
          >
            <Eye className="w-3 h-3" /> Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1.5 p-3 flex-1">
        {/* Brand + Prime */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-primary uppercase tracking-wide">
            {product.brand}
          </span>
          {product.isPrime && (
            <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              <BadgeCheck className="w-3 h-3" /> Prime
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-snug">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : i < product.rating
                    ? "fill-amber-200 text-amber-400"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-base font-bold text-foreground">
            {formatPrice(product.currentPrice)}
          </span>
          {product.originalPrice > product.currentPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Delivery + Stock */}
        <div className="flex items-center justify-between mt-0.5">
          <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
            <Clock className="w-3 h-3" />
            {product.deliveryDays === 1 ? "Tomorrow" : `${product.deliveryDays} days`}
          </span>
          {stockBadge && (
            <span className={cn("text-[10px] font-medium px-1.5 py-0.5 rounded-full", stockBadge.cls)}>
              {stockBadge.label}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          size="sm"
          className={cn(
            "mt-2 w-full rounded-full text-xs gap-1.5 transition-all duration-200",
            addedToCart && "bg-emerald-600 hover:bg-emerald-600"
          )}
          disabled={product.stockStatus === "out_of_stock"}
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          {addedToCart ? "Added!" : product.stockStatus === "out_of_stock" ? "Out of Stock" : "Add to Cart"}
        </Button>
      </div>
    </Link>
  );
}
