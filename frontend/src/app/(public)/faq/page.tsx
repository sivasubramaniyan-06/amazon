import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = { title: "FAQ | ShopArc" };

const FAQS = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. The items must be unused, in their original packaging, and with all tags attached. Electronics have a 7-day return policy for manufacturing defects.",
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery takes 3-5 business days. Express delivery (available in select cities) guarantees next-day delivery if ordered before 6 PM.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you will receive an email with a tracking link. You can also track your order in real-time from the 'My Orders' section in your account dashboard.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within India. We are looking to expand our operations globally soon.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major Credit/Debit cards, UPI, Net Banking, and Cash on Delivery (COD) for eligible pincodes and order values.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "FAQ" }]} className="mb-6" />
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-lg">Find answers to the most common questions about shopping with us.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
            <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
