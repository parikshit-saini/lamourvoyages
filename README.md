# L'amour Voyages — Next.js redesign

Next.js 16 (App Router) + TypeScript + SCSS Modules. Built from the Stitch home page design. Every URL from the live site keeps its slug.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Deploy

Every push to `master` publishes the site to GitHub Pages through `.github/workflows/deploy.yml`:
https://parikshit-saini.github.io/lamourvoyages/

In the repository settings, **Pages > Build and deployment > Source** must be set to **GitHub Actions**.

## Structure

```
src/
  app/                    # one folder per route (slugs match lamourvoyages.com)
    page.tsx              # Home
    about-us/  services/  contact-us/  privacy-policy/
    north-america/  south-america/  canada/
    trending-destination/  new-york/  los-angeles/  miami/  orlando/  boston/
    sitemap.ts  robots.ts  not-found.tsx
  components/             # Header, Footer, Hero, TourCard, Planner, Testimonials, ...
  lib/
    emailInquiry.ts       # opens the visitor's email app for every form
  data/
    site.ts               # nav, contacts, offices, tours, testimonials, partners
    destinations.ts       # content for the destination & city pages
  styles/
    _tokens.scss          # colours, fonts, spacing, breakpoints
    _mixins.scss          # type scale, breakpoints, container, field styles
    pages.module.scss     # shared layouts for About/Services/Contact/Privacy
```

Most content changes only need edits in `src/data/`.

## Before launch

1. **Form delivery**: GitHub Pages has no server, so forms open the visitor's email app addressed to `contact.inquiryEmail` in `src/data/site.ts`. An inquiry only arrives if the visitor presses send.
2. **Images**: tour and hero images are hosted on Stitch's temporary `lh3.googleusercontent.com` URLs. Download them into `public/images/` and update `images` in `src/data/site.ts`. Move the logo into `public/` too.
3. **Tour prices**: the Stitch design showed sample prices. The site shows durations and a custom quote instead. Add real prices to `tours` in `src/data/site.ts` if you want them displayed.
4. **Privacy policy**: placeholder text. Replace it with your real policy.
5. **Destination copy**: `destinations.ts` has starter text. Review and adjust it.
