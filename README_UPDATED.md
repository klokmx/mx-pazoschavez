# Bufete Jurídico Pazos Chávez - Sitio Web Oficial

Sitio web moderno y bilingüe (Español/Inglés) para Bufete Jurídico Pazos Chávez, construido con Astro y Tailwind CSS.

## 🏛️ Sobre el Bufete

Firma boutique de abogados con más de 35 años de experiencia ofreciendo servicios de asesoría legal integral de la más alta calidad en diversas especialidades del derecho para los sectores público y privado.

## 🚀 Características

- **Sitio Bilingüe**: Soporte completo en Español e Inglés
- **Diseño Moderno**: Interfaz profesional y elegante con animaciones suaves
- **Totalmente Responsivo**: Diseño mobile-first que funciona en todos los dispositivos
- **Alto Rendimiento**: Construido con Astro para velocidades de carga óptimas
- **SEO Optimizado**: Meta tags apropiados y HTML semántico
- **ISO 9001-2015 Certificado**: Destacando la certificación de calidad

## 📋 Servicios

### Servicios Legales (8 Especialidades)

1. **Asesoría y Consultoría Legal**
2. **Derecho Fiscal**
3. **Derecho Civil y Mercantil**
4. **Derecho Familiar**
5. **Derecho Administrativo**
6. **Expropiación e Indemnizaciones**
7. **Patentes y Marcas**
8. **Cobranza Judicial y Extrajudicial**

### Centro de Contacto (13 Servicios)

1. **Blasters (RoboCalls)**
2. **SMS y Correos Masivos**
3. **Programas de Lealtad**
4. **Atención a Clientes**
5. **Soporte Técnico**
6. **Depuración de Base de Datos**
7. **Renta de Estaciones e Infraestructura**
8. **IVRS (Sistema Interactivo de Respuesta de Voz)**
9. **Realización de Encuestas**
10. **Personal Domiciliario**
11. **Servicios para el Sector Médico**
12. **Business Continuity Plan y DRP**
13. **Fulfillment**

## 🏗️ Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro          # Navegación principal
│   │   ├── Hero.astro             # Sección hero
│   │   ├── LegalServices.astro    # 8 áreas de práctica legal
│   │   ├── ContactCenter.astro    # 13 servicios de contact center
│   │   ├── ContactForm.astro      # Formulario de contacto
│   │   └── Footer.astro           # Footer con enlaces
│   ├── i18n/
│   │   ├── index.ts               # Exportaciones de i18n
│   │   └── ui.ts                  # Traducciones completas ES/EN
│   ├── layouts/
│   │   └── Layout.astro           # Layout base HTML
│   ├── pages/
│   │   ├── index.astro            # Página principal (Español)
│   │   └── en/
│   │       └── index.astro        # Página principal (Inglés)
│   ├── styles/
│   │   └── global.css             # Estilos globales y animaciones
│   └── utils/
│       └── helpers.ts             # Funciones utilitarias
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Comandos

| Comando           | Acción                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Instala las dependencias                        |
| `npm run dev`     | Inicia servidor local en `localhost:4321`       |
| `npm run build`   | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa del build antes de desplegar       |

## 🌐 Idiomas

- **Español (Por defecto)**: `https://pazoschavez.mx/`
- **Inglés**: `https://pazoschavez.mx/en/`

## 📧 Información de Contacto

- **Teléfono**: 55 4445 3040
- **Email**: contacto@pazoschavez.mx
- **Dirección**: Av. Insurgentes Sur #3155, 2º Piso, Col. Jardines del Pedregal Cuicuilco, Del. Coyoacán, C.P. 04510, Ciudad de México
- **Facebook**: [asesoresyconsultoresoficial](https://www.facebook.com/asesoresyconsultoresoficial)
- **LinkedIn**: [asesoresyconsultoresoficial](https://www.linkedin.com/company/asesoresyconsultoresoficial)

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build) v5.16+
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com)
- **Lenguaje**: TypeScript (strict mode)
- **Integraciones**: Sitemap
- **Gestor de Paquetes**: npm

## 💼 Valores del Bufete

- **Profesionalismo**: Atención de primer nivel
- **Integridad**: Ética y transparencia en cada caso
- **Honestidad**: Compromiso con la verdad y la justicia
- **Experiencia**: Más de 35 años en el sector
- **Calidad**: Certificación ISO 9001-2015

## 📝 Infraestructura Tecnológica

### Centro de Contacto

- **Call Center de Clase Mundial**: Tecnología apegada a normas internacionales
- **CRM Propio**: Marcadores predictivos, grabación y reportes en tiempo real
- **Sistemas Modernos**: Garantía de seguridad y operación ininterrumpida

## 🚀 Despliegue

El sitio puede desplegarse en cualquier servicio de hosting estático:

- **Vercel**: Conecta el repositorio y despliega automáticamente
- **Netlify**: Arrastra la carpeta `dist`
- **GitHub Pages**: Usa GitHub Actions para despliegue automático
- **Hosting Tradicional**: Sube el contenido de `dist` vía FTP

### Comando de Build

```bash
npm run build
```

### Directorio de Salida

```
dist/
```

## 📄 Políticas y Documentación Legal

- Aviso de Privacidad
- Seguridad de la Información
- Política Antisoborno
- Sistema de Quejas
- Cumplimiento LFPDPPP

## 🎨 Paleta de Colores

- **Primario**: Azul Oscuro (#1e40af) - Confianza y profesionalismo
- **Secundario**: Cian (#06b6d4) - Modernidad y tecnología
- **Accent**: Varios colores para categorizar servicios
- **Neutrales**: Grises para texto y backgrounds

## ⚡ Características Interactivas

1. **Smooth Scrolling**: Navegación suave entre secciones
2. **Menú Móvil**: Toggle responsive para dispositivos móviles
3. **Validación de Formularios**: Campos requeridos en formulario de contacto
4. **Efectos Hover**: Cards y botones con estados hover
5. **Animaciones al Scroll**: Elementos aparecen al hacer scroll
6. **Cambio de Idioma**: Toggle fácil entre ES/EN

## 🔒 Seguridad y Cumplimiento

- HTTPS listo
- Cumplimiento LFPDPPP (Ley Federal de Protección de Datos Personales)
- Formulario de contacto conforme a normativas
- Referencias a políticas de seguridad
- Política anti-soborno

## 📄 Licencia

© 2024 Bufete Jurídico Pazos Chávez S.C. Todos los derechos reservados.

---

**Construido con ❤️ usando Astro y Tailwind CSS**

_Firma boutique de abogados - Más de 35 años de experiencia_
