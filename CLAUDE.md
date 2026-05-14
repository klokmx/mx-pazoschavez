# CLAUDE.md — pazoschavez.mx

Este archivo le indica a Claude cómo trabajar en este proyecto.

## Al iniciar cada sesión

1. Leer este archivo y revisar `CONTEXT.md`, `PROJECT_SUMMARY.md` y `SERVICE_REFACTORING.md` si la tarea toca contenido, estructura de servicios o arquitectura de componentes.
2. Si la tarea es de deploy, configuración de nginx o build: **antes** verificar lo marcado como "asumido, verificar" en la sección Server más abajo. No hay aún un `DEPLOYMENT.md` operativo confirmado.

## Sobre el proyecto

- **Cliente:** Bufete Jurídico Pazos Chávez — servicios legales y centro de contacto.
- **Sitio:** https://www.pazoschavez.mx
- **Stack:** Astro 5.16.5 (**estático puro**, sin SSR) · Tailwind 4 (`@tailwindcss/vite`) · `@astrojs/sitemap` · pnpm.
- **i18n nativo de Astro:** `es` default sin prefijo, `en` con prefijo `/en/`.
- **Build output:** `dist/` plano (no `dist/client` + `dist/server` — no aplica porque no es SSR).

## Server (Plesk · GroovyHosting)

- **Server:** Plesk Ubuntu, subdominio bajo `elpodersomostodos.org` (espejo de la subscription donde vive `asecon.mx`).
- **App root (asumido, verificar):** `/var/www/vhosts/elpodersomostodos.org/pazoschavez.mx/`
- **Doc root nginx (asumido, verificar):** `.../pazoschavez.mx/dist/`
- **No usa PM2 ni puerto Node** — al ser build estático, nginx sirve los HTML directo desde `dist/`.
- **Deploy (asumido, verificar):** build local (`pnpm build`) → subir contenido de `dist/` por SFTP al doc root → listo (sin `pm2 restart` porque no hay proceso Node).

> Las líneas marcadas "asumido, verificar" están extrapoladas de la convención del repo hermano `mx-asecon`. Antes de operar el server por primera vez en una sesión, confirmar con `ls` por SFTP o con el usuario.

## Reglas de oro

- El `site` en `astro.config.mjs` SIEMPRE es `https://www.pazoschavez.mx` (con www) — nunca cambiarlo.
- `base: "/"` es lo correcto hoy (subdominio propio, no subdirectorio). No restaurar el `/mx-pazoschavez/` del esquema viejo de GitHub Pages.
- Una sola `<h1>` por página.
- Páginas legales (`quejas.astro`, `antisoborno.astro`, `privacidad.astro`, `seguridad.astro`) y rutas dinámicas de servicio individuales: `noindex, nofollow`.
- No hacer clic en "NPM install" en Plesk Node.js — este sitio no es Node, es estático.

## Patrón heredado: `import.meta.env.BASE_URL`

Componentes (`Navbar`, `Footer`, `Hero`, `ServiceTemplate`, `ServiceDetailPage`, `ContactCenterDetailPage`, `LegalServices`) usan `import.meta.env.BASE_URL` para construir hrefs e `src` de imágenes. Esto sobra hoy (`BASE_URL === "/"` con la config actual), pero **no rompe nada** y simplificarlo es trabajo separado.

Reglas mientras siga ese patrón en el código:

- Usar `${import.meta.env.BASE_URL}path/al/recurso` (sin slash inicial en la parte derecha — BASE_URL ya trae el `/` final).
- Hash links de misma página NO necesitan BASE_URL: `<a href="#contacto">` está bien.

Si en algún punto se decide limpiar, reemplazar `${import.meta.env.BASE_URL}` por `/` de forma plana y verificar que ningún build futuro vuelva a meter `base` distinto a `/`.

## Estructura relevante

```
src/
├── components/        # Astro components (Navbar, Hero, Footer, Service*)
├── content/           # JSON de servicios (legal-services/, contact-center/)
├── data/              # legalServices.ts, contactCenterServices.ts
├── i18n/              # index.ts (detección de idioma) + ui.ts (strings)
├── layouts/           # Layout.astro
├── pages/             # index.astro · /en/ · /servicios-legales/[slug] · /centro-contacto/[slug] · páginas legales
└── styles/            # master.css, global.css, klok.css, theme.ts
```

## Comandos

```bash
pnpm install
pnpm run dev          # http://localhost:4321
pnpm run build        # genera dist/
pnpm run preview      # preview local del build
```
