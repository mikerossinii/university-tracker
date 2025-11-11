# 🚀 FAI QUESTO ORA - Deploy in 10 Minuti

## ✅ Fatto da Me
- [x] Git inizializzato
- [x] Tutti i file committati
- [x] Branch main creato
- [x] Progetto pronto per GitHub

## 👉 FAI TU (10 minuti)

### STEP 1: Crea Repository su GitHub (3 minuti)

1. Vai su **https://github.com/new**
2. Compila:
   - **Repository name**: `university-tracker`
   - **Description**: `App per confrontare università`
   - **Public** ✓
   - **NON** selezionare "Add a README"
3. Clicca **"Create repository"**

### STEP 2: Collega e Carica (2 minuti)

GitHub ti mostrerà dei comandi. **IGNORA QUELLI** e usa questi:

```bash
# Copia e incolla nel terminale (uno alla volta):

git remote add origin https://github.com/TUO-USERNAME/university-tracker.git

git push -u origin main
```

**IMPORTANTE**: Sostituisci `TUO-USERNAME` con il tuo username GitHub!

Se ti chiede username/password:
- **Username**: il tuo username GitHub
- **Password**: usa un **Personal Access Token** (vedi sotto)

#### Come creare un Token:
1. GitHub → Settings (icona profilo) → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Nome: `University Tracker`
5. Seleziona: `repo` (tutte le checkbox sotto repo)
6. Generate token
7. **COPIA IL TOKEN** (non lo vedrai più!)
8. Usalo come password

### STEP 3: Deploy su Render (5 minuti)

1. Vai su **https://render.com** e registrati (usa GitHub per velocità)

2. Clicca **"New +"** → **"Web Service"**

3. Clicca **"Connect"** sul repository `university-tracker`
   - Se non lo vedi: "Configure account" → dai accesso

4. Compila ESATTAMENTE così:
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

5. Aggiungi variabile ambiente:
   - Clicca "Add Environment Variable"
   - Key: `NODE_ENV`
   - Value: `production`

6. Clicca **"Create Web Service"**

7. **ASPETTA 5-10 MINUTI** mentre Render fa il build

8. Quando vedi "Your service is live 🎉", clicca sull'URL!

## 🎉 FATTO!

La tua app è online! Render ti darà un URL tipo:
```
https://university-tracker-xxxx.onrender.com
```

## 🔄 Aggiornamenti Futuri

Ogni volta che vuoi aggiornare l'app:

```bash
git add .
git commit -m "Descrizione modifiche"
git push
```

Render farà automaticamente il deploy!

## ❓ Problemi?

### "git push" chiede sempre password
Usa SSH invece di HTTPS (vedi GITHUB_RENDER_SETUP.md)

### Build fallisce su Render
Controlla i log su Render. Verifica che:
- Build command sia corretto
- NODE_ENV sia impostato
- Branch sia "main"

### App non si carica
- Aspetta 30-60 secondi (primo caricamento)
- Controlla logs su Render
- Verifica che l'URL sia corretto

## 📞 Serve Aiuto?

Leggi le guide complete:
- **GITHUB_RENDER_SETUP.md** - Guida dettagliata
- **DEPLOYMENT_GUIDE.md** - Troubleshooting
- **COMANDI_UTILI.md** - Tutti i comandi

---

**Tempo totale**: 10 minuti  
**Costo**: $0  
**Difficoltà**: Facile

**Vai! 🚀**
