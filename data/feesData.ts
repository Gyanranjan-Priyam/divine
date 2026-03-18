export interface FeeCategory {
  category: string;
  amount: number;
}

export interface CourseFee {
  slNo: number;
  stream: string;
  subject: string;
  fees: {
    [key: string]: number;
  };
}

export interface HostelInfo {
  stream: string;
  seats: {
    generalGirls?: number;
    generalBoys?: number;
    scBoys: number;
    scGirls: number;
    stBoys: number;
    stGirls: number;
    phoh: number;
  };
  fees: {
    generalBoys: number;
    generalGirls: number;
    scBoys: number;
    scGirls: number;
    stBoys: number;
    stGirls: number;
    phoh: number;
  };
}

export interface InstitutionFees {
  institutionName: string;
  samsCode: string;
  location: string;
  admissionFees: FeeCategory[];
  courseFees: CourseFee[];
  hostelInfo: HostelInfo[];
  notes: {
    admissionNote: string;
    courseNote: string;
  };
}

export const degreeCollegeFees: InstitutionFees = {
  institutionName: "Divine Degree College",
  samsCode: "24055302",
  location: "Lenkudipada, Nayagarh",
  admissionFees: [
    { category: "GENERAL-BOYS", amount: 5000 },
    { category: "GENERAL-GIRLS", amount: 5000 },
    { category: "SC-BOYS", amount: 5000 },
    { category: "SC-GIRLS", amount: 5000 },
    { category: "ST-BOYS", amount: 5000 },
    { category: "ST-GIRLS", amount: 5000 },
    { category: "PHOH", amount: 5000 },
    { category: "SPORT GENERAL-BOYS", amount: 5000 },
    { category: "SPORT GENERAL-GIRLS", amount: 5000 },
    { category: "SPORT SC-BOYS", amount: 5000 },
    { category: "SPORT SC-GIRLS", amount: 5000 },
    { category: "SPORT ST-BOYS", amount: 5000 },
    { category: "SPORT ST-GIRLS", amount: 5000 },
  ],
  courseFees: [
    {
      slNo: 1,
      stream: "Biological Science",
      subject: "Botany",
      fees: {
        "GENERAL-BOYS": 90000,
        "GENERAL-GIRLS": 90000,
        "SC-BOYS": 90000,
        "SC-GIRLS": 90000,
        "ST-BOYS": 90000,
        "ST-GIRLS": 90000,
        PHOH: 90000,
        "SPORT GENERAL-BOYS": 90000,
        "SPORT GENERAL-GIRLS": 90000,
      },
    },
    {
      slNo: 2,
      stream: "Biological Science",
      subject: "Zoology",
      fees: {
        "GENERAL-BOYS": 90000,
        "GENERAL-GIRLS": 90000,
        "SC-BOYS": 90000,
        "SC-GIRLS": 90000,
        "ST-BOYS": 90000,
        "ST-GIRLS": 90000,
        PHOH: 90000,
        "SPORT GENERAL-BOYS": 90000,
        "SPORT GENERAL-GIRLS": 90000,
      },
    },
    {
      slNo: 3,
      stream: "Physical Science",
      subject: "Chemistry",
      fees: {
        "GENERAL-BOYS": 90000,
        "GENERAL-GIRLS": 90000,
        "SC-BOYS": 90000,
        "SC-GIRLS": 90000,
        "ST-BOYS": 90000,
        "ST-GIRLS": 90000,
        PHOH: 90000,
        "SPORT GENERAL-BOYS": 90000,
        "SPORT GENERAL-GIRLS": 90000,
      },
    },
    {
      slNo: 4,
      stream: "Physical Science",
      subject: "Mathematics",
      fees: {
        "GENERAL-BOYS": 90000,
        "GENERAL-GIRLS": 90000,
        "SC-BOYS": 90000,
        "SC-GIRLS": 90000,
        "ST-BOYS": 90000,
        "ST-GIRLS": 90000,
        PHOH: 90000,
        "SPORT GENERAL-BOYS": 90000,
        "SPORT GENERAL-GIRLS": 90000,
      },
    },
    {
      slNo: 5,
      stream: "Physical Science",
      subject: "Physics",
      fees: {
        "GENERAL-BOYS": 90000,
        "GENERAL-GIRLS": 90000,
        "SC-BOYS": 90000,
        "SC-GIRLS": 90000,
        "ST-BOYS": 90000,
        "ST-GIRLS": 90000,
        PHOH: 90000,
        "SPORT GENERAL-BOYS": 90000,
        "SPORT GENERAL-GIRLS": 90000,
      },
    },
  ],
  hostelInfo: [
    {
      stream: "Physical Science",
      seats: {
        generalGirls: 70,
        scBoys: 20,
        scGirls: 20,
        stBoys: 20,
        stGirls: 20,
        phoh: 20,
      },
      fees: {
        generalBoys: 35000,
        generalGirls: 35000,
        scBoys: 35000,
        scGirls: 35000,
        stBoys: 35000,
        stGirls: 35000,
        phoh: 35000,
      },
    },
    {
      stream: "Biological Science",
      seats: {
        generalGirls: 70,
        scBoys: 20,
        scGirls: 20,
        stBoys: 20,
        stGirls: 20,
        phoh: 10,
      },
      fees: {
        generalBoys: 35000,
        generalGirls: 35000,
        scBoys: 35000,
        scGirls: 35000,
        stBoys: 35000,
        stGirls: 35000,
        phoh: 35000,
      },
    },
  ],
  notes: {
    admissionNote:
      "Underneath Fees displayed is the 1st year admission fees being collected from the student during the 1st year admission through online mode. Student will deposit this amount during the admission into +3 1st year class.",
    courseNote:
      "Underneath Fees displayed is the total course fees being collected from the student during the entire three year course period. Student will not pay more beyond the amount mentioned below.",
  },
};

export interface HigherSecondaryAdmissionFees {
  category: string;
  classXI: {
    admissionFees: number;
    hostelFees: number;
    reAdmissionFees: number;
  };
  classXII: {
    hostelFees: number;
  };
}

export interface HigherSecondaryFees {
  institutionName: string;
  samsCode: string;
  location: string;
  admissionFees: HigherSecondaryAdmissionFees[];
  hostelPriority: string;
}

export const higherSecondaryFees: HigherSecondaryFees = {
  institutionName: "Divine Higher Secondary School",
  samsCode: "24075102",
  location: "Solapata, Nayagarh",
  admissionFees: [
    {
      category: "SC-GIRLS",
      classXI: {
        admissionFees: 50000,
        hostelFees: 45000,
        reAdmissionFees: 50000,
      },
      classXII: {
        hostelFees: 45000,
      },
    },
    {
      category: "SC-BOYS",
      classXI: {
        admissionFees: 50000,
        hostelFees: 45000,
        reAdmissionFees: 50000,
      },
      classXII: {
        hostelFees: 45000,
      },
    },
    {
      category: "GEN/SEBC/OBC-GIRLS",
      classXI: {
        admissionFees: 50000,
        hostelFees: 45000,
        reAdmissionFees: 50000,
      },
      classXII: {
        hostelFees: 45000,
      },
    },
    {
      category: "GEN/SEBC/OBC-BOYS",
      classXI: {
        admissionFees: 50000,
        hostelFees: 45000,
        reAdmissionFees: 50000,
      },
      classXII: {
        hostelFees: 45000,
      },
    },
    {
      category: "PH/OH",
      classXI: {
        admissionFees: 50000,
        hostelFees: 45000,
        reAdmissionFees: 50000,
      },
      classXII: {
        hostelFees: 45000,
      },
    },
    {
      category: "ST-GIRLS",
      classXI: {
        admissionFees: 50000,
        hostelFees: 45000,
        reAdmissionFees: 50000,
      },
      classXII: {
        hostelFees: 45000,
      },
    },
    {
      category: "ST-BOYS",
      classXI: {
        admissionFees: 50000,
        hostelFees: 45000,
        reAdmissionFees: 50000,
      },
      classXII: {
        hostelFees: 45000,
      },
    },
  ],
  hostelPriority: "Day-cum-Residential",
};

export const feesData = {
  degreeCollege: degreeCollegeFees,
  higherSecondary: higherSecondaryFees,
};
