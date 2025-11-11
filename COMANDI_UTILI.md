# 🛠️ Comandi Utili

Riferimento rapido per tutti i comandi del progetto.

## 📦 Installazione

```bash
# Setup completo automatico (Mac/Linux)
./setup.sh

# Setup manuale
npm run install-all

# Installa solo dipendenze root
npm install

# Installa solo dipendenze client
cd client && npm install
```

## 🚀 Sviluppo

```bash
# Avvia tutto (frontend + backend)
npm run dev

# Solo backend (porta 3000)
npm run server

# Solo frontend (porta 5173)
npm run client
```

## 🏗️ Build e Produzione

```bash
# Build per produzione
npm run build

# Avvia in modalità produzione
npm start

# Test build locale
npm run build && npm start
```

## 📝 Git e GitHub

```bash
# Inizializza repository
git init

# Aggiungi tutti i file
git add .

# Commit
git commit -m "Messaggio del commit"

# Collega a GitHub (sostituisci TUO-USERNAME)
git remote add origin https://github.com/TUO-USERNAME/university-tracker.git

# Rinomina branch in main
git branch -M main

# Push iniziale
git push -u origin main

# Push successivi
git push

# Verifica stato
git status

# Vedi log commit
git log --oneline

# Crea nuovo branch
git checkout -b nome-branch

# Torna a main
git checkout main
```

## 🔍 Debug e Test

```bash
# Verifica versioni
node --version
npm --version

# Pulisci cache npm
npm cache clean --force

# Reinstalla tutto da zero
rm -rf node_modules client/node_modules
npm run install-all

# Verifica porte in uso (Mac/Linux)
lsof -ti:3000
lsof -ti:5173

# Termina processo su porta (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Verifica porte in uso (Windows)
netstat -ano | findstr :3000

# Termina processo (Windows)
taskkill /PID <PID> /F
```

## 📊 Informazioni Progetto

```bash
# Vedi dipendenze installate
npm list --depth=0

# Vedi dipendenze client
cd client && npm list --depth=0

# Verifica dipendenze obsolete
npm outdated

# Aggiorna dipendenze
npm update
```

## 🌐 Test API

```bash
# Test API locale
curl http://localhost:3000/api/universities

# Test API specifica università
curl http://localhost:3000/api/universities/bocconi-msc-finance

# Test API produzione (sostituisci URL)
curl https://tuo-app.onrender.com/api/universities
```

## 📱 Test Responsive

### Chrome DevTools
1. Apri l'app nel browser
2. Premi `F12` o `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
3. Clicca icona telefono o premi `Cmd+Shift+M` (Mac) / `Ctrl+Shift+M` (Windows)
4. Seleziona dispositivo dal menu

### Dispositivi Comuni da Testare
- iPhone 12/13/14 (390x844)
- iPhone SE (375x667)
- iPad (768x1024)
- Desktop (1920x1080)

## 🔐 Sicurezza

```bash
# Verifica vulnerabilità
npm audit

# Fix automatico vulnerabilità
npm audit fix

# Verifica file .env
cat .env

# NON committare .env
git status  # .env dovrebbe essere in .gitignore
```

## 📦 Gestione Dipendenze

```bash
# Aggiungi dipendenza
npm install nome-pacchetto

# Aggiungi dipendenza dev
npm install --save-dev nome-pacchetto

# Rimuovi dipendenza
npm uninstall nome-pacchetto

# Aggiungi dipendenza client
cd client && npm install nome-pacchetto
```

## 🎨 Personalizzazione

```bash
# Modifica colori
nano client/src/index.css

# Aggiungi università
nano server/data/universities.js

# Modifica layout
nano client/src/App.css
```

## 🚀 Deploy

```bash
# Verifica che tutto sia committato
git status

# Push per deploy automatico
git push

# Verifica deploy su Render
# Vai su render.com → Dashboard → Logs
```

## 🧹 Pulizia

```bash
# Rimuovi build
rm -rf client/dist

# Rimuovi node_modules
rm -rf node_modules client/node_modules

# Rimuovi tutto e reinstalla
rm -rf node_modules client/node_modules client/dist
npm run install-all
```

## 📋 Checklist Pre-Deploy

```bash
# 1. Test locale
npm run dev

# 2. Test build
npm run build
npm start

# 3. Verifica .gitignore
cat .gitignore

# 4. Commit tutto
git add .
git commit -m "Ready for deploy"

# 5. Push
git push

# 6. Verifica su Render
# Controlla logs e URL
```

## 🆘 Risoluzione Problemi Comuni

### Problema: "Port already in use"
```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9
lsof -ti:5173 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Problema: "Module not found"
```bash
rm -rf node_modules client/node_modules
npm run install-all
```

### Problema: "Permission denied"
```bash
# Mac/Linux
chmod +x setup.sh
sudo chown -R $USER node_modules
```

### Problema: Build fallisce
```bash
# Verifica Node.js version
node --version  # Deve essere v16+

# Pulisci e rebuilda
rm -rf client/dist
npm run build
```

## 📚 File Importanti

```bash
# Configurazione
package.json              # Dipendenze root
client/package.json       # Dipendenze frontend
.env                      # Variabili ambiente (locale)
.env.example             # Template variabili
render.yaml              # Config Render

# Codice
server/index.js          # Server Express
server/data/universities.js  # Database università
client/src/App.jsx       # App React principale
client/src/index.css     # Stili globali

# Documentazione
README.md                # Documentazione principale
QUICK_START.md          # Guida rapida
DEPLOYMENT_GUIDE.md     # Guida deploy
GITHUB_RENDER_SETUP.md  # Setup completo
```

## 🎯 Workflow Tipico

```bash
# 1. Mattina: Pull ultime modifiche
git pull

# 2. Sviluppo: Avvia dev server
npm run dev

# 3. Modifica: Fai le tue modifiche
# ... lavora sul codice ...

# 4. Test: Verifica che funzioni
# Testa nell'app

# 5. Commit: Salva modifiche
git add .
git commit -m "Descrizione modifiche"

# 6. Push: Carica su GitHub
git push

# 7. Deploy: Render fa deploy automatico
# Verifica su render.com
```

## 💡 Tips

- Usa `npm run dev` per sviluppo (hot reload)
- Testa sempre con `npm run build && npm start` prima del deploy
- Fai commit frequenti con messaggi chiari
- Testa su mobile prima del deploy
- Controlla i logs su Render dopo ogni deploy
- Mantieni aggiornato il file `universities.js`

## 🔗 Link Utili

- **Repository**: https://github.com/TUO-USERNAME/university-tracker
- **App Live**: https://tuo-app.onrender.com
- **Render Dashboard**: https://dashboard.render.com
- **Node.js Docs**: https://nodejs.org/docs
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev

---

Salva questo file nei preferiti per riferimento rapido! 📌
