import type { Metadata } from "next";
import Image from "next/image";
import { Trophy, Users, Calendar, Target, Medal, Dumbbell, Bike, PersonStanding } from "lucide-react";

export const metadata: Metadata = {
  title: "Sports - Athletic Facilities & Activities",
  description:
    "Explore sports facilities at Divine Group of Institutions. Cricket, football, volleyball, badminton, athletics, and indoor games. Annual sports meet and inter-college competitions.",
  keywords: [
    "Divine College Sports",
    "Sports Facilities Nayagarh",
    "College Sports Odisha",
    "Cricket Ground",
    "Athletics",
    "Annual Sports Meet",
  ],
  openGraph: {
    title: "Sports - Divine Group of Institutions",
    description: "World-class sports facilities and athletic programs for holistic student development.",
    url: "https://divinengrh.com/facilities/sports",
  },
};

const sportsStats = [
  { icon: Trophy, value: "25+", label: "Tournaments Won" },
  { icon: Users, value: "500+", label: "Active Athletes" },
  { icon: Medal, value: "100+", label: "Medals & Awards" },
  { icon: Calendar, value: "1", label: "Annual Sports Meet" },
];

const sportsOffered = [
  {
    name: "Cricket",
    description: "Well-maintained cricket ground with practice nets and all necessary equipment.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
  },
  {
    name: "Football",
    description: "Full-size football field for matches and practice sessions throughout the year.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
  },
  {
    name: "Athletics",
    description: "Track and field facilities for running, long jump, high jump, and shot put.",
    image: "https://images.unsplash.com/photo-1461896836934-voices-0b64f?w=600&q=80",
  },
];

const facilities = [
  {
    title: "Sports Ground",
    description: "Sprawling sports ground with well-maintained turf for cricket, football, and athletics events.",
    icon: Target,
  },
  {
    title: "Indoor Sports Hall",
    description: "Air-conditioned indoor facility for badminton, table tennis, chess, and carrom.",
    icon: Dumbbell,
  },
  {
    title: "Gymnasium",
    description: "Modern gym equipped with exercise machines, weights, and cardio equipment.",
    icon: Bike,
  },
  {
    title: "Yoga Center",
    description: "Dedicated space for yoga and meditation sessions to promote mental wellness.",
    icon: PersonStanding,
  },
];

const annualEvents = [
  {
    name: "Annual Sports Meet",
    description: "Three-day inter-house sports competition featuring athletics, team sports, and individual events.",
    month: "January",
  },
  {
    name: "Inter-College Tournament",
    description: "Participation in district and state-level inter-college sports competitions.",
    month: "Throughout Year",
  },
  {
    name: "Yoga Day Celebration",
    description: "Special yoga sessions and demonstrations on International Yoga Day (June 21).",
    month: "June",
  },
  {
    name: "Sports Day Trials",
    description: "Selection trials for various sports teams representing the institution.",
    month: "July-August",
  },
];

const achievements = [
  "District Level Cricket Championship - Winners 2024",
  "Inter-College Volleyball Tournament - Runners Up 2024",
  "State Level Athletics - 3 Gold Medals 2023",
  "District Badminton Championship - Winners 2023",
  "Inter-College Football Tournament - Semi-Finalists 2024",
  "State Level Kabaddi - Bronze Medal 2023",
];

const SportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
          alt="Sports"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sports & Athletics</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Nurturing champions through world-class facilities and professional coaching
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sportsStats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4A853]/20 rounded-full mb-3">
                    <IconComponent className="w-6 h-6 text-[#D4A853]" />
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
              <h2 className="text-3xl font-bold text-[#003366] mb-4">Sports at Divine</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Divine Group of Institutions, we believe in the holistic development of our students. 
                Sports play a vital role in building character, teamwork, discipline, and leadership 
                qualities. Our comprehensive sports program offers opportunities for students to excel 
                in various athletic disciplines.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With state-of-the-art facilities including a sprawling sports ground, indoor sports hall, 
                and modern gymnasium, we provide the perfect environment for students to pursue their 
                sporting passions. Our experienced coaches guide students to achieve excellence in their 
                chosen sports.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Students regularly participate in inter-college, district, and state-level competitions, 
                bringing laurels to the institution. We also organize annual sports meets and various 
                tournaments to foster healthy competition and sportsmanship.
              </p>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
                alt="Athletes training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Sports Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Sports We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsOffered.map((sport) => (
              <div
                key={sport.name}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{sport.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{sport.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Our Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility) => {
              const IconComponent = facility.icon;
              return (
                <div
                  key={facility.title}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#003366] rounded-full mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#003366] mb-2">{facility.title}</h3>
                  <p className="text-sm text-gray-600">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Annual Events & Achievements */}
        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Annual Events */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4 flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <h3 className="text-xl font-bold">Annual Sports Events</h3>
            </div>
            <div className="p-6 space-y-4">
              {annualEvents.map((event, index) => (
                <div key={index} className="flex gap-4 items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="bg-[#D4A853]/20 px-3 py-1 rounded text-sm font-semibold text-[#D4A853] whitespace-nowrap">
                    {event.month}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003366]">{event.name}</h4>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#D4A853] text-[#003366] px-6 py-4 flex items-center gap-3">
              <Trophy className="w-5 h-5" />
              <h3 className="text-xl font-bold">Recent Achievements</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                    <Medal className="w-5 h-5 text-[#D4A853] flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Sports Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden col-span-2 row-span-2 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80"
                alt="Football match"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400&q=80"
                alt="Cricket"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&q=80"
                alt="Running track"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=400&q=80"
                alt="Gym"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80"
                alt="Yoga"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SportsPage;