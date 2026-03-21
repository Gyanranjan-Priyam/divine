import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Trophy, Award, GraduationCap, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements - Divine Group of Institutions",
  description:
    "Explore the outstanding achievements of Divine Higher Secondary School students in CHSE board exams and NEET. District toppers, 100% results, and academic excellence since 2015.",
  keywords: [
    "Divine Achievements",
    "CHSE Results",
    "District Topper Nayagarh",
    "Divine NEET Results",
    "Divine Academic Excellence",
    "DHSS Results",
  ],
  openGraph: {
    title: "Achievements | Divine Group of Institutions",
    description:
      "Celebrating academic excellence - District toppers and outstanding results year after year.",
    url: "https://divinengrh.com/about/achievements",
  },
  alternates: {
    canonical: "https://divinengrh.com/about/achievements",
  },
};

const achievements = [
  {
    year: "2025",
    title: "CHSE 2025 - Record-Breaking Performance",
    image: "/acheivements/chse2025.jpg",
    highlights: [
      "Chhita Ranjan Sahoo - District Topper with 572 marks (Highest-Ever in Nayagarh's history)",
      "6 students scored 90% and above",
      "27 students in 500 club",
      "42 students scored 80% and above",
      "193 students secured 1st Division",
    ],
    description:
      "A historic achievement for Divine Higher Secondary School with Chhita Ranjan Sahoo creating history by scoring the highest-ever marks in +2 Science in Nayagarh district.",
  },
  {
    year: "2024",
    title: "CHSE 2024 - Glorious Results",
    image: "/acheivements/chse2024.jpg",
    highlights: [
      "Rajesh Nayak - District Rank 2 with 553/600 marks",
      "Rudrapratap Dalai - District Rank 3 with 550/600 marks",
      "100% Results achieved",
      "Multiple students in top district ranks",
    ],
    description:
      "Continuing the legacy of excellence, Divine students secured District Rank 2 and 3 in CHSE 2024, demonstrating consistent academic performance.",
  },
  {
    year: "2023",
    title: "CHSE 2023 - Stars of Divine",
    image: "/acheivements/chse2023.webp",
    highlights: [
      "Ranjan Ku Sahoo - Nayagarh District Residential College Topper (539 marks, 89.8%)",
      "100% Result achieved",
      "175 students appeared, 152 secured 1st Division",
      "11 students in 500s Club",
      "25 students scored 80% and above",
    ],
    description:
      "Divine Higher Secondary School continued its tradition of excellence with Ranjan Ku Sahoo emerging as the District Residential College Topper with remarkable performance across all categories.",
  },
  {
    year: "2022",
    title: "CHSE 2022 - Tradition of Excellence Continues",
    image: "/acheivements/chse2022.jpg",
    highlights: [
      "Rakesh Kumar Sahoo - 557 marks (92.8%)",
      "Om Prakash Dalbehera - 556 marks (92.7%)",
      "Sidhartha Sankar Panda - 553 marks (92.1%)",
      "Abhipsa Sahoo - 541 marks (90.1%)",
      "Multiple students scoring above 90%",
    ],
    description:
      "The tradition of excellence continued with four students crossing the 90% mark, showcasing the consistent quality of education at Divine.",
  },
  {
    year: "2021",
    title: "CHSE & NEET 2021 - Outstanding Performance",
    image: "/acheivements/chse2021.jpg",
    highlights: [
      "NEET Toppers: Nikunja (628) & Pritish (585)",
      "5 students in 550 Club",
      "7 students scored 90% and above",
      "17 students in 500 Club",
      "142 students secured 1st Division",
      "100% Success rate",
    ],
    description:
      "A remarkable year with exceptional performance in both CHSE board exams and NEET medical entrance, with Nikunja and Pritish leading the way in medical aspirations.",
  },
  {
    year: "2021",
    title: "NEET 2021 Medical - Leadership in Medical Entrance",
    image: "/acheivements/neet2021.jpg",
    highlights: [
      "Nikunja B. Routray from Binodapada - 628 marks",
      "Pritish Ku. Mohanty from Nayagarh - 585 marks",
      "Outstanding performance in national medical entrance",
    ],
    description:
      "Divine students proved their mettle in the highly competitive NEET examination, with Nikunja B. Routray and Pritish Ku. Mohanty securing excellent scores for medical admissions.",
  },
  {
    year: "2020",
    title: "CHSE 2020 - 6th Consecutive Year as District Topper",
    image: "/acheivements/chse2020.jpg",
    highlights: [
      "Pritish Ku. Mohanty - District Topper with 538 marks",
      "6 students in 500 Club",
      "13 students scored above 80%",
      "76 students scored above 60%",
      "Nayagarh District Topper for 6th Consecutive Year",
      "100% Success rate",
    ],
    description:
      "Divine Higher Secondary School achieved a remarkable milestone of producing the District Topper for the 6th consecutive year, establishing itself as the premier institution in Nayagarh.",
  },
  {
    year: "2019",
    title: "CHSE 2019 - District Topper for 5th Consecutive Year",
    image: "/acheivements/chse2019.jpg",
    highlights: [
      "Soumya P. Atibudhi - District Topper with 540 marks",
      "17th Rank in entire Odisha state",
      "District Topper for 5th Consecutive Year",
    ],
    description:
      "Soumya P. Atibudhi brought immense pride to Divine by securing the District Topper position and 17th rank across Odisha, marking the 5th consecutive year of district topping achievement.",
  },
  {
    year: "2015-2019",
    title: "Legacy of District Toppers - 5 Consecutive Years",
    image: "/acheivements/5thcons.jpg",
    highlights: [
      "2019: Soumya P. Atibudhi - 539 marks",
      "2018: Jayanta Mohapatra - 532 marks",
      "2017: Babul Kumar Nath - 520 marks",
      "2016: Abhijeet Sahoo - 535 marks",
      "2015: Soumya Ranjan Sahoo - 532 marks",
      "100% Result every year",
    ],
    description:
      "A testament to Divine's commitment to academic excellence - producing the District Residential College Topper for 5 consecutive years from 2015 to 2019.",
  },
];

const stats = [
  { icon: Trophy, label: "District Toppers", value: "10+" },
  { icon: Award, label: "Years of 100% Results", value: "7+" },
  { icon: GraduationCap, label: "Students in 500 Club", value: "100+" },
  { icon: Star, label: "Students Scored 90%+", value: "50+" },
];

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Our Achievements</h1>
          <p className="text-gray-200">
            Celebrating Academic Excellence Year After Year
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Statistics */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Achievement Highlights</h2>
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

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">A Legacy of Excellence</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Divine Higher Secondary School has consistently produced outstanding academic results 
              since its inception. Our students have secured District Topper positions for multiple 
              consecutive years, achieved 100% pass rates, and excelled in competitive examinations 
              like NEET. This page showcases our proud achievers who have brought glory to the institution 
              through their hard work and dedication.
            </p>
          </div>
        </section>

        {/* Achievements List */}
        {achievements.map((achievement, index) => (
          <section key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h2 className="text-xl font-bold">{achievement.title}</h2>
              <p className="text-gray-200 text-sm">Academic Year: {achievement.year}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <p className="text-gray-700">{achievement.description}</p>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Key Highlights:</h3>
                    <ul className="space-y-2">
                      {achievement.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-5 h-5 bg-[#003366] text-white rounded-full flex items-center justify-center text-xs">
                            ✓
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Closing Note */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Our Commitment</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              These achievements reflect the combined efforts of our dedicated faculty, supportive 
              parents, and hardworking students. At Divine Higher Secondary School, we remain committed 
              to maintaining these high standards of academic excellence while nurturing the overall 
              development of our students. We congratulate all our achievers and look forward to 
              continued success in the years to come.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AchievementsPage;