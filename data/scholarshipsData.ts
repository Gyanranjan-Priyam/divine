export interface Scholarship {
  name: string;
  eligibility: string;
  incomeLimit?: string;
  amount?: string;
}

export interface ScholarshipCategory {
  title: string;
  scholarships: Scholarship[];
}

export interface InstitutionScholarships {
  institutionName: string;
  samsCode: string;
  stateGovernment: ScholarshipCategory;
  centralGovernment: ScholarshipCategory;
}

// Odisha State Scholarship Portal Data
// Portal: https://scholarship.odisha.gov.in
export const scholarshipsData: InstitutionScholarships[] = [
  {
    institutionName: "Divine Higher Secondary School",
    samsCode: "24075102",
    stateGovernment: {
      title: "Odisha State Government Scholarships",
      scholarships: [
        {
          name: "Pre-Matric Scholarship for SC Students (Class IX & X)",
          eligibility: "SC students studying in Class IX and X",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Day Scholar: ₹750-1,000/year, Hosteller: ₹3,000-5,000/year",
        },
        {
          name: "Pre-Matric Scholarship for ST Students (Class IX & X)",
          eligibility: "ST students studying in Class IX and X",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Day Scholar: ₹750-1,000/year, Hosteller: ₹3,000-5,000/year",
        },
        {
          name: "Post-Matric Scholarship for SC Students",
          eligibility: "SC students pursuing higher secondary education (Class XI & XII)",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Day Scholar: ₹5,000-10,000/year, Hosteller: ₹12,000-15,000/year",
        },
        {
          name: "Post-Matric Scholarship for ST Students",
          eligibility: "ST students pursuing higher secondary education (Class XI & XII)",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Day Scholar: ₹5,000-10,000/year, Hosteller: ₹12,000-15,000/year",
        },
        {
          name: "Post-Matric Scholarship for OBC Students",
          eligibility: "OBC/SEBC students in Class XI & XII",
          incomeLimit: "Annual family income not exceeding ₹1 lakh",
          amount: "Maintenance allowance and academic fees as per norms",
        },
        {
          name: "Medhabruti Scholarship",
          eligibility: "Meritorious students from economically weaker sections",
          incomeLimit: "Annual family income below ₹2 lakh",
          amount: "Up to ₹10,000/year based on merit",
        },
        {
          name: "Kalinga Sikhya Sathi Yojana (KSSY)",
          eligibility: "Students from BPL families with valid BPL certificate",
          incomeLimit: "BPL certificate holders",
          amount: "Free education and financial assistance for books, uniforms, and other expenses",
        },
        {
          name: "State Scholarship for Students with Disabilities",
          eligibility: "Students with 40% or more disability",
          incomeLimit: "Annual family income not exceeding ₹2 lakh",
          amount: "Day Scholar: ₹1,200/year, Hosteller: ₹3,000/year",
        },
        {
          name: "Biju Yuva Sashaktikaran Yojana",
          eligibility: "Meritorious students from rural areas",
          incomeLimit: "Annual family income not exceeding ₹2 lakh",
          amount: "Variable based on class and performance",
        },
      ],
    },
    centralGovernment: {
      title: "Central Government Scholarships",
      scholarships: [
        {
          name: "National Means-cum-Merit Scholarship (NMMS)",
          eligibility: "Class IX-XII students with minimum 55% marks in Class VIII",
          incomeLimit: "Annual family income not exceeding ₹3.50 lakh",
          amount: "₹12,000/year (₹1,000/month for 12 months)",
        },
        {
          name: "Central Sector Scheme of National Scholarship for +2 Students",
          eligibility: "Students passed Class X with 80% or above and enrolled in Class XI & XII",
          incomeLimit: "Annual family income not exceeding ₹8 lakh",
          amount: "₹10,000 to ₹12,000/year",
        },
        {
          name: "Pre-Matric Scholarship for Minorities (Class IX & X)",
          eligibility: "Students from minority communities in Class IX & X",
          incomeLimit: "Annual family income not exceeding ₹1 lakh",
          amount: "Day Scholar: ₹5,000/year, Hosteller: ₹7,000/year",
        },
        {
          name: "Post-Matric Scholarship for Minorities",
          eligibility: "Minority community students in Class XI & XII",
          incomeLimit: "Annual family income not exceeding ₹2 lakh",
          amount: "Maintenance allowance and academic fees reimbursement",
        },
        {
          name: "PM YASASVI Scholarship (Vibrant India Scholarship)",
          eligibility: "OBC, EBC, and DNT category students in Class IX-XI",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Class IX & X: ₹75,000/year, Class XI-XII: ₹1,25,000/year",
        },
        {
          name: "National Scholarship Portal (NSP) - Multiple Schemes",
          eligibility: "Students from SC, ST, OBC, Minority, and other categories",
          incomeLimit: "Varies by scheme",
          amount: "Varies by scheme and category",
        },
      ],
    },
  },
  {
    institutionName: "Divine Degree College",
    samsCode: "24055302",
    stateGovernment: {
      title: "Odisha State Government Scholarships",
      scholarships: [
        {
          name: "Post-Matric Scholarship for SC Students",
          eligibility: "SC students pursuing undergraduate degree programs",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Day Scholar: ₹10,000-15,000/year, Hosteller: ₹25,000-30,000/year",
        },
        {
          name: "Post-Matric Scholarship for ST Students",
          eligibility: "ST students pursuing undergraduate degree programs",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Day Scholar: ₹10,000-15,000/year, Hosteller: ₹25,000-30,000/year",
        },
        {
          name: "Post-Matric Scholarship for OBC Students",
          eligibility: "OBC/SEBC students in undergraduate programs",
          incomeLimit: "Annual family income not exceeding ₹1 lakh",
          amount: "Maintenance allowance and course fee reimbursement",
        },
        {
          name: "Medhabruti Scholarship (Degree Level)",
          eligibility: "Meritorious undergraduate students from economically weaker sections",
          incomeLimit: "Annual family income below ₹2 lakh",
          amount: "Up to ₹20,000/year based on merit and need",
        },
        {
          name: "Kalinga Sikhya Sathi Yojana (KSSY) - College Level",
          eligibility: "Undergraduate students from BPL families",
          incomeLimit: "Valid BPL certificate required",
          amount: "Free tuition fees, books, and other educational expenses",
        },
        {
          name: "State Scholarship for Students with Disabilities",
          eligibility: "Undergraduate students with 40% or more disability",
          incomeLimit: "Annual family income not exceeding ₹2 lakh",
          amount: "Day Scholar: ₹1,500/year, Hosteller: ₹5,000/year",
        },
        {
          name: "Minority Scholarship Scheme (Odisha)",
          eligibility: "Students from minority communities in degree programs",
          incomeLimit: "Annual family income not exceeding ₹2 lakh",
          amount: "Tuition fee and maintenance allowance",
        },
        {
          name: "Merit-cum-Means Scholarship for Professional and Technical Courses",
          eligibility: "Meritorious students in professional courses with financial need",
          incomeLimit: "Annual family income not exceeding ₹6 lakh",
          amount: "Up to ₹20,000/year",
        },
        {
          name: "Chief Minister's Scholarship Scheme",
          eligibility: "Meritorious students from economically disadvantaged backgrounds",
          incomeLimit: "Annual family income not exceeding ₹3 lakh",
          amount: "Variable based on course and merit",
        },
      ],
    },
    centralGovernment: {
      title: "Central Government Scholarships",
      scholarships: [
        {
          name: "Central Sector Scheme of Scholarship for College and University Students",
          eligibility: "Students who secured admission to first year of degree course after passing Class XII with 80% or above",
          incomeLimit: "Annual family income not exceeding ₹8 lakh",
          amount: "₹10,000 to ₹20,000/year depending on course",
        },
        {
          name: "Post-Matric Scholarship for SC Students (Central Sector)",
          eligibility: "SC students pursuing undergraduate and postgraduate courses",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Maintenance allowance and compulsory fee reimbursement",
        },
        {
          name: "Post-Matric Scholarship for ST Students (Central Sector)",
          eligibility: "ST students in undergraduate and postgraduate programs",
          incomeLimit: "Annual family income not exceeding ₹2.50 lakh",
          amount: "Maintenance allowance and compulsory fee reimbursement",
        },
        {
          name: "Post-Matric Scholarship for OBC Students (Central Sector)",
          eligibility: "OBC students pursuing higher education",
          incomeLimit: "Annual family income not exceeding ₹1 lakh",
          amount: "Maintenance allowance and fee reimbursement as per norms",
        },
        {
          name: "Dr. Ambedkar Central Sector Scheme of Interest Subsidy",
          eligibility: "SC/ST students taking educational loans for higher education",
          incomeLimit: "Annual family income not exceeding ₹4.50 lakh",
          amount: "100% interest subsidy on educational loans",
        },
        {
          name: "Pre-Matric and Post-Matric Scholarship for Minority Students",
          eligibility: "Students from notified minority communities",
          incomeLimit: "Annual family income not exceeding ₹2 lakh",
          amount: "Maintenance allowance and fee reimbursement",
        },
        {
          name: "Maulana Azad National Fellowship for Minority Students",
          eligibility: "Students from minority communities for M.Phil and Ph.D.",
          incomeLimit: "No income limit",
          amount: "₹25,000/month (Junior Research Fellow) + contingency",
        },
        {
          name: "UGC Merit Scholarship for Single Girl Child",
          eligibility: "Single girl child (parents' only child) pursuing postgraduate courses",
          incomeLimit: "No income limit",
          amount: "₹3,000/month for the duration of course",
        },
        {
          name: "National Fellowship for SC Students",
          eligibility: "SC students pursuing M.Phil and Ph.D. programs",
          incomeLimit: "No income limit",
          amount: "₹31,000/month (Junior) and ₹35,000/month (Senior) + contingency",
        },
        {
          name: "National Overseas Scholarship for SC Students",
          eligibility: "SC students for Master's and Ph.D. studies abroad",
          incomeLimit: "Annual family income not exceeding ₹8 lakh",
          amount: "Up to ₹15-20 lakh/year for tuition and living expenses",
        },
      ],
    },
  },
];
