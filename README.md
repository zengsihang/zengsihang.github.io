# zengsihang.github.io

Personal academic site for Sihang Zeng — [zengsihang.github.io](https://zengsihang.github.io).

A single plain page built with [Astro](https://astro.build) 5 and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (static output to `dist/`), `npm run preview`, `npm run check`.

## Editing content

All content lives in **`src/data/site.ts`**; the page itself is `src/pages/index.astro`.

| Export | Section |
| --- | --- |
| `profile` | Header, About, research interests, links |
| `news` | News (newest first) |
| `publications` | Publications, grouped by `kind` (`journal`, `conference`, `preprint`, `abstract`, `thesis`) |
| `education`, `experience`, `talks`, `awards` | The remaining sections |

Update `siteMeta.lastUpdated` when the content changes.

### Adding a publication

Write the author list as an array and use `AUTHOR_SELF` for Sihang's name (rendered in bold).
`` `${AUTHOR_SELF}*` `` or `"Name*"` marks equal contribution, `"…"` elides authors, and a final
`"et al."` truncates the list. The first entry in `links` becomes the title's hyperlink.

```ts
{
  title: "Paper title in sentence case",
  authors: [AUTHOR_SELF, "Co Author", "et al."],
  venue: "Venue name",
  venueDetail: "pp. 1–10",       // optional
  year: 2026,
  kind: "conference",
  note: "Spotlight",              // optional
  links: [{ label: "Paper", href: "https://..." }]
}
```

The old `/cv/` and `/publications/` URLs redirect to the home page (see `astro.config.mjs`).

## Assets

- `public/images/portrait.jpg` — portrait in the page header.
- `public/social-card.png` — 1200×630 Open Graph card.
- `public/favicon.svg` — monogram.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes on every push to
`master` (or `main`), and can be run manually from the Actions tab.
