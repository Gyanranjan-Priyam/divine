import React from "react";
import type { Metadata } from "next";
import { Target, Eye, Compass, Heart, BookOpen, Users, Award, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Mission & Vision - Divine Group of Institutions",
  description:
    "Discover the mission, vision, and core values that guide Divine Group of Institutions in providing quality education and nurturing future leaders in Nayagarh, Odisha.",
  keywords: [
    "Divine Mission",
    "Divine Vision",
    "Divine Values",
    "Educational Philosophy",
    "Divine Nayagarh",
    "Academic Excellence",
  ],
  openGraph: {
    title: "Mission & Vision | Divine Group of Institutions",
    description:
      "Our mission is to provide quality education that empowers students to excel academically and develop strong moral character.",
    url: "https://divinengrh.com/about/vision",
  },
  alternates: {
    canonical: "https://divinengrh.com/about/vision",
  },
};

const VisionPage = () => {
  const coreValues = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Commitment to high academic standards and continuous improvement in teaching and learning.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Upholding honesty, ethics, and transparency in all institutional activities.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Creating a welcoming environment for students from all backgrounds and communities.",
    },
    {
      icon: Award,
      title: "Discipline",
      description: "Fostering self-discipline, punctuality, and respect for rules and regulations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative thinking and adopting modern teaching methodologies.",
    },
    {
      icon: Compass,
      title: "Social Responsibility",
      description: "Nurturing responsible citizens who contribute positively to society.",
    },
  ];

  const objectives = [
    "To provide quality education accessible to students from all socio-economic backgrounds.",
    "To create a conducive learning environment that promotes intellectual growth and character development.",
    "To employ qualified and dedicated faculty committed to student success.",
    "To maintain modern infrastructure and facilities that support effective learning.",
    "To encourage students to participate in co-curricular and extracurricular activities.",
    "To prepare students for higher education and professional careers.",
    "To instill moral values and ethical principles in students.",
    "To foster a culture of continuous improvement and excellence.",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Mission & Vision</h1>
          <p className="text-gray-200">Guiding Principles of Divine Group of Institutions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Vision Section */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4 flex items-center gap-3">
            <Eye className="w-6 h-6" />
            <h2 className="text-xl font-bold">Our Vision</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              To be a premier educational institution recognized for academic excellence, moral values, 
              and holistic development of students, contributing to the creation of responsible citizens 
              and future leaders who will serve the nation and society with integrity and competence.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4 flex items-center gap-3">
            <Target className="w-6 h-6" />
            <h2 className="text-xl font-bold">Our Mission</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Divine Group of Institutions is committed to providing quality education that empowers 
              students to achieve academic excellence while developing strong moral character and 
              social responsibility.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We strive to create a nurturing learning environment where students are encouraged to 
              explore their potential, develop critical thinking skills, and become well-rounded 
              individuals prepared for the challenges of the modern world.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through dedicated faculty, modern infrastructure, and a comprehensive curriculum, we 
              aim to bridge the gap between traditional values and contemporary education, ensuring 
              our students are equipped for success in higher education and professional life.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Our Core Values</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <value.icon className="w-8 h-8 text-[#003366]" />
                    <h3 className="font-semibold text-gray-800">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Our Objectives</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#003366] text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{objective}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Commitment */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Our Commitment</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Divine Group of Institutions is committed to maintaining the highest standards of 
              education while remaining accessible to students from all backgrounds. We believe 
              that every student deserves the opportunity to receive quality education and develop 
              their full potential.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated faculty members work tirelessly to ensure that students receive 
              personalized attention and guidance. We continuously invest in infrastructure, 
              technology, and teaching resources to enhance the learning experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As we continue to grow, we remain firmly rooted in our founding principles of 
              academic excellence, discipline, and value-based education. We are grateful for 
              the trust placed in us by parents and the community, and we are committed to 
              upholding this trust through our continued dedication to student success.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionPage;