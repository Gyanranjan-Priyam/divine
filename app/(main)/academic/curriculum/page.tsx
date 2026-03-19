import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, BookOpen, GraduationCap, Beaker, Calculator, Leaf, Bug, Code, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Curriculum - CHSE & Utkal University Syllabus",
  description:
    "Curriculum and syllabus information for Divine Group of Institutions. CHSE +2 Science syllabus at DHSS. Utkal University B.Sc. CBCS curriculum at DDC. Physics, Chemistry, Mathematics, Botany, Zoology.",
  keywords: [
    "CHSE Syllabus",
    "Utkal University Syllabus",
    "+2 Science Curriculum",
    "B.Sc CBCS Syllabus",
    "Physics Syllabus Odisha",
    "Chemistry Syllabus",
    "Mathematics Curriculum",
  ],
  openGraph: {
    title: "Curriculum - Divine Group of Institutions",
    description:
      "Complete curriculum information for CHSE and Utkal University affiliated programs.",
    url: "https://divinengrh.com/academic/curriculum",
  },
  alternates: {
    canonical: "https://divinengrh.com/academic/curriculum",
  },
};

const chseCurriculum = {
  name: "Divine Higher Secondary School (DHSS)",
  location: "Nayagarh, Odisha",
  samsCode: "24075102",
  board: "Council of Higher Secondary Education (CHSE), Odisha",
  subjects: [
    {
      name: "Physics",
      icon: Calculator,
      year1: ["Physical World & Measurement", "Kinematics", "Laws of Motion", "Work, Energy & Power", "Motion of System of Particles", "Gravitation", "Properties of Bulk Matter", "Thermodynamics", "Oscillations & Waves"],
      year2: ["Electrostatics", "Current Electricity", "Magnetic Effects of Current", "Electromagnetic Induction", "Electromagnetic Waves", "Optics", "Dual Nature of Radiation", "Atoms & Nuclei", "Electronic Devices"],
    },
    {
      name: "Chemistry",
      icon: Beaker,
      year1: ["Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements", "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "s-Block Elements", "Organic Chemistry Basics", "Hydrocarbons", "Environmental Chemistry"],
      year2: ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "p-Block Elements", "d and f Block Elements", "Coordination Compounds", "Haloalkanes", "Alcohols & Phenols", "Aldehydes & Ketones", "Amines", "Biomolecules", "Polymers"],
    },
    {
      name: "Mathematics",
      icon: Calculator,
      year1: ["Sets & Functions", "Algebra", "Coordinate Geometry", "Calculus (Limits & Derivatives)", "Mathematical Reasoning", "Statistics & Probability", "Relations & Functions", "Trigonometry"],
      year2: ["Relations & Functions", "Algebra (Matrices & Determinants)", "Calculus (Continuity, Differentiation, Integration)", "Vectors & 3D Geometry", "Linear Programming", "Probability"],
    },
    {
      name: "Botany",
      icon: Leaf,
      year1: ["Diversity of Living Organisms", "Structural Organisation in Plants", "Cell Structure & Function", "Plant Physiology"],
      year2: ["Reproduction in Plants", "Genetics & Evolution", "Biology & Human Welfare", "Biotechnology", "Ecology & Environment"],
    },
    {
      name: "Zoology",
      icon: Bug,
      year1: ["Diversity of Living Organisms", "Structural Organisation in Animals", "Cell Structure & Function", "Human Physiology"],
      year2: ["Reproduction", "Genetics & Evolution", "Biology & Human Welfare", "Biotechnology", "Ecology & Environment"],
    },
    {
      name: "Computer Science",
      icon: Code,
      year1: ["Computer Fundamentals", "Programming in Python", "Boolean Algebra", "Computer System Organisation"],
      year2: ["Programming in Python (Advanced)", "Data Structures", "Computer Networks", "Database Management", "Cyber Safety"],
    },
  ],
};

const utkalCurriculum = {
  name: "Divine Degree College (DDC)",
  location: "Lenkudipada, Nayagarh, Odisha",
  samsCode: "24055302",
  university: "Utkal University, Bhubaneswar",
  program: "B.Sc. (Honours) - 3 Year CBCS Pattern",
  subjects: [
    {
      name: "Physics (Honours)",
      icon: Calculator,
      semesters: [
        { sem: "I", papers: ["Mathematical Physics-I", "Mechanics", "GE-1"] },
        { sem: "II", papers: ["Electricity & Magnetism", "Waves & Optics", "GE-2"] },
        { sem: "III", papers: ["Mathematical Physics-II", "Thermal Physics", "Digital Electronics", "SEC-1"] },
        { sem: "IV", papers: ["Mathematical Physics-III", "Elements of Modern Physics", "Analog Electronics", "SEC-2"] },
        { sem: "V", papers: ["Quantum Mechanics", "Solid State Physics", "DSE-1", "DSE-2"] },
        { sem: "VI", papers: ["Electromagnetic Theory", "Statistical Mechanics", "DSE-3", "DSE-4"] },
      ],
    },
    {
      name: "Chemistry (Honours)",
      icon: Beaker,
      semesters: [
        { sem: "I", papers: ["Inorganic Chemistry-I", "Physical Chemistry-I", "GE-1"] },
        { sem: "II", papers: ["Organic Chemistry-I", "Physical Chemistry-II", "GE-2"] },
        { sem: "III", papers: ["Inorganic Chemistry-II", "Organic Chemistry-II", "Physical Chemistry-III", "SEC-1"] },
        { sem: "IV", papers: ["Inorganic Chemistry-III", "Organic Chemistry-III", "Physical Chemistry-IV", "SEC-2"] },
        { sem: "V", papers: ["Inorganic Chemistry-IV", "Organic Chemistry-IV", "DSE-1", "DSE-2"] },
        { sem: "VI", papers: ["Inorganic Chemistry-V", "Organic Chemistry-V", "DSE-3", "DSE-4"] },
      ],
    },
    {
      name: "Mathematics (Honours)",
      icon: Calculator,
      semesters: [
        { sem: "I", papers: ["Calculus", "Algebra", "GE-1"] },
        { sem: "II", papers: ["Real Analysis", "Differential Equations", "GE-2"] },
        { sem: "III", papers: ["Theory of Real Functions", "Group Theory-I", "Ordinary Differential Equations", "SEC-1"] },
        { sem: "IV", papers: ["Partial Differential Equations", "Numerical Methods", "Ring Theory", "SEC-2"] },
        { sem: "V", papers: ["Metric Spaces", "Complex Analysis", "DSE-1", "DSE-2"] },
        { sem: "VI", papers: ["Linear Algebra", "Probability & Statistics", "DSE-3", "DSE-4"] },
      ],
    },
    {
      name: "Botany (Honours)",
      icon: Leaf,
      semesters: [
        { sem: "I", papers: ["Phycology & Microbiology", "Biomolecules & Cell Biology", "GE-1"] },
        { sem: "II", papers: ["Mycology & Phytopathology", "Archegoniate", "GE-2"] },
        { sem: "III", papers: ["Morphology & Anatomy", "Economic Botany", "Genetics", "SEC-1"] },
        { sem: "IV", papers: ["Molecular Biology", "Plant Ecology", "Plant Systematics", "SEC-2"] },
        { sem: "V", papers: ["Reproductive Biology", "Plant Physiology", "DSE-1", "DSE-2"] },
        { sem: "VI", papers: ["Plant Metabolism", "Plant Biotechnology", "DSE-3", "DSE-4"] },
      ],
    },
    {
      name: "Zoology (Honours)",
      icon: Bug,
      semesters: [
        { sem: "I", papers: ["Non-Chordates I", "Cell Biology", "GE-1"] },
        { sem: "II", papers: ["Non-Chordates II", "Genetics", "GE-2"] },
        { sem: "III", papers: ["Chordates", "Animal Physiology", "Biochemistry", "SEC-1"] },
        { sem: "IV", papers: ["Comparative Anatomy", "Developmental Biology", "Molecular Biology", "SEC-2"] },
        { sem: "V", papers: ["Animal Behaviour & Chronobiology", "Immunology", "DSE-1", "DSE-2"] },
        { sem: "VI", papers: ["Evolutionary Biology", "Applied Zoology", "DSE-3", "DSE-4"] },
      ],
    },
  ],
};

const CurriculumPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Curriculum</h1>
          <p className="text-gray-200">Academic Year 2025-26</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* CHSE Section - DHSS */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#003366]">{chseCurriculum.name}</h2>
              <p className="text-sm text-gray-600">{chseCurriculum.location}</p>
              <p className="text-sm text-[#D4A853] font-semibold">
                SAMS Code: {chseCurriculum.samsCode}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Affiliated to: <span className="font-medium">{chseCurriculum.board}</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold">+2 SCIENCE CURRICULUM (CHSE Pattern)</h3>
            </div>
            <div className="p-6">
              <div className="space-y-8">
                {chseCurriculum.subjects.map((subject) => {
                  const IconComponent = subject.icon;
                  return (
                    <div key={subject.name} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-[#003366]" />
                        <h4 className="font-bold text-lg text-[#003366]">{subject.name}</h4>
                      </div>
                      <div className="p-4 grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-[#D4A853] mb-2">+2 First Year (Class XI)</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {subject.year1.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#003366]">•</span> {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-[#D4A853] mb-2">+2 Second Year (Class XII)</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {subject.year2.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#003366]">•</span> {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CHSE Links */}
              <div className="bg-blue-50 p-4 rounded-lg mt-8">
                <h5 className="font-semibold text-[#003366] mb-3">Download Official Syllabus</h5>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://chseodisha.nic.in/page/syllabus"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> CHSE Official Syllabus
                  </Link>
                  <Link
                    href="https://ncert.nic.in/textbook.php"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> NCERT Textbooks
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
              <h2 className="text-3xl font-bold text-[#003366]">{utkalCurriculum.name}</h2>
              <p className="text-sm text-gray-600">{utkalCurriculum.location}</p>
              <p className="text-sm text-[#D4A853] font-semibold">
                SAMS Code: {utkalCurriculum.samsCode}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Affiliated to: <span className="font-medium">{utkalCurriculum.university}</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-xl font-bold">{utkalCurriculum.program}</h3>
            </div>
            <div className="p-6">
              <div className="space-y-8">
                {utkalCurriculum.subjects.map((subject) => {
                  const IconComponent = subject.icon;
                  return (
                    <div key={subject.name} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-[#003366]" />
                        <h4 className="font-bold text-lg text-[#003366]">{subject.name}</h4>
                      </div>
                      <div className="p-4">
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse text-sm">
                            <thead>
                              <tr className="bg-[#003366] text-white">
                                <th className="border border-gray-300 px-3 py-2 text-left w-24">Semester</th>
                                <th className="border border-gray-300 px-3 py-2 text-left">Papers</th>
                              </tr>
                            </thead>
                            <tbody>
                              {subject.semesters.map((sem, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                  <td className="border border-gray-300 px-3 py-2 font-semibold text-[#003366]">
                                    Sem {sem.sem}
                                  </td>
                                  <td className="border border-gray-300 px-3 py-2 text-gray-600">
                                    {sem.papers.join(" | ")}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CBCS Legend */}
              <div className="bg-gray-50 p-4 rounded-lg mt-8 mb-6">
                <h5 className="font-semibold text-[#003366] mb-2">CBCS Paper Types</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
                  <span><strong>GE:</strong> Generic Elective</span>
                  <span><strong>DSE:</strong> Discipline Specific Elective</span>
                  <span><strong>SEC:</strong> Skill Enhancement Course</span>
                  <span><strong>AECC:</strong> Ability Enhancement Compulsory</span>
                </div>
              </div>

              {/* Utkal University Links */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-[#003366] mb-3">Download Official Syllabus</h5>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://utkaluniversity.ac.in/syllabus/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> Utkal University Syllabus
                  </Link>
                  <Link
                    href="https://utkaluniversity.ac.in/cbcs/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4" /> CBCS Guidelines
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Note Section */}
        <div className="bg-blue-50 border-l-4 border-[#003366] p-6 rounded">
          <p className="text-sm text-gray-700">
            <span className="font-bold text-[#003366]">Note:</span> Curriculum is subject to
            revision as per CHSE and Utkal University guidelines. For the most updated syllabus,
            please refer to the official websites or contact the respective institution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;