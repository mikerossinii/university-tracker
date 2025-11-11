# 👋 Benvenuto in University Tracker!

## 🎉 Hai appena creato un'app fantastica!

University Tracker è un'applicazione web moderna per confrontare università, simile a Bristol Tracker ma per l'istruzione universitaria.

## ⚡ Inizia Subito (3 Passi)

### 1️⃣ Installa (2 minuti)
```bash
./setup.sh
```
oppure
```bash
npm run install-all
```

### 2️⃣ Avvia (30 secondi)
```bash
npm run dev
```

### 3️⃣ Apri il Browser
Vai su: **http://localhost:5173**

🎊 **Fatto!** L'app è in esecuzione!

## 📚 Cosa Fare Dopo?

### Opzione A: Voglio Solo Testare
✅ Hai già finito! Esplora l'app nel browser.

### Opzione B: Voglio Metterla Online
📖 Leggi: **[GITHUB_RENDER_SETUP.md](GITHUB_RENDER_SETUP.md)**
⏱️ Tempo: 30 minuti
🎯 Risultato: App live e accessibile a tutti

### Opzione C: Voglio Aggiungere Università
📖 Leggi: **[COME_AGGIUNGERE_UNIVERSITA.md](COME_AGGIUNGERE_UNIVERSITA.md)**
⏱️ Tempo: 10 minuti per università
🎯 Risultato: Database più ricco

### Opzione D: Voglio Capire Come Funziona
📖 Leggi: **[PANORAMICA_PROGETTO.md](PANORAMICA_PROGETTO.md)**
⏱️ Tempo: 20 minuti
🎯 Risultato: Comprensione completa dell'architettura

## 🗺️ Mappa della Documentazione

```
START_HERE.md (sei qui!) 👈
    │
    ├─→ QUICK_START.md (guida rapida)
    │
    ├─→ GITHUB_RENDER_SETUP.md (deploy online)
    │
    ├─→ COME_AGGIUNGERE_UNIVERSITA.md (aggiungere contenuti)
    │
    ├─→ PANORAMICA_PROGETTO.md (architettura)
    │
    └─→ INDICE_DOCUMENTAZIONE.md (trova tutto)
```

## 🎯 Obiettivi Comuni

### "Voglio solo vedere come funziona"
```bash
npm run dev
# Apri http://localhost:5173
# Esplora l'app!
```

### "Voglio condividerla con amici"
1. Leggi [GITHUB_RENDER_SETUP.md](GITHUB_RENDER_SETUP.md)
2. Segui i passi (30 min)
3. Condividi il link!

### "Voglio personalizzarla"
1. Colori: modifica `client/src/index.css`
2. Università: modifica `server/data/universities.js`
3. Layout: modifica `client/src/App.css`

### "Voglio contribuire"
1. Leggi [FEATURES.md](FEATURES.md)
2. Scegli una feature
3. Apri una Pull Request!

## 🚀 Quick Commands

```bash
# Sviluppo
npm run dev              # Avvia app (frontend + backend)

# Build
npm run build            # Build per produzione
npm start                # Avvia in produzione

# Git
git add .                # Aggiungi modifiche
git commit -m "..."      # Commit
git push                 # Carica su GitHub

# Aiuto
cat COMANDI_UTILI.md     # Tutti i comandi disponibili
```

## 📱 Cosa Puoi Fare con Quest'App

### ✅ Funzionalità Attuali
- 🔍 Cerca università per tipo (triennale/magistrale)
- ⭐ Filtra per rating, lingua, città
- 📊 Vedi statistiche di carriera
- 💰 Confronta costi e borse di studio
- 🌍 Scopri opportunità internazionali
- 📱 Usa su desktop, tablet e mobile

### 🚧 Prossime Funzionalità
- 👤 Account utente
- ❤️ Salva università preferite
- ⚖️ Confronta università side-by-side
- 💬 Recensioni studenti
- 🔔 Notifiche scadenze
- 📱 App mobile nativa

Vedi [FEATURES.md](FEATURES.md) per la roadmap completa!

## 🎨 Personalizzazione Rapida

### Cambia i Colori
Apri `client/src/index.css` e modifica:
```css
:root {
  --primary: #2563eb;      /* Colore principale */
  --secondary: #10b981;    /* Colore secondario */
  --background: #f8fafc;   /* Sfondo */
}
```

### Aggiungi un'Università
Apri `server/data/universities.js` e aggiungi:
```javascript
{
  id: "tua-universita",
  name: "Nome Università",
  degree: "magistrale",
  program: "Nome Corso",
  // ... altri campi
}
```

Vedi [COME_AGGIUNGERE_UNIVERSITA.md](COME_AGGIUNGERE_UNIVERSITA.md) per il template completo!

## 🆘 Problemi?

### L'app non si avvia
```bash
# Reinstalla dipendenze
rm -rf node_modules client/node_modules
npm run install-all
```

### Porta già in uso
```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

### Altri problemi
Leggi [COMANDI_UTILI.md](COMANDI_UTILI.md) sezione Troubleshooting

## 📊 Struttura Progetto (Semplificata)

```
university-tracker/
├── 📄 Documentazione (leggi questi!)
│   ├── START_HERE.md ← Sei qui
│   ├── QUICK_START.md
│   ├── GITHUB_RENDER_SETUP.md
│   └── ...altri file .md
│
├── 🖥️ server/ (Backend)
│   ├── index.js (Server Express)
│   └── data/universities.js (Database)
│
└── 🎨 client/ (Frontend)
    └── src/
        ├── App.jsx (App principale)
        ├── pages/ (Pagine)
        └── components/ (Componenti)
```

## 🎓 Impara Mentre Sviluppi

### Nuovo a React?
- L'app usa React per il frontend
- Guarda `client/src/App.jsx` per iniziare
- Documentazione: [react.dev](https://react.dev)

### Nuovo a Node.js?
- L'app usa Express per il backend
- Guarda `server/index.js` per iniziare
- Documentazione: [expressjs.com](https://expressjs.com)

### Nuovo a Git?
- Leggi [GITHUB_RENDER_SETUP.md](GITHUB_RENDER_SETUP.md)
- Include guida Git passo-passo
- Documentazione: [git-scm.com](https://git-scm.com)

## 🌟 Prossimi Passi Consigliati

### Per Principianti
1. ✅ Avvia l'app (`npm run dev`)
2. 📖 Leggi [QUICK_START.md](QUICK_START.md)
3. ➕ Aggiungi 2-3 università
4. 🚀 Fai il deploy su Render

### Per Developer
1. ✅ Avvia l'app
2. 📖 Leggi [PANORAMICA_PROGETTO.md](PANORAMICA_PROGETTO.md)
3. 🔍 Esplora il codice
4. 🛠️ Implementa una feature da [FEATURES.md](FEATURES.md)

### Per Tutti
1. ⭐ Metti una stella su GitHub
2. 🐛 Segnala bug se ne trovi
3. 💡 Suggerisci nuove feature
4. 🤝 Contribuisci al progetto

## 💡 Tips Utili

- 💾 **Salva spesso**: `git commit` frequentemente
- 🧪 **Testa sempre**: Verifica le modifiche prima del push
- 📱 **Pensa mobile**: Testa su dispositivi diversi
- 📚 **Leggi i docs**: Abbiamo guide per tutto!
- 🤝 **Chiedi aiuto**: Apri issue su GitHub

## 🎯 Obiettivo Finale

Creare la **migliore risorsa online** per confrontare università!

Con il tuo aiuto possiamo:
- 📊 Aggiungere 100+ università
- 👥 Aiutare 1000+ studenti
- 🌍 Espanderci internazionalmente
- 🚀 Diventare il punto di riferimento

## 🎉 Sei Pronto!

Hai tutto quello che ti serve per iniziare.

**Prossimo passo**: Scegli un'opzione qui sopra e inizia! 🚀

---

### 📞 Hai Domande?

- 📖 Leggi [INDICE_DOCUMENTAZIONE.md](INDICE_DOCUMENTAZIONE.md)
- 🔍 Cerca su GitHub Issues
- 💬 Apri un nuovo issue
- 📧 Contatta il team

### 🤝 Vuoi Contribuire?

Ogni contributo è benvenuto:
- 📝 Migliorare la documentazione
- 🐛 Segnalare bug
- ✨ Proporre feature
- 💻 Scrivere codice
- 🎓 Aggiungere università

**Grazie per usare University Tracker!** 🎓

---

**Versione**: 1.0.0  
**Creato**: Novembre 2024  
**Licenza**: MIT

**Buon lavoro!** 🚀
