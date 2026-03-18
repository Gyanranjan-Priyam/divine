export interface Contact {
  role: string;
  name: string;
  phone: string;
  email: string;
}

export interface SeatInfo {
  stream: string;
  subject?: string;
  strength: number;
  admission: number;
  vacancy: number;
}

export interface SubjectInfo {
  stream: string;
  subject: string;
  strength: number;
}

export interface InstitutionData {
  name: string;
  location: string;
  samsCode?: string;
  contacts?: Contact[];
  seatInformation: SeatInfo[];
  subjectInformation?: SubjectInfo[];
}

export const degreeCollegeData: InstitutionData = {
  name: "Divine Degree College",
  location: "Lenkudipada, Dist: Nayagarh, Block: Nayagarh",
  samsCode: "24055302",
  seatInformation: [
    {
      stream: "Biological Science",
      subject: "Botany",
      strength: 24,
      admission: 10,
      vacancy: 14,
    },
    {
      stream: "Biological Science",
      subject: "Zoology",
      strength: 24,
      admission: 6,
      vacancy: 18,
    },
    {
      stream: "Physical Science",
      subject: "Chemistry",
      strength: 32,
      admission: 6,
      vacancy: 26,
    },
    {
      stream: "Physical Science",
      subject: "Mathematics",
      strength: 16,
      admission: 10,
      vacancy: 6,
    },
    {
      stream: "Physical Science",
      subject: "Physics",
      strength: 32,
      admission: 17,
      vacancy: 15,
    },
  ],
};

export const higherSecondaryData: InstitutionData = {
  name: "Divine Higher Secondary School",
  location: "Nayagarh, Odisha",
  samsCode: "24075102",
  seatInformation: [
    {
      stream: "Science",
      strength: 320,
      admission: 292,
      vacancy: 28,
    },
  ],
  subjectInformation: [
    { stream: "Science", subject: "Biology", strength: 320 },
    { stream: "Science", subject: "Chemistry", strength: 320 },
    { stream: "Science", subject: "Electronics", strength: 128 },
    { stream: "Science", subject: "Horticulture", strength: 96 },
    { stream: "Science", subject: "Information Technology", strength: 96 },
    { stream: "Science", subject: "Mathematics", strength: 320 },
    { stream: "Science", subject: "Office Management", strength: 96 },
    { stream: "Science", subject: "Physics", strength: 320 },
  ],
};

export const coursesData = {
  degreeCollege: degreeCollegeData,
  higherSecondary: higherSecondaryData,
};
