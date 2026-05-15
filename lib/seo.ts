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
];

/* ── Per-page metadata ────────────────────────────────────────────── */
export const homeMetadata: Metadata = {
  title: "Diseño y Desarrollo Web en Uruguay | Build Haus Studio",
  description:
    "Agencia de diseño y desarrollo web en Montevideo, Uruguay. Landing pages, e-commerce, sitios web para empresas y apps. Lanzamos en 7 días. Clientes en Uruguay y Argentina.",
  keywords: coreKeywords,
  alternates: { canonical: siteUrl },
};

export const serviciosMetadata: Metadata = {
  title: "Servicios de Diseño Web en Uruguay | Build Haus Studio",
  description:
    "Landing pages desde $7.900 UYU, e-commerce Shopify, sitios web empresariales, apps y soporte continuo para marcas en Uruguay y Argentina.",
  keywords: [
    ...coreKeywords,
    "landing pages Montevideo",
    "e-commerce Shopify Uruguay",
    "página web para empresa Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/servicios` },
};

export const agenciaMetadata: Metadata = {
  title: "Agencia Web en Montevideo, Uruguay | Build Haus Studio",
  description:
    "Estudio de diseño web en Montevideo. Estrategia, diseño premium y código limpio para empresas en Uruguay y Argentina que necesitan convertir visitas en clientes.",
  keywords: [
    ...coreKeywords,
    "agencia diseño web Montevideo",
    "estudio web Uruguay",
    "agencia digital Montevideo",
  ],
  alternates: { canonical: `${siteUrl}/agencia` },
};

export const procesoMetadata: Metadata = {
  title: "Proceso de Diseño Web en 7 Días | Build Haus Studio Uruguay",
  description:
    "De idea a sitio web publicado en 7 días hábiles. Estrategia, diseño, desarrollo y lanzamiento para empresas en Uruguay y Argentina.",
  keywords: [
    ...coreKeywords,
    "website sprint Uruguay",
    "lanzar página web rápido Uruguay",
    "proceso diseño web Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/proceso` },
};

export const proyectosMetadata: Metadata = {
  title: "Proyectos de Diseño Web en Uruguay | Build Haus Studio",
  description:
    "Portfolio de sitios web, e-commerce y landing pages para empresas en Uruguay y Argentina. Hemistion, Growit UY, Cockpit UY, Zona Franca Colonia Suiza.",
  keywords: [
    ...coreKeywords,
    "portfolio web Uruguay",
    "proyectos diseño web Uruguay",
    "ejemplos páginas web Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/proyectos` },
};

export const contactoMetadata: Metadata = {
  title: "Contacto — Diseño Web Uruguay | Build Haus Studio",
  description:
    "Contactá a Build Haus Studio para diseño web en Uruguay o Argentina. Brief gratuito, propuesta en 48 hs y sin compromiso. Respondemos en menos de 24 hs.",
  keywords: [
    ...coreKeywords,
    "contratar diseño web Uruguay",
    "presupuesto página web Uruguay",
  ],
  alternates: { canonical: `${siteUrl}/contacto` },
};

/* ── JSON-LD: Organization + LocalBusiness ───────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  email: siteEmail,
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
          description: "Páginas de alta conversión para campañas, lanzamientos y captación de leads.",
          url: `${siteUrl}/servicios#landing-pages`,
          areaServed: ["Uruguay", "Argentina"],
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce de Alta Conversión",
          description: "Tiendas online Shopify con foco en ventas y experiencia mobile.",
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
          description: "Aplicaciones web y plataformas digitales a medida.",
          url: `${siteUrl}/servicios#desarrollo-de-apps`,
          areaServed: ["Uruguay", "Argentina"],
        },
      },
    ],
  },
};

/* ── JSON-LD: WebSite ────────────────────────────────────────────── */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  inLanguage: "es",
  publisher: { "@id": `${siteUrl}/#organization` },
};

/* ── JSON-LD: HowTo (proceso) ────────────────────────────────────── */
export const procesoSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Proceso de diseño y desarrollo web — Build Haus Studio",
  description: "De idea desordenada a sitio web publicado en 7 días hábiles.",
  totalTime: "P7D",
  step: [
    { "@type": "HowToStep", name: "Descubrimiento", text: "Entendemos negocio, oferta, audiencia y objetivos." },
    { "@type": "HowToStep", name: "Estructura",     text: "Mapeamos secciones, mensajes y CTAs antes de diseñar." },
    { "@type": "HowToStep", name: "Diseño",         text: "Sistema visual a medida con layout, tipografía y responsive." },
    { "@type": "HowToStep", name: "Desarrollo",     text: "Código limpio con Next.js, performance y experiencia mobile." },
    { "@type": "HowToStep", name: "Lanzamiento",    text: "Testing, publicación y configuración de analytics." },
    { "@type": "HowToStep", name: "Mejora continua",text: "Revisión y optimización post-lanzamiento." },
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
