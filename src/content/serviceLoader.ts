// Utilidades para cargar servicios legales desde archivos JSON individuales

export interface LegalService {
  id: string;
  slug: string;
  category: 'legal';
  icon: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  services: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  benefits: {
    title: string;
    stats: Array<{
      value: string;
      label: string;
      description: string;
    }>;
  };
  industries?: {
    title: string;
    items: Array<{
      emoji: string;
      name: string;
    }>;
  };
  relatedServices: Array<{
    slug: string;
    title: string;
    description: string;
  }>;
}

interface ServiceData {
  id: string;
  slug: string;
  category: 'legal';
  icon: string;
  es: Omit<LegalService, 'id' | 'slug' | 'category' | 'icon'>;
  en: Omit<LegalService, 'id' | 'slug' | 'category' | 'icon'>;
}

// Mapeo de servicios disponibles
const serviceFiles = {
  'asesoria-consultoria': () => import('./legal-services/asesoria-consultoria.json'),
  'derecho-fiscal': () => import('./legal-services/derecho-fiscal.json'),
  // TODO: Add remaining services as JSON files are created:
  // 'derecho-civil-mercantil': () => import('./legal-services/derecho-civil-mercantil.json'),
  // 'derecho-familiar': () => import('./legal-services/derecho-familiar.json'),
  // 'derecho-administrativo': () => import('./legal-services/derecho-administrativo.json'),
  // 'expropiacion': () => import('./legal-services/expropiacion.json'),
  // 'patentes-marcas': () => import('./legal-services/patentes-marcas.json'),
  // 'cobranza': () => import('./legal-services/cobranza.json'),
};

// Obtener servicio por slug y idioma
export async function getLegalServiceBySlug(
  slug: string,
  lang: 'es' | 'en'
): Promise<LegalService | null> {
  try {
    const loader = serviceFiles[slug as keyof typeof serviceFiles];
    if (!loader) return null;

    const module = await loader();
    const data: ServiceData = module.default;

    return {
      id: data.id,
      slug: data.slug,
      category: data.category,
      icon: data.icon,
      ...data[lang],
    };
  } catch (error) {
    console.error(`Error loading service ${slug}:`, error);
    return null;
  }
}

// Obtener todos los slugs disponibles
export function getAllLegalServiceSlugs(): string[] {
  return Object.keys(serviceFiles);
}

// Obtener todos los servicios (útil para listados)
export async function getAllLegalServices(lang: 'es' | 'en'): Promise<LegalService[]> {
  const slugs = getAllLegalServiceSlugs();
  const services = await Promise.all(
    slugs.map((slug) => getLegalServiceBySlug(slug, lang))
  );
  return services.filter((s): s is LegalService => s !== null);
}
