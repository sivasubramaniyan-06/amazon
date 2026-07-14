import Link from "next/link";
import { XCircle, RefreshCcw, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderFailurePage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-destructive/20 rounded-3xl p-8 text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
        
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10 text-destructive" />
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-2">Payment Failed</h1>
        <p className="text-muted-foreground mb-6">
          We couldn't process your payment. Don't worry, no amount was deducted from your account.
        </p>

        <div className="bg-muted/30 rounded-xl p-4 text-sm text-left mb-8 border border-border/50">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Possible reasons:</span><br/>
            • Insufficient funds or card limit reached<br/>
            • Incorrect OTP or PIN entered<br/>
            • Temporary issue with your bank's server
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild size="lg" className="rounded-full w-full gap-2">
            <Link href="/checkout"><RefreshCcw className="w-4 h-4" /> Try Payment Again</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full w-full gap-2">
            <Link href="/contact"><HeadphonesIcon className="w-4 h-4" /> Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
