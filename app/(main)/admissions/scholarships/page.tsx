import React from "react";
import type { Metadata } from "next";
import { scholarshipsData } from "@/data/scholarshipsData";
import { GraduationCap, Award, BookOpen, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Scholarships & Financial Aid - Government Schemes 2025",
  description:
    "Complete guide to government scholarships at Divine Group of Institutions. State and Central scholarships for SC, ST, OBC, Minority students. Post-Matric Scholarship, Medhabruti, NMMS, PM YASASVI, NSP schemes. Apply through scholarship.odisha.gov.in.",
  keywords: [
    "Government Scholarships Odisha",
    "Post Matric Scholarship",
    "SC ST Scholarship",
    "Medhabruti Scholarship",
    "NMMS Scholarship",
    "PM YASASVI",
    "NSP Scholarships",
    "College Scholarship Nayagarh",
    "Financial Aid Students",
    "Odisha State Scholarship Portal",
  ],
  openGraph: {
    title: "Scholarships & Financial Aid | Divine Group of Institutions",
    description:
      "Complete scholarship guide for State and Central government schemes. SC, ST, OBC, Minority scholarships available.",
    url: "https://divinengrh.com/admissions/scholarships",
  },
  alternates: {
    canonical: "https://divinengrh.com/admissions/scholarships",
  },
};

const ScholarshipsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">
            Scholarships & Financial Aid
          </h1>
          <p className="text-gray-200">
            Detailed scholarship information for government schemes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {scholarshipsData.map((institution, idx) => (
          <section key={idx}>
            {/* Institution Header */}
            <div className="flex items-center gap-3 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-[#003366]">
                  {institution.institutionName}
                </h2>
                <p className="text-sm text-gray-600">
                  SAMS Code: {institution.samsCode}
                </p>
              </div>
            </div>

            {/* State Government Scholarships */}
            <div className="mb-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-[#003366] text-white px-6 py-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    {institution.stateGovernment.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-xs sm:text-sm min-w-[700px]">
                      <thead>
                        <tr className="bg-[#003366] text-white">
                          <th className="border border-gray-300 px-3 py-3 text-center">
                            Scholarship Name
                          </th>
                          <th className="border border-gray-300 px-3 py-3 text-center">
                            Eligibility
                          </th>
                          <th className="border border-gray-300 px-3 py-3 text-center">
                            Income Limit
                          </th>
                          <th className="border border-gray-300 px-3 py-3 text-center">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {institution.stateGovernment.scholarships.map(
                          (scholarship, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-3 py-2 font-semibold text-center">
                                {scholarship.name}
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center bg-blue-50">
                                {scholarship.eligibility}
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center bg-green-50">
                                {scholarship.incomeLimit || "—"}
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center bg-yellow-50">
                                {scholarship.amount || "—"}
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Government Scholarships */}
            <div className="mb-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-[#003366] text-white px-6 py-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {institution.centralGovernment.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-xs sm:text-sm min-w-[700px]">
                      <thead>
                        <tr className="bg-[#003366] text-white">
                          <th className="border border-gray-300 px-3 py-3 text-center">
                            Scholarship Name
                          </th>
                          <th className="border border-gray-300 px-3 py-3 text-center">
                            Eligibility
                          </th>
                          <th className="border border-gray-300 px-3 py-3 text-center">
                            Income Limit
                          </th>
                          <th className="border border-gray-300 px-3 py-3 text-center">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {institution.centralGovernment.scholarships.map(
                          (scholarship, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-3 py-2 font-semibold text-center">
                                {scholarship.name}
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center bg-blue-50">
                                {scholarship.eligibility}
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center bg-green-50">
                                {scholarship.incomeLimit || "—"}
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center bg-yellow-50">
                                {scholarship.amount || "—"}
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Application Information */}
        <section>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Info className="w-5 h-5" />
                How to Apply for Scholarships
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex gap-3">
                  <span className="font-bold text-[#003366] min-w-[24px]">
                    1.
                  </span>
                  <p className="text-gray-700">
                    Visit the{" "}
                    <a
                      href="https://scholarships.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#003366] underline font-semibold"
                    >
                      National Scholarship Portal (NSP)
                    </a>{" "}
                    for Central Government scholarships.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-[#003366] min-w-[24px]">
                    2.
                  </span>
                  <p className="text-gray-700">
                    Visit the{" "}
                    <a
                      href="https://scholarship.odisha.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#003366] underline font-semibold"
                    >
                      Odisha State Scholarship Portal
                    </a>{" "}
                    for State Government scholarships.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-[#003366] min-w-[24px]">
                    3.
                  </span>
                  <p className="text-gray-700">
                    Contact the institution&apos;s admission office for guidance on
                    scholarship applications.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-[#003366] min-w-[24px]">
                    4.
                  </span>
                  <p className="text-gray-700">
                    Keep all required documents ready: Aadhaar card, income
                    certificate, caste certificate (if applicable), bank
                    details, and academic certificates.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-amber-700">Note:</span>{" "}
                    Scholarship availability, eligibility criteria, and amounts
                    may change. Students are advised to check the official
                    portals regularly and contact the institution for the latest
                    information and application deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScholarshipsPage;
