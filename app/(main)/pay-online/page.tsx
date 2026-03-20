import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pay Online - Fee Payment Portal",
  description:
    "Secure online fee payment portal for Divine Group of Institutions students. Pay admission fees, course fees, hostel charges online through secure payment gateway.",
  keywords: [
    "Online Fee Payment",
    "College Fee Payment",
    "Pay Fees Online",
    "Divine College Payment",
    "Student Fee Portal",
    "Secure Payment",
  ],
  openGraph: {
    title: "Pay Online | Divine Group of Institutions",
    description: "Secure online fee payment portal for students.",
    url: "https://divinengrh.com/pay-online",
  },
  alternates: {
    canonical: "https://divinengrh.com/pay-online",
  },
};

export default function PayOnlinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-10">
      <Card className="w-full max-w-md p-8 border border-gray-200 shadow-sm rounded-lg">
        <CardHeader className="text-2xl font-bold mb-4 text-center">
          <CardTitle>Divine Degree College</CardTitle>
        </CardHeader>
      </Card>
      <Card className="w-full max-w-md p-8 border border-gray-200 shadow-sm rounded-lg">
        <CardHeader className="text-2xl font-bold mb-4 text-center">
          <CardTitle>Divine Higher Secondary School</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}