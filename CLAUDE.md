# Claude Context - MX Pazos Chavez Website

## Project Overview
Astro-based bilingual (Spanish/English) website for Bufete Jurídico Pazos Chávez - a legal services and contact center firm.

**Live Site:** https://pi.klok.mx/mx-pazoschavez  
**Repository:** github.com:klokmx/mx-pazoschavez.git

## Technology Stack
- **Framework:** Astro 5.16.5
- **Styling:** Tailwind CSS 4.1.17 with @tailwindcss/vite
- **Package Manager:** pnpm
- **Deployment:** GitHub Pages (subdirectory deployment)

## Critical Configuration

### Base Path Setup
The site is deployed to a **subdirectory** (`/mx-pazoschavez/`), not root. This requires special handling:

**astro.config.mjs:**
```javascript
const base = process.env.NODE_ENV === "production" ? "/mx-pazoschavez/" : "/";
```
⚠️ **IMPORTANT:** The trailing slash in `/mx-pazoschavez/` is REQUIRED for proper asset concatenation.

### Asset & Link Pattern
**ALL** static assets and internal links MUST use `import.meta.env.BASE_URL`:

```astro
<!-- ✅ CORRECT -->
<img src={import.meta.env.BASE_URL + "images/logo.svg"} />
<a href={import.meta.env.BASE_URL + "en"}>English</a>
<a href={import.meta.env.BASE_URL + "servicios-legales/derecho-fiscal"}>Service</a>

<!-- ❌ WRONG -->
<img src="/images/logo.svg" />
<a href="/en">English</a>
<a href="/servicios-legales/derecho-fiscal">Service</a>
```

**Exception:** Same-page hash links don't need BASE_URL:
```astro
<!-- ✅ OK -->
<a href="#contacto">Contact</a>
<a href="#servicios-legales">Services</a>
```

## Project Structure

```
src/
├── components/          # Astro components
│   ├── Navbar.astro            # Main navigation
│   ├── Hero.astro              # Homepage hero
│   ├── Footer.astro            # Site footer
│   ├── LegalServices.astro     # Legal services section
│   ├── ContactCenter.astro     # Contact center section
│   ├── ServiceDetailPage.astro # Legal service detail template
│   └── ContactCenterDetailPage.astro  # Contact center detail template
├── content/            # JSON content files
│   ├── legal-services/         # Legal service definitions
│   └── contact-center/         # Contact center service definitions
├── data/               # TypeScript data files
│   ├── legalServices.ts
│   └── contactCenterServices.ts
├── i18n/               # Internationalization
│   ├── index.ts        # Language detection
│   └── ui.ts           # Translation strings
├── layouts/
│   └── Layout.astro    # Base HTML layout
├── pages/              # File-based routing
│   ├── index.astro     # Spanish homepage
│   ├── servicios-legales/[slug].astro  # Spanish legal services
│   ├── centro-contacto/[slug].astro    # Spanish contact center
│   └── en/             # English versions
└── styles/
    ├── master.css      # Main stylesheet
    └── global.css      # Global styles
```

## Internationalization (i18n)

**Default Locale:** Spanish (es)  
**Supported Locales:** Spanish (es), English (en)

**URL Structure:**
- Spanish: `/` (root)
- English: `/en/`

**Helper Functions:**
```typescript
import { getLangFromUrl, useTranslations } from "../i18n";

const lang = getLangFromUrl(Astro.url);  // "es" | "en"
const t = useTranslations(lang);         // Translation function
```

## Service Categories

### Legal Services (`servicios-legales`)
- Asesoría y Consultoría
- Derecho Fiscal
- Derecho Civil y Mercantil
- Derecho Familiar
- Derecho Administrativo
- Expropiación e Indemnizaciones
- Patentes y Marcas
- Cobranza Judicial y Extrajudicial

### Contact Center (`centro-contacto`)
- Atención a Clientes
- Soporte Técnico
- Blasters
- SMS y Correos Masivos
- Programas de Lealtad
- Depuración de Base de Datos
- Renta de Estaciones e Infraestructura
- IVRs
- Realización de Encuestas
- Personal Domiciliario
- Servicios para el Sector Médico
- Business Continuity & DRP
- Fulfillment

## Common Commands

```bash
# Development
pnpm run dev          # Start dev server (http://localhost:4321)

# Build
pnpm run build        # Build for production (outputs to dist/)

# Preview
pnpm run preview      # Preview production build locally

# Git workflow
git add -A
git commit -m "message"
git push
```

## Recent Fixes (January 2026)

### 1. Subdirectory Deployment Assets
Fixed all hardcoded absolute paths to use `import.meta.env.BASE_URL`:
- Image sources in Navbar, Hero, Footer
- Favicon link in Layout
- Background images (converted CSS to inline styles)

### 2. Navigation Links
Updated all internal navigation to use BASE_URL:
- Navbar home and logo links
- Service card links
- Related services links
- Language switcher links
- "View all" links

### 3. Base Path Configuration
Added trailing slash to production base path for proper concatenation:
- Changed from `/mx-pazoschavez` to `/mx-pazoschavez/`

## Important Notes

⚠️ **Never use hardcoded paths starting with `/`** for internal assets or links (except hash anchors)

⚠️ **BASE_URL already includes trailing slash** - don't add extra slashes:
```astro
<!-- ✅ CORRECT -->
{import.meta.env.BASE_URL + "images/logo.svg"}

<!-- ❌ WRONG - double slash -->
{import.meta.env.BASE_URL + "/images/logo.svg"}
```

⚠️ **CSS background images** should be inline styles, not CSS classes, when using dynamic paths

## TypeScript Errors (Known Issues)
- ServiceDetailPage.astro has type mismatches between ContactCenterService and LegalService types
- These are pre-existing and don't affect functionality

## Next Steps / TODO
- Consider creating proper TypeScript interfaces for service types
- Define collections in `src/content.config.ts` (currently auto-generated)
- Add more content for legal-services and contact-center collections
