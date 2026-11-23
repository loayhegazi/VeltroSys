# VeltroSys website, revision 3

Editable HTML + CSS + vanilla JavaScript. No framework, dependencies or build step.
Open index.html in a browser. Keep the assets folder beside it.

## New in this revision
- Separate Store view at #store, with four explicitly illustrative product examples.
- Product request: selection, quantity and details, then an editable on-page summary.
- Service quote request: service, company, company size, contact and requirements.
- Case studies: a clearly marked space for approved real work, no invented stories.
- Professional footer with grouped navigation and inactive social placeholders.
- Light/dark toggle, English/Arabic RTL, responsive layouts.

## Edit the catalogue
assets/js/products.js holds the illustrative products. Replace them with approved actual products before a real launch. Do not treat the demo catalogue as an offer or stock list. Illustrations are generic diagrams, not product photographs. Product labels and descriptive copy have English and Arabic fields.

## Forms and launch
Both request flows are previews: they only generate an on-page summary. They make no network requests, create no order or quote and save no data. Refreshing discards the entries. A real receiving channel/backend must be connected, server-side validation and privacy/consent reviewed, and the preview notes updated before launch. The light/dark selection is session-only and resets on refresh.

## Social links
Footer icons are intentionally inactive spans with aria-disabled. Add approved URLs and replace each span with an accessible anchor before enabling. No company handles were invented.

## Design and editing
English markup: index.html. Arabic: assets/js/content.js. Core interactions: assets/js/main.js. Store, quote and theme: assets/js/store.js. Styles: assets/css/style.css. Brand assets: assets/img. Shared palette remains navy, teal and white. The VPS launch discount remains limited to the first 20 VPS Cloud users, with no percentage stated. No prices, stock, SLAs, customer proof or contact details were invented.

Upload folder contents to an approved static host or web-server document root when launch is authorized. No hosting, payments, login, backend or provisioning is included. Google Fonts are optional with system fallbacks.
