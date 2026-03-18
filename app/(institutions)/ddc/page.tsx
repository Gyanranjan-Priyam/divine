import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Beaker, Palette, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Divine Higher Secondary School | Best +2 School in Nayagarh",
  description:
    "Welcome to Divine Higher Secondary School (DHSS), Nayagarh - Premier +2 education in Science, Arts & Commerce streams. Affiliated to CHSE, Odisha. SAMS Code: 24075102. Admissions Open 2025-26.",
};

const streams = [
  {
    name: "Science",
    icon: Beaker,
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
    color: "bg-blue-600",
  },
  {
    name: "Arts",
    icon: Palette,
    subjects: ["Political Science", "History", "Economics", "Education", "Odia/Hindi"],
    color: "bg-purple-600",
  },
  {
    name: "Commerce",
    icon: Calculator,
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
    color: "bg-green-600",
  },
];

const highlights = [
  { icon: Users, value: "1000+", label: "Students" },
  { icon: GraduationCap, value: "50+", label: "Expert Faculty" },
  { icon: Trophy, value: "95%", label: "Pass Rate" },
  { icon: BookOpen, value: "3", label: "Streams Offered" },
];

export default function DHSSPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004488] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#D4A853] font-medium text-sm sm:text-base tracking-wider mb-4">
              WELCOME TO
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Divine Higher Secondary School
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-6">
              Nurturing young minds with quality +2 education in Science, Arts & Commerce streams. 
              Affiliated to CHSE, Odisha.
            </p>
            <p className="text-[#D4A853] font-semibold text-lg mb-8">
              SAMS Code: 24075102
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D4A853] hover:bg-[#c49843] text-[#003366] font-semibold">
                <Link href="/admissions/process" className="flex items-center gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/dhss/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#003366] rounded-full mb-3">
                    <Icon className="w-7 h-7 text-[#D4A853]" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold text-[#003366]">{item.value}</p>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#D4A853] font-medium text-sm tracking-wider mb-2">ACADEMIC STREAMS</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366]">
              Choose Your Path to Success
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We offer comprehensive +2 education in three major streams with experienced faculty and modern facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {streams.map((stream) => {
              const Icon = stream.icon;
              return (
                <div key={stream.name} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${stream.color} rounded-lg mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">{stream.name} Stream</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {stream.subjects.map((subject) => (
                      <li key={subject} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D4A853] rounded-full"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/dhss/courses" 
                    className="inline-flex items-center gap-1 text-[#003366] font-medium text-sm mt-4 hover:text-[#D4A853] transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#D4A853] font-medium text-sm tracking-wider mb-2">ABOUT US</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-6">
                A Legacy of Academic Excellence
              </h2>
              <p className="text-gray-600 mb-4">
                Divine Higher Secondary School (DHSS) is a premier +2 institution affiliated to the Council of Higher Secondary Education (CHSE), Odisha. Established as part of Divine Group of Institutions, we are committed to providing quality education that nurtures both academic excellence and character development.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced faculty, modern infrastructure, and holistic approach to education make DHSS the preferred choice for students seeking quality higher secondary education in Nayagarh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#003366] hover:bg-[#002244]">
                  <Link href="/dhss/about">Read More</Link>
                </Button>
                <Button variant="outline" className="border-[#003366] text-[#003366]">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#003366] rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose DHSS?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4A853] rounded-full mt-2"></span>
                    <span>Affiliated to CHSE, Odisha</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4A853] rounded-full mt-2"></span>
                    <span>Experienced & Dedicated Faculty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4A853] rounded-full mt-2"></span>
                    <span>Well-equipped Laboratories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4A853] rounded-full mt-2"></span>
                    <span>Library with Rich Collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4A853] rounded-full mt-2"></span>
                    <span>Regular Career Counseling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4A853] rounded-full mt-2"></span>
                    <span>Sports & Extra-curricular Activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Admissions are now open for the 2025-26 academic session. Apply through SAMS portal using code 24075102.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D4A853] hover:bg-[#c49843] text-[#003366] font-semibold">
              <Link href="https://samsodisha.gov.in" target="_blank" className="flex items-center gap-2">
                Apply via SAMS <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/admissions/fees">View Fee Structure</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}