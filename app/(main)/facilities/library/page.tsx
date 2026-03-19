import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Clock, Users, Wifi, BookMarked, Newspaper, Monitor, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Library - Central Library Facilities",
  description:
    "Explore the Central Library at Divine Group of Institutions. 15,000+ books, digital resources, e-journals, reading rooms, and modern study facilities for students.",
  keywords: [
    "Divine College Library",
    "Central Library Nayagarh",
    "College Library Odisha",
    "E-Library",
    "Study Room",
    "Reading Hall",
  ],
  openGraph: {
    title: "Library - Divine Group of Institutions",
    description: "Modern library facilities with extensive collection of books and digital resources.",
    url: "https://divinengrh.com/facilities/library",
  },
};

const libraryStats = [
  { icon: BookOpen, value: "15,000+", label: "Books & Volumes" },
  { icon: Newspaper, value: "50+", label: "Journals & Magazines" },
  { icon: Monitor, value: "20+", label: "Computer Terminals" },
  { icon: Users, value: "150+", label: "Seating Capacity" },
];

const libraryFeatures = [
  {
    title: "Extensive Book Collection",
    description: "Over 15,000 books covering all subjects including Physics, Chemistry, Mathematics, Biology, Computer Science, and general knowledge.",
    icon: BookMarked,
  },
  {
    title: "Digital Library",
    description: "Access to e-books, online journals, and digital learning resources through INFLIBNET and other platforms.",
    icon: Monitor,
  },
  {
    title: "Spacious Reading Hall",
    description: "Well-ventilated, air-conditioned reading hall with comfortable seating for focused study and research work.",
    icon: Users,
  },
  {
    title: "Reference Section",
    description: "Dedicated reference section with encyclopedias, dictionaries, competitive exam books, and research materials.",
    icon: Search,
  },
  {
    title: "Newspaper & Periodicals",
    description: "Daily newspapers (English, Hindi, Odia) and weekly/monthly magazines for current affairs and general reading.",
    icon: Newspaper,
  },
  {
    title: "Wi-Fi Enabled",
    description: "High-speed internet connectivity for students to access online resources and digital content.",
    icon: Wifi,
  },
];

const libraryTimings = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 4:00 PM" },
  { day: "Sunday & Holidays", time: "Closed" },
  { day: "Examination Period", time: "8:00 AM - 8:00 PM" },
];

const libraryRules = [
  "Maintain silence in the library premises",
  "Identity card is mandatory for entry",
  "Books must be returned within the stipulated time",
  "Reference books are not issued for home use",
  "No food or beverages allowed inside",
  "Mobile phones must be on silent mode",
  "Handle books with care; damaged books will attract fine",
  "Maximum 3 books can be issued at a time",
];

const LibraryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920&q=80"
          alt="Library"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Central Library</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A gateway to knowledge with extensive collection of books, journals, and digital resources
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {libraryStats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#003366]/10 rounded-full mb-3">
                    <IconComponent className="w-6 h-6 text-[#003366]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#003366]">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-4">About Our Library</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Central Library at Divine Group of Institutions serves as the heart of academic 
                excellence. With a collection of over 15,000 books and numerous journals, it provides 
                comprehensive resources for students of both Divine Higher Secondary School (DHSS) 
                and Divine Degree College (DDC).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our library is equipped with modern facilities including a digital section with 
                computer terminals, high-speed internet, and access to online databases. The spacious 
                reading hall provides a conducive environment for self-study and research.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We continuously update our collection to include the latest textbooks, reference 
                materials, and competitive examination guides to support our students in their 
                academic and career pursuits.
              </p>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
                alt="Students studying in library"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Library Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraryFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4A853]/20 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-[#D4A853]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#003366] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Library Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80"
                alt="Book shelves"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                alt="Reading area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80"
                alt="Study tables"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Timings & Rules */}
        <section className="grid lg:grid-cols-2 gap-8">
          {/* Timings */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4 flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <h3 className="text-xl font-bold">Library Timings</h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <tbody>
                  {libraryTimings.map((timing, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-gray-700">{timing.day}</td>
                      <td className="py-3 text-right font-semibold text-[#003366]">{timing.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#D4A853] text-[#003366] px-6 py-4 flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              <h3 className="text-xl font-bold">Library Rules</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {libraryRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="flex-shrink-0 w-5 h-5 bg-[#003366] text-white rounded-full flex items-center justify-center text-xs">
                      {index + 1}
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LibraryPage;