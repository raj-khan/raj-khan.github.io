# Portfolio Website

Clean, minimal personal site for **Meher Ullah Khan Raj** — Software Engineer at Snappymob.
Built in the style of a Peerlist profile (inspired by yogini.dev): light theme, Geist typeface,
profile hero with skills + GitHub stats, WORK/ARTICLES tabs, project cards, and Medium articles.

## Stack

- **Framework**: Next.js 14 (App Router), static export (`output: 'export'`)
- **Language**: TypeScript
- **Styling**: Hand-rolled CSS with design tokens (`src/app/globals.css`), Tailwind only for base reset
- **Content**: Markdown blog via `gray-matter` + `remark` (`src/content/blog/`)
- **Deployment**: GitHub Pages via GitHub Actions (`public/CNAME` → `meherullah.dev`)

## Structure

```
src/
├── app/
│   ├── page.tsx              # home → <HomeContent/>
│   ├── layout.tsx            # metadata, fonts, <Header/>
│   ├── globals.css           # full design system (light, Peerlist-style)
│   ├── blog/                 # blog index + [slug] article pages
│   └── sitemap.ts / robots.txt
├── components/
│   ├── HomeContent.tsx       # client tab state (WORK / ARTICLES)
│   ├── Profile.tsx           # avatar, verified, role, skills, stats, socials, tabs
│   ├── Projects.tsx          # real GitHub repos (markdown.software, tighten, …)
│   ├── Experience.tsx        # work history
│   ├── Articles.tsx          # Medium + local blog posts
│   ├── Header.tsx / Footer.tsx / Icons.tsx
└── content/blog/             # markdown posts
```

## Dev

```bash
npm install
npm run dev     # local dev
npm run build   # static export → out/
```

## Profile data sources

- GitHub: `https://github.com/raj-khan` (API-driven stats & projects)
- LinkedIn: `https://www.linkedin.com/in/raajkhan/`
- Medium: `https://medium.com/@rajkhaan` (RSS-driven article list)
- Peerlist: `https://peerlist.io/raajkhan`
