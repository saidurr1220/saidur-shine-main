# Md. Saidur Rahman: Portfolio

Personal portfolio of Md. Saidur Rahman, a Full-Stack WordPress Engineer building custom plugins, WooCommerce platforms, booking engines and integrations.

**Live site:** https://saidur-it.vercel.app

## What's inside

- Home page with about, skills, services, selected projects, client reviews, experience timeline and contact form
- Case study pages for each project (`/project/:id`), driven by `src/data/projectsData.ts`
- Client reviews in `src/data/reviews.ts`
- Resume page (`/resume`) embedding `public/resume.pdf`

## Tech stack

- React 18, TypeScript, Vite
- Tailwind CSS with shadcn/ui (Radix) primitives
- Framer Motion and Lenis for animation and smooth scrolling
- React Router
- Contact form delivered through [FormSubmit](https://formsubmit.co)
- Hosted on Vercel

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # ESLint
```

## Updating content

| What | Where |
| --- | --- |
| Projects and case studies | `src/data/projectsData.ts` (screenshots in `public/screenshots/`, WebP preferred) |
| Reviews | `src/data/reviews.ts` |
| Experience and 2026 journey | `src/components/ExperienceApple.tsx` |
| About text | `src/components/AboutApple.tsx` |
| Resume | replace `public/resume.pdf` |
| SEO metadata | `index.html`, `public/sitemap.xml` |

## Contact

- Email: saidurr1256@gmail.com
- GitHub: https://github.com/saidurr1220
- LinkedIn: https://www.linkedin.com/in/rahmansaidur
