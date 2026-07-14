import { Breadcrumb } from "@/components/shared/Breadcrumb";
import Image from "next/image";

export const metadata = { title: "About Us | ShopArc" };

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <Breadcrumb items={[{ label: "About Us" }]} className="mb-6" />
      
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-foreground">Redefining E-Commerce</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded in 2024, ShopArc was built with a simple mission: to provide a premium, seamless, and trustworthy shopping experience for everyone. We believe that buying online should be as delightful as walking into your favorite high-end retail store.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By combining cutting-edge technology with a relentless focus on customer satisfaction, we've created a platform that connects millions of buyers with thousands of verified sellers, ensuring quality at every step of the journey.
          </p>
        </div>
        <div className="flex-1 w-full relative aspect-square md:aspect-auto md:h-96 rounded-3xl overflow-hidden shadow-2xl">
           {/* Decorative visual */}
           <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-teal-500/80 mix-blend-multiply z-10" />
           <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl flex items-center justify-center z-20">
             <span className="text-white font-bold text-5xl">Shop<span className="text-amber-400">Arc</span></span>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <div className="p-6 bg-card border border-border/60 rounded-2xl shadow-sm">
          <h3 className="text-4xl font-black text-primary mb-2">2M+</h3>
          <p className="font-semibold text-foreground">Happy Customers</p>
        </div>
        <div className="p-6 bg-card border border-border/60 rounded-2xl shadow-sm">
          <h3 className="text-4xl font-black text-primary mb-2">50K+</h3>
          <p className="font-semibold text-foreground">Verified Sellers</p>
        </div>
        <div className="p-6 bg-card border border-border/60 rounded-2xl shadow-sm">
          <h3 className="text-4xl font-black text-primary mb-2">99%</h3>
          <p className="font-semibold text-foreground">On-Time Delivery</p>
        </div>
      </div>
    </div>
  );
}
