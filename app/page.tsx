import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  Building2,
  FlaskConical,
  Dumbbell,
  Home,
  Calendar,
  ArrowRight,
  Star,
  Award,
  Target,
  Newspaper,
  Quote,
} from "lucide-react";

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
    title: "Sports Complex",
    desc: "Multi-sport facilities including cricket, football, basketball, and indoor games for holistic development.",
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
    title: "Placement Cell",
    desc: "Dedicated placement cell that bridges students with top recruiters through training programs and campus drives.",
  },
];

const newsItems = [
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
  "CHSE, Odisha",
  "Berhampur University",
  "Govt. of Odisha",
  "UGC",
  "NAAC",
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

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
                About Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-6">
                A Legacy of Academic Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Divine Group of Institutions, Nayagarh, is dedicated to
                providing quality education that empowers students with
                knowledge, skills, and values. Established with a vision to
                create an institution of higher learning that combines
                traditional wisdom with modern education practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our institution comprises Divine Higher Secondary School and
                Divine Degree College, both offering comprehensive programs
                across multiple disciplines. We are committed to nurturing young
                minds and preparing them for a successful future through
                rigorous academics, extracurricular activities, and character
                development.
              </p>
              <Link
                href="/about/group"
                className="inline-flex items-center gap-2 text-[#003366] font-semibold text-sm hover:text-[#D4A853] transition-colors"
              >
                Read More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="bg-[#f5f7fa] p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, value: "15+", label: "Years of Excellence" },
                  { icon: Users, value: "2000+", label: "Students Enrolled" },
                  {
                    icon: GraduationCap,
                    value: "100+",
                    label: "Qualified Faculty",
                  },
                  { icon: Trophy, value: "95%", label: "Placement Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4">
                    <div className="w-12 h-12 bg-[#003366] rounded flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-[#D4A853]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#003366]">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR INSTITUTIONS ===== */}
      <section className="py-16 lg:py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Institutions
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">
              Centres of Learning
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* DHSS */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#003366] rounded flex items-center justify-center mb-5">
                <BookOpen className="w-7 h-7 text-[#D4A853]" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                Divine Higher Secondary School
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Providing quality +2 education in Science, Commerce, and Arts
                streams with experienced faculty and modern teaching
                methodologies. Affiliated to CHSE, Odisha.
              </p>
              <Link
                href="/dhss"
                className="inline-flex items-center gap-2 text-[#003366] font-semibold text-sm hover:text-[#D4A853] transition-colors"
              >
                Visit DHSS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* DDC */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#003366] rounded flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7 text-[#D4A853]" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                Divine Degree College
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Offering undergraduate programs in Arts, Science, and Commerce
                with focus on holistic development, research orientation, and
                career readiness.
              </p>
              <Link
                href="/ddc"
                className="inline-flex items-center gap-2 text-[#003366] font-semibold text-sm hover:text-[#D4A853] transition-colors"
              >
                Visit DDC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATISTICS BAND ===== */}
      <section className="bg-[#003366] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "2000+", label: "Students" },
              { value: "100+", label: "Faculty Members" },
              { value: "20+", label: "Programs Offered" },
              { value: "15+", label: "Years of Excellence" },
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

      {/* ===== NEWS & EVENTS ===== */}
      <section className="py-16 lg:py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D4A853] font-semibold text-sm tracking-widest uppercase mb-3">
              Stay Updated
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">
              Latest News &amp; Events
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <article
                key={news.title}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-44 bg-[#e8edf2] flex items-center justify-center">
                  <Newspaper className="w-12 h-12 text-[#003366] opacity-20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#D4A853] bg-[#faf6eb] px-2.5 py-1">
                      {news.tag}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {news.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#003366] mb-2 leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {news.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 border-2 border-[#003366] text-[#003366] font-semibold px-7 py-3 text-sm hover:bg-[#003366] hover:text-white transition-colors"
            >
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
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

      {/* ===== ADMISSIONS CTA ===== */}
      <section className="bg-[#003366] py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Admissions Open for 2026-27
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Begin your journey towards a bright future. Apply now for admissions
            across all programs at Divine Higher Secondary School and Divine
            Degree College.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center gap-2 bg-[#D4A853] text-[#003366] font-semibold px-8 py-3 text-sm hover:bg-[#c49a48] transition-colors"
            >
              Apply Online <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admissions/process"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 text-sm hover:bg-white hover:text-[#003366] transition-colors"
            >
              Admission Process
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#D4A853] text-[#D4A853] font-semibold px-8 py-3 text-sm hover:bg-[#D4A853] hover:text-[#003366] transition-colors"
            >
              Contact Us
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
          <div className="flex flex-wrap justify-center items-center gap-10">
            {affiliations.map((name) => (
              <div key={name} className="text-center">
                <div className="w-16 h-16 bg-[#f5f7fa] rounded-full flex items-center justify-center mx-auto mb-2 border border-gray-200">
                  <Star className="w-6 h-6 text-[#003366]" />
                </div>
                <p className="text-xs text-gray-500 font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
