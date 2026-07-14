"use client";

import { Camera, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-foreground mb-8">Profile Settings</h1>

      <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8">
        
        {/* Avatar Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-border">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-3xl">
              R
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg">Profile Picture</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">PNG, JPG under 5MB</p>
            <div className="flex gap-2 justify-center sm:justify-start">
              <Button variant="outline" size="sm" className="rounded-full">Change</Button>
              <Button variant="ghost" size="sm" className="text-destructive rounded-full">Remove</Button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">First Name</label>
              <Input defaultValue="Rahul" className="bg-background" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Last Name</label>
              <Input defaultValue="Verma" className="bg-background" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Email Address</label>
            <Input defaultValue="rahul@example.com" type="email" className="bg-background" />
            <p className="text-xs text-muted-foreground">You will need to verify your new email address.</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Phone Number</label>
            <Input defaultValue="+91 98765 43210" type="tel" className="bg-background" />
          </div>

          <div className="pt-6">
            <Button className="rounded-full gap-2">
              <Save className="w-4 h-4" /> Save Changes
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}
