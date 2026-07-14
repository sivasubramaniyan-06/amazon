"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  Star, Heart, Share2, Shield, Truck, RotateCcw, 
  Minus, Plus, ShoppingCart, Zap, CheckCircle2, ChevronRight 
} from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/lib/data/products";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/product/ProductCard";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = getProductBySlug(params.id);
  
  if (!product) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb 
        items={[
          { label: "Products", href: "/products" },
          { label: product.category, href: `/categories/${product.category.toLowerCase()}` },
          { label: product.name }
        ]} 
        className="mb-6" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Product Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.discountPercent > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 text-sm rounded-full shadow-lg">
                {product.discountPercent}% OFF
              </Badge>
            )}
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImage === i ? "border-primary shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {/* Brand & Title */}
          <div className="mb-2">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{product.brand}</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-1 leading-tight">
              {product.name}
            </h1>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-4 mt-2 mb-6">
            <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded-md border border-amber-200 dark:border-amber-900">
              <span className="font-bold text-amber-700 dark:text-amber-500">{product.rating}</span>
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <span className="text-sm text-muted-foreground underline decoration-dashed cursor-pointer">
              {product.reviewCount.toLocaleString()} Ratings & Reviews
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-foreground">{formatPrice(product.currentPrice)}</span>
              {product.originalPrice > product.currentPrice && (
                <span className="text-xl text-muted-foreground line-through mb-1">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">Inclusive of all taxes</p>
          </div>

          {/* Highlights */}
          <div className="mb-8 bg-muted/30 rounded-xl p-4 border border-border/50">
            <h3 className="font-semibold text-sm mb-3">Key Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity & Actions */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold">Quantity</span>
              <div className="flex items-center border border-border rounded-full h-10 w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 flex items-center justify-center hover:text-primary transition-colors disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stockCount || 10, quantity + 1))}
                  className="flex-1 flex items-center justify-center hover:text-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {product.stockStatus === "low_stock" && (
                <span className="text-sm text-amber-600 font-medium">Only {product.stockCount} left!</span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="flex-1 rounded-full gap-2 text-base h-14 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Zap className="w-5 h-5 fill-current" /> Buy Now
              </Button>
              <Button size="lg" variant="outline" className="flex-1 rounded-full gap-2 text-base h-14 border-2">
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full h-14 w-14 shrink-0 border-2"
                onClick={() => setWishlisted(!wishlisted)}
              >
                <Heart className={`w-6 h-6 ${wishlisted ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">1 Year<br/>Warranty</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <RotateCcw className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{product.returnDays} Days<br/>Replacement</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">Fast<br/>Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Tabs Section */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full justify-start border-b border-border h-auto p-0 bg-transparent rounded-none">
          <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base">
            Description
          </TabsTrigger>
          <TabsTrigger value="specifications" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base">
            Specifications
          </TabsTrigger>
          <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base">
            Reviews ({product.reviewCount})
          </TabsTrigger>
        </TabsList>
        <div className="py-6">
          <TabsContent value="description" className="mt-0">
            <p className="text-muted-foreground leading-relaxed max-w-4xl">{product.description}</p>
          </TabsContent>
          <TabsContent value="specifications" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 max-w-4xl">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex py-3 border-b border-border/50">
                  <span className="w-1/3 font-medium text-foreground">{key}</span>
                  <span className="w-2/3 text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-0">
             <p className="text-muted-foreground">Reviews will be loaded here.</p>
          </TabsContent>
        </div>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Similar Products</h2>
            <Button variant="ghost" className="gap-1">View All <ChevronRight className="w-4 h-4" /></Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
