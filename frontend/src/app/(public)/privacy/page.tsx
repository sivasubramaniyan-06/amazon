import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata = { title: "Privacy Policy | ShopArc" };

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} className="mb-6" />
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), delivery notes, and other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect about you to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide, maintain, and improve our Services.</li>
              <li>Perform internal operations, including, for example, to prevent fraud and abuse of our Services.</li>
              <li>Send you communications we think will be of interest to you, including information about products, services, promotions, news, and events of ShopArc.</li>
              <li>Personalize and improve the Services, including to provide or recommend features, content, social connections, referrals, and advertisements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption protocols (SSL/TLS) for data transmission and secure servers for data storage.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
