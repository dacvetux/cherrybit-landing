# B2B SaaS Landing Page Design

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

---

This repo is configured for GitHub Pages deployment through GitHub Actions.

Expected live URL:

https://www.cherry-bit.com/


## Search visibility

Vite generates readable homepage HTML from `src/content.js` using
`scripts/seo.js`. React uses the same content for the interactive panels.
Without JavaScript, visitors can read the page and follow section/contact links.
Section hashes also open the matching panel when JavaScript is enabled.

Metadata and Organization structured data live in `index.html`. Crawl files and
an optimized logo live in `public/`. If the domain changes, update the canonical,
social and structured-data URLs, sitemap, robots.txt, and both CNAME files.

After deployment, verify the domain in Google Search Console and submit
`https://www.cherry-bit.com/sitemap.xml`. This requires access to the site owner's
Google account; the repository does not configure Search Console.
