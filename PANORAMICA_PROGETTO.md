# 📊 Panoramica del Progetto

## 🎯 Cos'è University Tracker?

Un'applicazione web moderna per confrontare università italiane e internazionali, sia triennali che magistrali. Simile a Bristol Tracker per le internship, ma focalizzata sull'istruzione universitaria.

## 🏗️ Architettura

```
┌─────────────────────────────────────────────────────────┐
│                    UTENTE                                │
│              (Browser Desktop/Mobile)                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ HTTPS
                     │
┌────────────────────▼────────────────────────────────────┐
│                  RENDER.COM                              │
│              (Hosting Gratuito)                          │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │           FRONTEND (React + Vite)                │  │
│  │  • Interfaccia utente responsive                 │  │
│  │  • Filtri e ricerca                              │  │
│  │  • Pagine dettaglio università                   │  │
│  └──────────────────┬───────────────────────────────┘  │
│                     │                                    │
│                     │ API Calls                          │
│                     │                                    │
│  ┌──────────────────▼───────────────────────────────┐  │
│  │           BACKEND (Node.js + Express)            │  │
│  │  • API REST                                      │  │
│  │  • Gestione dati università                      │  │
│  │  • Serve frontend in produzione                  │  │
│  └──────────────────┬───────────────────────────────┘  │
│                     │                                    │
│                     │ Read                               │
│                     │                                    │
│  ┌──────────────────▼───────────────────────────────┐  │
│  │              DATABASE (JSON File)                │  │
│  │  • universities.js                               │  │
│  │  • Dati strutturati università                   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
                     ▲
                     │
                     │ Auto Deploy
                     │
┌────────────────────┴────────────────────────────────────┐
│                   GITHUB                                 │
│              (Version Control)                           │
│  • Codice sorgente                                      │
│  • Cronologia modifiche                                 │
│  • Trigger deploy automatico                            │
└──────────────────────────────────────────────────────────┘
```

## 📁 Struttura File

```
university-tracker/
│
├── 📄 File di Configurazione
│   ├── package.json              # Dipendenze e script root
│   ├── .env                      # Variabili ambiente (locale)
│   ├── .env.example             # Template variabili
│   ├── .gitignore               # File da ignorare in Git
│   ├── render.yaml              # Configurazione Render
│   └── LICENSE                  # Licenza MIT
│
├── 📚 Documentazione
│   ├── README.md                # Documentazione principale
│   ├── QUICK_START.md          # Guida rapida (5 min)
│   ├── DEPLOYMENT_GUIDE.md     # Guida deploy dettagliata
│   ├── GITHUB_RENDER_SETUP.md  # Setup completo (30 min)
│   ├── COME_AGGIUNGERE_UNIVERSITA.md  # Guida aggiunta università
│   ├── FEATURES.md             # Lista funzionalità e roadmap
│   ├── COMANDI_UTILI.md        # Riferimento comandi
│   └── PANORAMICA_PROGETTO.md  # Questo file
│
├── 🖥️ Backend (Server)
│   └── server/
│       ├── index.js            # Server Express principale
│       └── data/
│           ├── universities.js          # Database università
│           └── universities-examples.js # Esempi da aggiungere
│
├── 🎨 Frontend (Client)
│   └── client/
│       ├── package.json        # Dipendenze frontend
│       ├── vite.config.js      # Configurazione Vite
│       ├── index.html          # HTML principale
│       │
│       ├── public/             # File statici
│       │   └── vite.svg
│       │
│       └── src/                # Codice sorgente
│           ├── main.jsx        # Entry point React
│           ├── App.jsx         # Componente principale
│           ├── App.css         # Stili componenti
│           ├── index.css       # Stili globali
│           │
│           ├── pages/          # Pagine dell'app
│           │   ├── Home.jsx           # Pagina principale con filtri
│           │   └── UniversityDetail.jsx  # Dettaglio università
│           │
│           └── components/     # Componenti riutilizzabili
│               ├── Filters.jsx        # Componente filtri
│               └── UniversityCard.jsx # Card università
│
└── 🛠️ Script Utilità
    └── setup.sh                # Script setup automatico
```

## 🔄 Flusso di Lavoro

### Sviluppo Locale

```
1. Sviluppatore scrive codice
   ↓
2. npm run dev avvia:
   - Frontend su localhost:5173 (Vite)
   - Backend su localhost:3000 (Express)
   ↓
3. Hot reload automatico
   - Modifiche frontend → ricarica istantanea
   - Modifiche backend → restart automatico
   ↓
4. Test nel browser
   - Desktop e mobile
   - Verifica funzionalità
```

### Deploy in Produzione

```
1. git add . && git commit -m "..."
   ↓
2. git push
   ↓
3. GitHub riceve il push
   ↓
4. Render rileva modifiche
   ↓
5. Render esegue build:
   - npm install
   - npm run install-all
   - npm run build
   ↓
6. Render avvia app:
   - npm start
   ↓
7. App live su URL Render
   ↓
8. Utenti accedono all'app
```

## 🎨 Stack Tecnologico

### Frontend
- **React 18**: Libreria UI moderna
- **Vite**: Build tool velocissimo
- **React Router**: Navigazione SPA
- **CSS3**: Stili responsive custom

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web minimalista
- **CORS**: Gestione cross-origin

### Deployment
- **GitHub**: Version control e hosting codice
- **Render**: Hosting gratuito con deploy automatico

### Sviluppo
- **npm**: Package manager
- **Git**: Version control
- **Nodemon**: Auto-restart server
- **Concurrently**: Esegui più comandi

## 📊 Dati Università

Ogni università ha questi campi:

```javascript
{
  // Identificazione
  id: "unique-id",
  name: "Nome Università",
  degree: "triennale" | "magistrale",
  program: "Nome Corso",
  
  // Localizzazione
  location: { city, country },
  
  // Accademico
  courses: { mainSubjects, specializations },
  duration: { years, structure, exams, credits },
  language: "Lingua",
  classSize: "Numero studenti",
  
  // Ammissione
  deadlines: { earlyRound, standardRound, lateRound },
  requirements: { gpa, tests, experience },
  
  // Valutazioni
  ratings: { qs, financial_times, overall },
  
  // Costi
  costs: { tuition, scholarships, onCampusWork },
  
  // Carriera
  career: {
    placementRate3Months,
    placementRate6Months,
    topSectors,
    topEmployers,
    abroadPercentage,
    averageSalary,
    alumniNetwork
  },
  
  // Internazionale
  international: {
    exchanges,
    exchangePartners,
    doubleDegree,
    internships
  },
  
  // Città
  cityLife: {
    qualityOfLife,
    averageRent,
    easeOfRenting,
    studentLife
  }
}
```

## 🎯 Funzionalità Principali

### 1. Ricerca e Filtri
- Filtra per tipo di laurea
- Filtra per rating minimo
- Filtra per lingua
- Filtra per città
- Risultati in tempo reale

### 2. Visualizzazione
- Card responsive
- Informazioni chiave visibili
- Design pulito e moderno
- Icone intuitive

### 3. Dettagli Completi
- 8 sezioni informative
- Dati strutturati
- Facile navigazione
- Link back alla ricerca

### 4. Responsive Design
- Desktop (1200px+)
- Tablet (768-1199px)
- Mobile (< 768px)
- Touch-friendly

## 📈 Metriche e Performance

### Performance
- **First Load**: < 2s
- **Time to Interactive**: < 3s
- **Build Size**: ~500KB (gzipped)
- **API Response**: < 100ms

### SEO
- HTML semantico
- Meta tags appropriati
- URL puliti
- Responsive design

### Accessibilità
- Contrasto colori WCAG AA
- Navigazione da tastiera
- Label su form
- Struttura semantica

## 🔐 Sicurezza

### Implementato
- ✅ CORS configurato
- ✅ .env per variabili sensibili
- ✅ .gitignore per file privati
- ✅ HTTPS su Render
- ✅ Dipendenze aggiornate

### Da Implementare (Future)
- [ ] Rate limiting API
- [ ] Input validation
- [ ] Autenticazione utenti
- [ ] Database encryption

## 💰 Costi

### Attuale (Gratis)
- GitHub: $0/mese
- Render Free Tier: $0/mese
- Dominio .onrender.com: $0/mese

**Totale: $0/mese**

### Limitazioni Free Tier
- App si "addormenta" dopo 15 min inattività
- 750 ore/mese (più che sufficienti)
- Risveglio richiede 30-60 secondi

### Upgrade Opzionale
- Render Starter: $7/mese
  - No sleep
  - Più risorse
  - Metriche avanzate

## 🚀 Roadmap

### Fase 1: MVP (Completata) ✅
- [x] Setup progetto
- [x] Frontend responsive
- [x] Backend API
- [x] Filtri base
- [x] Pagina dettaglio
- [x] Deploy su Render

### Fase 2: Contenuti (In Corso)
- [ ] Aggiungere 50+ università
- [ ] Migliorare filtri
- [ ] Aggiungere ordinamento
- [ ] Ricerca testuale

### Fase 3: Utenti
- [ ] Autenticazione
- [ ] Università preferite
- [ ] Confronto università
- [ ] Profilo utente

### Fase 4: Community
- [ ] Recensioni studenti
- [ ] Q&A
- [ ] Forum
- [ ] Blog

### Fase 5: Advanced
- [ ] Database reale
- [ ] Admin panel
- [ ] Analytics
- [ ] Mobile app

## 📞 Supporto e Contributi

### Hai Trovato un Bug?
1. Apri un issue su GitHub
2. Descrivi il problema
3. Includi screenshot
4. Specifica browser/device

### Vuoi Contribuire?
1. Fork il repository
2. Crea un branch
3. Fai le modifiche
4. Apri una Pull Request

### Vuoi Aggiungere Università?
1. Leggi `COME_AGGIUNGERE_UNIVERSITA.md`
2. Usa il template fornito
3. Testa localmente
4. Apri una PR

## 🎓 Risorse per Imparare

### React
- [React Docs](https://react.dev)
- [React Tutorial](https://react.dev/learn)

### Node.js
- [Node.js Docs](https://nodejs.org/docs)
- [Express Guide](https://expressjs.com/en/guide/routing.html)

### Git & GitHub
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Guides](https://guides.github.com/)

### Deployment
- [Render Docs](https://render.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

## 🏆 Obiettivi del Progetto

### Breve Termine (3 mesi)
- 100+ università nel database
- 1000+ utenti mensili
- 5+ contributori

### Medio Termine (6 mesi)
- Sistema di autenticazione
- 500+ università
- 5000+ utenti mensili
- Partnership con università

### Lungo Termine (1 anno)
- 1000+ università
- 50000+ utenti mensili
- Mobile app
- Monetizzazione sostenibile

---

**Versione**: 1.0.0  
**Ultimo Aggiornamento**: Novembre 2024  
**Licenza**: MIT  
**Autore**: University Tracker Team
