# AI Assistant Context - Pazos & Chávez Website

> **For AI Assistants (Claude, Gemini, GPT, etc.):** This file provides comprehensive context about the project structure, architecture, conventions, and current state. Use this as your primary reference when working on this codebase.

## Project Overview

**Type:** Astro-based Static Website  
**Purpose:** Bilingual law firm website for Pazos & Chávez  
**Languages:** Spanish (default) + English  
**Last Updated:** January 13, 2026  
**Status:** Active Development

### Business Domain

- **Primary Services:** Legal services (corporate law, fiscal law, consulting)
- **Secondary Services:** Contact center operations
- **Target Markets:** Mexico (Spanish), International (English)

## Technical Stack

### Core Technologies

- **Framework:** Astro (static site generation)
- **Language:** TypeScript + JavaScript
- **Styling:** Custom CSS (no framework)
- **Build Tool:** Vite (bundled with Astro)
- **Package Manager:** npm

### Key Dependencies

- Astro core framework
- TypeScript for type safety
- Custom i18n implementation (no external library)

## Architecture & Patterns

### Directory Structure

```
/src
  /components     - Astro UI components (reusable)
  /content        - JSON service definitions (content as data)
  /data           - TypeScript data exports
  /i18n           - Internationalization utilities
  /layouts        - Page layout templates
  /pages          - File-based routing
  /styles         - Global and component CSS
  /utils          - Helper functions
/public
  /images         - Static assets
```

### Routing Strategy

**Pattern:** File-based with dynamic segments

**Spanish Routes (default):**

- `/` - Homepage
- `/servicios-legales/[slug]` - Legal services
- `/centro-contacto/[slug]` - Contact center services

**English Routes:**

- `/en/` - Homepage
- `/en/legal-services/[slug]` - Legal services
- `/en/contact-center/[slug]` - Contact center services

### Content Management

**Approach:** JSON-based content files (not a CMS)

**Structure:**

- Service definitions stored as JSON in `src/content/`
- Each service has its own `.json` file
- Content loaded via `serviceLoader.ts` utility
- Supports bilingual content within single JSON structure

**Example Service JSON Schema:**

```json
{
  "id": "service-slug",
  "title": { "es": "Spanish Title", "en": "English Title" },
  "description": { "es": "...", "en": "..." },
  "features": [...]
}
```

### Internationalization (i18n)

**Implementation:** Custom (no library)

- `src/i18n/index.ts` - Core i18n utilities
- `src/i18n/ui.ts` - UI translations
- Language detection from URL path
- Default language: Spanish (`es`)
- Supported languages: `es`, `en`

**Usage Pattern:**

```typescript
import { useTranslations } from "../i18n";
const t = useTranslations(lang);
const text = t("key");
```

## Component Architecture

### Page Components (Routes)

- `src/pages/index.astro` - Spanish homepage
- `src/pages/en/index.astro` - English homepage
- `src/pages/servicios-legales/[slug].astro` - Dynamic legal service pages (ES)
- `src/pages/en/legal-services/[slug].astro` - Dynamic legal service pages (EN)
- `src/pages/centro-contacto/[slug].astro` - Dynamic contact center pages (ES)
- `src/pages/en/contact-center/[slug].astro` - Dynamic contact center pages (EN)

### Reusable Components

- `Hero.astro` - Homepage hero section with CTA
- `Navbar.astro` - Site navigation with language switcher
- `Footer.astro` - Site footer
- `Services.astro` - Services grid/overview
- `LegalServices.astro` - Legal services listing
- `ContactCenter.astro` - Contact center section
- `ServiceDetailPage.astro` - Template for individual service pages
- `ServiceTemplate.astro` - Shared service layout
- `ContactForm.astro` - Contact form component
- `Contact.astro` - Contact section

### Layout Components

- `src/layouts/Layout.astro` - Base layout (HTML structure, head, global styles)

## Data Layer

### Service Data Sources

1. **Legal Services:** `src/content/legal-services/*.json`
2. **Contact Center Services:** `src/content/contact-center/*.json`

### Data Files

- `src/data/legalServices.ts` - Legal service definitions/exports
- `src/data/contactCenterServices.ts` - Contact center definitions/exports

### Service Loader

- `src/content/serviceLoader.ts` - Utility to load and parse JSON services
- Handles dynamic imports
- Provides type safety for service data

## Styling Approach

### CSS Files

- `src/styles/global.css` - Global styles and resets
- `src/styles/master.css` - Main stylesheet
- `src/styles/klok.css` - Additional styles
- `src/styles/theme.ts` - Theme configuration (TypeScript)

### Conventions

- No CSS framework (custom CSS)
- Component-scoped styles using Astro's `<style>` tags
- Global utilities in global.css
- Responsive design (mobile-first approach likely)

## Development Conventions

### File Naming

- Components: PascalCase (e.g., `Hero.astro`, `ContactForm.astro`)
- Pages: kebab-case for routes (e.g., `centro-contacto`)
- Data files: camelCase (e.g., `legalServices.ts`)
- Content: kebab-case JSON (e.g., `derecho-fiscal.json`)

### Language Codes

- Spanish: `es` (default)
- English: `en`

### Slug Patterns

- Spanish: kebab-case Spanish words (e.g., `asesoria-consultoria`)
- English: kebab-case English words (e.g., `advisory-consulting`)

## Current State & Recent Changes

### Completed Refactoring

✅ Migrated from static service pages to JSON-based content management  
✅ Implemented dynamic routing for service pages  
✅ Separated legal and contact center services  
✅ Enhanced bilingual routing structure  
✅ Added service loader utility

### Known Services

**Legal Services:**

- Asesoría y Consultoría (Advisory & Consulting)
- Derecho Fiscal (Tax Law)
- [More services in `src/content/legal-services/`]

**Contact Center Services:**

- [Services in `src/content/contact-center/`]

## Working with This Project

### Adding a New Service

1. Create JSON file in `src/content/legal-services/` or `src/content/contact-center/`
2. Follow existing JSON schema with bilingual content
3. Service automatically available via dynamic routing
4. No code changes needed

### Adding Translations

1. Add keys to `src/i18n/ui.ts`
2. Provide both `es` and `en` values
3. Use `t('key')` in components

### Modifying Routes

1. Follow Astro file-based routing conventions
2. Maintain parallel structure for `es` (root) and `en/` paths
3. Use `[slug].astro` for dynamic segments

### Image Assets

- Place in `public/images/`
- Reference as `/images/filename.ext`
- No import needed (public folder)

## Related Documentation

- `PROJECT_SUMMARY.md` - High-level project overview
- `README.md` - Setup and installation instructions
- `SERVICE_REFACTORING.md` - Service architecture decisions
- `astro.config.mjs` - Astro configuration
- `tsconfig.json` - TypeScript configuration

## Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Production build
npm run preview      # Preview production build

# Install dependencies
npm install
```

## Important Notes for AI Assistants

1. **Always maintain bilingual parity** - Changes to Spanish content should have English equivalents
2. **Respect the routing structure** - Keep Spanish at root, English under `/en/`
3. **Use existing patterns** - Follow JSON schema for services, component structure for UI
4. **Type safety** - Leverage TypeScript where possible
5. **No external CMS** - Content is managed via JSON files in the repository
6. **Service loader** - Use `serviceLoader.ts` for accessing service content
7. **Component reuse** - Check existing components before creating new ones
8. **Astro-specific** - Remember this is Astro, not React/Vue (different component syntax)

## Next Steps & TODOs

- [ ] Complete migration of all services to JSON format
- [ ] Test all bilingual routes thoroughly
- [ ] Optimize images in public/images/
- [ ] Add meta tags and SEO optimization
- [ ] Implement contact form backend integration
- [ ] Deploy to production hosting
