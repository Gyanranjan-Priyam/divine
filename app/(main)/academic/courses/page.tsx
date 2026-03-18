import React from "react";
import type { Metadata } from "next";
import { GraduationCap, BookOpen } from "lucide-react";
import { coursesData } from "@/data/courseData";

export const metadata: Metadata = {
  title: "Courses Offered - Science, Arts, Commerce Programs",
  description:
    "Explore courses at Divine Group of Institutions Nayagarh. +2 Science, Arts, Commerce at DHSS (SAMS: 24075102). BA, BSc programs at DDC Lenkudipada (SAMS: 24055302). Physics, Chemistry, Mathematics, Botany, Zoology, English, Odia subjects available.",
  keywords: [
    "Courses Divine College",
    "+2 Science Nayagarh",
    "+2 Arts Nayagarh",
    "+2 Commerce Nayagarh",
    "BA Course Odisha",
    "BSc Course Odisha",
    "Physics Chemistry Mathematics",
    "SAMS Odisha Courses",
    "CHSE Courses",
    "Degree College Courses",
  ],
  openGraph: {
    title: "Courses Offered at Divine Group of Institutions",
    description:
      "Comprehensive academic programs in Science, Arts, and Commerce at both +2 and Degree levels.",
    url: "https://divineinstitutions.edu.in/academic/courses",
  },
  alternates: {
    canonical: "https://divineinstitutions.edu.in/academic/courses",
  },
};

const CoursesPage = () => {
  const { degreeCollege, higherSecondary } = coursesData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Courses Offered</h1>
          <p className="text-gray-200">Academic Year 2025-26</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Divine Higher Secondary School */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">
                {higherSecondary.name}
              </h2>
              <p className="text-sm text-gray-600">
                {higherSecondary.location}
              </p>
              {higherSecondary.samsCode && (
                <p className="text-sm text-[#D4A853] font-semibold">
                  SAMS Code: {higherSecondary.samsCode}
                </p>
              )}
            </div>
          </div>

          {/* SAMS Highlights - DHSS */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold">SAMS HIGHLIGHTS 2025-26</h3>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg text-[#003366] mb-4">
                Seat Information
              </h4>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        STREAM
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        STRENGTH
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        ADMISSION
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        VACANCY
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {higherSecondary.seatInformation.map((seat, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">
                          {seat.stream}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {seat.strength}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {seat.admission}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">
                          {seat.vacancy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {higherSecondary.subjectInformation && (
                <>
                  <h4 className="font-bold text-lg text-[#003366] mb-4">
                    Subject Information
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#003366] text-white">
                          <th className="border border-gray-300 px-4 py-3 text-left">
                            STREAM
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-left">
                            SUBJECT
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-left">
                            STRENGTH
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {higherSecondary.subjectInformation.map(
                          (subject, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3">
                                {subject.stream}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {subject.subject}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                {subject.strength}
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Divine Degree College */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">
                {degreeCollege.name}
              </h2>
              <p className="text-sm text-gray-600">{degreeCollege.location}</p>
              {degreeCollege.samsCode && (
                <p className="text-sm text-[#D4A853] font-semibold">
                  SAMS Code: {degreeCollege.samsCode}
                </p>
              )}
            </div>
          </div>

          {/* SAMS Highlights - DDC */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold">SAMS HIGHLIGHTS 2025-26</h3>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg text-[#003366] mb-4">
                Seat Information
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        STREAM
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        SUBJECT
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        STRENGTH
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        ADMISSION
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        VACANCY
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {degreeCollege.seatInformation.map((seat, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">
                          {seat.stream}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {seat.subject}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {seat.strength}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {seat.admission}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">
                          {seat.vacancy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Note Section */}
        <div className="bg-blue-50 border-l-4 border-[#003366] p-6 rounded">
          <p className="text-sm text-gray-700">
            <span className="font-bold text-[#003366]">Note:</span> For detailed
            admission fees and other information, please contact the respective
            institution or visit during admission hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
