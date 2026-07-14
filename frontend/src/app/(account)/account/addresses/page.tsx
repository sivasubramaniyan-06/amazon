"use client";

import { Plus, MoreVertical, MapPin, Trash2, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ADDRESSES = [
  {
    id: 1,
    name: "Rahul Verma",
    type: "Home",
    street: "42, Lotus Apartment, Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400050",
    phone: "+91 98765 43210",
    isDefault: true,
  },
  {
    id: 2,
    name: "Rahul Verma",
    type: "Office",
    street: "Tech Park, 8th Floor, Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400069",
    phone: "+91 98765 43210",
    isDefault: false,
  }
];

export default function AddressesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Saved Addresses</h1>
        <Button className="rounded-full gap-2 text-sm h-10">
          <Plus className="w-4 h-4" /> Add New Address
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ADDRESSES.map((address) => (
          <div key={address.id} className="bg-card border border-border/60 rounded-2xl p-6 relative">
            {address.isDefault && (
              <span className="absolute top-6 right-12 bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">
                Default
              </span>
            )}
            
            <div className="absolute top-5 right-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="gap-2">
                    <Edit2 className="w-4 h-4" /> Edit
                  </DropdownMenuItem>
                  {!address.isDefault && (
                    <DropdownMenuItem className="gap-2">
                      <MapPin className="w-4 h-4" /> Set as Default
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className="text-destructive gap-2 focus:text-destructive">
                    <Trash2 className="w-4 h-4" /> Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  {address.name}
                  <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full uppercase">
                    {address.type}
                  </span>
                </h3>
                <p className="text-sm font-medium mt-1">{address.phone}</p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground leading-relaxed pl-13">
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.pincode}</p>
              <p>India</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
