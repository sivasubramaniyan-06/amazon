"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-xl text-center">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Password Reset Successful</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Your password has been successfully updated. Redirecting you to login...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-xl">
      <h1 className="text-2xl font-bold text-foreground mb-2">Set New Password</h1>
      <p className="text-muted-foreground text-sm mb-6">
        Your new password must be different from previous used passwords.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Lock className="w-5 h-5" />
          </div>
          <Input 
            type={showPassword ? "text" : "password"} 
            placeholder="New Password" 
            className="pl-10 pr-10 h-12 bg-background border-border" 
            required 
            minLength={8}
          />
          <button 
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="space-y-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Lock className="w-5 h-5" />
          </div>
          <Input 
            type={showConfirmPassword ? "text" : "password"} 
            placeholder="Confirm New Password" 
            className="pl-10 pr-10 h-12 bg-background border-border" 
            required 
            minLength={8}
          />
          <button 
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="text-xs text-muted-foreground space-y-1 mt-2 mb-4 px-2">
          <p>Password must contain:</p>
          <ul className="list-disc pl-4 space-y-0.5">
            <li>At least 8 characters</li>
            <li>At least 1 number</li>
            <li>At least 1 special character</li>
          </ul>
        </div>

        <Button type="submit" className="w-full h-12 rounded-full text-base font-semibold" disabled={isLoading}>
          {isLoading ? "Updating..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
}
