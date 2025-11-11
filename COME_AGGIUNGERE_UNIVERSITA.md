# 📝 Come Aggiungere Nuove Università

## Guida Rapida

Per aggiungere una nuova università, modifica il file `server/data/universities.js` e aggiungi un nuovo oggetto all'array.

## Template Università

Copia e incolla questo template, poi compila i campi:

```javascript
{
  id: "nome-universita-corso",  // ID unico (usa kebab-case)
  name: "Nome Università",
  degree: "triennale",  // o "magistrale"
  program: "Nome del Corso di Laurea",
  location: {
    city: "Città",
    country: "Paese"
  },
  courses: {
    mainSubjects: ["Materia 1", "Materia 2", "Materia 3"],
    specializations: ["Specializzazione 1", "Specializzazione 2"]
  },
  deadlines: {
    earlyRound: "2024-11-15",  // Opzionale, formato YYYY-MM-DD
    standardRound: "2025-01-31",
    lateRound: "2025-04-15"  // Opzionale
  },
  requirements: {
    gpa: "Requisito GPA/voto minimo",
    tests: ["Test 1", "Test 2"],
    experience: "Esperienza richiesta o 'Non richiesta'"
  },
  ratings: {
    qs: 100,  // Ranking QS (opzionale)
    financial_times: 50,  // Ranking FT (opzionale)
    overall: 4.5  // Rating da 1 a 5
  },
  duration: {
    years: 2,  // o 3 per triennale
    structure: "4 semestri",  // o "6 semestri", "trimestri", etc.
    exams: "Tipo di esami",
    credits: 120  // ECTS
  },
  language: "Lingua di insegnamento",
  classSize: "Numero studenti per classe",
  costs: {
    tuition: "Range tasse (es. 10000-15000 EUR/anno)",
    scholarships: ["Borsa 1", "Borsa 2"],
    onCampusWork: true  // o false
  },
  career: {
    placementRate3Months: 80,  // Percentuale (0-100)
    placementRate6Months: 95,
    topSectors: ["Settore 1", "Settore 2"],
    topEmployers: ["Azienda 1", "Azienda 2"],
    abroadPercentage: 40,  // Percentuale che va all'estero
    averageSalary: "Range salario (es. 45000-60000 EUR)",
    alumniNetwork: "Descrizione alumni network"
  },
  international: {
    exchanges: true,  // o false
    exchangePartners: ["Università 1", "Università 2"],
    doubleDegree: ["Programma 1", "Programma 2"],
    internships: "Descrizione stage"
  },
  cityLife: {
    qualityOfLife: 4.0,  // Da 1 a 5
    averageRent: "Range affitto (es. 400-700 EUR/mese)",
    easeOfRenting: "Facile/Medio/Difficile",
    studentLife: "Descrizione vita studentesca"
  }
}
```

## Esempi Reali

### Esempio 1: Università Triennale

```javascript
{
  id: "sapienza-informatica",
  name: "Sapienza Università di Roma",
  degree: "triennale",
  program: "Informatica",
  location: {
    city: "Roma",
    country: "Italia"
  },
  courses: {
    mainSubjects: ["Programmazione", "Algoritmi", "Basi di Dati", "Reti"],
    specializations: []
  },
  deadlines: {
    standardRound: "2025-08-31"
  },
  requirements: {
    gpa: "Test di ammissione",
    tests: ["TOLC-I"],
    experience: "Non richiesta"
  },
  ratings: {
    qs: 171,
    overall: 4.1
  },
  duration: {
    years: 3,
    structure: "6 semestri",
    exams: "Esami scritti e orali",
    credits: 180
  },
  language: "Italiano",
  classSize: "150-200 studenti",
  costs: {
    tuition: "0-3000 EUR/anno (ISEE based)",
    scholarships: ["Borse regionali Lazio", "Borse di merito"],
    onCampusWork: false
  },
  career: {
    placementRate3Months: 65,
    placementRate6Months: 82,
    topSectors: ["IT", "Consulting", "Pubblica Amministrazione"],
    topEmployers: ["Accenture", "Deloitte", "Engineering"],
    abroadPercentage: 15,
    averageSalary: "25000-32000 EUR",
    alumniNetwork: "Ampio network in Italia"
  },
  international: {
    exchanges: true,
    exchangePartners: ["Erasmus+"],
    doubleDegree: [],
    internships: "Stage opzionale"
  },
  cityLife: {
    qualityOfLife: 4.0,
    averageRent: "400-700 EUR/mese",
    easeOfRenting: "Medio",
    studentLife: "Ottima, città storica"
  }
}
```

### Esempio 2: Università Magistrale Internazionale

```javascript
{
  id: "lse-economics",
  name: "London School of Economics",
  degree: "magistrale",
  program: "MSc Economics",
  location: {
    city: "Londra",
    country: "Regno Unito"
  },
  courses: {
    mainSubjects: ["Microeconomics", "Macroeconomics", "Econometrics"],
    specializations: ["Development Economics", "Financial Economics"]
  },
  deadlines: {
    earlyRound: "2024-12-15",
    standardRound: "2025-03-01"
  },
  requirements: {
    gpa: "First Class Honours o equivalente",
    tests: ["GRE consigliato"],
    experience: "Non richiesta ma preferibile"
  },
  ratings: {
    qs: 45,
    overall: 4.7
  },
  duration: {
    years: 1,
    structure: "3 terms",
    exams: "Esami finali + dissertazione",
    credits: 120
  },
  language: "Inglese",
  classSize: "40-60 studenti",
  costs: {
    tuition: "30000-35000 GBP/anno",
    scholarships: ["Graduate Support Scheme", "Country-specific scholarships"],
    onCampusWork: true
  },
  career: {
    placementRate3Months: 90,
    placementRate6Months: 98,
    topSectors: ["Finance", "Consulting", "International Organizations"],
    topEmployers: ["World Bank", "IMF", "Goldman Sachs", "McKinsey"],
    abroadPercentage: 70,
    averageSalary: "60000-90000 GBP",
    alumniNetwork: "Eccellente, network globale"
  },
  international: {
    exchanges: false,
    exchangePartners: [],
    doubleDegree: [],
    internships: "Supporto career services"
  },
  cityLife: {
    qualityOfLife: 4.3,
    averageRent: "800-1500 GBP/mese",
    easeOfRenting: "Difficile",
    studentLife: "Eccellente, città cosmopolita"
  }
}
```

## Checklist Prima di Aggiungere

- [ ] L'ID è unico e in kebab-case
- [ ] Tutti i campi obbligatori sono compilati
- [ ] Le date sono nel formato YYYY-MM-DD
- [ ] I numeri (rating, percentuali) sono corretti
- [ ] Le informazioni sono accurate e aggiornate
- [ ] Hai testato l'app dopo l'aggiunta

## Dove Trovare le Informazioni

### Siti Ufficiali
- Sito web dell'università
- Pagina del corso specifico
- Sezione "Admissions" o "Come iscriversi"

### Rankings
- QS World University Rankings: [topuniversities.com](https://www.topuniversities.com)
- Financial Times Rankings: [rankings.ft.com](https://rankings.ft.com)

### Career Statistics
- Career services dell'università
- Report annuali di placement
- LinkedIn Alumni tool

### Costi e Borse
- Pagina "Tuition & Fees" del sito ufficiale
- Sezione "Financial Aid" o "Scholarships"

## Dopo Aver Aggiunto

1. Salva il file `server/data/universities.js`
2. Testa in locale:
   ```bash
   npm run dev
   ```
3. Verifica che la nuova università appaia nella lista
4. Clicca sulla card per verificare tutti i dettagli
5. Testa i filtri
6. Fai commit e push su GitHub:
   ```bash
   git add server/data/universities.js
   git commit -m "Aggiungi [Nome Università]"
   git push
   ```

Render farà automaticamente il deploy delle modifiche!

## Tips

- **Sii accurato**: Le informazioni devono essere corrette e aggiornate
- **Sii completo**: Compila tutti i campi possibili
- **Sii consistente**: Usa lo stesso formato degli altri (es. "EUR/anno" non "euro all'anno")
- **Aggiungi fonti**: Considera di aggiungere un campo `sources` con i link alle fonti

## Contribuire

Se vuoi contribuire aggiungendo università:
1. Fai un fork del repository
2. Aggiungi le università
3. Testa accuratamente
4. Apri una Pull Request con descrizione dettagliata

Grazie per contribuire! 🎓
