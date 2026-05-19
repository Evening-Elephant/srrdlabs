# SRRD Laboratories — Next.js Website

## Quick Start

```bash
unzip srrd-labs.zip
cd srrd-labs
npm install
npm run dev
```

Open **http://localhost:3000**

> **Note on fonts:** Fonts load from Google Fonts CDN at runtime.
> They will display correctly once you run the site locally with internet access.

---

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/about` | About, Mission, Vision, Team, Founder |
| `/contact` | Contact form + FAQ |
| `/products` | Catalogue — search, filters, purity slider |
| `/products/[id]` | Product detail — specs, tabs, quote form |
| `/blog` | Blog listing |
| `/careers` | Open roles + application form |

## Tech

- **Next.js 16** · App Router · TypeScript
- **Tailwind CSS 3.4**
- **Fonts:** Plus Jakarta Sans, Syne, JetBrains Mono (Google Fonts CDN)

## Colour System

```css
--primary:   #0A5C8A   /* deep ocean blue */
--teal:      #00869B   /* teal accent */
--cyan:      #00C4D4   /* highlight cyan */
--teal-pale: #D6F0F5   /* pale teal backgrounds */
--ink:       #0D1F2D   /* near-black heading */
```
