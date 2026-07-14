import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryShortcuts from "@/components/home/CategoryShortcuts";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FlashDeals from "@/components/home/FlashDeals";
import TopBrands from "@/components/home/TopBrands";
import TrendingProducts from "@/components/home/TrendingProducts";
import Testimonials from "@/components/home/Testimonials";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />
      
      <main className="flex-1 pb-16">
        <HeroBanner />
        <CategoryShortcuts />
        <FlashDeals />
        <FeaturedProducts />
        <TopBrands />
        
        {/* Placeholder for Personalized Recommendations UI */}
        <section className="container mx-auto max-w-7xl px-4 py-12 text-center border-t border-border mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Recommended For You</h2>
          <div className="p-12 border-2 border-dashed border-border rounded-2xl bg-muted/20">
            <p className="text-muted-foreground">Sign in to see personalized recommendations based on your shopping history.</p>
          </div>
        </section>

        <TrendingProducts />
        <PromoBanner />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
