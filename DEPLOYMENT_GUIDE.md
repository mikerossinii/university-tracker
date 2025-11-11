# 📘 Guida Completa al Deployment

## Prerequisiti

Prima di iniziare, assicurati di avere:
- Un account GitHub (gratuito)
- Un account Render (gratuito)
- Git installato sul tuo computer
- Node.js installato (v16+)

## Passo 1: Preparare il Progetto Localmente

### 1.1 Testare l'app in locale

```bash
# Installa tutte le dipendenze
npm run install-all

# Avvia l'app in modalità sviluppo
npm run dev
```

Apri il browser su `http://localhost:5173` e verifica che tutto funzioni.

### 1.2 Testare il build di produzione

```bash
# Crea il build di produzione
npm run build

# Avvia il server di produzione
npm start
```

Apri `http://localhost:3000` e verifica che l'app funzioni correttamente.

## Passo 2: Creare il Repository su GitHub

### 2.1 Crea un nuovo repository su GitHub

1. Vai su [github.com](https://github.com)
2. Clicca sul pulsante "+" in alto a destra
3. Seleziona "New repository"
4. Compila i campi:
   - **Repository name**: `university-tracker`
   - **Description**: "App per tracciare e confrontare università"
   - **Visibility**: Public (o Private se preferisci)
   - **NON** selezionare "Initialize this repository with a README"
5. Clicca su "Create repository"

### 2.2 Carica il codice su GitHub

Nella cartella del progetto, esegui:

```bash
# Inizializza git (se non l'hai già fatto)
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Initial commit: University Tracker app"

# Aggiungi il remote (sostituisci TUO-USERNAME con il tuo username GitHub)
git remote add origin https://github.com/TUO-USERNAME/university-tracker.git

# Rinomina il branch in main
git branch -M main

# Carica il codice su GitHub
git push -u origin main
```

Se ti chiede username e password:
- **Username**: il tuo username GitHub
- **Password**: usa un Personal Access Token (non la password del tuo account)

#### Come creare un Personal Access Token:
1. Vai su GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clicca "Generate new token (classic)"
3. Dai un nome (es. "University Tracker")
4. Seleziona lo scope "repo"
5. Clicca "Generate token"
6. Copia il token e usalo come password

## Passo 3: Deploy su Render

### 3.1 Crea un account su Render

1. Vai su [render.com](https://render.com)
2. Clicca su "Get Started for Free"
3. Registrati con GitHub (consigliato) o email

### 3.2 Connetti GitHub a Render

1. Dopo il login, vai su "Account Settings"
2. Nella sezione "Connected Accounts", connetti GitHub
3. Autorizza Render ad accedere ai tuoi repository

### 3.3 Crea un nuovo Web Service

1. Dalla dashboard di Render, clicca su "New +"
2. Seleziona "Web Service"
3. Clicca su "Connect" accanto al repository `university-tracker`
   - Se non lo vedi, clicca su "Configure account" e dai accesso al repository

### 3.4 Configura il Web Service

Compila i campi come segue:

- **Name**: `university-tracker` (o un nome a tua scelta)
- **Region**: Scegli la regione più vicina (es. Frankfurt per l'Europa)
- **Branch**: `main`
- **Root Directory**: lascia vuoto
- **Environment**: `Node`
- **Build Command**: 
  ```
  npm install && npm run install-all && npm run build
  ```
- **Start Command**: 
  ```
  npm start
  ```
- **Plan**: Seleziona "Free"

### 3.5 Aggiungi le variabili d'ambiente

Scorri fino alla sezione "Environment Variables" e aggiungi:

- **Key**: `NODE_ENV`
- **Value**: `production`

Clicca sul pulsante "Add Environment Variable" per confermare.

### 3.6 Deploy!

1. Clicca su "Create Web Service"
2. Render inizierà automaticamente il build e il deploy
3. Puoi seguire i log in tempo reale

Il processo richiederà 5-10 minuti. Quando vedi "Your service is live 🎉", l'app è online!

### 3.7 Accedi alla tua app

Render ti fornirà un URL tipo:
```
https://university-tracker-xxxx.onrender.com
```

Clicca sul link per vedere la tua app live!

## Passo 4: Aggiornamenti Futuri

Ogni volta che vuoi aggiornare l'app:

```bash
# Fai le tue modifiche al codice

# Aggiungi i file modificati
git add .

# Crea un commit
git commit -m "Descrizione delle modifiche"

# Carica su GitHub
git push
```

Render rileverà automaticamente le modifiche e farà un nuovo deploy!

## 🎯 Checklist Finale

- [ ] L'app funziona in locale (`npm run dev`)
- [ ] Il build di produzione funziona (`npm run build && npm start`)
- [ ] Il codice è su GitHub
- [ ] Il servizio è creato su Render
- [ ] Le variabili d'ambiente sono configurate
- [ ] Il deploy è completato con successo
- [ ] L'app è accessibile dall'URL di Render

## 🔧 Troubleshooting

### Problema: "Build failed"

**Soluzione**: Controlla i log su Render. Spesso è un problema di dipendenze. Assicurati che:
- Il file `package.json` sia corretto
- Tutte le dipendenze siano elencate
- Il comando di build sia corretto

### Problema: "Application Error" quando accedo all'URL

**Soluzione**: 
- Controlla i log su Render (tab "Logs")
- Verifica che la variabile `NODE_ENV` sia impostata a `production`
- Assicurati che il comando start sia `npm start`

### Problema: L'app si carica ma non mostra dati

**Soluzione**:
- Verifica che il file `server/data/universities.js` esista
- Controlla i log del browser (F12 → Console)
- Verifica che le API rispondano: `https://tuo-url.onrender.com/api/universities`

### Problema: Il servizio si "addormenta" dopo un po'

**Soluzione**: Questo è normale con il piano Free di Render. Il servizio si riattiva automaticamente quando qualcuno visita l'URL (può richiedere 30-60 secondi). Per evitarlo, considera l'upgrade a un piano a pagamento.

## 🚀 Ottimizzazioni Opzionali

### Dominio Personalizzato

1. Su Render, vai al tuo servizio
2. Clicca su "Settings"
3. Nella sezione "Custom Domain", aggiungi il tuo dominio
4. Segui le istruzioni per configurare i DNS

### Database Reale

Per usare un database invece di dati statici:

1. Su Render, crea un nuovo "PostgreSQL" database
2. Connetti il database al tuo web service
3. Modifica il codice per usare il database

### Monitoraggio

Render fornisce:
- Logs in tempo reale
- Metriche di utilizzo
- Notifiche via email per deploy falliti

## 📞 Supporto

Se hai problemi:
1. Controlla i log su Render
2. Verifica la documentazione di Render: [render.com/docs](https://render.com/docs)
3. Apri un issue su GitHub

Buon deployment! 🎉
