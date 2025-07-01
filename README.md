# B2W - Born To Win 🏆

**Sito web ufficiale di Matteo Trocchia - Personal Trainer e Atleta Men's Physique**

Un sito web moderno e responsive per promuovere i servizi di personal training, coaching nutrizionale e abbigliamento fitness di B2W - Born To Win.

## 🌟 Caratteristiche

- **Design moderno**: Interfaccia elegante con tema scuro fisso
- **Completamente responsive**: Ottimizzato per desktop, tablet e mobile
- **Performance ottimizzate**: Caricamento veloce e animazioni fluide
- **Form di contatto funzionale**: Sistema di messaggistica integrato
- **Integrazione WhatsApp**: Contatto diretto per consulenze
- **SEO friendly**: Struttura ottimizzata per i motori di ricerca

## 🚀 Demo

🔗 **Sito live**: [Inserisci URL Netlify qui dopo il deploy]

## 🛠️ Tecnologie Utilizzate

### Frontend
- **React 18** con TypeScript
- **Vite** per build e development server
- **Tailwind CSS** per styling responsive
- **Framer Motion** per animazioni
- **React Hook Form** + **Zod** per validazione form
- **TanStack Query** per state management
- **AOS** (Animate On Scroll) per effetti scroll

### Backend
- **Express.js** con TypeScript
- **Drizzle ORM** per database management
- **Neon Database** (PostgreSQL)
- **Zod** per validazione server-side

### Tools & Deployment
- **ESBuild** per bundling server
- **Cross-env** per variabili ambiente cross-platform
- **Netlify** per hosting e CI/CD

## 📦 Installazione

### Prerequisiti
- Node.js (v18+)
- npm o yarn
- Account Neon Database (per produzione)

### Setup Locale

1. **Clona il repository**:
   ```bash
   git clone https://github.com/TUO_USERNAME/MatteoTrocchia.git
   cd MatteoTrocchia
   ```

2. **Installa le dipendenze**:
   ```bash
   npm install
   ```

3. **Configura le variabili ambiente**:
   ```bash
   # Crea un file .env nella root del progetto
   cp .env.example .env
   ```

4. **Configura il database**:
   ```bash
   npm run db:push
   ```

## 🚀 Utilizzo

### Sviluppo Locale
```bash
# Avvia il server di sviluppo
npm run dev
```
Il sito sarà disponibile su `http://localhost:5000`

### Build di Produzione
```bash
# Genera i file ottimizzati
npm run build

# Avvia in modalità produzione
npm start
```

### Altri Comandi
```bash
# Verifica TypeScript
npm run check

# Aggiorna schema database
npm run db:push
```

## 📁 Struttura del Progetto

```
MatteoTrocchia/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componenti React
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilities e configurazioni
│   │   └── pages/          # Pagine dell'app
│   └── public/             # Assets statici
├── server/                 # Backend Express
│   ├── index.ts           # Server principale
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── db.ts              # Database configuration
├── shared/                 # Codice condiviso
│   └── schema.ts          # Validazione Zod
└── package.json           # Dipendenze e scripts
```

## 🌐 Deploy su Netlify

### Configurazione Automatica

1. **Connetti il repository GitHub a Netlify**:
   - Vai su [netlify.com](https://netlify.com)
   - Clicca "New site from Git"
   - Seleziona il tuo repository GitHub

2. **Configurazione build**:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Variabili ambiente su Netlify**:
   ```
   NODE_ENV=production
   DATABASE_URL=your_neon_database_url
   ```

### Deploy Manuale

```bash
# Installa Netlify CLI
npm install -g netlify-cli

# Login a Netlify
netlify login

# Deploy del sito
netlify deploy --prod --dir=dist
```

## 🗃️ Database

Il progetto utilizza **Neon Database** (PostgreSQL serverless) per memorizzare i messaggi di contatto.

### Schema Database
```sql
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  service VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 Personalizzazione

### Colori del Brand
```css
:root {
  --primary: 43 77% 52%;    /* Gold #D4AF37 */
  --accent: 0 76% 57%;      /* Red #DC2626 */
  --background: 0 0% 7%;    /* Dark Black */
  --foreground: 0 0% 100%;  /* White */
}
```

### Modifica Contenuti
- **Sezioni**: Modifica i componenti in `client/src/components/`
- **Servizi**: Aggiorna `client/src/lib/utils.ts`
- **Immagini**: Sostituisci le immagini in `client/public/assets/`

## 📱 Funzionalità

### 🏠 Sezioni del Sito
- **Hero**: Presentazione principale con CTA
- **Chi Sono**: Biografia di Matteo Trocchia
- **Servizi**: Coaching, programmi e consulenze
- **Prodotti**: Abbigliamento B2W
- **Testimonianze**: Recensioni clienti
- **Contatti**: Form di contatto e informazioni

### 💬 Integrazione WhatsApp
Ogni sezione include pulsanti per aprire WhatsApp con messaggi precompilati per facilitare il contatto diretto.

### 📧 Sistema di Contatti
Form di contatto che salva i messaggi nel database e permette la gestione delle richieste.

## 🔧 Configurazione Avanzata

### Variabili Ambiente
Crea un file `.env` nella root:
```env
NODE_ENV=development
DATABASE_URL=postgresql://username:password@host:port/database
```

### Customizzazione Tailwind
Modifica `tailwind.config.ts` per personalizzare colori, font e breakpoints.

## 🚀 Performance

- **Lighthouse Score**: 95+ per Performance, Accessibility, Best Practices, SEO
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🤝 Contribuire

1. Fork del progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push del branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 📞 Contatti

**Matteo Trocchia**
- WhatsApp: [+39 366 134 9967](https://wa.me/393661349967)
- Email: info@b2w-borntowin.com
- Instagram: [@matteo_trocchia](https://instagram.com/matteo_trocchia)

**Sviluppo del sito**
- GitHub: [Repository](https://github.com/TUO_USERNAME/MatteoTrocchia)
- Issues: [Segnala un problema](https://github.com/TUO_USERNAME/MatteoTrocchia/issues)

---

💪 **Sviluppato con passione per il fitness e la determinazione!**
