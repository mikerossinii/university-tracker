# 🎓 University Tracker

Un'applicazione web moderna per confrontare e tracciare università italiane e internazionali, sia triennali che magistrali.

> 📱 Responsive | 🚀 Deploy Ready | 📚 Documentazione Completa | ⚡ Setup in 5 minuti

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)

---

## 🚀 Quick Start

```bash
# 1. Setup (2 minuti)
./setup.sh
# oppure: npm run install-all

# 2. Avvia (30 secondi)
npm run dev

# 3. Apri il browser
# http://localhost:5173
```

**🎉 Fatto!** L'app è in esecuzione.

---

## ✨ Caratteristiche

- **Filtri avanzati**: Filtra per tipo di laurea, rating, lingua, città e altro
- **Schede dettagliate**: Informazioni complete su ogni università
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Dati completi**: Include costi, carriera, esperienze internazionali e vita in città

## 🚀 Installazione Locale

### Prerequisiti
- Node.js (v16 o superiore)
- npm o yarn

### Setup

1. Clona il repository:
```bash
git clone https://github.com/TUO-USERNAME/university-tracker.git
cd university-tracker
```

2. Installa le dipendenze:
```bash
npm run install-all
```

3. Crea un file `.env` nella root:
```bash
cp .env.example .env
```

4. Avvia il server di sviluppo:
```bash
npm run dev
```

L'app sarà disponibile su:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 📦 Build per Produzione

```bash
npm run build
npm start
```

## 🌐 Deploy su Render

### Metodo 1: Deploy Automatico da GitHub

1. **Crea un repository su GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/university-tracker.git
   git push -u origin main
   ```

2. **Vai su [Render](https://render.com)** e crea un account

3. **Crea un nuovo Web Service**:
   - Clicca su "New +" → "Web Service"
   - Connetti il tuo repository GitHub
   - Seleziona il repository `university-tracker`

4. **Configura il servizio**:
   - **Name**: university-tracker
   - **Environment**: Node
   - **Build Command**: `npm install && npm run install-all && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. **Aggiungi variabili d'ambiente**:
   - `NODE_ENV` = `production`

6. Clicca su "Create Web Service"

### Metodo 2: Deploy con render.yaml

Il file `render.yaml` è già configurato. Render lo rileverà automaticamente e configurerà tutto per te.

## 📱 Utilizzo

### Pagina Principale
- Visualizza tutte le università disponibili
- Usa i filtri per trovare l'università perfetta
- Clicca su una card per vedere i dettagli

### Pagina Dettaglio
- Informazioni complete sul corso
- Scadenze e requisiti di ammissione
- Costi e borse di studio
- Statistiche di carriera
- Opportunità internazionali
- Informazioni sulla città

## 🗂️ Struttura del Progetto

```
university-tracker/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componenti riutilizzabili
│   │   ├── pages/         # Pagine dell'app
│   │   ├── App.jsx        # Componente principale
│   │   └── main.jsx       # Entry point
│   └── package.json
├── server/                # Backend Express
│   ├── data/             # Dati delle università
│   └── index.js          # Server API
├── package.json          # Dipendenze root
└── render.yaml           # Configurazione Render

```

## 🔧 API Endpoints

- `GET /api/universities` - Ottieni tutte le università
- `GET /api/universities/:id` - Ottieni dettagli di un'università specifica

## 📊 Aggiungere Nuove Università

Modifica il file `server/data/universities.js` e aggiungi nuovi oggetti seguendo la struttura esistente:

```javascript
{
  id: "unique-id",
  name: "Nome Università",
  degree: "triennale" | "magistrale",
  program: "Nome del Corso",
  // ... altri campi
}
```

## 🎨 Personalizzazione

### Colori
Modifica le variabili CSS in `client/src/index.css`:

```css
:root {
  --primary: #2563eb;
  --secondary: #10b981;
  /* ... */
}
```

## 🤝 Contribuire

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 Licenza

MIT License - vedi il file LICENSE per i dettagli

## 🐛 Segnalazione Bug

Apri un issue su GitHub con:
- Descrizione del problema
- Passi per riprodurlo
- Comportamento atteso vs attuale
- Screenshot (se applicabile)

## 💡 Roadmap

- [ ] Aggiungere più università
- [ ] Sistema di autenticazione
- [ ] Salvare università preferite
- [ ] Confronto side-by-side
- [ ] Filtri avanzati (costo, placement rate, etc.)
- [ ] Recensioni degli studenti
- [ ] Integrazione con database reale
- [ ] Export PDF dei dettagli
- [ ] Notifiche per scadenze

## 📧 Contatti

Per domande o suggerimenti, apri un issue su GitHub.

---

## 🌟 Supporta il Progetto

Se questo progetto ti è stato utile:

- ⭐ Metti una stella su GitHub
- 🐛 Segnala bug e problemi
- 💡 Suggerisci nuove funzionalità
- 🤝 Contribuisci con codice
- 📢 Condividi con altri

---

## 📊 Statistiche Progetto

- **File Documentazione**: 13
- **Componenti React**: 4
- **API Endpoints**: 2
- **Università Esempio**: 2
- **Tempo Setup**: 5 minuti
- **Tempo Deploy**: 30 minuti

---

**Made with ❤️ for students worldwide** 🌍
