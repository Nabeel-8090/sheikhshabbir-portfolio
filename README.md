# Sheikh Shabbir — Portfolio Website

A premium dark-theme portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Stack

| Tool | Purpose |
|------|---------|
| React 19 + Vite | App framework & dev server |
| Tailwind CSS 3 | Utility styling & design tokens |
| Framer Motion | Section & micro-animations |
| Lucide React | Line icons |
| react-icons | WhatsApp / social icons |
| @emailjs/browser | Contact form email sending |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Adding Your Resume

1. Name your resume PDF exactly `resume.pdf`
2. Drop it into the `/public` folder
3. The Download Resume button is already wired to `/resume.pdf`

## Setting Up the Contact Form (EmailJS)

1. Sign up at [emailjs.com](https://www.emailjs.com) — free tier supports 200 emails/month
2. Create an **Email Service** (connect your Gmail or other inbox)
3. Create an **Email Template** using these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — subject line
   - `{{message}}` — message body
4. Grab your **Public Key** from Account → API Keys
5. Copy `.env.example` to `.env` and fill in the three values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

> Without EmailJS configured, the form will fall back to a `mailto:` link — still works, just opens the user's email client.

## Adding Project Images

Open `src/data/content.js` and update the `projects` array. For each project, set the `image` field to an imported image path or a URL:

```js
import proj1 from '../assets/projects/shaft-assembly.jpg'

export const projects = [
  {
    id: 'p1',
    title: 'Precision Shaft Assembly',
    category: 'Mechanical Part',
    description: '...',
    image: proj1,          // ← add this
  },
  // ...
]
```

Place project photos in `src/assets/projects/`.

## Customising Content

All text, links, experience entries, skills, education and certifications live in one file:

```
src/data/content.js
```

Edit that file to update anything without touching the component code.

## Deployment

The `dist/` folder produced by `npm run build` is a static site — deploy to:

- **Vercel** — connect GitHub repo, auto-builds on push
- **Netlify** — drag-and-drop `dist/` folder
- **GitHub Pages** — set `base: '/repo-name/'` in `vite.config.js` first

Remember to add your `.env` variables to the host's environment settings (not just the local file).

---

© 2025 Sheikh Shabbir
