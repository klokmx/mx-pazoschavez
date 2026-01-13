# Service Pages Refactoring - Summary

## Overview

Refactored all service landing pages to use a centralized data structure with dynamic routing for improved maintenance and performance.

## New Structure

### Data Files (`/src/data/`)

- **legalServices.ts** - Contains all 8 legal services with bilingual content
- **contactCenterServices.ts** - Contains all 13 contact center services with bilingual content

Each service includes:

- `id`: Unique identifier for routing
- `icon`: Icon identifier (maps to SVG paths)
- `title`: Spanish & English titles
- `description`: Short description (ES/EN)
- `fullContent`: Array of full paragraphs (ES/EN)
- `category`: 'legal' or 'contact-center'

### Dynamic Routes

Routes automatically generated for all services:

- `/servicios-legales/[slug]` - Spanish legal services
- `/en/servicios-legales/[slug]` - English legal services
- `/centro-contacto/[slug]` - Spanish contact center services
- `/en/centro-contacto/[slug]` - English contact center services

### Components

#### ServiceDetailPage.astro

Reusable template for all service pages featuring:

- **Hero Section**: Full-width background image with service icon and title
- **Main Content**: Clean typography for multi-paragraph content
- **CTA Section**: Call-to-action for consultation requests
- **Related Services**: Blog-style grid of 3 related services with hover effects

#### Updated Components

- **LegalServices.astro**: Now uses data from `legalServices.ts`, cards link to dynamic pages
- **ContactCenter.astro**: Now uses data from `contactCenterServices.ts`, cards link to dynamic pages

## Service URLs

### Legal Services

1. `/servicios-legales/asesoria-consultoria` - Legal Advisory and Consulting
2. `/servicios-legales/derecho-fiscal` - Tax Law
3. `/servicios-legales/derecho-civil-mercantil` - Commercial Civil Law
4. `/servicios-legales/derecho-familiar` - Family Law
5. `/servicios-legales/derecho-administrativo` - Administrative Law
6. `/servicios-legales/expropiacion-indemnizaciones` - Expropriation and Compensation
7. `/servicios-legales/patentes-marcas` - Patents and Trademarks
8. `/servicios-legales/cobranza-judicial-extrajudicial` - Judicial and Extrajudicial Collection

### Contact Center Services

1. `/centro-contacto/blasters` - Blasters (RoboCalls)
2. `/centro-contacto/sms-correos-masivos` - Mass SMS and Emails
3. `/centro-contacto/programas-lealtad` - Loyalty Programs
4. `/centro-contacto/atencion-clientes` - Customer Service
5. `/centro-contacto/soporte-tecnico` - Technical Support
6. `/centro-contacto/depuracion-base-datos` - Database Cleansing
7. `/centro-contacto/renta-estaciones-infraestructura` - Workstation Rental
8. `/centro-contacto/ivrs` - Interactive Voice Response System
9. `/centro-contacto/realizacion-encuestas` - Survey Execution
10. `/centro-contacto/personal-domiciliario` - In-house Personnel
11. `/centro-contacto/servicios-sector-medico` - Medical Sector Services
12. `/centro-contacto/business-continuity-drp` - Business Continuity Plan
13. `/centro-contacto/fulfillment` - Fulfillment

## Design Features

### Hero Image

- Placeholder images from placehold.co (1200x600)
- Dark overlay for text readability
- Prominent service icon (golden color)
- Gradient background effect

### Blog-Style Related Services

- 3 related services displayed as cards
- Hover effects: shadow lift, icon scale, color transitions
- Placeholder card images (600x400)
- Service icon overlay on each card
- "Learn more" links with arrows

### Color Scheme

- **Primary**: main-blue scale (#0A2240)
- **Accent**: gold-700 (#b1873e) for icons
- **Text**: text-gray (#888888)
- **Backgrounds**: White with blue accent sections

## Benefits

1. **Maintainability**: Single source of truth for service content
2. **Performance**: Static generation for all routes at build time
3. **SEO**: Clean URLs, proper meta tags, semantic HTML
4. **DRY Principle**: Reusable ServiceDetailPage component
5. **Bilingual**: Full ES/EN support throughout
6. **Scalability**: Easy to add new services by updating data files

## Adding New Services

To add a new service:

1. Add service object to `legalServices.ts` or `contactCenterServices.ts`
2. Include all required fields (id, icon, title, description, fullContent)
3. Choose an appropriate icon from the iconMap
4. Build the site - route will be auto-generated

No component changes needed!
