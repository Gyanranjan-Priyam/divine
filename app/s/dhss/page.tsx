import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Calendar,
  ArrowRight,
  Newspaper,
  Quote,
} from "lucide-react";
import { achievementDhssData } from "./_data/achievementDhssData";

export const metadata: Metadata = {
  title: "Divine Higher Secondary School | Best +2 Science School in Nayagarh",
  description:
    "Welcome to Divine Higher Secondary School (DHSS), Nayagarh - Premier +2 Science education with Physics, Chemistry, Mathematics & Biology. Affiliated to CHSE, Odisha. SAMS Code: 24075102. Admissions Open 2026-27.",
};

// const scienceSubjects = [
//   { name: "Physics", desc: "Comprehensive study of mechanics, optics, thermodynamics, and modern physics" },
//   { name: "Chemistry", desc: "Organic, inorganic, and physical chemistry with practical applications" },
//   { name: "Mathematics", desc: "Advanced calculus, algebra, trigonometry, and coordinate geometry" },
//   { name: "Biology", desc: "Botany and Zoology covering life sciences and human anatomy" },
//   { name: "Computer Science", desc: "Programming fundamentals, data structures, and computer applications" },
//   { name: "English", desc: "Language proficiency, literature, and communication skills" },
// ];

const facilities = [
  {
    title: "Modern Library",
    desc: "Well-stocked library with over 10,000 books, digital resources, journals, and a dedicated reading room for focused study.",
  },
  {
    title: "Advanced Laboratories",
    desc: "State-of-the-art Physics, Chemistry, Biology and Computer laboratories equipped with the latest instruments.",
  },
  {
    title: "1:1 Mentor Support",
    desc: "Personalized mentoring and guidance to help students achieve their academic and career goals.",
  },
  {
    title: "Hostel Facility",
    desc: "Separate hostels for boys and girls with comfortable accommodation, mess facility, and 24/7 security.",
  },
  {
    title: "Smart Classrooms",
    desc: "ICT-enabled classrooms with projectors, digital boards, and modern teaching aids for interactive learning.",
  },
  {
    title: "Experienced Faculty",
    desc: "Highly qualified and experienced faculty members dedicated to providing quality +2 education and mentorship.",
  },
];

const newsItems = [
  {
    date: "Mar 10, 2026",
    title: "Annual Science Exhibition 2026",
    desc: "Students showcased innovative projects at the annual science exhibition, with participation from over 100 students across streams.",
    tag: "Event",
  },
  {
    date: "Mar 5, 2026",
    title: "CHSE Board Exam Preparation",
    desc: "Special coaching classes and doubt-clearing sessions organized for all +2 students appearing for CHSE board examinations.",
    tag: "Academic",
  },
  {
    date: "Feb 28, 2026",
    title: "Inter-School Quiz Competition",
    desc: "DHSS students won first position in the district-level inter-school quiz competition organized by Education Department.",
    tag: "Achievement",
  },
];

const affiliations = [
  { name: "CHSE, Odisha", logo: "/affiliation/chse.png" },
  { name: "Govt. of Odisha", logo: "/affiliation/gov.svg" },
  { name: "NAAC", logo: "/affiliation/naac.png" },
  { name: "NCERT", logo: "/affiliation/ncert.svg" },
];

export default function DHSSPage() {
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
              Divine Higher
              <br />
              Secondary School
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4 max-w-2xl">
              Nurturing young minds with quality +2 Science education. 
              Affiliated to CHSE, Odisha. Building tomorrow&apos;s leaders through knowledge, discipline, and values.
            </p>
            <p className="text-[#D4A853] font-semibold text-lg mb-8">
              SAMS Code: 24075102
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
                📌 Admissions open for 2026-27 academic session — Apply via SAMS (Code: 24075102)
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 CHSE Board Exam preparation classes in progress
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Annual Sports Day scheduled for April 15, 2026
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Parent-Teacher Meeting on April 10, 2026
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Admissions open for 2026-27 academic session — Apply via SAMS (Code: 24075102)
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
                A Legacy of Academic Excellence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Divine Higher Secondary School (DHSS) is a premier +2 Science institution 
                  affiliated to the Council of Higher Secondary Education (CHSE), Odisha. 
                  Established under the aegis of Divine Educational Trust, we are committed 
                  to providing quality education that nurtures both academic excellence and 
                  character development.
                </p>
                <p>
                  Our institution offers a comprehensive Science curriculum designed to prepare 
                  students for competitive examinations like JEE, NEET, and other national-level 
                  entrance tests. With experienced faculty, modern infrastructure, and a 
                  student-centric approach, DHSS has become the preferred choice for students 
                  seeking quality higher secondary education in Nayagarh.
                </p>
                <p>
                  We believe in holistic development that goes beyond textbooks. Our students 
                  participate in various co-curricular activities, science exhibitions, and 
                  competitions that help them develop critical thinking and leadership skills.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#003366] font-semibold hover:text-[#D4A853] transition-colors"
                >
                  Learn More About DHSS <ArrowRight className="w-4 h-4" />
                </Link>
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
              { value: "500+", label: "Students" },
              { value: "25+", label: "Expert Faculty" },
              { value: "95%", label: "Pass Rate" },
              { value: "Science", label: "Stream" },
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
                  Education is the passport to the future, for tomorrow belongs to those who prepare for it today. 
                  At DHSS, we believe in nurturing not just academic excellence but also the character and values 
                  that make our students responsible citizens.
                </blockquote>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our dedicated faculty, modern infrastructure, and holistic approach to education 
                ensure that every student receives the guidance and support they need to excel 
                in their CHSE examinations and beyond. We take pride in our consistent academic 
                results and the success of our alumni in various fields.
              </p>
              <p className="font-semibold text-[#003366]">
                — Principal, Divine Higher Secondary School
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
              Why Choose DHSS
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


      {/* ===== STUDENT ACHIEVEMENTS ===== */}
      <section className="bg-[#003366] py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-2">
              Our Pride
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Student Achievements
            </h2>
          </div>

          {/* Student Marquee */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-marquee-slow">
                {[...achievementDhssData, ...achievementDhssData].map((student, index) => (
                  <div
                    key={`${student.id}-${index}`}
                    className="flex-shrink-0 w-48 bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-[#003366] border-2 border-[#D4A853] flex items-center justify-center">
                      <Users className="w-8 h-8 text-[#D4A853] opacity-60" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1 truncate">{student.name}</h4>
                    <p className="text-[#D4A853] text-xs font-medium mb-1">{student.achievement}</p>
                    <p className="text-gray-400 text-xs">{student.year}</p>
                  </div>
                ))}
              </div>
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