import type { Metadata } from "next";

export const siteUrl = "https://buildhaus.studio";
export const siteName = "Build Haus Studio";
export const siteEmail = "hello@buildhaus.studio";

/* ── Shared keyword pool ─────────────────────────────────────────── */
const coreKeywords = [
  "diseño web Uruguay",
  "desarrollo web Uruguay",
  "diseño web Montevideo",
  "agencia web Uruguay",
  "páginas web Uruguay",
  "diseño web Argentina",
  "desarrollo web Argentina",
  "agencia digital Uruguay",
  "crear página web Uruguay",
  "diseño web empresas Uruguay",
  "landing pages Uruguay",
  "e-commerce Uruguay",
  "tienda online Uruguay",
  "sitios web empresariales Uruguay",
  "Shopify Uruguay",
  "agencia diseño web Montevideo",
  "presupuesto página web Uruguay",
  "cuánto cuesta una página web Uruguay",
  "diseño web profesional Uruguay",
  "web para empresas Uruguay",
];

/* ── Per-page metadata ────────────────────────────────────────────── */
export const homeMetadata: Metadata = {
  title: "Diseño Web Uruguay | Páginas, E-commerce y Apps | Build Haus Studio",
  description:
    "Agencia de diseño y desarrollo web en Montevideo, Uruguay. Landing pages desde $7.900 UYU, e-commerce Shopify y sitios empresariales. Lanzamos en 7 días. Trabajo con empresas en Uruguay y Argentina.",
  keywords: coreKeywords,
  alternates: { canonical: siteUrl },
};

export const serviciosMetadata: Metadata = {
  title: "Servicios de Diseño Web en Uruguay — Landing Pages, E-commerce, Sitios Empresariales",
  description:
    "Landing pages desde $7.900 UYU, tiendas Shopify, sitios web para empresas y apps a medida. Presupuesto sin compromiso. Build Haus Studio — Montevideo, Uruguay.",
  keywords: [
    ...coreKeywords,
    "landing pages Montevideo",
    "e-commerce Shopify Uruguay",
    "página web para empresa Uruguay",
    "cuánto cuesta landing page Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/servicios` },
};

export const agenciaMetadata: Metadata = {
  title: "Agencia de Diseño Web en Montevideo, Uruguay | Build Haus Studio",
  description:
    "Somos un estudio de diseño y desarrollo web en Montevideo. Estrategia, diseño premium y código limpio para empresas en Uruguay y Argentina que quieren convertir visitas en clientes.",
  keywords: [
    ...coreKeywords,
    "estudio web Uruguay",
    "agencia digital Montevideo",
    "quiénes somos agencia web Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/agencia` },
};

export const procesoMetadata: Metadata = {
  title: "Proceso de Diseño Web en 7 Días Hábiles | Build Haus Studio Uruguay",
  description:
    "De la idea al sitio web publicado en 7 días hábiles. Estrategia, diseño, desarrollo y lanzamiento para empresas en Uruguay y Argentina. Sin vueltas.",
  keywords: [
    ...coreKeywords,
    "website sprint Uruguay",
    "lanzar página web rápido Uruguay",
    "proceso diseño web Uruguay",
    "cuánto tarda hacer una web Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/proceso` },
};

export const proyectosMetadata: Metadata = {
  title: "Portfolio de Diseño Web en Uruguay | Proyectos Reales | Build Haus Studio",
  description:
    "Proyectos de diseño web, e-commerce y landing pages para empresas en Uruguay y Argentina. Hemistion, Growit UY, Cockpit UY, Zona Franca Colonia Suiza y más.",
  keywords: [
    ...coreKeywords,
    "portfolio web Uruguay",
    "proyectos diseño web Uruguay",
    "ejemplos páginas web Uruguay",
    "casos de éxito diseño web Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/proyectos` },
};

export const contactoMetadata: Metadata = {
  title: "Presupuesto Diseño Web Uruguay Sin Compromiso | Build Haus Studio",
  description:
    "Pedí tu presupuesto de diseño web en Uruguay sin compromiso. Respondemos en menos de 24 horas. Landing pages, e-commerce, sitios empresariales y apps en Montevideo.",
  keywords: [
    ...coreKeywords,
    "contratar diseño web Uruguay",
    "presupuesto página web Uruguay",
    "cotizar página web Uruguay",
    "brief gratuito diseño web Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/contacto` },
};

/* ── JSON-LD: Organization ───────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  email: siteEmail,
  telephone: "+59893806176",
  foundingDate: "2024",
  description:
    "Agencia de diseño y desarrollo web en Montevideo, Uruguay. Creamos landing pages, e-commerce, sitios web empresariales y apps para marcas en Uruguay y Argentina.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montevideo",
    addressRegion: "Montevideo",
    addressCountry: "UY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.9011,
    longitude: -56.1645,
  },
  areaServed: [
    { "@type": "Country", name: "Uruguay" },
    { "@type": "Country", name: "Argentina" },
  ],
  sameAs: [
    "https://www.instagram.com/buildhaus.studio/",
  ],
  knowsLanguage: ["es"],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de diseño y desarrollo web",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Pages",
          description: "Páginas de alta conversión para campañas, lanzamientos y captación de leads en Uruguay y Argentina.",
          url: `${siteUrl}/servicios#landing-pages`,
          areaServed: ["Uruguay", "Argentina"],
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce de Alta Conversión",
          description: "Tiendas online Shopify con foco en ventas y experiencia mobile para Uruguay y Argentina.",
          url: `${siteUrl}/servicios#e-commerce-de-alta-conversin`,
          areaServed: ["Uruguay", "Argentina"],
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sitios Web para Empresas",
          description: "Webs empresariales modernas para empresas en Uruguay y Argentina.",
          url: `${siteUrl}/servicios#sitios-web-para-empresas`,
          areaServed: ["Uruguay", "Argentina"],
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo de Apps",
          description: "Aplicaciones web y plataformas digitales a medida para negocios en Uruguay.",
          url: `${siteUrl}/servicios#desarrollo-de-apps`,
          areaServed: ["Uruguay", "Argentina"],
        },
      },
    ],
  },
};

/* ── JSON-LD: WebSite with SearchAction ─────────────────────────── */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  inLanguage: "es",
  publisher: { "@id": `${siteUrl}/#organization` },
};

/* ── JSON-LD: FAQ (home page) ────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta hacer una página web en Uruguay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Build Haus Studio las landing pages empiezan desde $7.900 UYU. Los sitios web empresariales y e-commerce se presupuestan según el alcance de cada proyecto. Contactanos para recibir un presupuesto sin compromiso en menos de 24 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo lleva hacer una página web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con un proceso de Website Sprint que permite lanzar en 7 días hábiles para proyectos enfocados como landing pages y sitios empresariales. E-commerce y apps pueden tomar más tiempo según el alcance.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen diseño web para empresas en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Build Haus Studio trabaja con empresas en Uruguay y Argentina de forma 100% remota. Tenemos clientes en Montevideo, Buenos Aires y el resto de la región latinoamericana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el diseño de una página web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada proyecto incluye estrategia de oferta, estructura de contenido, diseño visual a medida, desarrollo responsive, formulario de contacto y setup para medición. El proceso arranca con una sesión de descubrimiento para entender el negocio y los objetivos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es una landing page y para qué sirve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una landing page es una página diseñada con un único objetivo: convertir visitantes en clientes, leads o suscriptores. Es ideal para campañas de publicidad, lanzamientos de productos o captación de contactos en Uruguay y Argentina.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen sitios web con Shopify en Uruguay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Desarrollamos e-commerce con Shopify para marcas en Uruguay y Argentina, con páginas de producto optimizadas, colecciones, experiencia mobile y camino de compra orientado a la conversión.",
      },
    },
  ],
};

/* ── JSON-LD: HowTo (proceso) ────────────────────────────────────── */
export const procesoSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo hacemos el diseño y desarrollo web — Build Haus Studio",
  description: "De idea a sitio web publicado en 7 días hábiles.",
  totalTime: "P7D",
  step: [
    { "@type": "HowToStep", name: "Descubrimiento", text: "Entendemos negocio, oferta, audiencia y objetivos." },
    { "@type": "HowToStep", name: "Estructura",     text: "Mapeamos secciones, mensajes y CTAs antes de diseñar." },
    { "@type": "HowToStep", name: "Diseño",         text: "Sistema visual a medida con layout, tipografía y responsive." },
    { "@type": "HowToStep", name: "Desarrollo",     text: "Código limpio con Next.js, performance y experiencia mobile." },
    { "@type": "HowToStep", name: "Lanzamiento",    text: "Testing, publicación y configuración de analytics." },
    { "@type": "HowToStep", name: "Mejora continua", text: "Revisión y optimización post-lanzamiento." },
  ],
};

/* ── Breadcrumb helper ───────────────────────────────────────────── */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
