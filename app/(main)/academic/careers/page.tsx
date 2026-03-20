import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  Target,
  Users,
  Clock,
  CheckCircle,
  GraduationCap,
  Award,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Career Guidance & Competitive Exam Coaching - Divine Group",
  description:
    "Prepare for JEE, NEET, IAT, NEST, NDA, OJEE & Olympiads at Divine Group of Institutions, Nayagarh. Expert faculty, comprehensive study material, and proven results.",
  keywords: [
    "JEE Coaching Nayagarh",
    "NEET Coaching Odisha",
    "IAT Preparation",
    "NEST Coaching",
    "NDA Coaching Nayagarh",
    "OJEE Preparation",
    "Olympiad Coaching",
    "Competitive Exam Coaching",
    "Divine Tutorials",
  ],
  openGraph: {
    title: "Career Guidance & Competitive Exam Coaching | Divine Group",
    description:
      "Expert coaching for JEE, NEET, IAT, NEST, NDA, OJEE & Olympiads at Divine Group of Institutions.",
    url: "https://divinengrh.com/careers",
  },
  alternates: {
    canonical: "https://divinengrh.com/careers",
  },
};

const examPrograms = [
  {
    name: "JEE (Main & Advanced)",
    fullName: "Joint Entrance Examination",
    logo: "/careers/cbse.png",
    description:
      "India's premier engineering entrance examination conducted by NTA for admission to IITs, NITs, IIITs, and other centrally funded technical institutions. JEE Main serves as eligibility for JEE Advanced, the gateway to 23 IITs across India.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    eligibility: "Class 11 & 12 Science (PCM)",
    duration: "2 Years / 1 Year",
  },
  {
    name: "NEET-UG",
    fullName: "National Eligibility cum Entrance Test",
    logo: "/careers/cbse.png",
    description:
      "The single national-level medical entrance examination conducted by NTA for admission to MBBS, BDS, AYUSH, and other medical courses in government and private medical colleges across India. Over 20 lakh students appear annually.",
    subjects: ["Physics", "Chemistry", "Biology"],
    eligibility: "Class 11 & 12 Science (PCB)",
    duration: "2 Years / 1 Year",
  },
  {
    name: "IAT",
    fullName: "IISER Aptitude Test",
    logo: "/careers/iat.jpg",
    description:
      "Conducted by Indian Institutes of Science Education and Research (IISERs) for admission to their 5-year BS-MS dual degree program. IISERs are premier research institutions funded by MHRD, offering world-class science education.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    eligibility: "Class 12 Science students",
    duration: "1 Year",
  },
  {
    name: "NEST",
    fullName: "National Entrance Screening Test",
    logo: "/careers/nest.svg",
    description:
      "National-level examination for admission to NISER Bhubaneswar and UM-DAE CEBS Mumbai, both premier research institutions under Department of Atomic Energy. Offers integrated MSc programs in basic sciences with research opportunities.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    eligibility: "Class 12 Science students",
    duration: "1 Year",
  },
  {
    name: "NDA",
    fullName: "National Defence Academy",
    logo: "/careers/nda.png",
    description:
      "Conducted by UPSC twice yearly for admission to Army, Navy, and Air Force wings of National Defence Academy, Khadakwasla. Candidates undergo 3-year training followed by service-specific training at respective academies.",
    subjects: ["Mathematics", "General Ability Test"],
    eligibility: "Class 12 (Male, 16.5-19.5 years)",
    duration: "1 Year",
  },
  {
    name: "OJEE",
    fullName: "Odisha Joint Entrance Examination",
    logo: "/affiliation/gov.svg",
    description:
      "State-level entrance examination conducted by Odisha State Government for admission to Engineering, Pharmacy, MBA, MCA, and lateral entry courses in government and private institutions across Odisha.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    eligibility: "Class 12 Science students",
    duration: "1 Year",
  },
  {
    name: "Olympiads",
    fullName: "Science & Mathematics Olympiads",
    logo: "/careers/olympiad.png",
    description:
      "Multi-stage national and international competitions organized by HBCSE (Homi Bhabha Centre for Science Education) including NSO, IMO, NTSE, KVPY, and International Olympiads in Physics, Chemistry, Biology, Mathematics, and Astronomy.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Astronomy"],
    eligibility: "Class 9 to 12 students",
    duration: "Year-round",
  },
];

const features = [
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Experienced teachers with proven track record in competitive exam coaching.",
  },
  {
    icon: BookOpen,
    title: "Study Material",
    description:
      "Comprehensive study materials, practice papers, and previous year questions.",
  },
  {
    icon: Target,
    title: "Regular Tests",
    description:
      "Weekly tests and mock exams to track progress and improve performance.",
  },
  {
    icon: Clock,
    title: "Doubt Sessions",
    description:
      "Regular doubt clearing sessions and one-on-one mentoring support.",
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">
            Career Guidance & Competitive Exam Coaching
          </h1>
          <p className="text-gray-200">
            Prepare for your dream career with expert guidance and comprehensive
            coaching
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              About Our Coaching Programs
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Divine Group of Institutions offers specialized coaching programs
              for various competitive examinations. Our integrated approach
              combines regular school curriculum with competitive exam
              preparation, ensuring students excel in both board exams and
              entrance tests.
            </p>
            <p className="text-gray-700">
              With experienced faculty, comprehensive study materials, and
              regular assessments, we have helped numerous students achieve
              their dreams of getting into prestigious institutions across
              India.
            </p>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">
            Why Choose Our Coaching?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-[#003366]"
              >
                <feature.icon className="w-10 h-10 text-[#003366] mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Exam Programs */}
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">
            Coaching Programs Offered
          </h2>
          <div className="space-y-6">
            {examPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-[#003366] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">{program.name}</h3>
                  <p className="text-gray-200 text-sm">{program.fullName}</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-start justify-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                        <Image
                          src={program.logo}
                          alt={program.name}
                          width={84}
                          height={64}
                          className="object-contain max-h-16"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-start gap-2">
                          <BookOpen className="w-4 h-4 text-[#003366] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-gray-800 text-sm">
                              Subjects
                            </p>
                            <p className="text-gray-600 text-sm">
                              {program.subjects.join(", ")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-[#003366] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-gray-800 text-sm">
                              Eligibility
                            </p>
                            <p className="text-gray-600 text-sm">
                              {program.eligibility}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-[#003366] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-gray-800 text-sm">
                              Duration
                            </p>
                            <p className="text-gray-600 text-sm">
                              {program.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Highlights */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Key Highlights
            </h2>
          </div>
          <div className="p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Integrated coaching with +2 curriculum",
                "Experienced faculty from premier institutions",
                "Small batch sizes for personalized attention",
                "Regular mock tests and performance analysis",
                "Comprehensive study materials provided",
                "Doubt clearing sessions and extra classes",
                "Career counseling and guidance",
                "Scholarship for meritorious students",
                "Hostel facility available",
                "Library with reference books and journals",
              ].map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Admission Process */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              How to Enroll
            </h2>
          </div>
          <div className="p-6">
            <ol className="space-y-4">
              {[
                {
                  step: "Visit Campus",
                  desc: "Visit our campus to learn more about the coaching programs and facilities.",
                },
                {
                  step: "Counseling Session",
                  desc: "Attend a counseling session to understand which program suits your goals.",
                },
                {
                  step: "Entrance Test",
                  desc: "Appear for the entrance test to assess your current preparation level.",
                },
                {
                  step: "Complete Registration",
                  desc: "Complete the registration process with required documents and fees.",
                },
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.step}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact for Enquiry */}
        <section className="bg-white rounded-lg shadow-sm p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Interested in Our Coaching Programs?
          </h2>
          <p className="text-gray-600 mb-4">
            Contact us for more information or to schedule a campus visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919090172721"
              className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-2 rounded font-medium hover:bg-[#004488]"
            >
              Call: +91 9090172721
            </a>
            <a
              href="mailto:admissions@divinengrh.com"
              className="inline-flex items-center gap-2 border border-[#003366] text-[#003366] px-6 py-2 rounded font-medium hover:bg-gray-50"
            >
              Email: admissions@divinengrh.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;