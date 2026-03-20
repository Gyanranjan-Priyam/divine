"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DHSSPaymentPage() {
  const [rollNumber, setRollNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment logic here
    console.log("Roll Number:", rollNumber);
    console.log("Date of Birth:", dateOfBirth);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <Image
            src="/divine.png"
            alt="Divine Higher Secondary School"
            width={150}
            height={80}
            className="mx-auto mb-2"
          />
          <CardTitle className="text-2xl md:text-3xl font-bold">Divine Higher Secondary School</CardTitle>
          <CardDescription className="text-sm font-semibold">
            Enter your details to proceed with payment
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="rollNumber" className="text-md font-bold">Roll Number</Label>
              <Input
                id="rollNumber"
                type="text"
                placeholder="Enter your roll number (e.g., IS21-128)"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="dob" className="text-md font-bold">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="mt-4 cursor-pointer">
              Proceed to Payment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}