# CLAUDE.md — pazoschavez.mx

Este archivo le indica a Claude cómo trabajar en este proyecto.

## Al iniciar cada sesión

1. Leer este archivo y revisar `CONTEXT.md`, `PROJECT_SUMMARY.md` y `SERVICE_REFACTORING.md` si la tarea toca contenido, estructura de servicios o arquitectura de componentes.

## Sobre el proyecto

- **Cliente:** Bufete Jurídico Pazos Chávez — servicios legales y centro de contacto.
- **Sitio:** https://pazoschavez.mx (nginx canonicaliza **sin www**, opuesto a asecon que es con www).
- **Stack:** Astro 5.16.5 (**estático puro**, sin SSR) · Tailwind 4 (`@tailwindcss/vite`) · `@astrojs/sitemap` · pnpm.
- **i18n nativo de Astro:** `es` default sin prefijo, `en` con prefijo `/en/`.
- **Build output:** `dist/` plano (no `dist/client` + `dist/server` — no aplica porque no es SSR).

## Server (Plesk · GroovyHosting) — verificado mayo 2026

- **Server:** Plesk Ubuntu, subdominio bajo `elpodersomostodos.org` (misma subscription que `asecon.mx`).
- **App root y doc root nginx (ambos):** `/var/www/vhosts/elpodersomostodos.org/pazoschavez.mx/` — el doc root es la **raíz del vhost directamente**, no un subdirectorio `dist/`.
- **Owner del vhost:** `epst_wm:psacln` (mismo user que asecon — comparten subscription).
- **No usa PM2 ni puerto Node** — al ser build estático, nginx sirve los HTML directo desde la raíz del vhost.
- **Acceso al server:** `ssh groovy` (alias en `~/.ssh/config`, user `ubuntu`, passwordless sudo). Para tocar `/var/www/vhosts/...` requiere `sudo`.

## Deploy

```bash
# 1. Local — build
pnpm run build

# 2. Subir dist/ al server (sin --delete: hay archivos no-Astro que deben preservarse)
rsync -avz --rsync-path="sudo rsync" dist/ groovy:/var/www/vhosts/elpodersomostodos.org/pazoschavez.mx/

# 3. Fijar ownership consistente con el resto del vhost
ssh groovy "sudo chown -R epst_wm:psacln /var/www/vhosts/elpodersomostodos.org/pazoschavez.mx/"

# 4. Verificar (sin pm2 restart — es estático)
curl -sSL -o /dev/null -w "HTTP:%{http_code}\n" https://pazoschavez.mx/
```

### Archivos en server que NO están en el repo (preservar, no borrar)

El vhost contiene estos archivos no rastreados — agregados manualmente al server, NO deben borrarse:

- `googleada8b01edb37a6d5.html` — verificación de Search Console
- `robots.txt`, `site.webmanifest`
- `apple-touch-icon.png`, `favicon.ico`, `favicon.png`, `icon-192.png`, `icon-512.png`

Por eso el rsync va **sin** `--delete`. Si se necesita una limpieza completa, descargar primero estos archivos al repo o respaldarlos.

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
