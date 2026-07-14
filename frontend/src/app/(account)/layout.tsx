"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  User, Package, MapPin, Heart, 
  LogOut, LayoutDashboard, Truck 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SIDEBAR_LINKS = [
  { href: "/account", label: "Dashboard", icon: LayoutDashboard },
  { href: "/account/orders", label: "My Orders", icon: Package },
  { href: "/account/track-order", label: "Track Order", icon: Truck },
  { href: "/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Saved Addresses", icon: MapPin },
  { href: "/account/profile", label: "Profile Settings", icon: User },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-muted/20 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar */}
            <aside className="w-full md:w-64 shrink-0">
              <div className="bg-card border border-border/60 rounded-2xl p-4 sticky top-24">
                <div className="flex items-center gap-3 p-2 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Rahul Verma</p>
                    <p className="text-xs text-muted-foreground">rahul@example.com</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {SIDEBAR_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground font-medium" 
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {link.label}
                      </Link>
                    );
                  })}
                  
                  <div className="pt-4 mt-4 border-t border-border">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-destructive hover:bg-destructive/10 transition-colors">
                      <LogOut className="w-5 h-5" />
                      Sign Out
                    </button>
                  </div>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {children}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
