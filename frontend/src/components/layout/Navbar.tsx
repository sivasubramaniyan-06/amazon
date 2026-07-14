"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Search, ShoppingCart, Heart, Bell, User, Menu, X,
  ChevronDown, Zap, MapPin, Sun, Moon, Globe, Package,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/data/categories";

const NAV_LINKS = [
  { label: "Electronics", href: "/categories/electronics" },
  { label: "Fashion", href: "/categories/fashion" },
  { label: "Home & Kitchen", href: "/categories/home-kitchen" },
  { label: "Sports", href: "/categories/sports-fitness" },
];

const SEARCH_SUGGESTIONS = [
  "MacBook Pro M3",
  "Samsung Galaxy S25",
  "Sony headphones",
  "Nike shoes",
  "Dyson vacuum",
  "Instant Pot",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredSuggestions = SEARCH_SUGGESTIONS.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass shadow-sm"
          : "bg-white dark:bg-[#0F1629] border-b border-border/50"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center gap-4 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              Shop<span className="text-primary">Arc</span>
            </span>
          </Link>

          {/* Delivery Location (desktop) */}
          <button className="hidden lg:flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <div className="text-left">
              <div className="font-medium text-foreground text-[11px]">Deliver to</div>
              <div className="text-primary font-semibold">Mumbai 400050</div>
            </div>
          </button>

          {/* Search Bar */}
          <div ref={searchRef} className="relative flex-1 max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="navbar-search"
                type="search"
                placeholder="Search products, brands, categories..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                className="pl-10 pr-4 h-10 rounded-full border-2 border-border focus:border-primary transition-colors bg-muted/40 dark:bg-muted/20"
              />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
                  className="absolute right-12 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 p-0"
                asChild
              >
                <Link href={`/search?q=${searchQuery}`}>
                  <Search className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>

            {/* Search Suggestions Dropdown */}
            {searchOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-popover rounded-xl border border-border shadow-lg overflow-hidden animate-scale-in z-50">
                {filteredSuggestions.length > 0 ? (
                  <>
                    <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide border-b border-border">
                      Popular Searches
                    </div>
                    {filteredSuggestions.map((suggestion) => (
                      <Link
                        key={suggestion}
                        href={`/search?q=${suggestion}`}
                        onClick={() => { setSearchQuery(suggestion); setSearchOpen(false); }}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors text-sm"
                      >
                        <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        <span>{suggestion}</span>
                      </Link>
                    ))}
                  </>
                ) : (
                  <div className="px-4 py-3 text-sm text-muted-foreground">
                    No suggestions found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:flex rounded-full"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex rounded-full relative"
              asChild
            >
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] flex items-center justify-center bg-primary">
                  3
                </Badge>
              </Link>
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex rounded-full relative"
              asChild
            >
              <Link href="/account/notifications" aria-label="Notifications">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </Link>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full relative"
              asChild
            >
              <Link href="/cart" aria-label="Shopping cart">
                <ShoppingCart className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] flex items-center justify-center bg-primary">
                  2
                </Badge>
              </Link>
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden md:flex gap-1 rounded-full px-3" aria-label="User menu">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 rounded-xl shadow-lg">
                <div className="px-3 py-2 border-b border-border">
                  <p className="font-semibold text-sm">Rahul Verma</p>
                  <p className="text-xs text-muted-foreground">rahul@example.com</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/account" className="gap-2 cursor-pointer"><User className="w-4 h-4" />My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders" className="gap-2 cursor-pointer"><Package className="w-4 h-4" />My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist" className="gap-2 cursor-pointer"><Heart className="w-4 h-4" />Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/seller" className="gap-2 cursor-pointer text-primary">Seller Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin" className="gap-2 cursor-pointer text-primary">Admin Panel</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login" className="gap-2 cursor-pointer text-destructive">Sign Out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-full" aria-label="Menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetHeader className="p-4 border-b border-border">
                  <SheetTitle className="text-left font-bold">
                    Shop<span className="text-primary">Arc</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full overflow-y-auto">
                  {/* Mobile User */}
                  <div className="p-4 bg-primary/5 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Rahul Verma</p>
                        <p className="text-xs text-muted-foreground">rahul@example.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="p-4 space-y-1">
                    {[
                      { label: "My Account", href: "/account", icon: User },
                      { label: "My Orders", href: "/account/orders", icon: Package },
                      { label: "Wishlist", href: "/wishlist", icon: Heart },
                      { label: "Cart", href: "/cart", icon: ShoppingCart },
                      { label: "Notifications", href: "/account/notifications", icon: Bell },
                    ].map(({ label, href, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        {label}
                      </Link>
                    ))}
                  </nav>

                  <div className="border-t border-border p-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Categories</p>
                    <div className="space-y-1">
                      {CATEGORIES.slice(0, 8).map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/categories/${cat.slug}`}
                          className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm"
                        >
                          <span>{cat.name}</span>
                          <span className="text-xs text-muted-foreground">{cat.productCount.toLocaleString()}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border p-4 flex items-center justify-between">
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                    <Globe className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Secondary Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 pb-2 text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 font-medium hover:text-primary transition-colors">
                <Menu className="w-3.5 h-3.5" />
                All Categories
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 rounded-xl shadow-lg">
              {CATEGORIES.map((cat) => (
                <DropdownMenuItem key={cat.id} asChild>
                  <Link href={`/categories/${cat.slug}`} className="cursor-pointer">
                    {cat.name}
                    <span className="ml-auto text-xs text-muted-foreground">{cat.productCount.toLocaleString()}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/offers"
            className="font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 transition-colors flex items-center gap-1"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            Offers
          </Link>

          <Link
            href="/seller"
            className="ml-auto font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Sell on ShopArc
          </Link>
        </nav>
      </div>
    </header>
  );
}
