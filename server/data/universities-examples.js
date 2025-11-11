// ESEMPI DI UNIVERSITÀ DA AGGIUNGERE
// Copia questi oggetti in universities.js per espandere il database

// Esempio 1: Università Italiana - Triennale
const luiss_triennale = {
  id: "luiss-economia",
  name: "LUISS Guido Carli",
  degree: "triennale",
  program: "Economia e Management",
  location: {
    city: "Roma",
    country: "Italia"
  },
  courses: {
    mainSubjects: ["Economia Aziendale", "Matematica Finanziaria", "Diritto Commerciale", "Marketing"],
    specializations: []
  },
  deadlines: {
    earlyRound: "2024-12-15",
    standardRound: "2025-03-15",
    lateRound: "2025-07-15"
  },
  requirements: {
    gpa: "Test di ammissione",
    tests: ["Test LUISS"],
    experience: "Non richiesta"
  },
  ratings: {
    overall: 4.2
  },
  duration: {
    years: 3,
    structure: "6 semestri",
    exams: "Esami scritti e orali",
    credits: 180
  },
  language: "Italiano e Inglese",
  classSize: "80-100 studenti",
  costs: {
    tuition: "11000-13000 EUR/anno",
    scholarships: ["Borse di merito", "Borse per reddito"],
    onCampusWork: false
  },
  career: {
    placementRate3Months: 75,
    placementRate6Months: 88,
    topSectors: ["Consulting", "Finance", "Marketing"],
    topEmployers: ["Deloitte", "PwC", "Accenture", "Unicredit"],
    abroadPercentage: 30,
    averageSalary: "28000-35000 EUR",
    alumniNetwork: "Forte network in Italia"
  },
  international: {
    exchanges: true,
    exchangePartners: ["Erasmus+", "Partner europei"],
    doubleDegree: [],
    internships: "Stage obbligatorio"
  },
  cityLife: {
    qualityOfLife: 4.0,
    averageRent: "500-800 EUR/mese",
    easeOfRenting: "Medio-difficile",
    studentLife: "Ottima, città storica"
  }
};

// Esempio 2: Università UK - Magistrale
const imperial_msc = {
  id: "imperial-computing",
  name: "Imperial College London",
  degree: "magistrale",
  program: "MSc Computing",
  location: {
    city: "Londra",
    country: "Regno Unito"
  },
  courses: {
    mainSubjects: ["Machine Learning", "Advanced Algorithms", "Distributed Systems", "AI"],
    specializations: ["Artificial Intelligence", "Software Engineering", "Data Science"]
  },
  deadlines: {
    earlyRound: "2024-11-30",
    standardRound: "2025-02-28"
  },
  requirements: {
    gpa: "First Class Honours o 2:1",
    tests: ["GRE opzionale"],
    experience: "Preferibile esperienza in programmazione"
  },
  ratings: {
    qs: 6,
    overall: 4.8
  },
  duration: {
    years: 1,
    structure: "3 terms",
    exams: "Esami + progetto finale",
    credits: 120
  },
  language: "Inglese",
  classSize: "50-70 studenti",
  costs: {
    tuition: "35000-38000 GBP/anno",
    scholarships: ["President's Scholarship", "Country-specific scholarships"],
    onCampusWork: true
  },
  career: {
    placementRate3Months: 92,
    placementRate6Months: 98,
    topSectors: ["Tech", "Finance", "Consulting", "Research"],
    topEmployers: ["Google", "Meta", "Amazon", "DeepMind", "Goldman Sachs"],
    abroadPercentage: 60,
    averageSalary: "70000-100000 GBP",
    alumniNetwork: "Eccellente network globale"
  },
  international: {
    exchanges: false,
    exchangePartners: [],
    doubleDegree: [],
    internships: "Supporto career services"
  },
  cityLife: {
    qualityOfLife: 4.3,
    averageRent: "900-1600 GBP/mese",
    easeOfRenting: "Molto difficile",
    studentLife: "Eccellente, città cosmopolita"
  }
};

// Esempio 3: Università Europea - Magistrale
const esade_mba = {
  id: "esade-mba",
  name: "ESADE Business School",
  degree: "magistrale",
  program: "MBA",
  location: {
    city: "Barcellona",
    country: "Spagna"
  },
  courses: {
    mainSubjects: ["Strategy", "Leadership", "Finance", "Marketing", "Operations"],
    specializations: ["Entrepreneurship", "Innovation", "Digital Business"]
  },
  deadlines: {
    earlyRound: "2024-10-15",
    standardRound: "2025-01-15",
    lateRound: "2025-04-15"
  },
  requirements: {
    gpa: "Bachelor degree",
    tests: ["GMAT/GRE richiesto", "TOEFL/IELTS"],
    experience: "3+ anni esperienza lavorativa"
  },
  ratings: {
    qs: 25,
    financial_times: 18,
    overall: 4.6
  },
  duration: {
    years: 1.5,
    structure: "18 mesi",
    exams: "Case studies + progetti",
    credits: 90
  },
  language: "Inglese",
  classSize: "40-50 studenti",
  costs: {
    tuition: "75000 EUR totale",
    scholarships: ["Merit scholarships", "Diversity scholarships", "Women in Business"],
    onCampusWork: false
  },
  career: {
    placementRate3Months: 88,
    placementRate6Months: 96,
    topSectors: ["Consulting", "Tech", "Finance", "Entrepreneurship"],
    topEmployers: ["McKinsey", "BCG", "Amazon", "Google", "Startups"],
    abroadPercentage: 75,
    averageSalary: "80000-110000 EUR",
    alumniNetwork: "Network globale con 70000+ alumni"
  },
  international: {
    exchanges: true,
    exchangePartners: ["Wharton", "INSEAD", "Tsinghua"],
    doubleDegree: [],
    internships: "Progetti aziendali integrati"
  },
  cityLife: {
    qualityOfLife: 4.7,
    averageRent: "700-1200 EUR/mese",
    easeOfRenting: "Medio",
    studentLife: "Eccellente, città mediterranea"
  }
};

// Esempio 4: Università Italiana - Magistrale Tecnica
const polito_magistrale = {
  id: "polito-data-science",
  name: "Politecnico di Torino",
  degree: "magistrale",
  program: "Data Science and Engineering",
  location: {
    city: "Torino",
    country: "Italia"
  },
  courses: {
    mainSubjects: ["Machine Learning", "Big Data", "Statistics", "Data Mining"],
    specializations: ["AI", "Business Analytics", "Scientific Computing"]
  },
  deadlines: {
    standardRound: "2025-04-30"
  },
  requirements: {
    gpa: "Laurea triennale in materie STEM",
    tests: ["TOEFL/IELTS per corsi in inglese"],
    experience: "Non richiesta"
  },
  ratings: {
    qs: 308,
    overall: 4.3
  },
  duration: {
    years: 2,
    structure: "4 semestri",
    exams: "Esami + tesi",
    credits: 120
  },
  language: "Inglese",
  classSize: "60-80 studenti",
  costs: {
    tuition: "0-3500 EUR/anno (ISEE based)",
    scholarships: ["EDISU Piemonte", "Borse di merito"],
    onCampusWork: false
  },
  career: {
    placementRate3Months: 78,
    placementRate6Months: 92,
    topSectors: ["Tech", "Data Science", "Consulting", "Research"],
    topEmployers: ["Amazon", "Microsoft", "Reply", "Accenture"],
    abroadPercentage: 35,
    averageSalary: "32000-42000 EUR",
    alumniNetwork: "Forte in Italia e crescente all'estero"
  },
  international: {
    exchanges: true,
    exchangePartners: ["Erasmus+", "Partner europei e USA"],
    doubleDegree: ["Programmi con università francesi"],
    internships: "Stage opzionale ma consigliato"
  },
  cityLife: {
    qualityOfLife: 4.4,
    averageRent: "350-600 EUR/mese",
    easeOfRenting: "Medio",
    studentLife: "Buona, città universitaria"
  }
};

// Esempio 5: Università USA - Magistrale
const nyu_stern = {
  id: "nyu-stern-finance",
  name: "NYU Stern School of Business",
  degree: "magistrale",
  program: "MS in Finance",
  location: {
    city: "New York",
    country: "USA"
  },
  courses: {
    mainSubjects: ["Corporate Finance", "Investments", "Derivatives", "Financial Modeling"],
    specializations: ["Quantitative Finance", "Risk Management", "Fintech"]
  },
  deadlines: {
    earlyRound: "2024-10-15",
    standardRound: "2025-01-15",
    lateRound: "2025-03-15"
  },
  requirements: {
    gpa: "3.5+ GPA",
    tests: ["GMAT/GRE richiesto", "TOEFL/IELTS per non madrelingua"],
    experience: "0-2 anni preferibile"
  },
  ratings: {
    qs: 39,
    financial_times: 8,
    overall: 4.7
  },
  duration: {
    years: 1,
    structure: "3 semesters",
    exams: "Esami + capstone project",
    credits: 36
  },
  language: "Inglese",
  classSize: "50-60 studenti",
  costs: {
    tuition: "80000 USD/anno",
    scholarships: ["Merit-based scholarships", "Diversity scholarships"],
    onCampusWork: true
  },
  career: {
    placementRate3Months: 95,
    placementRate6Months: 99,
    topSectors: ["Investment Banking", "Asset Management", "Private Equity", "Hedge Funds"],
    topEmployers: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "BlackRock"],
    abroadPercentage: 40,
    averageSalary: "100000-150000 USD",
    alumniNetwork: "Eccellente network a Wall Street"
  },
  international: {
    exchanges: false,
    exchangePartners: [],
    doubleDegree: [],
    internships: "Supporto career services eccellente"
  },
  cityLife: {
    qualityOfLife: 4.2,
    averageRent: "1500-3000 USD/mese",
    easeOfRenting: "Molto difficile e costoso",
    studentLife: "Eccellente, cuore di Manhattan"
  }
};

// ISTRUZIONI:
// 1. Apri server/data/universities.js
// 2. Copia uno o più oggetti da questo file
// 3. Aggiungili all'array in universities.js
// 4. Salva e riavvia l'app
// 5. Le nuove università appariranno automaticamente!

module.exports = {
  luiss_triennale,
  imperial_msc,
  esade_mba,
  polito_magistrale,
  nyu_stern
};
