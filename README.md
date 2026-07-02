<h1 align="center">🏛️ NORDHAUS — Interior Design Studio</h1>

<p align="center">
  A multi-page, richly animated website for a fictional Nordic interior design studio — built with
  <b>Next.js 14</b>, <b>TypeScript</b>, <b>Tailwind CSS</b>, and <b>Framer Motion</b>.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-000000?style=flat&logo=nextdotjs" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green?style=flat" />
</p>

<p align="center">
  <a href="#-live-demo"><b>Live Demo</b></a> ·
  <a href="#-pages"><b>Pages</b></a> ·
  <a href="#-getting-started"><b>Getting Started</b></a>
</p>

---

## 🔗 Live Demo

> **[🚀 View the live demo](https://REPLACE-WITH-YOUR-VERCEL-URL.vercel.app)**  ← _deploy to Vercel and drop your URL here_

> _Tip: add a screenshot or GIF to `public/preview.png` and reference it here so the repo reads at a glance._

## 🧭 Pages

| Route             | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `/`               | Animated hero (Ken Burns + staggered text), intro, featured work, services, animated stat counters, testimonial, CTA |
| `/studio`         | Studio story, values, and team                                     |
| `/services`       | Detailed services + a four-step process                            |
| `/projects`       | Portfolio grid with animated **category filtering**                |
| `/projects/[slug]`| Dynamic, statically-generated project detail pages with galleries  |
| `/contact`        | Contact form with an animated success state + studio details       |

## ✨ Highlights

- ⚛️ **Next.js 14 App Router** — server components, dynamic routes, `generateStaticParams`, per-page metadata
- 🔤 **100% TypeScript** (strict)
- 🎬 **Framer Motion** — Ken Burns hero, staggered word reveals, scroll-reveal, animated counters, `layout` filter transitions, animated mobile menu
- 🖼️ **`next/image`** — optimized, responsive remote images with blur-free lazy loading
- 🎨 **Tailwind CSS** — custom warm palette + Playfair Display / Inter type pairing
- 📱 **Fully responsive** and ♿ **accessible** (semantic HTML, labelled controls, keyboard-friendly)
- ⚡ **Statically pre-rendered** for speed

## 🧱 Tech Stack

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · next/image · lucide-react

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## 📂 Structure

```
app/
├── layout.tsx              # Fonts, metadata, Navbar + Footer
├── page.tsx                # Home
├── studio/page.tsx
├── services/page.tsx
├── projects/page.tsx       # Filterable grid
├── projects/[slug]/page.tsx# Dynamic project detail
└── contact/page.tsx
components/                 # navbar, footer, hero, project-card, counter, reveal, projects-grid, contact-form…
lib/
├── projects.ts            # Project data
└── utils.ts               # cn() + image helper
```

## 📸 Images

Photography via [Unsplash](https://unsplash.com) (served through `next/image`). Swap the ids in
`lib/projects.ts` for your own imagery.

## 📄 License

[MIT](LICENSE) © Nabeel Yaseen — [nabeelyaseen.com](https://nabeelyaseen.com)
