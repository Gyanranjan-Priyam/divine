import React from "react";
import type { Metadata } from "next";
import {
  DollarSign,
  Building2,
  GraduationCap,
  Home,
  AlertCircle,
  BookOpen,
} from "lucide-react";
import { feesData } from "@/data/feesData";

export const metadata: Metadata = {
  title: "Fee Structure 2025-26 - Admission, Course & Hostel Fees",
  description:
    "Complete fee structure for Divine Group of Institutions Nayagarh. Admission fees, course fees, hostel charges for Divine Higher Secondary School (+2) and Divine Degree College. Category-wise fees for SC, ST, OBC, General students.",
  keywords: [
    "Divine College Fees",
    "DHSS Fee Structure",
    "DDC Hostel Fees",
    "+2 School Fees Odisha",
    "Degree College Fees Nayagarh",
    "Admission Fees 2025",
    "Hostel Charges",
    "SC ST Fee Concession",
    "College Fee Details",
    "Education Cost Odisha",
  ],
  openGraph: {
    title: "Fee Structure 2025-26 | Divine Group of Institutions",
    description:
      "Detailed fee information for admission, courses, and hostel at Divine Higher Secondary School and Divine Degree College.",
    url: "https://divinengrh.com/admissions/fees",
  },
  alternates: {
    canonical: "https://divinengrh.com/admissions/fees",
  },
};

const FeesPage = () => {
  const { degreeCollege, higherSecondary } = feesData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Fee Structure</h1>
          <p className="text-gray-200">
            Detailed fee information for all courses and facilities
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Divine Higher Secondary School Fees */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">
                {higherSecondary.institutionName}
              </h2>
              <p className="text-sm text-gray-600">
                SAMS Code: {higherSecondary.samsCode} |{" "}
                {higherSecondary.location}
              </p>
            </div>
          </div>

          {/* Admission Fees for Higher Secondary */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#003366] text-white px-6 py-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Admission Fees (+2 Level)
                </h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs sm:text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-[#003366] text-white">
                        <th
                          className="border border-gray-300 px-3 py-2 text-center"
                          rowSpan={2}
                        >
                          Category
                        </th>
                        <th
                          className="border border-gray-300 px-3 py-2 text-center"
                          colSpan={3}
                        >
                          Class XI
                        </th>
                        <th
                          className="border border-gray-300 px-3 py-2 text-center"
                          colSpan={1}
                        >
                          Class XII
                        </th>
                      </tr>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-2 py-2 text-center text-xs">
                          Admission Fees
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center text-xs">
                          Hostel Fees
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center text-xs">
                          Re-Admission Fees
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center text-xs">
                          Hostel Fees
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {higherSecondary.admissionFees.map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-center">
                            {fee.category}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                            ₹{fee.classXI.admissionFees.toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{fee.classXI.hostelFees.toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-yellow-50">
                            ₹
                            {fee.classXI.reAdmissionFees.toLocaleString(
                              "en-IN",
                            )}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{fee.classXII.hostelFees.toLocaleString("en-IN")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel Information for Higher Secondary */}
          <div>
            <div className="bg-white rounded-lg mb-12 shadow-sm overflow-hidden">
              <div className="bg-[#003366] text-white px-6 py-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Hostel Information
                </h3>
              </div>
              <div className="p-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-amber-700">
                      Hostel Priority:
                    </span>{" "}
                    {higherSecondary.hostelPriority}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divine Degree College Fees */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">
                {degreeCollege.institutionName}
              </h2>
              <p className="text-sm text-gray-600">
                SAMS Code: {degreeCollege.samsCode} | {degreeCollege.location}
              </p>
            </div>
          </div>

          {/* Admission Fees */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#003366] text-white px-6 py-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  Admission Fees
                </h3>
              </div>
              <div className="p-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-amber-700">Note:</span>{" "}
                    {degreeCollege.notes.admissionNote}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm min-w-[300px]">
                    <thead>
                      <tr className="bg-[#003366] text-white">
                        <th className="border border-gray-300 px-4 py-3 text-center">
                          Category
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-center">
                          Amount (₹)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {degreeCollege.admissionFees.map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-center">
                            {fee.category}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            ₹{fee.amount.toLocaleString("en-IN")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Course Fees */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#003366] text-white px-6 py-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Course Fees (3-Year Total)
                </h3>
              </div>
              <div className="p-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-amber-700">Note:</span>{" "}
                    {degreeCollege.notes.courseNote}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs sm:text-sm min-w-[800px]">
                    <thead>
                      <tr className="bg-[#003366] text-white">
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          SL#
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          Stream
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          Subject
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          GEN-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          GEN-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          SC-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          SC-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          ST-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          ST-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          PHOH
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          SPORT GEN-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          SPORT GEN-GIRLS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {degreeCollege.courseFees.map((course) => (
                        <tr key={course.slNo} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            {course.slNo}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            {course.stream}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 font-semibold text-center">
                            {course.subject}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹
                            {course.fees["GENERAL-BOYS"].toLocaleString(
                              "en-IN",
                            )}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹
                            {course.fees["GENERAL-GIRLS"].toLocaleString(
                              "en-IN",
                            )}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹{course.fees["SC-BOYS"].toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹{course.fees["SC-GIRLS"].toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹{course.fees["ST-BOYS"].toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹{course.fees["ST-GIRLS"].toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹{course.fees["PHOH"].toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹
                            {course.fees["SPORT GENERAL-BOYS"].toLocaleString(
                              "en-IN",
                            )}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center">
                            ₹
                            {course.fees["SPORT GENERAL-GIRLS"].toLocaleString(
                              "en-IN",
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel Information */}
          <div>
            <div className="bg-white rounded-lg mb-12 shadow-sm overflow-hidden">
              <div className="bg-[#003366] text-white px-6 py-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Hostel Information
                </h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs sm:text-sm min-w-[900px]">
                    <thead>
                      <tr className="bg-[#003366] text-white">
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          Stream
                        </th>
                        <th
                          className="border border-gray-300 px-2 py-2 text-center"
                          colSpan={6}
                        >
                          Seats Available
                        </th>
                        <th
                          className="border border-gray-300 px-2 py-2 text-center"
                          colSpan={7}
                        >
                          Annual Hostel Fees (₹)
                        </th>
                      </tr>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-2 py-2 text-center"></th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          GEN-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          SC-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          SC-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          ST-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          ST-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          PHOH
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          GEN-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          GEN-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          SC-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          SC-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          ST-BOYS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          ST-GIRLS
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-xs text-center">
                          PHOH
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {degreeCollege.hostelInfo.map((hostel, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-2 py-2 font-semibold text-center">
                            {hostel.stream}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                            {hostel.seats.generalGirls || "-"}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                            {hostel.seats.scBoys}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                            {hostel.seats.scGirls}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                            {hostel.seats.stBoys}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                            {hostel.seats.stGirls}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-blue-50">
                            {hostel.seats.phoh}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{hostel.fees.generalBoys.toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{hostel.fees.generalGirls.toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{hostel.fees.scBoys.toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{hostel.fees.scGirls.toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{hostel.fees.stBoys.toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{hostel.fees.stGirls.toLocaleString("en-IN")}
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-center bg-green-50">
                            ₹{hostel.fees.phoh.toLocaleString("en-IN")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section>
          <div className="bg-blue-50 mb-12 border-l-4 border-[#003366] p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#003366] text-lg mb-2">
                  Important Information
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    • Fee structure is as per SAMS Odisha portal and Government
                    of Odisha guidelines
                  </li>
                  <li>
                    • Fees once paid are non-refundable except as per government
                    rules
                  </li>
                  <li>
                    • Students from reserved categories should submit valid
                    certificates for fee concessions
                  </li>
                  <li>
                    • For scholarship and financial assistance, please contact
                    the admission office
                  </li>
                  <li>
                    • Hostel fees are separate from course fees and must be paid
                    annually
                  </li>
                  <li>
                    • For latest fee updates, please check the official SAMS
                    portal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Queries */}
        <section>
          <div className="bg-gradient-to-br from-[#003366] to-[#004488] text-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Fee Related Queries?</h3>
            <p className="mb-6 text-gray-200">
              For any clarifications regarding fees, scholarships, or payment
              procedures
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold text-[#D4A853] mb-2">
                  Divine Degree College
                </p>
                <p className="text-sm mb-1">📞 +91 7978421452</p>
                <p className="text-sm">✉️ ddcnrgrh@gmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold text-[#D4A853] mb-2">
                  Divine Higher Secondary School
                </p>
                <p className="text-sm mb-1">📞 +91 1234 567 890</p>
                <p className="text-sm">✉️ dhss@divinengrh.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeesPage;
