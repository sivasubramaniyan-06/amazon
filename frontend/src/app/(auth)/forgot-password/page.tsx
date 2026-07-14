"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-xl text-center">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Check your email</h1>
        <p className="text-muted-foreground text-sm mb-6">
          We've sent a password reset link to your email address. Please check your inbox.
        </p>
        <Button asChild variant="outline" className="w-full h-12 rounded-full font-semibold">
          <Link href="/login">Return to login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-xl">
      <div className="mb-6">
        <Link href="/login" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to login
        </Link>
        <h1 className="text-2xl font-bold text-foreground mb-2">Forgot Password?</h1>
        <p className="text-muted-foreground text-sm">
          No worries, we'll send you reset instructions.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Mail className="w-5 h-5" />
          </div>
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="pl-10 h-12 bg-background border-border" 
            required 
          />
        </div>

        <Button type="submit" className="w-full h-12 rounded-full text-base font-semibold mt-2" disabled={isLoading}>
          {isLoading ? "Sending instructions..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
}
