"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 1,
    tag: "New Arrival",
    title: "MacBook Pro M3",
    subtitle: "The most powerful laptop ever. Starts at",
    price: "₹1,99,999",
    cta: "Shop Now",
    href: "/products/apple-macbook-pro-16-m3",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=80",
    badge: "Up to 13% Off",
    gradient: "from-blue-900 via-blue-800 to-indigo-900",
  },
  {
    id: 2,
    tag: "Flash Deal — 6 hrs left",
    title: "Samsung Galaxy S25 Ultra",
    subtitle: "Titanium. AI. 200MP camera. Now at",
    price: "₹1,24,999",
    cta: "Grab the Deal",
    href: "/products/samsung-galaxy-s25-ultra",
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=900&q=80",
    badge: "7% Off",
    gradient: "from-slate-900 via-slate-800 to-gray-900",
  },
  {
    id: 3,
    tag: "Best Seller",
    title: "Sony WH-1000XM6",
    subtitle: "Industry-leading noise canceling. Only",
    price: "₹24,999",
    cta: "Add to Cart",
    href: "/products/sony-wh-1000xm6",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
    badge: "29% Off",
    gradient: "from-gray-900 via-zinc-800 to-neutral-900",
  },
];

const TRUST_BADGES = [
  { icon: Truck, label: "Free Delivery", sub: "On orders over ₹499" },
  { icon: RotateCcw, label: "Easy Returns", sub: "30-day hassle-free" },
  { icon: Shield, label: "Secure Payment", sub: "100% protected" },
  { icon: Star, label: "Top Rated", sub: "4.8/5 avg rating" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = SLIDES[current];

  return (
    <section className="w-full" aria-label="Hero banner">
      {/* Main Slider */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-none lg:rounded-2xl",
          "bg-gradient-to-r min-h-[420px] lg:min-h-[500px]",
          slide.gradient
        )}
        style={{ transition: "background 0.6s ease" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover opacity-20 transition-all duration-700"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center min-h-[420px] lg:min-h-[500px]">
          <div className="max-w-xl space-y-4 animate-fade-in-up" key={slide.id}>
            <div className="flex items-center gap-2">
              <span className="badge-prime text-xs">{slide.tag}</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                {slide.badge}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {slide.title}
            </h1>

            <p className="text-white/70 text-lg">
              {slide.subtitle}{" "}
              <span className="text-amber-400 font-bold text-2xl">{slide.price}</span>
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full gap-2 bg-white text-foreground hover:bg-white/90 font-semibold shadow-lg"
              >
                <Link href={slide.href}>
                  <ShoppingBag className="w-4 h-4" />
                  {slide.cta}
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full gap-1 text-white hover:bg-white/10 border border-white/20"
              >
                <Link href="/products">
                  Browse All <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Product Image (right) */}
          <div className="hidden lg:flex absolute right-8 bottom-0 top-0 items-end justify-center w-80">
            <div className="relative w-full h-[90%] animate-scale-in" key={`img-${slide.id}`}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="320px"
              />
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "rounded-full transition-all duration-300",
                i === current
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container mx-auto max-w-7xl px-4 mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-card border border-border/60 rounded-xl px-4 py-3 hover:border-primary/20 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
