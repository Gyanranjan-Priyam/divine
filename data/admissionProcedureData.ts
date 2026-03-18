import {
  UserCheck,
  FileText,
  Upload,
  CreditCard,
  CheckCircle,
  FileCheck,
} from "lucide-react";

  const steps = [
    {
      icon: UserCheck,
      title: "Registration",
      description:
        "Register on the SAMS Odisha portal with your basic details and valid email ID/mobile number.",
      details: [
        "Visit the official SAMS Odisha website",
        "Click on Student Registration/Login",
        "Create your account with valid credentials",
        "Verify your email/mobile number",
      ],
    },
    {
      icon: FileText,
      title: "Fill Application",
      description:
        "Complete the online Common Application Form (CAF) with accurate personal, academic, and contact information.",
      details: [
        "Login to your SAMS account",
        "Fill all mandatory fields carefully",
        "Select your preferred institution and course",
        "Choose multiple options as per priority",
      ],
    },
    {
      icon: Upload,
      title: "Upload Documents",
      description:
        "Upload scanned copies of required documents including photograph, signature, and certificates.",
      details: [
        "Recent passport-size photograph",
        "Scanned signature",
        "10th & 12th Mark sheets/Certificates",
        "Caste certificate (if applicable)",
        "Income certificate (if applicable)",
      ],
    },
    {
      icon: CreditCard,
      title: "Pay Application Fee",
      description:
        "Pay the application fee online through the SAMS portal using available payment methods.",
      details: [
        "Choose payment mode (Debit/Credit Card, Net Banking, UPI)",
        "Complete the payment transaction",
        "Save the payment receipt",
        "Note down the transaction ID",
      ],
    },
    {
      icon: FileCheck,
      title: "Submit Application",
      description:
        "Review all entered information, submit the application, and take a printout for your records.",
      details: [
        "Verify all details before final submission",
        "Submit the application form",
        "Download and save the application",
        "Take multiple printouts for future reference",
      ],
    },
    {
      icon: CheckCircle,
      title: "Selection & Admission",
      description:
        "Check the merit list, selection status online, and complete the admission process at the allotted institution.",
      details: [
        "Check merit list on SAMS portal",
        "Verify your selection status online",
        "Visit the allotted institution within deadline",
        "Complete document verification and admission",
      ],
    },
  ];

  const requiredDocuments = [
    "10th Pass Certificate & Mark Sheet",
    "+2 Pass Certificate & Mark Sheet (for Degree admission)",
    "Transfer Certificate (TC)",
    "Migration Certificate (if applicable)",
    "Caste Certificate (SC/ST/OBC)",
    "Income Certificate (for fee concession)",
    "Aadhaar Card",
    "Recent Passport-size Photographs",
    "Residence Certificate",
  ];

  const importantLinks = [
    {
      title: "SAMS Odisha Portal",
      url: "https://samsodisha.gov.in",
      description: "Official SAMS Portal Homepage",
    },
    {
      title: "Higher Secondary (+2) Admission",
      url: "https://hss.samsodisha.gov.in/newHSS/index.aspx",
      description: "For DHSS (+2) admission process",
    },
    {
      title: "Degree College Admission",
      url: "https://degree.samsodisha.gov.in/DegreeNew/index.aspx",
      description: "For DDC degree admission process",
    },
    {
      title: "Check Selection Status",
      url: "https://results.samsodisha.gov.in",
      description: "Check your admission status & results",
    },
  ];

export { steps, requiredDocuments, importantLinks };