import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Smartphone, Gift } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-8">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 min-h-[300px] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-8">
          <div className="max-w-xl text-white space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Gift className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">Special Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Download the ShopArc App</h2>
            <p className="text-emerald-100 text-lg">Get 10% off your first app order. Use code <span className="bg-white/20 px-2 py-1 rounded-md font-mono font-bold mx-1">APP10</span> at checkout.</p>
            <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
              <Link href="#" className="flex items-center gap-2 bg-white text-emerald-900 hover:bg-emerald-50 px-6 py-3 rounded-full font-bold transition-colors">
                <Smartphone className="w-5 h-5" /> Download App <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative w-64 h-64 shrink-0 rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Using a placeholder SVG or just a stylized element since we don't have a specific app mockup image */}
            <div className="absolute inset-0 bg-white/10 border-4 border-white/20 rounded-[40px] shadow-2xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
               <div className="w-[90%] h-[95%] bg-white rounded-[32px] flex flex-col items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <div className="space-y-2 w-full px-6">
                    <div className="h-2 bg-muted rounded-full w-3/4 mx-auto" />
                    <div className="h-2 bg-muted rounded-full w-1/2 mx-auto" />
                    <div className="h-20 bg-muted/50 rounded-xl w-full mt-4" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
