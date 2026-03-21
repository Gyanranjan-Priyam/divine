import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Users,
  Building2,
  FlaskConical,
  Home,
  Calendar,
  ArrowRight,
  Target,
  Newspaper,
  Quote,
  Award,
  MapPin,
  Phone,
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
    title: "Central Library",
    desc: "Extensive collection of 25,000+ books, journals, periodicals, and digital resources with dedicated reading halls.",
  },
  {
    icon: FlaskConical,
    title: "Modern Laboratories",
    desc: "Well-equipped Physics, Chemistry, Biology, and Computer Science laboratories with latest instruments.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Highly qualified and experienced faculty members committed to academic excellence and student mentorship.",
  },
  {
    icon: Home,
    title: "Hostel Accommodation",
    desc: "Separate hostels for boys and girls with mess facility, 24/7 security, and warden supervision.",
  },
  {
    icon: Building2,
    title: "Smart Classrooms",
    desc: "ICT-enabled classrooms with audio-visual aids, projectors, and digital learning resources.",
  },
  {
    icon: Target,
    title: "Career Guidance",
    desc: "Dedicated career counseling cell for competitive exam preparation, placements, and higher education guidance.",
  },
];

const noticeItems = [
  {
    date: "Mar 15, 2026",
    title: "Admissions 2026-27 Open",
    desc: "Online applications are now open for +2 and Degree programs. Apply through SAMS portal or visit campus.",
    tag: "Admission",
  },
  {
    date: "Mar 10, 2026",
    title: "Annual Convocation 2026",
    desc: "Degree certificates will be distributed to graduating batch. Parents and guardians are cordially invited.",
    tag: "Event",
  },
  {
    date: "Mar 5, 2026",
    title: "Semester Examination Schedule",
    desc: "End semester examination timetable for all courses has been published. Check academic section for details.",
    tag: "Examination",
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
      <section className="bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-4">
                Established 2013 • Nayagarh, Odisha
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Divine Group of Institutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A premier educational institution committed to academic excellence, 
                character building, and holistic development. Affiliated to CHSE, Odisha 
                and Utkal University, Bhubaneswar.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Award className="w-4 h-4 text-[#D4A853]" />
                  <span>NAAC Accredited</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-[#D4A853]" />
                  <span>Nayagarh, Odisha</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center gap-2 bg-[#D4A853] text-[#003366] font-semibold px-6 py-3 text-sm hover:bg-[#c49a48]"
                >
                  Apply for Admission <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/group"
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 text-sm hover:bg-white hover:text-[#003366]"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded border-4 border-[#D4A853]">
                <Image
                  src="/home/main.avif"
                  alt="Divine Group of Institutions Campus"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
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
                📌 CHSE Board Examination Results declared — Check Results section
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Semester Examination schedule published — Check Academic section
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 National Seminar on Higher Education — March 25-26, 2026
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 Admissions open for 2026-27 academic session — Apply Now!
              </span>
              <span className="text-sm text-gray-700 mx-8">
                📌 CHSE Board Examination Results declared — Check Results section
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR INSTITUTIONS ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Institutions
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">
              Two Institutions, One Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* DHSS Card */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg">
              <div className="bg-[#003366] text-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                    <Image src="/divine.png" alt="DHSS" width={48} height={48} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Divine Higher Secondary School</h3>
                    <p className="text-sm text-gray-300">SAMS Code: 24075102</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Affiliated to Council of Higher Secondary Education (CHSE), Odisha. 
                  Offering +2 Science, Arts, and Commerce streams with experienced faculty 
                  and modern facilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4A853] rounded-full"></span>
                    +2 Science (PCM/PCB)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4A853] rounded-full"></span>
                    JEE/NEET Foundation Program
                  </li>
                </ul>
                <Link href="/dhss" className="inline-flex items-center gap-2 text-[#003366] font-semibold text-sm hover:text-[#D4A853]">
                  Visit DHSS Website <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* DDC Card */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg">
              <div className="bg-[#003366] text-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                    <Image src="/divine.png" alt="DDC" width={48} height={48} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Divine Degree College</h3>
                    <p className="text-sm text-gray-300">SAMS Code: 24055302</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Affiliated to Utkal University, Bhubaneswar. Offering undergraduate 
                  programs in Arts and Science with CBCS pattern and focus on 
                  skill development.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4A853] rounded-full"></span>
                    B.Sc. (Physics, Chemistry, Mathematics)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4A853] rounded-full"></span>
                    CBCS Semester System
                  </li>
                </ul>
                <Link href="/ddc" className="inline-flex items-center gap-2 text-[#003366] font-semibold text-sm hover:text-[#D4A853]">
                  Visit DDC Website <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATISTICS BAND ===== */}
      <section className="bg-[#003366] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "2000+", label: "Students Enrolled" },
              { value: "50+", label: "Qualified Faculty" },
              { value: "13+", label: "Years of Excellence" },
              { value: "90%+", label: "Board Results" },
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

      {/* ===== LEADERSHIP MESSAGES ===== */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
              Message from Leadership
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">
              Words of Wisdom
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Chairman's Message */}
            <div className="bg-white p-6 lg:p-8 border border-gray-200">
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <div className="w-48 h-56 lg:w-56 lg:h-64 bg-[#e8edf2] border-4 border-[#D4A853] flex items-center justify-center overflow-hidden">
                    <Users className="w-16 h-16 text-[#003366] opacity-20" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003366] mb-2 text-center">
                    Chairman&apos;s Message
                  </h3>
                  <div className="relative mb-4">
                    <Quote className="w-6 h-6 text-[#D4A853] opacity-40 absolute -top-1 -left-1" />
                    <blockquote className="text-gray-600 text-sm leading-relaxed border-l-4 border-[#D4A853] pl-4 ml-3 italic">
                      Education is the most powerful weapon which you can use to change 
                      the world. At Divine Group of Institutions, we are committed to 
                      nurturing young minds and preparing them for the challenges of tomorrow.
                    </blockquote>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Our institution stands on the pillars of academic excellence, moral values, 
                    and holistic development. We believe in providing quality education accessible to all.
                  </p>
                  <p className="font-semibold text-[#003366] text-sm text-center">
                    — Chairman, Divine Group of Institutions
                  </p>
                </div>
              </div>
            </div>

            {/* Director's Message */}
            <div className="bg-white p-6 lg:p-8 border border-gray-200">
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <div className="w-48 h-56 lg:w-56 lg:h-64 bg-[#e8edf2] border-4 border-[#D4A853] flex items-center justify-center overflow-hidden">
                    <Users className="w-16 h-16 text-[#003366] opacity-20" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003366] mb-2 text-center">
                    Director&apos;s Message
                  </h3>
                  <div className="relative mb-4">
                    <Quote className="w-6 h-6 text-[#D4A853] opacity-40 absolute -top-1 -left-1" />
                    <blockquote className="text-gray-600 text-sm leading-relaxed border-l-4 border-[#D4A853] pl-4 ml-3 italic">
                      Our vision is to create an institution that not only imparts knowledge 
                      but also instills values, discipline, and a sense of responsibility 
                      in every student who walks through our doors.
                    </blockquote>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    We focus on holistic development through academics, sports, cultural activities, 
                    and community service. Our goal is to shape responsible citizens who contribute 
                    positively to society.
                  </p>
                  <p className="font-semibold text-[#003366] text-sm text-center">
                    — Director, Divine Group of Institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FACILITIES ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
              Infrastructure
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">
              Our Facilities
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="bg-white border border-gray-200 p-6 hover:border-[#003366]"
              >
                <div className="w-12 h-12 bg-[#003366] rounded flex items-center justify-center mb-4">
                  <facility.icon className="w-6 h-6 text-[#D4A853]" />
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
          <div className="text-center mt-10">
            <Link
              href="/facilities/library"
              className="inline-flex items-center gap-2 text-[#003366] font-semibold hover:text-[#D4A853]"
            >
              Explore All Facilities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* ===== ACHIEVEMENTS SHOWCASE ===== */}
      <section className="bg-[#003366] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm text-[#D4A853] font-semibold uppercase tracking-widest mb-2">
              Our Pride
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              A Legacy of Excellence
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              District Toppers year after year, 100% results, and exceptional performance 
              in board exams and competitive examinations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-[#D4A853]">10+</p>
              <p className="text-white text-sm mt-1">District Toppers</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-[#D4A853]">7+</p>
              <p className="text-white text-sm mt-1">Years 100% Results</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-[#D4A853]">100+</p>
              <p className="text-white text-sm mt-1">Students in 500 Club</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-[#D4A853]">572</p>
              <p className="text-white text-sm mt-1">Highest Score (2025)</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-[#D4A853] font-semibold">CHSE 2025</p>
                <p className="text-white text-lg font-bold">Chhita Ranjan Sahoo</p>
                <p className="text-gray-300 text-sm">District Topper - 572 marks</p>
                <p className="text-gray-400 text-xs">Highest-Ever in Nayagarh History</p>
              </div>
              <div className="text-center">
                <p className="text-[#D4A853] font-semibold">CHSE 2024</p>
                <p className="text-white text-lg font-bold">Rajesh Nayak</p>
                <p className="text-gray-300 text-sm">District Rank 2 - 553 marks</p>
                <p className="text-gray-400 text-xs">100% Results Achieved</p>
              </div>
              <div className="text-center">
                <p className="text-[#D4A853] font-semibold">NEET 2021</p>
                <p className="text-white text-lg font-bold">Nikunja B. Routray</p>
                <p className="text-gray-300 text-sm">628 marks in NEET</p>
                <p className="text-gray-400 text-xs">Outstanding Medical Performance</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/about/achievements"
              className="inline-flex items-center gap-2 bg-[#D4A853] text-[#003366] font-semibold px-8 py-3 hover:bg-[#c49a48]"
            >
              View All Achievements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== AFFILIATIONS ===== */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest">
              Affiliations & Recognitions
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
