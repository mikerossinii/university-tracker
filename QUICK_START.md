# ⚡ Quick Start Guide

Segui questi passi per avere l'app funzionante in 5 minuti!

## 1️⃣ Installazione (2 minuti)

```bash
# Installa tutte le dipendenze
npm run install-all
```

## 2️⃣ Configurazione (30 secondi)

```bash
# Crea il file .env
cp .env.example .env
```

Il file `.env` è già configurato con i valori di default. Non serve modificarlo per lo sviluppo locale.

## 3️⃣ Avvio (30 secondi)

```bash
# Avvia l'app in modalità sviluppo
npm run dev
```

Questo comando avvia:
- Frontend su http://localhost:5173
- Backend API su http://localhost:3000

## 4️⃣ Verifica (1 minuto)

Apri il browser su http://localhost:5173

Dovresti vedere:
- ✅ Header "University Tracker"
- ✅ Filtri per cercare università
- ✅ 2 card università (Bocconi e Polimi)
- ✅ Possibilità di cliccare su una card per vedere i dettagli

## 🎉 Fatto!

L'app è pronta. Ora puoi:

### Aggiungere università
Modifica `server/data/universities.js` e aggiungi nuove università.
Vedi `COME_AGGIUNGERE_UNIVERSITA.md` per la guida completa.

### Personalizzare i colori
Modifica `client/src/index.css` nella sezione `:root`.

### Fare il deploy
Segui la guida in `DEPLOYMENT_GUIDE.md`.

## 🔧 Comandi Utili

```bash
# Sviluppo (con hot reload)
npm run dev

# Build per produzione
npm run build

# Avvia in produzione
npm start

# Solo server backend
npm run server

# Solo frontend
npm run client
```

## 📱 Test Responsive

Per testare su mobile:

1. Apri Chrome DevTools (F12)
2. Clicca sull'icona del telefono (Toggle device toolbar)
3. Seleziona un dispositivo (es. iPhone 12)
4. Ricarica la pagina

L'app si adatterà automaticamente allo schermo!

## ❓ Problemi?

### Porta già in uso

Se vedi "Port 3000 is already in use":

```bash
# Su Mac/Linux
lsof -ti:3000 | xargs kill -9

# Su Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dipendenze mancanti

```bash
# Pulisci e reinstalla
rm -rf node_modules client/node_modules
npm run install-all
```

### L'app non si carica

1. Verifica che entrambi i server siano avviati (frontend e backend)
2. Controlla la console del browser (F12) per errori
3. Verifica che le porte 3000 e 5173 siano libere

## 📚 Prossimi Passi

1. ✅ Hai l'app funzionante in locale
2. 📝 Aggiungi più università (vedi `COME_AGGIUNGERE_UNIVERSITA.md`)
3. 🎨 Personalizza l'aspetto
4. 🚀 Fai il deploy su Render (vedi `DEPLOYMENT_GUIDE.md`)
5. 🌐 Condividi il link con gli amici!

Buon lavoro! 🎓
