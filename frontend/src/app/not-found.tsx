import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="text-[120px] font-black text-primary/20 leading-none">404</div>
      <h1 className="text-3xl font-bold text-foreground mt-4 mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        We couldn't find the page you were looking for. It might have been moved, deleted, or never existed in the first place.
      </p>
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="lg" className="rounded-full gap-2">
          <Link href="/"><ArrowLeft className="w-4 h-4" /> Go Back</Link>
        </Button>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/products">Shop Products</Link>
        </Button>
      </div>
    </div>
  );
}
