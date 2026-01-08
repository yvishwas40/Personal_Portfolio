

## Overview

This repository contains a responsive developer portfolio site. It includes sections for projects, research, leadership, media, achievements and contact. A "Download Resume" button has been added to the Contact section that expects a resume file to be served from the public folder.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

Open the site at the URL shown by the Vite server (usually http://localhost:5173).

## Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Add your resume (for the Download Resume button)

- Place your resume PDF at [public/resume.pdf](public/resume.pdf).
- The Contact section button at [src/components/ContactSection.tsx](src/components/ContactSection.tsx) links to `/resume.pdf` and uses the `download` attribute so browsers will download the file when clicked.

## Notes

- If you change the resume filename, update the link in [src/components/ContactSection.tsx](src/components/ContactSection.tsx).
- This project was scaffolded for easy customization — edit components in the `src/components` folder.

## Contributing

1. Fork the repo
2. Create a branch for your changes
3. Make changes and open a pull request

## License

Pick a license or add one to the repository as needed.

---

If you'd like, I can add a sample `public/resume.pdf` placeholder and commit it for you.
