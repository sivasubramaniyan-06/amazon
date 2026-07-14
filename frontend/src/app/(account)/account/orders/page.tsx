"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, PackageSearch, RefreshCcw } from "lucide-react";
import { ORDERS } from "@/lib/data/misc";
import { Button } from "@/components/ui/button";

export default function MyOrdersPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">My Orders</h1>

      <div className="space-y-6">
        {ORDERS.map((order) => (
          <div key={order.id} className="bg-card border border-border/60 rounded-2xl overflow-hidden">
            <div className="bg-muted/30 p-4 border-b border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground uppercase text-xs font-semibold">Order Placed</p>
                  <p className="font-medium text-foreground mt-0.5">{order.date}</p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase text-xs font-semibold">Total</p>
                  <p className="font-medium text-foreground mt-0.5">{formatPrice(order.totalAmount)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase text-xs font-semibold">Order #</p>
                  <p className="font-medium text-foreground mt-0.5">{order.id}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild className="rounded-full shrink-0">
                <Link href={`/account/orders/${order.id}`}>View Invoice</Link>
              </Button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-2.5 h-2.5 rounded-full ${
                  order.status === 'delivered' ? 'bg-emerald-500' :
                  order.status === 'processing' ? 'bg-amber-500' :
                  'bg-blue-500'
                }`} />
                <h3 className="font-bold text-lg">
                  {order.status === 'delivered' ? 'Delivered on Oct 24' :
                   order.status === 'processing' ? 'Processing' : 'Shipped'}
                </h3>
              </div>

              <div className="space-y-6">
                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-20 h-20 bg-muted rounded-xl border border-border relative overflow-hidden shrink-0">
                      <Image src={item.thumbnail} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <Link href={`/products/mock-id`} className="font-medium text-foreground hover:text-primary line-clamp-2 transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">Qty: {item.quantity}</p>
                      
                      <div className="flex gap-3 mt-3">
                        <Button variant="outline" size="sm" className="h-8 text-xs rounded-full gap-1.5">
                          <RefreshCcw className="w-3 h-3" /> Buy it again
                        </Button>
                        <Button asChild size="sm" className="h-8 text-xs rounded-full gap-1.5">
                           <Link href="/account/track-order"><PackageSearch className="w-3 h-3" /> Track item</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
