## Sihang Zeng Personal Site

This repository contains the current Astro-based deployment for [zengsihang.github.io](https://zengsihang.github.io).

### Stack

- Astro 5 for the site
- GitHub Pages for deployment
- Optional Cloudflare Worker + D1 backend for the visitor map

### Local development

```bash
npm install
npm run dev
```

The site builds with:

```bash
npm run build
```

### Visitor map

The front-end visitor map reads from `PUBLIC_VISITOR_API_BASE`.

Create a local `.env` if you want live visitor data during development:

```bash
PUBLIC_VISITOR_API_BASE=https://your-worker-domain.example.workers.dev
```

The worker source lives in `worker/` and can be deployed separately with Wrangler.

### Deployment

GitHub Pages deployment is handled by [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). Pushes to `main` build the Astro site and publish the generated `dist/` artifact.
