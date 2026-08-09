# zengsihang.github.io

Personal academic site for Sihang Zeng — [zengsihang.github.io](https://zengsihang.github.io).

Built with [Astro](https://astro.build) 5, deployed to GitHub Pages.

## Local development

```bash
npm install
```

```bash
npm run dev
```

Other scripts: `npm run build` (static output to `dist/`), `npm run preview`, `npm run check`
(Astro + TypeScript diagnostics).

## Editing content

Nearly all content lives in one file: **`src/data/site.ts`**. Pages read from it, so adding a
publication or a news item never requires touching markup.

| Export | What it drives |
| --- | --- |
| `profile` | Name, role, affiliation, bio, contact, social links, Scholar metrics |
| `focusAreas` | The three research cards on the home page |
| `news` | The dated news list (newest first) |
| `publications` | Every publication, tagged with a `kind` |
| `education`, `experience`, `awards`, `skills`, `affiliations` | The CV page |

### Adding a publication

Append an entry to `publications`. `kind` decides which section of `/publications/` it lands in —
`journal`, `conference`, `preprint`, `abstract`, or `thesis`. Set `featured: true` to also surface it
as a card under **Selected work** on the home page (six cards fill the grid evenly).

Write the author list as an array and use the `AUTHOR_SELF` constant for Sihang's own name — it is
rendered in bold automatically. End the array with the literal string `"et al."` to truncate a long
list.

```ts
{
  title: "Paper title in sentence case",
  authors: [AUTHOR_SELF, "Co Author", "et al."],
  venue: "Venue name",
  venueDetail: "pp. 1–10",   // optional
  year: 2026,
  kind: "conference",
  note: "Spotlight",          // optional badge
  summary: "One or two sentences on what the paper does.",
  tags: ["Topic"],
  links: [{ label: "Paper", href: "https://..." }],
  featured: true
}
```

The first entry in `links` becomes the title's hyperlink.

### Updating Scholar metrics

`profile.metrics` and `profile.metricsNote` are a manual snapshot. Refresh both together so the
"as of" date stays honest.

## Assets

- `public/images/portrait.jpg` — square head-and-shoulders crop used in the hero. Regenerate from a
  new source photo with any image editor; 560×560 or larger.
- `public/social-card.png` — 1200×630 Open Graph card. Update it when the role or affiliation changes.
- `public/favicon.svg` — monogram.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes on every push to
`master` (or `main`), and can be run manually from the Actions tab.
