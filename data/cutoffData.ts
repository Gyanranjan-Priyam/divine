export interface CutoffMark {
  subject: string;
  stream: string;
  GEN?: number | string;
  ST?: number | string;
  SC?: number | string;
  SEBC?: number | string;
  ESM?: number | string;
  SDP?: number | string;
  COM?: number | string;
  OLNS?: number | string;
}

export interface SelectionRound {
  round: string;
  cutoffs: CutoffMark[];
}

export interface InstitutionCutoff {
  institutionName: string;
  samsCode: string;
  location: string;
  district: string;
  session: string;
  selections: SelectionRound[];
}

export const degreeCollegeCutoff: InstitutionCutoff = {
  institutionName: "Divine Degree College",
  samsCode: "24055302",
  location: "Lenkudipada",
  district: "Nayagarh",
  session: "2025-26",
  selections: [
    {
      round: "First Selection",
      cutoffs: [
        {
          subject: "Physics",
          stream: "Physical Science",
          GEN: 70.67,
          ST: "-",
          SC: "-",
          SEBC: 58.33,
        },
        {
          subject: "Chemistry",
          stream: "Physical Science",
          GEN: 64.33,
          ST: "-",
          SC: "-",
          SEBC: 61.50,
        },
        {
          subject: "Mathematics",
          stream: "Physical Science",
          GEN: 73.83,
          ST: "-",
          SC: "-",
          SEBC: 67.00,
        },
        {
          subject: "Botany",
          stream: "Biological Science",
          GEN: 64.00,
          ST: 39.67,
          SC: 52.67,
          SEBC: "-",
        },
        {
          subject: "Zoology",
          stream: "Biological Science",
          GEN: 71.83,
          ST: 69.00,
          SC: 62.67,
          SEBC: "-",
        },
      ],
    },
    {
      round: "Phase II First Selection",
      cutoffs: [
        {
          subject: "Physics",
          stream: "Physical Science",
          GEN: 55.00,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Chemistry",
          stream: "Physical Science",
          GEN: 54.70,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Mathematics",
          stream: "Physical Science",
          GEN: "-",
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Botany",
          stream: "Biological Science",
          GEN: "-",
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Zoology",
          stream: "Biological Science",
          GEN: 61.83,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
      ],
    },
    {
      round: "Second Selection",
      cutoffs: [
        {
          subject: "Physics",
          stream: "Physical Science",
          GEN: 64.83,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Chemistry",
          stream: "Physical Science",
          GEN: 51.00,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Mathematics",
          stream: "Physical Science",
          GEN: 72.83,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Botany",
          stream: "Biological Science",
          GEN: 60.83,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Zoology",
          stream: "Biological Science",
          GEN: 59.50,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
      ],
    },
    {
      round: "Third Selection",
      cutoffs: [
        {
          subject: "Physics",
          stream: "Physical Science",
          GEN: 64.00,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Chemistry",
          stream: "Physical Science",
          GEN: "-",
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Mathematics",
          stream: "Physical Science",
          GEN: 55.00,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Botany",
          stream: "Biological Science",
          GEN: "-",
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
        {
          subject: "Zoology",
          stream: "Biological Science",
          GEN: 48.00,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
      ],
    },
  ],
};

export const higherSecondaryCutoff: InstitutionCutoff = {
  institutionName: "Divine Higher Secondary School",
  samsCode: "24075102",
  location: "Solapata",
  district: "Nayagarh",
  session: "2025-26",
  selections: [
    {
      round: "First Selection",
      cutoffs: [
        {
          subject: "Science",
          stream: "Science",
          GEN: 43.40,
          ST: "-",
          SC: "-",
          SEBC: "-",
        },
      ],
    },
  ],
};

export const cutoffData = {
  degreeCollege: degreeCollegeCutoff,
  higherSecondary: higherSecondaryCutoff,
};
