import Link from "next/link";
import { Package, Heart, MapPin, CreditCard, ChevronRight } from "lucide-react";
import { ORDERS } from "@/lib/data/misc";

export const metadata = { title: "Dashboard | ShopArc" };

export default function AccountDashboardPage() {
  const recentOrder = ORDERS[0];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">My Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/account/orders" className="bg-card border border-border/60 rounded-2xl p-4 hover:border-primary/50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
            <Package className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-foreground">12</p>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Total Orders</p>
        </Link>
        <Link href="/wishlist" className="bg-card border border-border/60 rounded-2xl p-4 hover:border-primary/50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
            <Heart className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-foreground">5</p>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Wishlist</p>
        </Link>
        <Link href="/account/addresses" className="bg-card border border-border/60 rounded-2xl p-4 hover:border-primary/50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
            <MapPin className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-foreground">2</p>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Addresses</p>
        </Link>
        <div className="bg-card border border-border/60 rounded-2xl p-4 opacity-50 cursor-not-allowed">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
            <CreditCard className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Saved Cards</p>
        </div>
      </div>

      {/* Recent Order */}
      {recentOrder && (
        <div className="bg-card border border-border/60 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4 border-b border-border pb-4">
            <div>
              <h2 className="text-lg font-bold text-foreground">Latest Order</h2>
              <p className="text-sm text-muted-foreground">{recentOrder.date} · {recentOrder.items.length} Items</p>
            </div>
            <Link href={`/account/orders`} className="text-sm font-medium text-primary hover:underline flex items-center">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">Status</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  recentOrder.status === 'delivered' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400' :
                  recentOrder.status === 'processing' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400' :
                  'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
                }`}>
                  {recentOrder.status.charAt(0).toUpperCase() + recentOrder.status.slice(1)}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: recentOrder.status === 'delivered' ? '100%' : '50%' }} />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Expected delivery: Tomorrow, 9 PM</p>
            </div>
            
            <div className="w-full sm:w-auto">
              <Link href={`/account/track-order`} className="block w-full sm:w-auto text-center px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors">
                Track Package
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
