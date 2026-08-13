# Schiaccia Pensieri - Sito web

Sito web della pizzeria "Schiaccia Pensieri" (Soci, Bibbiena - AR), realizzato in Angular 19.

## Comandi principali

```bash
npm install       # installa le dipendenze (la prima volta, o dopo aver scaricato il progetto)
npm start         # ng serve, sviluppo su http://localhost:4200
npm run build     # build di produzione in dist/schiaccia-pensieri
```

## Cosa aggiornare prima della pubblicazione

- `src/app/core/data/business-info.ts`: verificare numero di telefono, aggiungere URL Facebook definitivo, P.IVA, e se disponibile impostare `tripadvisor.widgetEmbedId` con il widget di un servizio come Elfsight/SociableKIT/TagEmbed per le recensioni dinamiche.
- `src/app/core/data/menu-data.ts`: sostituire i piatti/prezzi segnaposto con il menu reale.
- Sostituire i placeholder "foto" (i riquadri beige in Home e Chi siamo) con immagini reali, inserendole in `public/images/` e collegandole nei rispettivi componenti (`home.component.html`, `about.component.html`).
- Collegare il form contatti (`contact.component.ts`) a un vero servizio di invio email (es. Formspree, EmailJS, o backend proprio) al posto del semplice log in console.

## Struttura del progetto

- `src/app/core` — modelli, dati (business-info, menu) e servizi (orari di apertura)
- `src/app/shared/components` — componenti riutilizzabili (header, footer, badge aperto/chiuso, card recensioni, sezione TripAdvisor, mappa)
- `src/app/features` — le pagine: home, menu, about (Chi siamo), contact (Contatti), not-found
