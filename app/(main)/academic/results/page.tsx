import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Award, AlertCircle, Search, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Results - CHSE & Utkal University Results",
  description:
    "Check examination results for Divine Group of Institutions. CHSE Board Results for +2 Science at DHSS. Utkal University Results for B.Sc. at DDC. Direct links to official result portals.",
  keywords: [
    "CHSE Result",
    "Utkal University Result",
    "+2 Result Odisha",
    "B.Sc Result",
    "Divine College Result",
    "CHSE Result 2026",
    "Utkal University Result 2026",
    "Orissa Result",
  ],
  openGraph: {
    title: "Results - Divine Group of Institutions",
    description:
      "Check CHSE and Utkal University examination results. Direct links to official result portals.",
    url: "https://divinengrh.com/academic/results",
  },
  alternates: {
    canonical: "https://divinengrh.com/academic/results",
  },
};

const chseResultInfo = {
  name: "Divine Higher Secondary School (DHSS)",
  location: "Nayagarh, Odisha",
  samsCode: "24075102",
  board: "Council of Higher Secondary Education (CHSE), Odisha",
  resultPortals: [
    {
      name: "CHSE Official Result Portal",
      url: "https://chseodisha.nic.in/page/result",
      description: "Official CHSE website for +2 results",
    },
    {
      name: "Odisha Results Portal",
      url: "https://orissaresults.nic.in",
      description: "NIC portal for all Odisha board results",
    },
    {
      name: "IndiaResults",
      url: "https://www.indiaresults.com/odisha/chse",
      description: "Alternative result checking portal",
    },
  ],
  howToCheck: [
    "Visit the official CHSE result portal",
    "Select the examination year and stream (Science/Arts/Commerce)",
    "Enter your Roll Number and Date of Birth",
    "Click on 'Submit' to view your result",
    "Download or print the result for future reference",
  ],
  requiredDetails: ["Roll Number", "Date of Birth", "Registration Number (optional)"],
  resultHistory: [
    { year: "2025", stream: "Science", passPercentage: "92%", toppers: 15 },
    { year: "2024", stream: "Science", passPercentage: "89%", toppers: 12 },
    { year: "2023", stream: "Science", passPercentage: "91%", toppers: 14 },
  ],
};

const utkalResultInfo = {
  name: "Divine Degree College (DDC)",
  location: "Lenkudipada, Nayagarh, Odisha",
  samsCode: "24055302",
  university: "Utkal University, Bhubaneswar",
  resultPortals: [
    {
      name: "Utkal University Result Portal",
      url: "https://cbcs19.uuems.in/CBCS_Result/",
      description: "Official Utkal University result page",
    },
    {
      name: "Utkal University Examination",
      url: "https://utkaluniversity.ac.in/examination/",
      description: "Examination section with result links",
    },
    {
      name: "Odisha Results Portal",
      url: "https://orissaresults.nic.in",
      description: "NIC portal for university results",
    },
  ],
  howToCheck: [
    "Visit the Utkal University result portal",
    "Select your course (B.Sc.) and semester",
    "Enter your Examination Roll Number",
    "Enter your Registration Number",
    "Click on 'Get Result' to view your marks",
    "Download the provisional mark sheet",
  ],
  requiredDetails: ["Examination Roll Number", "Registration Number", "Semester/Year"],
  semesterResults: [
    { semester: "Semester I", examPeriod: "Nov-Dec", resultDeclared: "January" },
    { semester: "Semester II", examPeriod: "Apr-May", resultDeclared: "June" },
    { semester: "Semester III", examPeriod: "Nov-Dec", resultDeclared: "January" },
    { semester: "Semester IV", examPeriod: "Apr-May", resultDeclared: "June" },
    { semester: "Semester V", examPeriod: "Nov-Dec", resultDeclared: "January" },
    { semester: "Semester VI", examPeriod: "Apr-May", resultDeclared: "July" },
  ],
};

const ResultPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Examination Results</h1>
          <p className="text-gray-200">Check your CHSE and Utkal University results</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* CHSE Results Section - DHSS */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">{chseResultInfo.name}</h2>
              <p className="text-sm text-gray-600">{chseResultInfo.location}</p>
              <p className="text-sm text-[#D4A853] font-semibold">
                SAMS Code: {chseResultInfo.samsCode}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Affiliated to: <span className="font-medium">{chseResultInfo.board}</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold">CHSE BOARD RESULTS (+2 Science)</h3>
            </div>
            <div className="p-6">
              {/* Result Portals */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" /> Check Your Result
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {chseResultInfo.resultPortals.map((portal, index) => (
                  <Link
                    key={index}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#003366] hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <ExternalLink className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[#003366]">{portal.name}</p>
                        <p className="text-sm text-gray-600">{portal.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* How to Check */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" /> How to Check Your Result
              </h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <ol className="space-y-2">
                  {chseResultInfo.howToCheck.map((step, index) => (
                    <li key={index} className="flex gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs font-semibold">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Required Details */}
              <h4 className="font-bold text-lg text-[#003366] mb-4">Required Details</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {chseResultInfo.requiredDetails.map((detail, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-[#003366] rounded-full text-sm font-medium"
                  >
                    {detail}
                  </span>
                ))}
              </div>

              {/* Result History */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" /> DHSS Result History
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">YEAR</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">STREAM</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">PASS %</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">DISTINCTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chseResultInfo.resultHistory.map((result, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">{result.year}</td>
                        <td className="border border-gray-300 px-4 py-3">{result.stream}</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">
                          {result.passPercentage}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">{result.toppers} students</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Utkal University Results Section - DDC */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">{utkalResultInfo.name}</h2>
              <p className="text-sm text-gray-600">{utkalResultInfo.location}</p>
              <p className="text-sm text-[#D4A853] font-semibold">
                SAMS Code: {utkalResultInfo.samsCode}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Affiliated to: <span className="font-medium">{utkalResultInfo.university}</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold">UTKAL UNIVERSITY RESULTS (B.Sc. CBCS)</h3>
            </div>
            <div className="p-6">
              {/* Result Portals */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" /> Check Your Result
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {utkalResultInfo.resultPortals.map((portal, index) => (
                  <Link
                    key={index}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#003366] hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <ExternalLink className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[#003366]">{portal.name}</p>
                        <p className="text-sm text-gray-600">{portal.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* How to Check */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" /> How to Check Your Result
              </h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <ol className="space-y-2">
                  {utkalResultInfo.howToCheck.map((step, index) => (
                    <li key={index} className="flex gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs font-semibold">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Required Details */}
              <h4 className="font-bold text-lg text-[#003366] mb-4">Required Details</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {utkalResultInfo.requiredDetails.map((detail, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-[#003366] rounded-full text-sm font-medium"
                  >
                    {detail}
                  </span>
                ))}
              </div>

              {/* Semester Result Schedule */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" /> Semester Result Schedule (Tentative)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">SEMESTER</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">EXAM PERIOD</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">RESULT DECLARED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {utkalResultInfo.semesterResults.map((result, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">{result.semester}</td>
                        <td className="border border-gray-300 px-4 py-3">{result.examPeriod}</td>
                        <td className="border border-gray-300 px-4 py-3 text-[#D4A853] font-medium">
                          {result.resultDeclared}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <div className="bg-amber-50 border-l-4 border-[#D4A853] p-6 rounded">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#D4A853] mt-0.5" />
            <div>
              <p className="font-bold text-[#003366] mb-2">Important Information</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Keep your Admit Card safe as it contains your Roll Number and Registration Number</li>
                <li>• Results are provisional until verified by the respective board/university</li>
                <li>• For revaluation or recounting, apply within the stipulated time through official portal</li>
                <li>• Original mark sheets will be distributed through the college office</li>
                <li>• Contact college office for any result-related queries</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Need Help with Results?</h2>
          <p className="text-gray-600 mb-4">
            Contact our examination cell for any queries related to results
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919090172721"
              className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-2 rounded font-medium hover:bg-[#004488]"
            >
              Call: +91 9090172721
            </a>
            <a
              href="mailto:exam@divinengrh.com"
              className="inline-flex items-center gap-2 border border-[#003366] text-[#003366] px-6 py-2 rounded font-medium hover:bg-gray-50"
            >
              Email: exam@divinengrh.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultPage;