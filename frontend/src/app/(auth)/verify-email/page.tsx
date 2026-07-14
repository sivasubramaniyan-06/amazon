"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OTPVerificationPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.charAt(value.length - 1);
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 6) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }, 1000);
  };

  const handleResend = () => {
    setTimeLeft(60);
    // Mock resend API call
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-xl text-center">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Email Verified</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Your account has been successfully verified. Redirecting you to login...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Verify your email</h1>
        <p className="text-muted-foreground text-sm">
          We've sent a 6-digit code to <span className="font-semibold text-foreground">rahul@example.com</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex justify-between gap-2 sm:gap-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              required
            />
          ))}
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 rounded-full text-base font-semibold" 
          disabled={isLoading || otp.join("").length < 6}
        >
          {isLoading ? "Verifying..." : "Verify Code"}
        </Button>
      </form>

      <div className="mt-8 text-center text-sm">
        <p className="text-muted-foreground">
          Didn't receive the code?{" "}
          {timeLeft > 0 ? (
            <span className="font-medium">Resend in {timeLeft}s</span>
          ) : (
            <button 
              onClick={handleResend}
              className="font-semibold text-primary hover:underline"
            >
              Resend Code
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
