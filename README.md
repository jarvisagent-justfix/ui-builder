# 🎨 UI Builder — Drag & Drop per Interfacce App

Un **page builder drag-and-drop** open source basato su **GrapesJS** (26k ⭐ su GitHub). Crea interfacce web come il tuo mockup senza scrivere una riga di codice.

## 🚀 URL LIVE

**👉 https://techniques-propose-marc-highly.trycloudflare.com/index.html**

## 📦 Cosa contiene

| Componente | Descrizione |
|-----------|-------------|
| Header Dashboard | Titolo + icona notifiche |
| Stat Grid 2×2 | 4 card: In Progress, In Review, On Hold, Completed |
| Bar Chart | Grafico settimanale a barre (Progress, Reviewed, Complete) |
| Total Working Hours | Card metrica ore lavorative |
| Task Filters | Filtri pill: Complete, To Do, In Review |
| Task Cards | Card singola con tag, data, avatar, commenti |
| Lista Task | Lista completa di 4 task (una evidenziata verde) |
| Bottom Navigation | Barra navigazione con 4 voci |

## 🖱️ Come si usa

1. **Apri l'URL** nel browser (da PC o telefono)
2. **Pannello sinistro** — trascina un blocco sul canvas
3. **Canvas centrale** — clicca un elemento per selezionarlo
4. **Pannello destro** — modifica stili (colori, font, bordi, ombre)
5. **Doppio click** sul testo per editarlo
6. **Pulsante Export** (⬇) — genera HTML/CSS completo

## 🔧 Personalizzazione

Tutti i componenti sono modificabili:
- **Colori**: cambia i valori `background`, `color` nel pannello stili
- **Testi**: doppio click per editare
- **Numeri**: modifica i valori delle card
- **Bar chart**: le barre si aggiornano in tempo reale

## 🛠️ Tecnologia

- **GrapesJS** — core drag-and-drop engine
- **Supabase** — (opzionale) database per dati dinamici
- **Cloudflare Pages** — hosting gratuito

## 🚀 Pubblicazione su GitHub

```bash
git init
git add .
git commit -m "First commit: UI Builder con GrapesJS"
git remote add origin git@github.com:TUO-UTENTE/TUO-REPO.git
git push -u origin main
```

Poi attiva **GitHub Pages** da Settings → Pages → branch `main` → root.

## 📄 Licenza

Open source sotto licenza MIT. Basato su GrapesJS (BSD).
