# Pazos Chávez - Modern Law Firm Website

A modern, bilingual (Spanish/English) website for Bufete Jurídico Pazos Chávez, built with Astro and Tailwind CSS.

## 🚀 Features

- **Bilingual Support**: Full Spanish and English translations
- **Modern Design**: Sleek, professional interface with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Interactive Components**: Smooth scrolling, hover effects, and animations
- **ISO 9001-2015 Certified**: Highlights quality certification

## 🏗️ Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Coverage.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── i18n/
│   │   └── index.ts          # Translation strings
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro       # Spanish homepage
│   │   └── en/
│   │       └── index.astro   # English homepage
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🌐 Languages

- **Spanish (Default)**: `https://pazoschavez.mx/`
- **English**: `https://pazoschavez.mx/en/`

## 📧 Contact Information

- **Phone**: 55 50 25 07 09
- **Email**: contacto@pazoschavez.mx
- **Facebook**: [asesoresyconsultoresoficial](https://www.facebook.com/asesoresyconsultoresoficial)
- **LinkedIn**: [asesoresyconsultoresoficial](https://www.linkedin.com/company/asesoresyconsultoresoficial)

## 🎨 Services

1. **Legal Services** (Servicios Legales)

   - Debt collection (extrajudicial and judicial)
   - Legal notifications
   - Specialized legal advisory

2. **Contact Center** (Centro de Contacto)

   - Customer service management
   - Modern communication systems
   - Highly trained personnel

3. **Mass Campaigns** (Campañas Masivas)

   - Market segmentation
   - Multi-channel campaigns
   - Detailed analysis and reports

4. **Medical Support**
   - Patient care
   - Laboratory coordination
   - Personalized follow-up

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Language**: TypeScript
- **Package Manager**: npm

## 🚀 Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Traditional Hosting**: Upload the contents of `dist` folder via FTP

### Build Command

```bash
npm run build
```

### Output Directory

```
dist/
```

## 📄 License

© 2024 Bufete Jurídico Pazos Chávez S.C. All rights reserved.

---

Built with ❤️ using Astro and Tailwind CSS

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
