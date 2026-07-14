"use client";

import { CheckCircle2, Truck, Package, Home } from "lucide-react";
import Image from "next/image";
import { ORDERS } from "@/lib/data/misc";

export default function TrackOrderPage() {
  const order = ORDERS[0];
  const item = order.items[0];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Track Order</h1>

      <div className="bg-card border border-border/60 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row gap-6 mb-8 border-b border-border pb-6">
          <div className="w-24 h-24 bg-muted rounded-xl border border-border relative overflow-hidden shrink-0">
            <Image src={item.thumbnail} alt={item.name} fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-bold text-lg mb-1">Arriving Tomorrow by 9 PM</h2>
            <p className="text-sm text-muted-foreground font-medium line-clamp-2">{item.name}</p>
            <p className="text-sm mt-2"><span className="text-muted-foreground">Tracking ID:</span> <span className="font-semibold">SARC8472910482</span></p>
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto py-4">
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-1 bg-muted sm:-translate-x-1/2 rounded-full" />
          <div className="absolute left-8 sm:left-1/2 top-4 h-1/2 w-1 bg-primary sm:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between sm:text-center sm:w-1/2 pr-0 sm:pr-12 gap-4 pl-20 sm:pl-0">
              <div className="sm:ml-auto text-left sm:text-right w-full">
                <p className="font-bold text-foreground">Order Placed</p>
                <p className="text-sm text-muted-foreground">Oct 23, 2024 · 10:30 AM</p>
              </div>
              <div className="absolute left-6 sm:right-[-20px] sm:left-auto top-1 sm:top-auto w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white z-10 ring-4 ring-card">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between sm:text-center sm:w-1/2 sm:ml-auto pl-20 sm:pl-12 gap-4">
              <div className="absolute left-6 sm:left-[-20px] top-1 sm:top-auto w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white z-10 ring-4 ring-card">
                <Package className="w-5 h-5" />
              </div>
              <div className="text-left w-full">
                <p className="font-bold text-foreground">Shipped</p>
                <p className="text-sm text-muted-foreground">Oct 24, 2024 · 02:15 PM</p>
                <p className="text-xs text-muted-foreground mt-1">Package has left the Amazon facility in Bhiwandi, Maharashtra</p>
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between sm:text-center sm:w-1/2 pr-0 sm:pr-12 gap-4 pl-20 sm:pl-0 opacity-50">
              <div className="sm:ml-auto text-left sm:text-right w-full">
                <p className="font-bold text-foreground">Out for Delivery</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
              <div className="absolute left-6 sm:right-[-20px] sm:left-auto top-1 sm:top-auto w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground z-10 ring-4 ring-card">
                <Truck className="w-5 h-5" />
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between sm:text-center sm:w-1/2 sm:ml-auto pl-20 sm:pl-12 gap-4 opacity-50">
              <div className="absolute left-6 sm:left-[-20px] top-1 sm:top-auto w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground z-10 ring-4 ring-card">
                <Home className="w-5 h-5" />
              </div>
              <div className="text-left w-full">
                <p className="font-bold text-foreground">Delivered</p>
                <p className="text-sm text-muted-foreground">Expected by Tomorrow, 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
