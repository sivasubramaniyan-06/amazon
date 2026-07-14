"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Truck, CreditCard, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const STEPS = ["Address", "Delivery", "Payment"];
const CART = [{ product: PRODUCTS[0], qty: 1 }, { product: PRODUCTS[8], qty: 1 }];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  
  const subtotal = CART.reduce((acc, item) => acc + (item.product.currentPrice * item.qty), 0);
  const total = subtotal + 50; // Add 50 for delivery

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="bg-muted/10 min-h-[calc(100vh-140px)]">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Progress Tracker */}
        <div className="flex items-center justify-center mb-8">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  step > i + 1 ? "bg-emerald-500 text-white" : step === i + 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {step > i + 1 ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                </div>
                <span className={`text-xs font-medium ${step >= i + 1 ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-12 sm:w-24 h-1 mx-2 sm:mx-4 rounded-full -mt-5 ${step > i + 1 ? "bg-emerald-500" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Checkout Flow */}
          <div className="flex-1 space-y-6">
            
            {/* Step 1: Address */}
            <div className={`bg-card border border-border/60 rounded-2xl p-6 ${step !== 1 && "opacity-70"}`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">1. Delivery Address</h2>
                {step > 1 && <Button variant="ghost" size="sm" onClick={() => setStep(1)}>Edit</Button>}
              </div>
              
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Phone Number" className="sm:col-span-2" />
                    <Input placeholder="PIN Code" />
                    <Input placeholder="City" />
                    <Input placeholder="Street Address" className="sm:col-span-2" />
                  </div>
                  <Button onClick={() => setStep(2)} className="w-full sm:w-auto rounded-full">Continue to Delivery</Button>
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">
                  Rahul Verma<br/>42, Lotus Apartment, Bandra West<br/>Mumbai, Maharashtra 400050<br/>+91 98765 43210
                </div>
              )}
            </div>

            {/* Step 2: Delivery */}
            <div className={`bg-card border border-border/60 rounded-2xl p-6 ${step !== 2 && "opacity-70"}`}>
               <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">2. Delivery Options</h2>
                {step > 2 && <Button variant="ghost" size="sm" onClick={() => setStep(2)}>Edit</Button>}
              </div>

              {step === 2 ? (
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-4 border border-primary bg-primary/5 rounded-xl cursor-pointer">
                    <input type="radio" name="delivery" defaultChecked className="mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground flex justify-between">Standard Delivery <span>₹50</span></p>
                      <p className="text-sm text-muted-foreground mt-0.5">Delivery by tomorrow, 9 PM</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-4 border border-border hover:border-primary/50 rounded-xl cursor-pointer">
                    <input type="radio" name="delivery" className="mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground flex justify-between">Express Delivery <span>₹150</span></p>
                      <p className="text-sm text-muted-foreground mt-0.5">Delivery by today, 10 PM</p>
                    </div>
                  </label>
                  <div className="pt-4">
                    <Button onClick={() => setStep(3)} className="w-full sm:w-auto rounded-full">Continue to Payment</Button>
                  </div>
                </div>
              ) : step > 2 ? (
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Standard Delivery (Tomorrow by 9 PM)
                </div>
              ) : null}
            </div>

            {/* Step 3: Payment */}
            <div className={`bg-card border border-border/60 rounded-2xl p-6 ${step !== 3 && "opacity-50 pointer-events-none"}`}>
              <h2 className="text-xl font-bold mb-4">3. Payment Method</h2>
              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border border-primary bg-primary/5 rounded-xl cursor-pointer">
                      <input type="radio" name="payment" defaultChecked />
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span className="font-medium">Credit / Debit Card</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-border hover:border-primary/50 rounded-xl cursor-pointer">
                      <input type="radio" name="payment" />
                      <span className="font-medium">UPI / QR</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-border hover:border-primary/50 rounded-xl cursor-pointer">
                      <input type="radio" name="payment" />
                      <span className="font-medium">Net Banking</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-border hover:border-primary/50 rounded-xl cursor-pointer">
                      <input type="radio" name="payment" />
                      <span className="font-medium">Cash on Delivery</span>
                    </label>
                  </div>
                  
                  <div className="pt-4 bg-muted/20 p-4 rounded-xl border border-border mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Card Number" className="col-span-2 bg-background" />
                      <Input placeholder="MM/YY" className="bg-background" />
                      <Input placeholder="CVV" type="password" maxLength={3} className="bg-background" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild size="lg" className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700">
                      <Link href="/order-success">Pay {formatPrice(total)}</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-card border border-border/60 rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {CART.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-16 h-16 rounded-md bg-muted overflow-hidden relative border border-border">
                      <Image src={item.product.thumbnail} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-2">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">Qty: {item.qty} · {formatPrice(item.product.currentPrice)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="mb-4" />

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>₹50</span>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="flex justify-between mb-6">
                <span className="font-bold text-base">Total</span>
                <span className="font-bold text-lg">{formatPrice(total)}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Your payment information is securely encrypted.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
