import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ShopArc — Premium Shopping Experience",
    template: "%s | ShopArc",
  },
  description:
    "Discover millions of products across every category. Fast delivery, easy returns, and unbeatable prices on ShopArc — your premium online shopping destination.",
  keywords: ["shopping", "ecommerce", "online store", "deals", "electronics", "fashion"],
  authors: [{ name: "ShopArc" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563EB" },
    { media: "(prefers-color-scheme: dark)", color: "#3B82F6" },
  ],
  openGraph: {
    type: "website",
    siteName: "ShopArc",
    title: "ShopArc — Premium Shopping Experience",
    description: "Discover millions of products across every category.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background antialiased">
        <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
