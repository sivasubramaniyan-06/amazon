import Link from "next/link";
import { CheckCircle2, Package, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-border/60 rounded-3xl p-8 text-center shadow-lg relative overflow-hidden">
        {/* Confetti-like background effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500" />
        
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for shopping with us. Your order <span className="font-semibold text-foreground">#SAR-2024-001848</span> has been placed successfully.
        </p>

        <div className="bg-muted/30 rounded-xl p-4 text-sm text-left mb-8 border border-border/50">
          <div className="flex items-center gap-3 mb-3 text-emerald-600 font-medium">
            <Package className="w-4 h-4" /> Expected Delivery: Tomorrow, 9 PM
          </div>
          <p className="text-muted-foreground">
            We've sent a confirmation email to <span className="text-foreground font-medium">rahul@example.com</span> with your order details and tracking link.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild size="lg" className="rounded-full w-full gap-2">
            <Link href="/account/track-order">Track Order <ArrowRight className="w-4 h-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full w-full gap-2">
            <Link href="/"><Home className="w-4 h-4" /> Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
