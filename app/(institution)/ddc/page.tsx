import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  ArrowRight,
  Quote,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Library,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Divine Degree College | Best B.Sc. College in Nayagarh, Odisha",
  description:
    "Welcome to Divine Degree College (DDC), Nayagarh - Premier B.Sc. undergraduate education in Physics, Chemistry, Mathematics & Biology. Affiliated to Utkal University. SAMS Code: 24055302. Admissions Open 2026-27.",
};

const bscSubjects = [
  { name: "Physics", desc: "Classical mechanics, electromagnetism, quantum physics, and modern physics applications" },
  { name: "Chemistry", desc: "Organic, inorganic, physical, and analytical chemistry with research methodologies" },
  { name: "Mathematics", desc: "Real analysis, algebra, differential equations, and numerical methods" },
  { name: "Botany", desc: "Plant biology, taxonomy, ecology, genetics, and biotechnology" },
  { name: "Zoology", desc: "Animal biology, physiology, cell biology, and evolutionary studies" },
  { name: "Computer Science", desc: "Programming, data structures, algorithms, and software development" },
];

const facilities = [
  {
    title: "Central Library",
    desc: "Extensive library with 15,000+ books, journals, e-resources, and a dedicated reading hall for focused academic pursuits.",
  },
  {
    title: "Research Labs",
    desc: "Well-equipped Physics, Chemistry, Botany, Zoology, and Computer Science laboratories for practical learning.",
  },
  {
    title: "Placement Cell",
    desc: "Active placement cell providing career guidance, skill development workshops, and campus recruitment drives.",
  },
  {
    title: "Hostel Facility",
    desc: "Comfortable separate hostels for boys and girls with mess facility, Wi-Fi, and 24/7 security.",
  },
  {
    title: "Smart Classrooms",
    desc: "ICT-enabled classrooms with projectors, audio-visual aids, and modern teaching methodologies.",
  },
  {
    title: "Competitive Exam Cell",
    desc: "Special coaching for UPSC, OPSC, Banking, SSC, and other competitive examinations with expert guidance.",
  },
];

const newsItems = [
  {
    date: "Mar 12, 2026",
    title: "Annual Cultural Fest 2026",
    desc: "DDC's annual cultural fest showcased talent in music, dance, drama, and literary events with participation from 20+ colleges.",
    tag: "Event",
  },
  {
    date: "Mar 8, 2026",
    title: "Campus Placement Drive",
    desc: "Leading companies including TCS, Infosys, and Wipro conducted campus placement drive. 45 students received offers.",
    tag: "Placement",
  },
  {
    date: "Mar 1, 2026",
    title: "National Seminar on Climate Change",
    desc: "Two-day national seminar on 'Climate Change and Sustainable Development' organized by the Department of Geography.",
    tag: "Academic",
  },
];

const affiliations = [
  { name: "Utkal University", logo: "/affiliation/uu.png" },
  { name: "UGC", logo: "/affiliation/ugc.png" },
  { name: "Govt. of Odisha", logo: "/affiliation/gov.svg" },
  { name: "NAAC", logo: "/affiliation/naac.png" },
];

export default function DDCPage() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#003366] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M30%200v60M0%2030h60%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.03)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-4">
              Welcome to
            </p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Divine Degree
              <br />
              College
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4 max-w-2xl">
              Empowering students with quality B.Sc. undergraduate education. 
              Affiliated to Utkal University, Bhubaneswar. Building future leaders through knowledge, research, and innovation.
            </p>
            <p className="text-[#D4A853] font-semibold text-lg mb-8">
              SAMS Code: 24055302
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://samsodisha.gov.in"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#D4A853] text-[#003366] font-semibold px-7 py-3 text-sm hover:bg-[#c49a48] transition-colors"
              >
                Apply via SAMS <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-7 py-3 text-sm hover:bg-white hover:text-[#003366] transition-colors"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4A853]" />
      </section>

      {/* ===== NOTICE TICKER ===== */}
      <div className="bg-[#faf6eb] border-b border-[#e8dcc4] overflow-hidden">
        <div className="flex items-stretch">
          <span className="bg-[#D4A853] text-[#003366] text-xs font-bold px-5 py-3 uppercase tracking-wider shrink-0 flex items-center">
            Notices
          </span>
          <div className="overflow-hidden py-3 pl-4 flex-1">
            <div className="flex whitespace-nowrap animate-marquee">
              <span className="text-sm text-gray-700 mx-8">
                📌 Admissions open for 2026-27 academic session — Apply via SAMS (Code: 24055302)
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Utkal University Examinations scheduled for May 2026
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Campus Recruitment Drive by TCS on April 20, 2026
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 NSS Camp at Gotisahi village from April 1-7, 2026
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Admissions open for 2026-27 academic session — Apply via SAMS (Code: 24055302)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-start">
            {/* Left Column - About Text */}
            <div>
              <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
                About Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-6">
                Excellence in Higher Education
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Divine Degree College (DDC) is a premier undergraduate institution 
                  affiliated to Utkal University, Bhubaneswar. Established under the aegis 
                  of Divine Educational Trust, we are committed to providing quality 
                  education that prepares students for successful careers and responsible 
                  citizenship.
                </p>
                <p>
                  Our institution offers a comprehensive B.Sc. program designed to provide 
                  strong foundational knowledge in science subjects while preparing students 
                  for higher studies, research, and competitive examinations. With experienced 
                  faculty, modern laboratories, and a research-oriented approach, DDC has 
                  emerged as a leading science college in the region.
                </p>
                <p>
                  Beyond academics, we focus on overall personality development through 
                  seminars, workshops, industrial visits, and NSS activities. Our placement 
                  cell ensures students have access to career guidance and employment 
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATISTICS BAND ===== */}
      <section className="bg-[#003366] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "800+", label: "Students" },
              { value: "30+", label: "Expert Faculty" },
              { value: "90%", label: "Pass Rate" },
              { value: "B.Sc.", label: "Program" },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#D4A853]">
                  {stat.value}
                </h3>
                <p className="text-white text-sm mt-2 opacity-80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRINCIPAL'S MESSAGE ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-60 h-72 bg-[#e8edf2] border-4 border-[#D4A853] flex items-center justify-center">
                <Users className="w-16 h-16 text-[#003366] opacity-20" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
                From the Desk
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-6">
                Principal&apos;s Message
              </h2>
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#D4A853] opacity-40 absolute -top-2 -left-2" />
                <blockquote className="text-gray-600 leading-relaxed border-l-4 border-[#D4A853] pl-5 ml-4 italic">
                  The aim of education should be to teach us how to think, rather than what to think — 
                  to improve our minds, so as to enable us to think for ourselves. At DDC, we nurture 
                  critical thinking, creativity, and character.
                </blockquote>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Divine Degree College stands as a beacon of higher education in Nayagarh district. 
                Our dedicated faculty, comprehensive curriculum, and focus on holistic development 
                ensure that every student is equipped with the knowledge and skills needed to excel 
                in their chosen fields and contribute meaningfully to society.
              </p>
              <p className="font-semibold text-[#003366]">
                — Principal, Divine Degree College
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US / FACILITIES ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
              Why Choose DDC
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">
              World-Class Facilities
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-[#003366] mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ===== WHY CHOOSE DDC ===== */}
      <section className="bg-[#003366] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              What Sets DDC Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 border border-white/20 p-6">
              <div className="w-12 h-12 bg-[#D4A853] flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-[#003366]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">University Affiliation</h3>
              <p className="text-gray-300 text-sm">
                Affiliated to Utkal University, Bhubaneswar - one of the oldest and most prestigious universities in Odisha.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 p-6">
              <div className="w-12 h-12 bg-[#D4A853] flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#003366]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Experienced Faculty</h3>
              <p className="text-gray-300 text-sm">
                Highly qualified professors with expertise in their respective subjects and commitment to student success.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 p-6">
              <div className="w-12 h-12 bg-[#D4A853] flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#003366]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Modern Infrastructure</h3>
              <p className="text-gray-300 text-sm">
                Well-equipped science laboratories, spacious classrooms, and digital learning facilities.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 p-6">
              <div className="w-12 h-12 bg-[#D4A853] flex items-center justify-center mb-4">
                <Library className="w-6 h-6 text-[#003366]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Extensive Library</h3>
              <p className="text-gray-300 text-sm">
                Rich collection of textbooks, reference materials, journals, and digital resources for research.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 p-6">
              <div className="w-12 h-12 bg-[#D4A853] flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-[#003366]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Career Guidance</h3>
              <p className="text-gray-300 text-sm">
                Dedicated placement cell and career counseling to help students achieve their professional goals.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 p-6">
              <div className="w-12 h-12 bg-[#D4A853] flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#003366]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Competitive Exam Prep</h3>
              <p className="text-gray-300 text-sm">
                Coaching and guidance for competitive exams including state and central government services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AFFILIATIONS ===== */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest">
              Affiliations &amp; Recognitions
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {affiliations.map((item) => (
              <div key={item.name} className="text-center">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-2">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain max-h-16"
                  />
                </div>
                <p className="text-xs text-gray-500 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}