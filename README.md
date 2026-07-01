# rgalrito.github.io

Personal portfolio site built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live at [https://rgalrito.github.io](https://rgalrito.github.io).

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview
```

Content lives in `src/data/` (`profile.ts`, `skills.ts`, `projects.ts`).

## Deploy

Pushes to `master` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`. Enable **Settings → Pages → Source: GitHub Actions** if not already set.
