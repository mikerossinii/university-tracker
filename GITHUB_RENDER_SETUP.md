# 🚀 Setup Completo: GitHub + Render

Questa guida ti porta da zero a un'app live in 30 minuti.

## 📋 Prerequisiti

Prima di iniziare, crea questi account (sono tutti gratuiti):

1. **GitHub**: [github.com/signup](https://github.com/signup)
2. **Render**: [render.com/register](https://render.com/register)

## Parte 1: Setup Locale (10 minuti)

### Step 1: Verifica Node.js

Apri il terminale e verifica di avere Node.js installato:

```bash
node --version
npm --version
```

Se non hai Node.js, scaricalo da [nodejs.org](https://nodejs.org/) (versione LTS).

### Step 2: Setup Progetto

```bash
# Rendi eseguibile lo script di setup
chmod +x setup.sh

# Esegui lo script
./setup.sh
```

Oppure manualmente:

```bash
npm run install-all
```

### Step 3: Test Locale

```bash
npm run dev
```

Apri http://localhost:5173 e verifica che l'app funzioni.

## Parte 2: Carica su GitHub (10 minuti)

### Step 1: Crea Repository su GitHub

1. Vai su [github.com/new](https://github.com/new)
2. Compila:
   - **Repository name**: `university-tracker`
   - **Description**: `App per tracciare e confrontare università`
   - **Visibility**: Public
   - **NON** selezionare "Add a README file"
3. Clicca "Create repository"

### Step 2: Configura Git Locale

```bash
# Inizializza git (se non già fatto)
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "Initial commit: University Tracker app"

# Rinomina branch in main
git branch -M main
```

### Step 3: Collega a GitHub

Sostituisci `TUO-USERNAME` con il tuo username GitHub:

```bash
git remote add origin https://github.com/TUO-USERNAME/university-tracker.git
```

### Step 4: Carica il Codice

```bash
git push -u origin main
```

Se ti chiede credenziali:
- **Username**: il tuo username GitHub
- **Password**: usa un Personal Access Token (vedi sotto)

#### Come creare un Personal Access Token:

1. Vai su GitHub → Settings (icona profilo in alto a destra)
2. Scorri in basso → Developer settings
3. Personal access tokens → Tokens (classic)
4. Generate new token (classic)
5. Compila:
   - **Note**: `University Tracker`
   - **Expiration**: 90 days (o più)
   - **Scopes**: seleziona solo `repo`
6. Generate token
7. **COPIA IL TOKEN** (non lo vedrai più!)
8. Usalo come password quando fai `git push`

### Step 5: Verifica su GitHub

Vai su `https://github.com/TUO-USERNAME/university-tracker` e verifica che tutti i file siano stati caricati.

## Parte 3: Deploy su Render (10 minuti)

### Step 1: Accedi a Render

1. Vai su [render.com](https://render.com)
2. Clicca "Get Started for Free"
3. Registrati con GitHub (consigliato)

### Step 2: Connetti GitHub

1. Autorizza Render ad accedere a GitHub
2. Seleziona "All repositories" o solo `university-tracker`

### Step 3: Crea Web Service

1. Dalla dashboard Render, clicca "New +"
2. Seleziona "Web Service"
3. Trova e clicca "Connect" su `university-tracker`

### Step 4: Configura il Servizio

Compila esattamente così:

```
Name: university-tracker
Region: Frankfurt (o la più vicina)
Branch: main
Root Directory: (lascia vuoto)
Environment: Node
Build Command: npm install && npm run install-all && npm run build
Start Command: npm start
Plan: Free
```

### Step 5: Variabili d'Ambiente

Scorri fino a "Environment Variables" e aggiungi:

```
Key: NODE_ENV
Value: production
```

Clicca "Add Environment Variable".

### Step 6: Deploy!

1. Clicca "Create Web Service"
2. Render inizierà il build (5-10 minuti)
3. Segui i log in tempo reale

Quando vedi "Your service is live 🎉", l'app è online!

### Step 7: Testa l'App

Render ti darà un URL tipo:
```
https://university-tracker-xxxx.onrender.com
```

Clicca e verifica che tutto funzioni!

## 🎉 Complimenti!

La tua app è live! Ora puoi:

### Condividere il Link
Invia l'URL a chiunque - l'app è pubblica!

### Aggiornare l'App

Ogni volta che vuoi fare modifiche:

```bash
# Fai le modifiche al codice

# Commit
git add .
git commit -m "Descrizione modifiche"

# Push
git push
```

Render farà automaticamente il deploy delle modifiche!

### Personalizzare il Dominio

Su Render:
1. Vai al tuo servizio
2. Settings → Custom Domain
3. Aggiungi il tuo dominio

## 🔧 Troubleshooting

### Problema: "git push" chiede sempre la password

**Soluzione**: Usa SSH invece di HTTPS

```bash
# Genera chiave SSH (se non ce l'hai)
ssh-keygen -t ed25519 -C "tua-email@example.com"

# Copia la chiave pubblica
cat ~/.ssh/id_ed25519.pub

# Vai su GitHub → Settings → SSH and GPG keys → New SSH key
# Incolla la chiave

# Cambia remote da HTTPS a SSH
git remote set-url origin git@github.com:TUO-USERNAME/university-tracker.git
```

### Problema: Build fallisce su Render

**Soluzione**: Controlla i log su Render. Errori comuni:

1. **Comando di build errato**: Verifica che sia esattamente:
   ```
   npm install && npm run install-all && npm run build
   ```

2. **Variabile NODE_ENV mancante**: Aggiungi `NODE_ENV=production`

3. **Dipendenze mancanti**: Verifica che tutti i `package.json` siano corretti

### Problema: App si carica ma è vuota

**Soluzione**: 

1. Apri la console del browser (F12)
2. Controlla errori
3. Verifica che l'API risponda: `https://tuo-url.onrender.com/api/universities`

### Problema: "Application Error" su Render

**Soluzione**:

1. Vai su Render → Logs
2. Cerca errori nel log
3. Verifica che il comando start sia `npm start`
4. Controlla che il file `server/index.js` esista

## 📊 Monitoraggio

Su Render puoi vedere:

- **Logs**: Tutti i log dell'app in tempo reale
- **Metrics**: CPU, memoria, richieste
- **Events**: Deploy, restart, errori

## 💰 Costi

Il piano Free di Render include:
- ✅ 750 ore/mese (più che sufficienti)
- ✅ Deploy automatici da GitHub
- ✅ SSL gratuito
- ⚠️ L'app si "addormenta" dopo 15 minuti di inattività
- ⚠️ Richiede 30-60 secondi per "svegliarsi"

Per evitare il "sonno", considera l'upgrade a $7/mese.

## 🎯 Checklist Finale

- [ ] App funziona in locale
- [ ] Codice su GitHub
- [ ] Repository pubblico
- [ ] Servizio creato su Render
- [ ] Build completato con successo
- [ ] App accessibile dall'URL di Render
- [ ] Filtri funzionano
- [ ] Dettagli università si aprono
- [ ] Responsive su mobile

## 🚀 Prossimi Passi

1. **Aggiungi più università**: Vedi `COME_AGGIUNGERE_UNIVERSITA.md`
2. **Personalizza i colori**: Modifica `client/src/index.css`
3. **Condividi con amici**: Invia il link!
4. **Contribuisci**: Apri issue e PR su GitHub

## 📞 Supporto

Problemi? 

1. Controlla questa guida
2. Leggi `DEPLOYMENT_GUIDE.md` per dettagli
3. Apri un issue su GitHub
4. Controlla la documentazione di Render: [render.com/docs](https://render.com/docs)

Buon deployment! 🎉
