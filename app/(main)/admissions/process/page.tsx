import type { Metadata } from "next";
import {
  FileText,
  CheckCircle,
  ExternalLink,
  AlertCircle,
  Calendar,
  Building2,
  TrendingUp,
} from "lucide-react";
import { cutoffData } from "@/data/cutoffData";
import {
  steps,
  requiredDocuments,
  importantLinks,
} from "@/data/admissionProcedureData";

export const metadata: Metadata = {
  title: "Admission Process 2025-26 - SAMS Odisha Portal Guide",
  description:
    "Complete admission guide for Divine Group of Institutions through SAMS Odisha Portal. Step-by-step process, required documents, cutoff marks, important dates for +2 and Degree admissions. Apply online at samsodisha.gov.in.",
  keywords: [
    "SAMS Odisha Admission",
    "Divine College Admission 2025",
    "DHSS Admission Process",
    "DDC Admission Procedure",
    "+2 Admission Odisha",
    "Degree College Admission",
    "SAMS Portal Registration",
    "Cutoff Marks Nayagarh",
    "Online Admission Odisha",
    "College Admission Documents",
  ],
  openGraph: {
    title: "Admission Process 2025-26 | Divine Group of Institutions",
    description:
      "Step-by-step admission guide through SAMS Odisha Portal. Required documents, cutoff marks, and important links.",
    url: "https://divinengrh.com/admissions/process",
  },
  alternates: {
    canonical: "https://divinengrh.com/admissions/process",
  },
};

const AdmissionProcessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Admission Process</h1>
          <p className="text-gray-200">
            Step-by-step guide for admission through SAMS Odisha Portal
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-[#003366] p-6 rounded-lg mb-12">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#003366] text-lg mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700 mb-2">
                All admissions to Divine Group of Institutions are processed
                through the{" "}
                <strong>Student Academic Management System (SAMS)</strong>,
                Government of Odisha. The admission procedure strictly follows
                the guidelines and schedule published by the SAMS Odisha portal.
              </p>
              <p className="text-gray-700">
                Students must register and apply online through the official
                SAMS portal. No offline applications are accepted.
              </p>
            </div>
          </div>
        </div>

        {/* Cutoff Marks Section */}
        <section>
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-[#003366]" />
              <h2 className="text-3xl font-bold text-[#003366]">
                SAMS Cutoff Marks 2025-26
              </h2>
            </div>
            <p className="text-gray-600">
              Previous year cutoff marks for reference. Actual cutoffs may vary.
            </p>
          </div>

          {/* Divine Higher Secondary School Cutoffs */}
          <div>
            <div className="bg-white mb-12 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#003366] text-white px-6 py-4">
                <h3 className="text-xl font-bold">
                  {cutoffData.higherSecondary.institutionName}
                </h3>
                <p className="text-sm text-gray-300">
                  SAMS Code: {cutoffData.higherSecondary.samsCode} | District:{" "}
                  {cutoffData.higherSecondary.district} | Session:{" "}
                  {cutoffData.higherSecondary.session}
                </p>
              </div>

              {cutoffData.higherSecondary.selections.map((selection, idx) => (
                <div key={idx} className="p-6">
                  <h4 className="font-bold text-lg text-[#003366] mb-4">
                    {selection.round}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Stream
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-center bg-blue-50">
                            GEN
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-center bg-green-50">
                            ST
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">
                            SC
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-center bg-purple-50">
                            SEBC
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selection.cutoffs.map((cutoff, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              {cutoff.stream}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center bg-blue-50">
                              {cutoff.GEN}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">
                              {cutoff.ST}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">
                              {cutoff.SC}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center bg-purple-50">
                              {cutoff.SEBC}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divine Degree College Cutoffs */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#003366] text-white px-6 py-4">
                <h3 className="text-xl font-bold">
                  {cutoffData.degreeCollege.institutionName}
                </h3>
                <p className="text-sm text-gray-300">
                  SAMS Code: {cutoffData.degreeCollege.samsCode} | District:{" "}
                  {cutoffData.degreeCollege.district} | Session:{" "}
                  {cutoffData.degreeCollege.session}
                </p>
              </div>

              {cutoffData.degreeCollege.selections.map((selection, idx) => (
                <div
                  key={idx}
                  className="p-6 border-b border-gray-200 last:border-b-0"
                >
                  <h4 className="font-bold text-lg text-[#003366] mb-4">
                    {selection.round}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Stream
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Subject
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-center bg-blue-50">
                            GEN
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-center bg-green-50">
                            ST
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">
                            SC
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-center bg-purple-50">
                            SEBC
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selection.cutoffs.map((cutoff, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">
                              {cutoff.stream}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                              {cutoff.subject}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center bg-blue-50">
                              {cutoff.GEN}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">
                              {cutoff.ST}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">
                              {cutoff.SC}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center bg-purple-50">
                              {cutoff.SEBC}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-amber-700">Note:</span> Cutoff
              marks are based on previous year data and are subject to change.
              These are for reference only. Please check the official SAMS
              Odisha portal for the latest cutoff marks during the admission
              process.
            </p>
          </div>
        </section>

        {/* Admission Steps */}
        <section className="mb-12 mt-10">
          <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">
            Admission Procedure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-[#D4A853]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500">
                      STEP {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#003366]">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-[#003366]" />
              <h2 className="text-2xl font-bold text-[#003366]">
                Required Documents
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600 italic">
              Note: All documents should be in PDF/JPG format. Ensure clear and
              legible scans before uploading.
            </p>
          </div>
        </section>

        {/* Important Links */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <ExternalLink className="w-8 h-8 text-[#003366]" />
              <h2 className="text-2xl font-bold text-[#003366]">
                Important Links
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {importantLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#003366] hover:shadow-md transition-all group"
                >
                  <Building2 className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-[#003366] group-hover:text-[#D4A853] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#003366] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-[#003366] to-[#004488] text-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-[#D4A853]" />
              <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
              <p className="text-gray-200">
                For admission-related queries and assistance
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-[#D4A853]">
                  Divine Higher Secondary School
                </h3>
                <p className="text-sm mb-2">📞 Contact: +91-9090172721</p>
                <p className="text-sm mb-2">📞 Contact: +91-9668676867</p>
                <p className="text-sm">
                  ✉️ Email: divine.ngrh@gmail.com
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-[#D4A853]">
                  Divine Degree College
                </h3>
                <p className="text-sm mb-2">📞 Contact: +91-9090172721</p>
                <p className="text-sm mb-2">📞 Contact: +91-9668676867</p>
                <p className="text-sm">✉️ Email: divine.ngrh@gmail.com</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-300">
                Office Hours: Monday - Saturday, 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdmissionProcessPage;
