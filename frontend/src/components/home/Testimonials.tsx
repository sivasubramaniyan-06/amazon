import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data/misc";

export default function Testimonials() {
  return (
    <section className="bg-muted/40 py-12" aria-labelledby="testimonials-heading">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 id="testimonials-heading" className="text-2xl font-bold text-foreground">What Our Customers Say</h2>
          <p className="text-muted-foreground text-sm mt-1">Trusted by millions of shoppers across India</p>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm font-semibold text-foreground ml-1">4.8</span>
            <span className="text-sm text-muted-foreground">/ 5 from 2M+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className="bg-card border border-border/60 rounded-2xl p-4 flex flex-col gap-3 hover:border-primary/20 hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Quote className="w-6 h-6 text-primary/30 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">{t.review}</p>

              {t.productName && (
                <span className="text-[11px] font-medium text-primary bg-primary/8 px-2 py-0.5 rounded-full w-fit">
                  {t.productName}
                </span>
              )}

              <div className="flex items-center gap-0.5 mt-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < t.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} />
                ))}
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-border">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-muted shrink-0">
                  {t.avatar && <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="32px" />}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.location} · {t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
