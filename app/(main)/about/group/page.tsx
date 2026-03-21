import React from "react";
import type { Metadata } from "next";
import { Building2, GraduationCap, Users, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About Divine Group - Leading Educational Institution in Nayagarh",
  description:
    "Divine Group of Institutions is a leading educational organization in Nayagarh, Odisha committed to academic excellence, discipline, and value-based learning since 2013.",
  keywords: [
    "Divine Group of Institutions",
    "Divine Nayagarh",
    "Education Nayagarh",
    "Divine Higher Secondary School",
    "Divine Degree College",
    "CHSE Odisha",
    "Utkal University",
  ],
  openGraph: {
    title: "About Divine Group | Divine Group of Institutions",
    description:
      "Inspiring Excellence in Education - Divine Group of Institutions, Nayagarh, Odisha.",
    url: "https://divinengrh.com/about/group",
  },
  alternates: {
    canonical: "https://divinengrh.com/about/group",
  },
};

const GroupPage = () => {
  const milestones = [
    {
      year: "2013",
      title: "Foundation",
      description: "Established Divine Higher Secondary School, affiliated to CHSE, Odisha.",
    },
    {
      year: "2016",
      title: "Infrastructure Expansion",
      description: "Expanded Higher Secondary laboratories for advanced learning.",
    },
    {
      year: "2018",
      title: "Higher Education",
      description: "Established Divine Degree College, affiliated to Utkal University, Bhubaneswar.",
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Recognized for 'Excellence in Academic Standards'.",
    },
  ];

  const stats = [
    { icon: GraduationCap, label: "Students", value: "1000+" },
    { icon: Users, label: "Faculty Members", value: "50+" },
    { icon: Building2, label: "Campuses", value: "2" },
    { icon: Calendar, label: "Years of Excellence", value: "10+" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">About Divine Group</h1>
          <p className="text-gray-200">Inspiring Excellence in Education</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Our Story</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Divine Group of Institutions is a leading educational organization committed to academic 
              excellence, discipline, and value-based learning. Established with the vision of nurturing 
              young minds, the institution has grown steadily by providing quality education from school 
              to higher education.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beginning its journey in 2013 with Divine Higher Secondary School, affiliated to CHSE, 
              Odisha, the Group expanded in 2018 with the establishment of Divine Degree College, 
              affiliated to Utkal University, Bhubaneswar. Over the years, Divine has earned the trust 
              of parents and the community through consistent academic results, a supportive learning 
              environment, and dedicated faculty.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Managed by Divine Educational and Charitable Trust, Nayagarh, the Group focuses on holistic 
              development, encouraging students to excel academically while developing character, confidence, 
              and social responsibility.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">At a Glance</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-10 h-10 text-[#003366] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#003366]">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Our Legacy of Academic Excellence</h2>
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Founding Vision & Growth</h3>
            <p className="text-gray-700 leading-relaxed">
              Divine Group of Institutions was established in Nayagarh with a singular mission: to blend 
              modern academic standards with traditional moral integrity. For over a decade, we have been 
              a pillar of educational growth, fostering an environment where discipline meets curiosity.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Key Milestones</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#003366] text-white rounded-lg flex items-center justify-center">
                      <span className="font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-gray-800">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DHSS */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h2 className="text-xl font-bold">Divine Higher Secondary School</h2>
              <p className="text-gray-200 text-sm">Affiliated to CHSE, Odisha</p>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-gray-700">
                Established in 2013, DHSS provides quality +2 education in Science streams 
                with a focus on academic excellence and holistic development.
              </p>
              <div className="text-sm text-gray-600">
                <p><span className="font-medium">Streams:</span> Science</p>
                <p><span className="font-medium">Affiliation:</span> CHSE, Odisha</p>
              </div>
            </div>
          </section>

          {/* DDC */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h2 className="text-xl font-bold">Divine Degree College</h2>
              <p className="text-gray-200 text-sm">Affiliated to Utkal University</p>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-gray-700">
                Established in 2018, DDC offers undergraduate programs in science with 
                experienced faculty and modern infrastructure.
              </p>
              <div className="text-sm text-gray-600">
                <p><span className="font-medium">Programs:</span>B.Sc(Hons)</p>
                <p><span className="font-medium">Affiliation:</span> Utkal University, Bhubaneswar</p>
              </div>
            </div>
          </section>
        </div>

        {/* Trust Information */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Divine Educational and Charitable Trust</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Divine Group of Institutions is managed by Divine Educational and Charitable Trust, Nayagarh. 
              The Trust is committed to providing accessible, quality education to students from all backgrounds, 
              promoting academic excellence while instilling values of integrity, discipline, and social responsibility.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GroupPage;