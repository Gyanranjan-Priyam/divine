import type { Metadata } from "next";
import Image from "next/image";
import { Home, Users, Shield, Utensils, Wifi, Clock, Phone, MapPin, CheckCircle, Bed } from "lucide-react";

export const metadata: Metadata = {
  title: "Hostel - Accommodation Facilities",
  description:
    "Hostel facilities at Divine Group of Institutions. Separate hostels for boys and girls with comfortable rooms, mess facility, Wi-Fi, and 24/7 security.",
  keywords: [
    "Divine College Hostel",
    "Hostel Nayagarh",
    "Boys Hostel Odisha",
    "Girls Hostel Odisha",
    "College Accommodation",
    "Student Hostel",
  ],
  openGraph: {
    title: "Hostel - Divine Group of Institutions",
    description: "Safe and comfortable hostel accommodation for students with all modern amenities.",
    url: "https://divinengrh.com/facilities/hostel",
  },
};

const hostelStats = [
  { icon: Home, value: "5", label: "Separate Hostels" },
  { icon: Bed, value: "500+", label: "Bed Capacity" },
  { icon: Shield, value: "24/7", label: "Security" },
  { icon: Utensils, value: "3", label: "Meals Daily" },
];

const hostelFeatures = [
  {
    title: "Comfortable Rooms",
    description: "Well-furnished rooms with beds, study tables, chairs, and storage almirahs. Both single and shared room options available.",
    icon: Bed,
  },
  {
    title: "Mess Facility",
    description: "Hygienic mess serving nutritious vegetarian meals. Breakfast, lunch, and dinner provided with variety in menu.",
    icon: Utensils,
  },
  {
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance, security guards, and biometric attendance system.",
    icon: Shield,
  },
  {
    title: "Wi-Fi Connectivity",
    description: "High-speed internet access throughout the hostel premises for academic and research purposes.",
    icon: Wifi,
  },
  {
    title: "Common Room",
    description: "Spacious common room with TV, newspapers, indoor games like carrom, chess, and table tennis.",
    icon: Users,
  },
  {
    title: "Warden Support",
    description: "Dedicated wardens available 24/7 to address student concerns and ensure discipline.",
    icon: Phone,
  },
];

const boysHostelInfo = {
  name: "Boys Hostel",
  capacity: "300+ students",
  roomTypes: ["Double sharing", "Triple sharing"],
  amenities: [
    "Attached bathrooms",
    "Hot water facility",
    "Study room",
    "Recreation area",
    "Parking facility",
    "Laundry service",
  ],
};

const girlsHostelInfo = {
  name: "Girls Hostel",
  capacity: "200+ students",
  roomTypes: ["Double sharing", "Triple sharing"],
  amenities: [
    "Attached bathrooms",
    "Hot water facility",
    "Study room",
    "Indoor recreation",
    "Visitor's room",
    "In-house medical aid",
  ],
};

const hostelRules = [
  "Hostel gate closes at 8:00 PM (9:00 PM during exams)",
  "Visitors allowed only in designated areas during visiting hours",
  "Ragging in any form is strictly prohibited",
  "Consumption of alcohol/tobacco is strictly prohibited",
  "Electrical appliances require prior permission",
  "Maintain cleanliness in rooms and common areas",
  "Silence hours: 10:00 PM to 6:00 AM",
  "Prior permission required for overnight absence",
];


export default function HostelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1920&q=80"
          alt="Hostel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hostel Accommodation</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A home away from home with comfortable living and all modern amenities
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hostelStats.map((stat) => {
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
              <h2 className="text-3xl font-bold text-[#003366] mb-4">About Our Hostels</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Divine Group of Institutions provides separate hostel facilities for boys and girls, 
                ensuring a safe, comfortable, and conducive environment for academic pursuits. Our 
                hostels are located within the campus, providing easy access to classrooms, library, 
                and other facilities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The hostels are designed to be a &quot;home away from home&quot; for students coming from 
                different parts of Odisha and beyond. With well-maintained rooms, nutritious food, 
                and round-the-clock security, parents can rest assured about their ward&apos;s safety 
                and well-being.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated wardens and support staff ensure that students maintain discipline 
                while also having opportunities for recreation and personal development. The hostel 
                life at Divine fosters lifelong friendships and memories.
              </p>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=800&q=80"
                alt="Hostel rooms"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Hostel Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostelFeatures.map((feature) => {
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

        {/* Boys & Girls Hostel Info */}
        <section className="mb-16 grid lg:grid-cols-2 gap-8">
          {/* Boys Hostel */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80"
                alt="Boys Hostel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366] to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white">{boysHostelInfo.name}</h3>
                <p className="text-gray-200">Capacity: {boysHostelInfo.capacity}</p>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-[#003366] mb-2">Room Types</h4>
              <p className="text-sm text-gray-600 mb-4">{boysHostelInfo.roomTypes.join(", ")}</p>
              <h4 className="font-semibold text-[#003366] mb-2">Amenities</h4>
              <ul className="grid grid-cols-2 gap-2">
                {boysHostelInfo.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Girls Hostel */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
                alt="Girls Hostel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366] to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white">{girlsHostelInfo.name}</h3>
                <p className="text-gray-200">Capacity: {girlsHostelInfo.capacity}</p>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-[#003366] mb-2">Room Types</h4>
              <p className="text-sm text-gray-600 mb-4">{girlsHostelInfo.roomTypes.join(", ")}</p>
              <h4 className="font-semibold text-[#003366] mb-2">Amenities</h4>
              <ul className="grid grid-cols-2 gap-2">
                {girlsHostelInfo.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Rules & Contact */}
        <section className="grid lg:grid-cols-2 gap-8">
          {/* Rules */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#D4A853] text-[#003366] px-6 py-4 flex items-center gap-3">
              <Shield className="w-5 h-5" />
              <h3 className="text-xl font-bold">Hostel Rules</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {hostelRules.map((rule, index) => (
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

          {/* Contact & Timings */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4 flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <h3 className="text-xl font-bold">Timings & Contact</h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-[#003366] mb-3">Important Timings</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wake-up Bell</span>
                    <span className="font-medium text-[#003366]">5:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Breakfast</span>
                    <span className="font-medium text-[#003366]">7:00 - 8:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lunch</span>
                    <span className="font-medium text-[#003366]">12:30 - 1:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dinner</span>
                    <span className="font-medium text-[#003366]">7:30 - 8:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gate Closing</span>
                    <span className="font-medium text-[#003366]">8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lights Off</span>
                    <span className="font-medium text-[#003366]">10:30 PM</span>
                  </div>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-[#003366] mb-3">Contact Details</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-[#D4A853]" />
                    <span>Boys Hostel Warden: +91-XXXXX-XXXXX</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-[#D4A853]" />
                    <span>Girls Hostel Warden: +91-XXXXX-XXXXX</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#D4A853]" />
                    <span>Divine Campus, Nayagarh, Odisha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Hostel Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
                alt="Hostel building"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=600&q=80"
                alt="Hostel room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80"
                alt="Mess area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}