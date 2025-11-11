module.exports = [
  {
    id: "bocconi-msc-finance",
    name: "Università Bocconi",
    degree: "magistrale",
    program: "MSc in Finance",
    location: {
      city: "Milano",
      country: "Italia"
    },
    courses: {
      mainSubjects: ["Corporate Finance", "Asset Management", "Financial Markets", "Derivatives"],
      specializations: ["Quantitative Finance", "Corporate Finance", "Asset Management"]
    },
    deadlines: {
      earlyRound: "2024-11-15",
      standardRound: "2025-01-31",
      lateRound: "2025-04-15"
    },
    requirements: {
      gpa: "27/30 minimo",
      tests: ["GMAT/GRE consigliato", "TOEFL/IELTS per non madrelingua"],
      experience: "Non richiesta ma preferibile"
    },
    ratings: {
      qs: 7,
      financial_times: 12,
      overall: 4.5
    },
    duration: {
      years: 2,
      structure: "4 semestri",
      exams: "Esami finali per corso",
      credits: 120
    },
    language: "Inglese",
    classSize: "60-80 studenti per corso",
    costs: {
      tuition: "14000-16000 EUR/anno",
      scholarships: ["Merit-based", "Need-based", "ISU Bocconi"],
      onCampusWork: true
    },
    career: {
      placementRate3Months: 85,
      placementRate6Months: 95,
      topSectors: ["Investment Banking", "Asset Management", "Consulting", "Private Equity"],
      topEmployers: ["Goldman Sachs", "JP Morgan", "McKinsey", "Mediobanca"],
      abroadPercentage: 45,
      averageSalary: "55000-75000 EUR",
      alumniNetwork: "Forte con 120000+ alumni"
    },
    international: {
      exchanges: true,
      exchangePartners: ["HEC Paris", "LSE", "Columbia"],
      doubleDegree: ["CEMS", "Partnerships con top schools"],
      internships: "Obbligatorio stage 3-6 mesi"
    },
    cityLife: {
      qualityOfLife: 4.2,
      averageRent: "600-900 EUR/mese",
      easeOfRenting: "Medio-difficile",
      studentLife: "Ottima, città internazionale"
    }
  },
  {
    id: "polimi-engineering",
    name: "Politecnico di Milano",
    degree: "triennale",
    program: "Ingegneria Informatica",
    location: {
      city: "Milano",
      country: "Italia"
    },
    courses: {
      mainSubjects: ["Algoritmi", "Programmazione", "Sistemi Operativi", "Database"],
      specializations: []
    },
    deadlines: {
      standardRound: "2025-07-15"
    },
    requirements: {
      gpa: "Test di ammissione TOL",
      tests: ["TOL - Test OnLine"],
      experience: "Non richiesta"
    },
    ratings: {
      qs: 123,
      overall: 4.3
    },
    duration: {
      years: 3,
      structure: "6 semestri",
      exams: "Esami parziali e finali",
      credits: 180
    },
    language: "Italiano (alcuni corsi in inglese)",
    classSize: "100-150 studenti",
    costs: {
      tuition: "0-4000 EUR/anno (ISEE based)",
      scholarships: ["Borse regionali", "Borse di merito"],
      onCampusWork: false
    },
    career: {
      placementRate3Months: 70,
      placementRate6Months: 88,
      topSectors: ["Tech", "Consulting", "Engineering"],
      topEmployers: ["Amazon", "Microsoft", "Accenture", "Leonardo"],
      abroadPercentage: 25,
      averageSalary: "28000-35000 EUR",
      alumniNetwork: "Molto forte in Italia"
    },
    international: {
      exchanges: true,
      exchangePartners: ["TU Munich", "ETH Zurich", "KTH Stockholm"],
      doubleDegree: ["Alta Scuola Politecnica"],
      internships: "Stage opzionale"
    },
    cityLife: {
      qualityOfLife: 4.2,
      averageRent: "500-800 EUR/mese",
      easeOfRenting: "Difficile",
      studentLife: "Ottima"
    }
  }
];
