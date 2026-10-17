# Forhad Hossain — Photo Editing Portfolio

A responsive Next.js portfolio for showcasing photo editing, product design,
poster, and web-banner work.

## Run locally

```bash
npm install
npm run dev
```

## Project structure

- `app/page.js` composes the homepage and initializes GSAP scroll animations.
- `app/components/portfolio/` contains reusable portfolio sections, image
  galleries, before-and-after comparisons, and the contact form.
- `app/data/portfolio.js` contains the service, experience, and process content.
- `app/globals.css` contains only global browser defaults and Tailwind CSS.
- `public/` contains the portfolio images and downloadable CV.

The homepage respects the user&apos;s reduced-motion preference. Update image
content in `app/data/portfolio.js` and the gallery image lists in
`app/components/portfolio/ImageGalleries.jsx`.
