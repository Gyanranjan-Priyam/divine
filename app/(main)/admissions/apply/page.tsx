import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { FileText, Calendar, Mail, ExternalLink, Sun } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply for Admission - Divine Group of Institutions",
  description:
    "Apply for admission to Divine Group of Institutions. Complete application process, important dates, and registration for undergraduate, postgraduate programs and summer courses.",
  keywords: [
    "Apply Admission",
    "Divine College Application",
    "DHSS Admission",
    "DDC Admission",
    "Summer Course Registration",
    "College Application Odisha",
  ],
  openGraph: {
    title: "Apply for Admission | Divine Group of Institutions",
    description: "Apply for admission to Divine Higher Secondary School and Divine Degree College.",
    url: "https://divinengrh.com/admissions/apply",
  },
  alternates: {
    canonical: "https://divinengrh.com/admissions/apply",
  },
};

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Apply for Admission</h1>
          <p className="text-gray-200">
            Welcome to Divine Group of Institutions! We are excited to have you join our community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Summer Course Banner */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-amber-500 text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Sun className="w-5 h-5" />
              Summer Course 2026 - Registrations Open!
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Enhance your skills this summer with our specially designed courses. Limited seats available for students of all streams.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="#summer-course"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-2 rounded font-medium hover:bg-[#004488] transition-colors"
              >
                Register Now
                <ExternalLink className="w-4 h-4" />
              </Link>
              <span className="text-sm text-gray-600">
                Registration closes: April 30, 2026
              </span>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Application Process
            </h2>
          </div>
          <div className="p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-semibold text-sm">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">Choose Your Program</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Explore our wide range of programs and select the one that best suits your interests and career goals.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-semibold text-sm">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">Complete the Application Form</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Fill out the online application form with accurate and up-to-date information. Make sure to provide all required documents.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-semibold text-sm">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">Submit Your Application</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    After completing the form, submit your application for review. You will receive a confirmation email once your application has been successfully submitted.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-semibold text-sm">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">Application Review</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Our admissions team will review your application and may contact you for additional information or to schedule an interview.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-semibold text-sm">
                  5
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">Admission Decision</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    You will be notified of the admission decision via email. If accepted, you will receive further instructions on how to proceed with enrollment.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
              <p className="text-gray-600 text-sm">
                If you have any questions about the application process, please contact our admissions office at{" "}
                <a
                  href="mailto:admissions@divinengrh.com"
                  className="text-[#003366] hover:underline font-medium"
                >
                  admissions@divinengrh.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Important Dates
            </h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">
                      Event
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Application Opens</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">January 1, 2026</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Application Deadline</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">March 31, 2026</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Interviews</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">April 15 - April 30, 2026</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Admission Decisions</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">May 15, 2026</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Enrollment Deadline</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">June 30, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Apply Button */}
        <div className="text-center">
          <Link
            href="#apply-form"
            className="inline-flex items-center gap-2 bg-[#003366] text-white px-8 py-3 rounded font-medium hover:bg-[#004488] transition-colors"
          >
            Start Your Application
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;