"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Timer } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { FLASH_DEALS } from "@/lib/data/products";

function useCountdown(endTime: Date) {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const diff = endTime.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ h: 0, m: 0, s: 0 }); return; }
      setTimeLeft({
        h: Math.floor(diff / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  return timeLeft;
}

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function FlashDeals() {
  const endTime = new Date(Date.now() + 6 * 3_600_000); // 6 hrs from now
  const { h, m, s } = useCountdown(endTime);

  return (
    <section className="py-8" aria-labelledby="flash-heading">
      {/* Header band */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 py-4 mb-6">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white">
            <Zap className="w-6 h-6 fill-white animate-bounce-gentle" />
            <h2 id="flash-heading" className="text-2xl font-bold">Flash Deals</h2>
            <span className="bg-white/20 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Limited Time
            </span>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2 text-white">
            <Timer className="w-4 h-4" />
            <span className="text-sm font-medium">Ends in:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-lg">
              <span className="bg-white/20 rounded px-2 py-0.5">{pad(h)}</span>
              <span className="animate-pulse">:</span>
              <span className="bg-white/20 rounded px-2 py-0.5">{pad(m)}</span>
              <span className="animate-pulse">:</span>
              <span className="bg-white/20 rounded px-2 py-0.5">{pad(s)}</span>
            </div>
          </div>

          <Link
            href="/offers"
            className="text-sm font-semibold text-white underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            See All Deals →
          </Link>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {FLASH_DEALS.map((product, i) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
