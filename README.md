# Le Coq Hardi — Site vitrine premium

Bar lounge / cocktails. Stack : Next.js 14 (App Router) · React 18 · Tailwind CSS · Framer Motion · lucide-react.

## Lancer le projet
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Palette
- Vert foncé (dominant) `#246235`
- Beige sable `#FFE9D5`
- Beige doré `#FFBE83`
- Vert sauge `#B9D0BD`
- Bleu piscine `#BCD9DA`

## Structure
- `app/` layout, page, styles globaux
- `components/` Navbar, Hero (parallaxe), About, Cocktails, Ambiance (masonry), Events, Reviews (slider auto), Reservation (form), Footer

## Notes
- Photos : Unsplash (URLs externes) — remplacer par vos visuels dans `public/`.
- Fonts chargées via `<link>` Google Fonts (Playfair Display + Inter).
