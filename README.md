# shc-website

The public marketing website for the [Seattle Handball Club](https://github.com/Seattle-Handball-Club) — a co-ed team handball club based in the Seattle area.

It's a single-page React site that tells prospective players who we are, when and where we practice, what membership costs, and how we've done at tournaments. Sign-ups and payments are not handled here; the join buttons link out to our Playpass page.

## Stack

- **React 19** + **TypeScript**, built with **Vite 7**
- **lucide-react** for icons
- No backend, no CMS, no database — every piece of content is a plain value in the source
- Deployed as a static site to **GitHub Pages** via GitHub Actions

## Layout

```
.
├── .github/workflows/deploy.yml   # Build + deploy to GitHub Pages on push to main
├── README.md                      # This file
└── website/                       # The Vite app (all npm commands run from here)
    ├── index.html                 # Page shell, <title>, fonts
    ├── public/img/                # Photos and logo, served as-is
    └── src/
        ├── App.tsx                # The entire page: content data + all sections
        ├── App.css                # Nearly all styling
        ├── index.css              # Base/reset styles
        └── main.tsx               # React entry point
```

The site is essentially one file. `src/App.tsx` holds both the content and the markup, and `src/App.css` holds the styles.

## Running it locally

Requires **Node 20.12 or newer** (Vite 7 won't build on Node 18 — you'll get `crypto.hash is not a function`).

```bash
cd website
npm install
npm run dev       # dev server with hot reload
```

Other commands, also from `website/`:

```bash
npm run build      # type-check (tsc -b) then produce dist/
npm run preview    # serve the built dist/ locally
npm run lint       # eslint
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build` in `website/`, and publishes `website/dist` to GitHub Pages. There's no manual deploy step — merging is the deploy. The workflow can also be run by hand from the Actions tab.

## Editing content

Almost all copy lives in module-level `const` arrays near the top of `src/App.tsx`, above the component. Editing those is the normal way to update the site:

| What you want to change | Where |
| --- | --- |
| Playpass links (general page and season sign-up) | `playpassUrl`, `seasonSignupUrl` |
| Header / mobile menu links | `navItems` |
| The three "why join" cards | `featureCards` |
| Practice days, times, locations, paused/running status | `scheduleItems` |
| Membership tiers, prices, and perks | `membershipPlans` |
| Embedded videos | `mediaItems` |
| Tournaments we're heading to | `upcomingEvents` |
| Tournaments we've played, with placements | `pastEvents` |
| Frequently asked questions | `faqItems` |

A few conventions worth knowing:

- **Upcoming vs. past events.** When a tournament is over, move its entry from `upcomingEvents` to `pastEvents`, fill in the `result` (e.g. `'4th Place'`), and swap the `date`/`place` pair for a `date`/`days` pair (`'AUG 2026'` / `'5-9'`) plus a `description`. `pastEvents` renders newest first, so add finished tournaments at the top of the array. If `upcomingEvents` ever empties out, add a placeholder entry rather than leaving the array bare, so the section still reads sensibly between seasons.
- **Naming and dates.** Tournament names are consistent across both lists and the FAQ: **CalCup**, **Seattle Cup**, **Vancouver Cup**, **Denver Cup**, **US Nationals** — always followed by the year (`'CalCup 2027'`). Upcoming entries carry the year in `date` too (`'Jan 28-30, 2027'`), since the season straddles two calendar years. Use plain hyphens (`-`) for ranges and separators, not en dashes.
- **Images.** Drop files in `website/public/img/` and reference them as `/img/filename.jpg`.

Section anchors used by the nav are the `id`s on each `<section>` in `App.tsx`: `about`, `court`, `schedule`, `membership`, `gallery`, `media`, `events`, `faq`.

## Elsewhere

- Playpass (registration and payment): https://playpass.com/seattle-handball-club
- Instagram: https://www.instagram.com/seattle_hc/
- Facebook: http://www.facebook.com/SeattleHC
