# cleanracer.com

The Clean Racer marketing site. It is built with [Astro](https://astro.build) and published to GitHub Pages (domain: `cleanracer.com`, see `public/CNAME`).
Every push to `main` rebuilds and publishes it in about a minute.

## Where things are

| What | Where |
|---|---|
| The header (logo and one link) and the footer, on every page | `src/components/SiteHeader.astro`, `SiteFooter.astro`; their look is in `src/styles/shell.css` |
| The frame around each page (title, description, share card, icons) | `src/layouts/Base.astro` |
| Each page | `src/pages/` (a folder per address, for example `src/pages/support/index.astro` is `cleanracer.com/support/`) |
| Pictures, fonts, favicon, share images | `public/assets/` |
| `CNAME`, `robots.txt`, `sitemap.xml` | `public/` |

## Making a small edit

Open the page's file on GitHub, press the pencil, change the words (leave the `<tags>` as they are), and commit. The site updates by itself in about a minute.

## Adding a page

1. Copy a similar page's folder under `src/pages/` and rename it (the folder name is the address).
2. Change the `title`, `description` and `canonical` at the top, and the content.
3. Add the address to `public/sitemap.xml`.

## Working on it locally

```
npm install
npm run dev      # a live preview at http://localhost:4321
npm run build    # builds into dist/
```
