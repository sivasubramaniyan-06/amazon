import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = { title: "Contact Us | ShopArc" };

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <Breadcrumb items={[{ label: "Contact Us" }]} className="mb-6" />
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-card border border-border/60 rounded-2xl p-6 text-center shadow-sm">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Phone className="text-primary w-6 h-6" /></div>
          <h3 className="font-semibold text-foreground text-lg mb-2">Call Us</h3>
          <p className="text-muted-foreground text-sm mb-4">Mon-Sat from 8am to 8pm</p>
          <a href="tel:+918001234567" className="text-primary font-medium hover:underline">+91 800-123-4567</a>
        </div>
        <div className="bg-card border border-border/60 rounded-2xl p-6 text-center shadow-sm">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Mail className="text-primary w-6 h-6" /></div>
          <h3 className="font-semibold text-foreground text-lg mb-2">Email Us</h3>
          <p className="text-muted-foreground text-sm mb-4">We usually reply within 24 hours</p>
          <a href="mailto:support@shoparc.in" className="text-primary font-medium hover:underline">support@shoparc.in</a>
        </div>
        <div className="bg-card border border-border/60 rounded-2xl p-6 text-center shadow-sm">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin className="text-primary w-6 h-6" /></div>
          <h3 className="font-semibold text-foreground text-lg mb-2">Visit Us</h3>
          <p className="text-muted-foreground text-sm mb-4">Headquarters</p>
          <p className="text-foreground font-medium text-sm">Bandra Kurla Complex, Mumbai 400 051, India</p>
        </div>
      </div>
    </div>
  );
}
