# 🎨 University Tracker - Frontend

Frontend React dell'applicazione University Tracker.

## 🛠️ Tecnologie

- **React 18**: Libreria UI
- **React Router**: Navigazione SPA
- **Vite**: Build tool e dev server
- **CSS3**: Stili custom responsive

## 📁 Struttura

```
client/
├── public/              # File statici
│   └── vite.svg
│
├── src/
│   ├── main.jsx        # Entry point
│   ├── App.jsx         # Componente principale
│   ├── App.css         # Stili componenti
│   ├── index.css       # Stili globali
│   │
│   ├── pages/          # Pagine dell'app
│   │   ├── Home.jsx           # Pagina principale con filtri
│   │   └── UniversityDetail.jsx  # Dettaglio università
│   │
│   └── components/     # Componenti riutilizzabili
│       ├── Filters.jsx        # Componente filtri
│       └── UniversityCard.jsx # Card università
│
├── index.html          # HTML principale
├── package.json        # Dipendenze
└── vite.config.js      # Configurazione Vite
```

## 🚀 Comandi

```bash
# Sviluppo (con hot reload)
npm run dev

# Build per produzione
npm run build

# Preview build
npm run preview
```

## 🎨 Personalizzazione

### Colori

Modifica `src/index.css`:

```css
:root {
  --primary: #2563eb;        /* Blu principale */
  --primary-dark: #1e40af;   /* Blu scuro */
  --secondary: #10b981;      /* Verde */
  --background: #f8fafc;     /* Grigio chiaro */
  --card-bg: #ffffff;        /* Bianco */
  --text: #1e293b;          /* Grigio scuro */
  --text-light: #64748b;    /* Grigio medio */
  --border: #e2e8f0;        /* Grigio chiaro */
}
```

### Layout

Modifica `src/App.css` per cambiare:
- Dimensioni card
- Spaziature
- Grid layout
- Responsive breakpoints

## 📱 Responsive Design

L'app è ottimizzata per:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

Breakpoints in `src/App.css`:

```css
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

## 🔌 API Integration

Il frontend comunica con il backend tramite:

```javascript
// Tutte le università
fetch('/api/universities')

// Università specifica
fetch('/api/universities/:id')
```

Il proxy è configurato in `vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true
    }
  }
}
```

## 🧩 Componenti

### App.jsx
Componente principale con routing:
- Header
- Routes (Home, UniversityDetail)

### Home.jsx
Pagina principale:
- Filtri
- Lista università
- Gestione stato filtri

### UniversityDetail.jsx
Pagina dettaglio:
- Fetch dati università
- 8 sezioni informative
- Link back alla home

### Filters.jsx
Componente filtri:
- Tipo laurea
- Rating minimo
- Lingua
- Città

### UniversityCard.jsx
Card università:
- Informazioni principali
- Rating visivo
- Statistiche chiave

## 🎯 Stato e Props

### Home Component State
```javascript
{
  universities: [],           // Tutte le università
  filteredUniversities: [],  // Università filtrate
  filters: {
    degree: '',
    minRating: 0,
    language: '',
    city: ''
  }
}
```

### UniversityCard Props
```javascript
{
  university: {
    id, name, degree, program,
    location, ratings, costs,
    career, duration, language
  }
}
```

## 🔄 Flusso Dati

```
1. Home.jsx fetch /api/universities
   ↓
2. Salva in state universities
   ↓
3. Applica filtri → filteredUniversities
   ↓
4. Render UniversityCard per ogni università
   ↓
5. Click su card → Navigate to /university/:id
   ↓
6. UniversityDetail.jsx fetch /api/universities/:id
   ↓
7. Render dettagli completi
```

## 🎨 Stili

### Approccio
- CSS vanilla (no framework)
- CSS Variables per temi
- Mobile-first responsive
- Flexbox e Grid

### Convenzioni
- BEM-like naming
- Componenti modulari
- Utility classes minimali

### File
- `index.css`: Reset, variabili, stili globali
- `App.css`: Stili componenti e layout

## 🚀 Performance

### Ottimizzazioni
- Code splitting con React Router
- Lazy loading immagini
- CSS minificato in produzione
- Tree shaking automatico (Vite)

### Build Size
- Gzipped: ~50KB JS + ~5KB CSS
- First Load: < 2s
- Time to Interactive: < 3s

## 🧪 Testing

### Test Manuale
```bash
# Avvia dev server
npm run dev

# Test su diversi dispositivi
# Chrome DevTools → Device Toolbar (Cmd+Shift+M)
```

### Checklist
- [ ] Filtri funzionano
- [ ] Navigazione tra pagine
- [ ] Responsive su mobile
- [ ] Dati caricano correttamente
- [ ] Link back funziona

## 🐛 Debug

### React DevTools
1. Installa estensione browser
2. Apri DevTools
3. Tab "Components" e "Profiler"

### Console Errors
```javascript
// Aggiungi console.log per debug
console.log('Universities:', universities);
console.log('Filters:', filters);
```

### Network Tab
Verifica chiamate API:
1. F12 → Network
2. Filtra per "Fetch/XHR"
3. Verifica status 200

## 📦 Dipendenze

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

## 🔧 Configurazione Vite

### vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
```

### Variabili Ambiente
Crea `.env.local` per variabili custom:
```
VITE_API_URL=http://localhost:3000
```

Usa in codice:
```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

## 🎯 Prossimi Sviluppi

### Breve Termine
- [ ] Più filtri (costo, placement)
- [ ] Ordinamento risultati
- [ ] Ricerca testuale
- [ ] Paginazione

### Medio Termine
- [ ] Autenticazione
- [ ] Università preferite
- [ ] Confronto side-by-side
- [ ] Dark mode

### Lungo Termine
- [ ] PWA
- [ ] Offline support
- [ ] Notifiche push
- [ ] Internazionalizzazione

## 📚 Risorse

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com)
- [CSS Tricks](https://css-tricks.com)

## 🤝 Contribuire

Per contribuire al frontend:

1. Modifica i file in `src/`
2. Testa con `npm run dev`
3. Build con `npm run build`
4. Commit e push

Vedi [../README.md](../README.md) per dettagli.

---

**Parte di**: University Tracker  
**Versione**: 1.0.0  
**Licenza**: MIT
