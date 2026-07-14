"use client";

import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="border-t border-border bg-muted/20 py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Stay in the Loop</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to get updates on new arrivals, special offers, and exclusive discounts delivered straight to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="rounded-full h-12 px-6 flex-1 bg-background"
            required
          />
          <Button type="submit" size="lg" className="rounded-full h-12 px-8">
            Subscribe
          </Button>
        </form>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Exclusive Offers</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> New Arrivals</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Personalized Recommendations</span>
        </div>
      </div>
    </section>
  );
}
