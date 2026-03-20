import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    url: "https://divinengrh.com/fees",
  },
  alternates: {
    canonical: "https://divinengrh.com/fees",
  },
};

export default function PayOnlinePage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/payment.svg"
          alt="Payment Portal"
          fill
          className="object-fill"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Payment Portal
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A secure gateway for online fee payment for Divine Group of Institutions students. Pay your fees conveniently from anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* DDC Card */}
          <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl bg-white dark:bg-slate-800">
            <div className="absolute inset-0" />
            <CardHeader className="text-center pt-8 pb-4 relative">
              <div className="mx-auto mb-4 p-3 rounded-2xl w-fit">
                <Image
                  src="/divine.png"
                  alt="Divine Degree College"
                  width={150}
                  height={152}
                />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Divine Degree College
              </CardTitle>
              <CardDescription className="text-lg text-slate-500 dark:text-slate-400 mt-2">
                Undergraduate & Postgraduate Programs
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-4 relative">
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li className="flex items-center justify-center gap-2">
                  Tuition Fee Payment
                </li>
                <li className="flex items-center justify-center gap-2">
                  Examination Fee
                </li>
                <li className="flex items-center justify-center gap-2">
                  Hostel & Other Charges
                </li>
              </ul>
            </CardContent>
            <CardFooter className="justify-center pb-8 relative">
              <Button
                asChild
                size="lg"
                className="w-full max-w-xs text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Link href="/fees/ddc" className="gap-2">
                  Pay College Fees
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* DHSS Card */}
          <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl bg-white dark:bg-slate-800">
            <div className="absolute inset-0" />
            <CardHeader className="text-center pt-8 pb-4 relative">
              <div className="mx-auto mb-4 p-3 rounded-2xl w-fit">
                <Image
                  src="/divine.png"
                  alt="Divine Higher Secondary School"
                  width={150}
                  height={152}
                />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Divine HSS
              </CardTitle>
              <CardDescription className="text-lg text-slate-500 dark:text-slate-400 mt-2">
                Classes XI & XII (Science & Arts)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-4 relative">
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li className="flex items-center justify-center gap-2">
                  Tuition Fee Payment
                </li>
                <li className="flex items-center justify-center gap-2">
                  Examination Fee
                </li>
                <li className="flex items-center justify-center gap-2">
                  Library & Lab Charges
                </li>
              </ul>
            </CardContent>
            <CardFooter className="justify-center pb-10 relative">
              <Button
                asChild
                size="lg"
                className="w-full max-w-xs text-white shadow-lg hover:shadow-xl font-semibold"
              >
                <Link href="/fees/dhss" className="gap-2">
                  Pay School Fees
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500 max-w-lg mx-auto">
            For any payment related queries, please contact the accounts
            department or email us at{" "}
            <a
              href="mailto:accounts@divinengrh.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              accounts@divinengrh.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
