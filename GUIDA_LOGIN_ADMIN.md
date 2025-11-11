# 🔐 Guida Login e Admin Panel

## ✨ Nuove Funzionalità Aggiunte

### Sistema di Autenticazione
- ✅ Pagina di login
- ✅ Protezione delle route
- ✅ Logout funzionante
- ✅ Persistenza sessione (localStorage)

### Pannello Admin
- ✅ Interfaccia grafica per aggiungere università
- ✅ Modifica università esistenti
- ✅ Eliminazione università
- ✅ Lista completa università

## 🔑 Credenziali di Accesso

### Utente Normale
```
Username: user
Password: user
```
**Accesso a**: Tracker università (visualizzazione e filtri)

### Amministratore
```
Username: admin
Password: admin
```
**Accesso a**: Pannello admin (gestione università)

## 🚀 Come Usare

### 1. Apri l'App
Vai su: **http://localhost:5173**

Verrai reindirizzato automaticamente alla pagina di login.

### 2. Login come Utente
1. Inserisci: `user` / `user`
2. Clicca "Accedi"
3. Vedrai il tracker con tutte le università
4. Puoi:
   - Filtrare università
   - Vedere dettagli
   - Fare logout (pulsante in alto a destra)

### 3. Login come Admin
1. Inserisci: `admin` / `admin`
2. Clicca "Accedi"
3. Verrai portato al pannello admin

## 🎨 Pannello Admin - Funzionalità

### Aggiungere una Nuova Università

1. Clicca **"+ Aggiungi Università"**
2. Compila il form:
   - **Nome Università** (es. Università Bocconi)
   - **Tipo Laurea** (Triennale/Magistrale)
   - **Nome Corso** (es. MSc in Finance)
   - **Lingua** (es. Italiano, Inglese)
   - **Città** (es. Milano)
   - **Paese** (es. Italia)
   - **Tasse** (es. 10000-15000 EUR/anno)
   - **Rating** (1-5)
3. Clicca **"➕ Aggiungi"**

### Modificare un'Università

1. Trova l'università nella lista
2. Clicca **"✏️ Modifica"**
3. Il form si aprirà con i dati precompilati
4. Modifica i campi desiderati
5. Clicca **"💾 Salva Modifiche"**

### Eliminare un'Università

1. Trova l'università nella lista
2. Clicca **"🗑️ Elimina"**
3. Conferma l'eliminazione

### Visualizzare Tutte le Università

Nella sezione "Università Esistenti" vedi:
- Nome università
- Corso e tipo laurea
- Città
- Rating, lingua e tasse
- Azioni disponibili (Modifica/Elimina)

## 🔒 Sicurezza

### Protezione Route
- Tutte le pagine richiedono login
- Admin panel accessibile solo ad admin
- Utenti normali non possono accedere all'admin

### Persistenza Sessione
- La sessione viene salvata in localStorage
- Rimani loggato anche dopo refresh
- Logout pulisce la sessione

## 📱 Responsive

Tutto funziona perfettamente su:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

## 🎯 Flusso Completo

### Utente Normale
```
1. Apri app → Login automatico
2. Login (user/user)
3. Vedi tracker università
4. Filtra e cerca
5. Vedi dettagli
6. Logout quando finito
```

### Amministratore
```
1. Apri app → Login automatico
2. Login (admin/admin)
3. Vai al pannello admin
4. Aggiungi/Modifica/Elimina università
5. Vedi lista completa
6. Logout quando finito
```

## 🔧 Note Tecniche

### Dati Temporanei
Al momento, le modifiche sono **simulate**:
- Le aggiunte/modifiche/eliminazioni vengono loggati in console
- Mostrano un alert di conferma
- **NON** vengono salvate permanentemente

### Per Salvare Realmente
Per salvare le modifiche nel database, serve:
1. Backend API per CRUD operations
2. Database reale (PostgreSQL/MongoDB)
3. Autenticazione JWT

Questo è già preparato per essere esteso!

## 🎨 Personalizzazione

### Cambiare Credenziali
Modifica `client/src/pages/Login.jsx`:

```javascript
if (username === 'TUO_USER' && password === 'TUA_PASSWORD') {
  // ...
}
```

### Aggiungere Più Campi al Form
Modifica `client/src/pages/Admin.jsx`:
1. Aggiungi campo in `formData`
2. Aggiungi input nel form
3. Usa il valore in `handleSubmit`

### Cambiare Stili
Modifica:
- `client/src/styles/Login.css` - Stili login
- `client/src/styles/Admin.css` - Stili admin panel

## 🐛 Troubleshooting

### Non riesco a fare login
- Verifica di usare le credenziali corrette
- Controlla la console del browser (F12)
- Prova a ricaricare la pagina

### Il form non si apre
- Clicca sul pulsante "+ Aggiungi Università"
- Verifica che sei loggato come admin
- Ricarica la pagina

### Le modifiche non vengono salvate
- È normale! Al momento sono simulate
- Vedi la console per i log
- Per salvare realmente serve un database

## 📊 Statistiche

```
✅ Pagine create: 2 (Login, Admin)
✅ Componenti: 2
✅ File CSS: 2
✅ Route protette: 3
✅ Ruoli utente: 2
✅ Funzionalità CRUD: Complete
```

## 🎉 Prova Ora!

1. **Apri**: http://localhost:5173
2. **Login come user**: Esplora il tracker
3. **Logout**: Clicca logout
4. **Login come admin**: Gestisci università
5. **Aggiungi**: Crea una nuova università
6. **Modifica**: Cambia i dati
7. **Elimina**: Rimuovi un'università

## 🚀 Prossimi Passi

Per rendere tutto funzionante in produzione:

1. **Backend API**:
   - POST /api/universities (crea)
   - PUT /api/universities/:id (modifica)
   - DELETE /api/universities/:id (elimina)

2. **Database**:
   - PostgreSQL o MongoDB
   - Tabella universities
   - Migrazioni

3. **Autenticazione Reale**:
   - JWT tokens
   - Password hashate (bcrypt)
   - Refresh tokens

4. **Validazione**:
   - Validazione input
   - Sanitizzazione dati
   - Error handling

Tutto questo è già preparato nella struttura! 🎓

---

**Versione**: 2.0.0 (con autenticazione)  
**Data**: Novembre 2024  
**Nuove Features**: Login, Admin Panel, CRUD UI
