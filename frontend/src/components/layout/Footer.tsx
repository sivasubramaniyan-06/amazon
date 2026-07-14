import Link from "next/link";
import {
  Zap, Mail, Phone, MapPin, Globe, MessageCircle, Image as ImageIcon,
  Video, Briefcase, Smartphone, Apple, ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
    { label: "Sustainability", href: "/sustainability" },
  ],
  Support: [
    { label: "Help Center", href: "/faq" },
    { label: "Track Order", href: "/account/track-order" },
    { label: "Returns & Refunds", href: "/account/returns" },
    { label: "Contact Us", href: "/contact" },
    { label: "Report an Issue", href: "/contact" },
  ],
  Policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Seller Policy", href: "/seller-policy" },
    { label: "Accessibility", href: "/accessibility" },
  ],
  "Quick Links": [
    { label: "Today's Deals", href: "/offers" },
    { label: "New Arrivals", href: "/products?sort=new" },
    { label: "Best Sellers", href: "/products?sort=bestseller" },
    { label: "Gift Cards", href: "/gift-cards" },
    { label: "Sell on ShopArc", href: "/seller" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "Twitter / X" },
  { icon: ImageIcon, href: "#", label: "Instagram" },
  { icon: Video, href: "#", label: "YouTube" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0F1629] border-t border-border mt-auto">
      {/* Main Footer */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand + Contact */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-bold text-xl">
                Shop<span className="text-primary">Arc</span>
              </span>
            </Link>

            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Your premium destination for millions of products. Fast delivery, easy returns, and
              unbeatable prices — every single day.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a
                href="mailto:support@shoparc.in"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@shoparc.in
              </a>
              <a
                href="tel:+918001234567"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 800-123-4567
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Bandra Kurla Complex, Mumbai 400 051, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center text-muted-foreground"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <h3 className="font-semibold text-sm text-foreground">{title}</h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Newsletter */}
          <div className="w-full md:max-w-md">
            <p className="text-sm font-semibold mb-2">Get exclusive deals in your inbox</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-full h-9 text-sm"
                aria-label="Email for newsletter"
              />
              <Button size="sm" className="rounded-full gap-1 shrink-0">
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* App Download */}
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground shrink-0">Download App:</p>
            <a
              href="#"
              aria-label="Download on the App Store"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all text-xs font-medium"
            >
              <Apple className="w-4 h-4" />
              App Store
            </a>
            <a
              href="#"
              aria-label="Get it on Google Play"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all text-xs font-medium"
            >
              <Smartphone className="w-4 h-4" />
              Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-muted/40 border-t border-border py-3 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ShopArc Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
