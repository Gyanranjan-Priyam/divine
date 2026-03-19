import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Users,
  Building2,
  FlaskConical,
  Dumbbell,
  Home,
  Calendar,
  ArrowRight,
  Target,
  Newspaper,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Divine Group of Institutions | Best College & +2 School in Nayagarh, Odisha",
  description:
    "Welcome to Divine Group of Institutions, Nayagarh - the leading educational institution in Odisha. Offering +2 Science, Arts, Commerce at Divine Higher Secondary School and BA, BSc at Divine Degree College. SAMS Code: 24055302 (DDC), 24075102 (DHSS). Admissions Open 2025-26.",
  keywords: [
    "Divine Group of Institutions",
    "Best College Nayagarh",
    "Top +2 School Odisha",
    "Divine Higher Secondary School",
    "Divine Degree College",
    "Education Nayagarh",
    "CHSE Odisha",
    "Science College",
    "Arts College",
    "Commerce College",
  ],
  openGraph: {
    title: "Divine Group of Institutions | Best College & +2 School in Nayagarh",
    description:
      "Premier educational institution offering quality education in Nayagarh, Odisha. Admissions open for 2025-26.",
    url: "https://divinengrh.com",
    type: "website",
    images: [
      {
        url: "/og-image-1200.png",
        width: 1200,
        height: 1200,
        alt: "Divine Group of Institutions Logo - Nayagarh, Odisha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Group of Institutions | Best College & +2 School in Nayagarh",
    description:
      "Premier educational institution offering quality education in Nayagarh, Odisha. Admissions open for 2025-26.",
    images: ["/og-image-1200.png"],
  },
  alternates: {
    canonical: "https://divinengrh.com",
  },
};

const facilities = [
  {
    icon: BookOpen,
    title: "Modern Library",
    desc: "Well-stocked library with over 25,000 books, digital resources, journals, and a dedicated reading room for focused study.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Laboratories",
    desc: "State-of-the-art science and computer laboratories equipped with the latest instruments and modern technology.",
  },
  {
    icon: Dumbbell,
    title: "1:1 Mentor Support",
    desc: "Personalized mentoring and guidance to help students achieve their academic and career goals.",
  },
  {
    icon: Home,
    title: "Hostel Facility",
    desc: "Separate hostels for boys and girls with comfortable accommodation, mess facility, and 24/7 security.",
  },
  {
    icon: Building2,
    title: "Smart Classrooms",
    desc: "ICT-enabled classrooms with projectors, digital boards, and modern teaching aids for interactive learning.",
  },
  {
    icon: Target,
    title: "Most Experienced Faculty",
    desc: "Highly qualified and experienced faculty members dedicated to providing quality education and mentorship to students.",
  },
];

const noticeItems = [
  {
    date: "Mar 10, 2026",
    title: "Annual Science Exhibition 2026",
    desc: "Students showcased innovative projects at the annual science exhibition, with participation from over 200 students across departments.",
    tag: "Event",
  },
  {
    date: "Mar 5, 2026",
    title: "Campus Recruitment Drive",
    desc: "Major IT companies including TCS, Infosys, and Wipro conducted campus recruitment with over 50 students receiving offers.",
    tag: "Placement",
  },
  {
    date: "Feb 28, 2026",
    title: "National Seminar on Education",
    desc: 'A two-day national seminar on "Future of Higher Education in India" was organized with eminent speakers and educators.',
    tag: "Academic",
  },
];

const affiliations = [
  { name: "CHSE, Odisha", logo: "/affiliation/chse.png" },
  { name: "Utkal University", logo: "/affiliation/uu.png" },
  { name: "Govt. of Odisha", logo: "/affiliation/gov.svg" },
  { name: "UGC", logo: "/affiliation/ugc.png" },
  { name: "NAAC", logo: "/affiliation/naac.png" },
];

export default function HomePage() {
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
              Divine Group of
              <br />
              Institutions
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Empowering students with quality education, strong values, and a
              commitment to excellence. Shaping the future leaders of tomorrow
              through knowledge, discipline, and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 bg-[#D4A853] text-[#003366] font-semibold px-7 py-3 text-sm hover:bg-[#c49a48] transition-colors"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/group"
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
                📌 Admissions open for 2026-27 academic session — Apply Now!
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Annual Sports Day scheduled for April 15, 2026
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Semester Examination schedule published — Check Academic
                section
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Campus Recruitment Drive by TCS, Infosys &amp; Wipro on April
                20, 2026
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Admissions open for 2026-27 academic session — Apply Now!
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Annual Sports Day scheduled for April 15, 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ABOUT & INSTITUTIONS SECTION ===== */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-2">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-4">
              A Legacy of Academic Excellence
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Divine Group of Institutions, Nayagarh, is dedicated to providing quality education 
              that empowers students with knowledge, skills, and values through rigorous academics 
              and character development.
            </p>
          </div>

          {/* Our Institutions */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#003366] to-[#004488] text-white p-6 rounded-lg">
              <BookOpen className="w-10 h-10 text-[#D4A853] mb-3" />
              <h3 className="text-xl font-bold mb-2">Divine Higher Secondary School</h3>
              <p className="text-sm text-gray-200 mb-4">
                Quality +2 education in Science, Commerce, and Arts streams. Affiliated to CHSE, Odisha.
              </p>
              <Link href="/dhss" className="inline-flex items-center gap-2 text-[#D4A853] font-semibold text-sm hover:gap-3 transition-all">
                Visit DHSS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#003366] to-[#004488] text-white p-6 rounded-lg">
              <GraduationCap className="w-10 h-10 text-[#D4A853] mb-3" />
              <h3 className="text-xl font-bold mb-2">Divine Degree College</h3>
              <p className="text-sm text-gray-200 mb-4">
                Undergraduate programs in Arts, Science, and Commerce with focus on holistic development.
              </p>
              <Link href="/ddc" className="inline-flex items-center gap-2 text-[#D4A853] font-semibold text-sm hover:gap-3 transition-all">
                Visit DDC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Read More Link */}
          <div className="text-center mt-8">
            <Link href="/about/group" className="inline-flex items-center gap-2 text-[#003366] font-semibold hover:text-[#D4A853] transition-colors">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATISTICS BAND ===== */}
      <section className="bg-[#003366] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "2000+", label: "Students" },
              { value: "40+", label: "Faculty Members" },
              { value: "10+", label: "Programs Offered" },
              { value: "13+", label: "Years of Excellence" },
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


      {/* ===== CHAIRMAN'S MESSAGE ===== */}
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
                Chairman&apos;s Message
              </h2>
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#D4A853] opacity-40 absolute -top-2 -left-2" />
                <blockquote className="text-gray-600 leading-relaxed border-l-4 border-[#D4A853] pl-5 ml-4 italic">
                  Education is not the filling of a pail, but the lighting of a
                  fire. At Divine Group of Institutions, we strive to ignite
                  that flame of curiosity and excellence in every student who
                  walks through our doors.
                </blockquote>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                We are committed to providing an environment that fosters
                intellectual growth, character building, and professional
                development. Our vision is to create responsible citizens who
                contribute positively to society and the nation through
                education, innovation, and service.
              </p>
              <p className="font-semibold text-[#003366]">
                — Chairman, Divine Group of Institutions
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
              Why Choose Us
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
                <div className="w-12 h-12 bg-[#f0f4f8] rounded flex items-center justify-center mb-4">
                  <facility.icon className="w-6 h-6 text-[#003366]" />
                </div>
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

      {/* ===== NOTICES ===== */}
      <section className="py-16 lg:py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
              Important Updates
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">
              Notices
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {noticeItems.map((notice) => (
              <article
                key={notice.title}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-44 bg-[#e8edf2] flex items-center justify-center">
                  <Newspaper className="w-12 h-12 text-[#003366] opacity-20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#D4A853] bg-[#faf6eb] px-2.5 py-1">
                      {notice.tag}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {notice.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#003366] mb-2 leading-snug">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {notice.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/notices"
              className="inline-flex items-center gap-2 border-2 border-[#003366] text-[#003366] font-semibold px-7 py-3 text-sm hover:bg-[#003366] hover:text-white transition-colors"
            >
              View All Notices <ArrowRight className="w-4 h-4" />
            </Link>
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
