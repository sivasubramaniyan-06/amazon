"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Mock Cart Items
const INITIAL_CART = [
  { id: "c1", product: PRODUCTS[0], quantity: 1 },
  { id: "c2", product: PRODUCTS[2], quantity: 2 },
];

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_CART);

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.product.currentPrice * item.quantity), 0);
  const totalDiscount = items.reduce((acc, item) => acc + ((item.product.originalPrice - item.product.currentPrice) * item.quantity), 0);
  const delivery = subtotal > 499 ? 0 : 50;
  const total = subtotal + delivery;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <Image src="/empty-cart.svg" alt="Empty Cart" width={48} height={48} className="opacity-50" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Shopping Cart ({items.length} Items)</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          <div className="bg-card border border-border/60 rounded-2xl overflow-hidden">
            {items.map((item, index) => (
              <div key={item.id} className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-muted rounded-xl overflow-hidden shrink-0 border border-border">
                    <Image src={item.product.thumbnail} alt={item.product.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase">{item.product.brand}</span>
                          <h3 className="font-semibold text-foreground mt-1 line-clamp-2">{item.product.name}</h3>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-bold text-foreground">{formatPrice(item.product.currentPrice)}</p>
                          <p className="text-sm text-muted-foreground line-through">{formatPrice(item.product.originalPrice)}</p>
                        </div>
                      </div>
                      <p className="text-sm text-emerald-600 mt-2">In Stock</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded-full h-9">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-9 h-9 flex items-center justify-center hover:text-primary transition-colors disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-9 h-9 flex items-center justify-center hover:text-primary transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm font-medium text-muted-foreground hover:text-destructive flex items-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
                {index < items.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-card border border-border/60 rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-foreground mb-4">Order Summary</h2>
            
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price ({items.length} items)</span>
                <span className="font-medium text-foreground">{formatPrice(subtotal + totalDiscount)}</span>
              </div>
              <div className="flex justify-between text-emerald-600">
                <span>Discount</span>
                <span className="font-medium">-{formatPrice(totalDiscount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Charges</span>
                <span className="font-medium text-foreground">{delivery === 0 ? <span className="text-emerald-600 font-semibold">Free</span> : formatPrice(delivery)}</span>
              </div>
            </div>

            <Separator className="mb-4" />

            <div className="flex justify-between mb-6">
              <span className="font-bold text-foreground text-base">Total Amount</span>
              <span className="font-bold text-foreground text-xl">{formatPrice(total)}</span>
            </div>

            <Button size="lg" className="w-full rounded-full gap-2 text-base h-12">
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Button>

            {totalDiscount > 0 && (
              <p className="text-emerald-600 text-sm font-medium text-center mt-4 flex items-center justify-center gap-1.5">
                <Tag className="w-4 h-4" /> You will save {formatPrice(totalDiscount)} on this order
              </p>
            )}
            
            <div className="mt-6 p-4 bg-muted/30 rounded-xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Safe and Secure Payments</p>
                <p className="text-xs text-muted-foreground mt-1">100% Authentic products. Easy returns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
