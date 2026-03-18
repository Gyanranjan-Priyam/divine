import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

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
    url: "https://divineinstitutions.edu.in/pay-online",
  },
  alternates: {
    canonical: "https://divineinstitutions.edu.in/pay-online",
  },
};

export default function PayOnlinePage() {
  return <UnderConstruction />;
}