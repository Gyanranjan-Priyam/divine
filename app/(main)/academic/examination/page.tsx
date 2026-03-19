import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Calendar, FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Examination - CHSE & Utkal University Exams",
  description:
    "Examination information for Divine Group of Institutions. CHSE Board Exams for +2 Science at DHSS. Utkal University Exams for B.Sc. at DDC. Exam schedules, patterns, and important dates.",
  keywords: [
    "CHSE Examination",
    "Utkal University Exam",
    "+2 Board Exam Odisha",
    "B.Sc Examination",
    "Divine College Exam",
    "CHSE Result",
    "Utkal University Result",
  ],
  openGraph: {
    title: "Examination - Divine Group of Institutions",
    description:
      "Complete examination information for CHSE and Utkal University affiliated programs.",
    url: "https://divinengrh.com/academic/examination",
  },
  alternates: {
    canonical: "https://divinengrh.com/academic/examination",
  },
};

const chseExamData = {
  name: "Divine Higher Secondary School (DHSS)",
  location: "Nayagarh, Odisha",
  samsCode: "24075102",
  board: "Council of Higher Secondary Education (CHSE), Odisha",
  examPattern: [
    { component: "Theory Examination", marks: "70 marks per subject", duration: "3 hours" },
    { component: "Practical Examination", marks: "30 marks (for Science)", duration: "3 hours" },
    { component: "Internal Assessment", marks: "20 marks", duration: "Throughout year" },
  ],
  importantDates: [
    { event: "Annual Exam (Class XI)", period: "February - March" },
    { event: "CHSE Board Exam (Class XII)", period: "March - April" },
    { event: "Practical Examination", period: "January - February" },
    { event: "Result Declaration", period: "May - June" },
  ],
  subjects: [
    { name: "Physics", theory: 70, practical: 30, total: 100 },
    { name: "Chemistry", theory: 70, practical: 30, total: 100 },
    { name: "Mathematics", theory: 100, practical: null, total: 100 },
    { name: "Biology (Botany + Zoology)", theory: 70, practical: 30, total: 100 },
    { name: "Computer Science", theory: 70, practical: 30, total: 100 },
    { name: "English", theory: 100, practical: null, total: 100 },
    { name: "MIL (Odia/Hindi/Alt. Eng)", theory: 100, practical: null, total: 100 },
  ],
};

const utkalExamData = {
  name: "Divine Degree College (DDC)",
  location: "Lenkudipada, Nayagarh, Odisha",
  samsCode: "24055302",
  university: "Utkal University, Bhubaneswar",
  examPattern: [
    { component: "End Semester Examination", marks: "80 marks per paper", duration: "3 hours" },
    { component: "Internal Assessment", marks: "20 marks per paper", duration: "Continuous" },
    { component: "Practical Examination", marks: "50 marks (for Science)", duration: "4-6 hours" },
  ],
  importantDates: [
    { event: "Odd Semester Exam (1st, 3rd, 5th)", period: "November - December" },
    { event: "Even Semester Exam (2nd, 4th, 6th)", period: "April - May" },
    { event: "Practical Examination", period: "Before Theory Exams" },
    { event: "Result Declaration", period: "Within 45-60 days" },
  ],
  cbcsStructure: [
    { semester: "Semester I & II", papers: "Core (C-1 to C-4), AECC, GE-1" },
    { semester: "Semester III & IV", papers: "Core (C-5 to C-10), SEC, GE-2" },
    { semester: "Semester V & VI", papers: "Core (C-11 to C-14), DSE, SEC" },
  ],
};

const ExaminationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Examination</h1>
          <p className="text-gray-200">Academic Year 2025-26</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* CHSE Section - DHSS */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">{chseExamData.name}</h2>
              <p className="text-sm text-gray-600">{chseExamData.location}</p>
              <p className="text-sm text-[#D4A853] font-semibold">
                SAMS Code: {chseExamData.samsCode}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Affiliated to: <span className="font-medium">{chseExamData.board}</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold">CHSE EXAMINATION PATTERN (+2 Science)</h3>
            </div>
            <div className="p-6">
              {/* Exam Pattern */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Examination Pattern
              </h4>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">COMPONENT</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">MARKS</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">DURATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chseExamData.examPattern.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">{item.component}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.marks}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Subject-wise Marks */}
              <h4 className="font-bold text-lg text-[#003366] mb-4">Subject-wise Marks Distribution</h4>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">SUBJECT</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">THEORY</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">PRACTICAL</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chseExamData.subjects.map((subject, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">{subject.name}</td>
                        <td className="border border-gray-300 px-4 py-3">{subject.theory}</td>
                        <td className="border border-gray-300 px-4 py-3">{subject.practical ?? "-"}</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-[#003366]">
                          {subject.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Important Dates */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Important Dates (Tentative)
              </h4>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">EVENT</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">PERIOD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chseExamData.importantDates.map((date, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">{date.event}</td>
                        <td className="border border-gray-300 px-4 py-3 text-[#D4A853] font-medium">
                          {date.period}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CHSE Links */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-[#003366] mb-3">Official CHSE Resources</h5>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://chseodisha.nic.in"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> CHSE Official Website
                  </Link>
                  <Link
                    href="https://orissaresults.nic.in"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> Check Results
                  </Link>
                  <Link
                    href="https://chseodisha.nic.in/page/syllabus"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> Download Syllabus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Utkal University Section - DDC */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">{utkalExamData.name}</h2>
              <p className="text-sm text-gray-600">{utkalExamData.location}</p>
              <p className="text-sm text-[#D4A853] font-semibold">
                SAMS Code: {utkalExamData.samsCode}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Affiliated to: <span className="font-medium">{utkalExamData.university}</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold">UTKAL UNIVERSITY EXAMINATION (B.Sc. CBCS)</h3>
            </div>
            <div className="p-6">
              {/* Exam Pattern */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Examination Pattern (Semester System)
              </h4>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">COMPONENT</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">MARKS</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">DURATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {utkalExamData.examPattern.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">{item.component}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.marks}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CBCS Structure */}
              <h4 className="font-bold text-lg text-[#003366] mb-4">CBCS Semester Structure</h4>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">SEMESTER</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">PAPERS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {utkalExamData.cbcsStructure.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">{item.semester}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.papers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Important Dates */}
              <h4 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Important Dates (Tentative)
              </h4>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">EVENT</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">PERIOD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {utkalExamData.importantDates.map((date, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">{date.event}</td>
                        <td className="border border-gray-300 px-4 py-3 text-[#D4A853] font-medium">
                          {date.period}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CBCS Legend */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h5 className="font-semibold text-[#003366] mb-2">CBCS Paper Types</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
                  <span><strong>C:</strong> Core Papers</span>
                  <span><strong>GE:</strong> Generic Elective</span>
                  <span><strong>DSE:</strong> Discipline Specific Elective</span>
                  <span><strong>SEC:</strong> Skill Enhancement Course</span>
                  <span><strong>AECC:</strong> Ability Enhancement Compulsory</span>
                </div>
              </div>

              {/* Utkal University Links */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-[#003366] mb-3">Official Utkal University Resources</h5>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://utkaluniversity.ac.in"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> Utkal University Official
                  </Link>
                  <Link
                    href="https://utkaluniversity.ac.in/examination/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> Examination Section
                  </Link>
                  <Link
                    href="https://utkaluniversity.ac.in/results/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> Check Results
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Note Section */}
        <div className="bg-amber-50 border-l-4 border-[#D4A853] p-6 rounded">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#D4A853] mt-0.5" />
            <div>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-[#003366]">Important Note:</span> Examination schedules
                are subject to change as per CHSE and Utkal University notifications. Students are
                advised to regularly check official websites and college notice board for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExaminationPage;