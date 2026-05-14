export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Proceso", href: "/proceso" },
  { label: "Agencia", href: "/agencia" },
  { label: "Contacto", href: "/contacto" },
];

export const services = [
  {
    title: "Landing Pages",
    short: "Páginas diseñadas con un objetivo claro: convertir visitas en acciones.",
    what:
      "Una página enfocada en una oferta, una audiencia y una acción concreta: consulta, registro, compra, reserva o validación.",
    forWhom: ["Campañas de anuncios", "Lanzamientos", "Servicios específicos", "Captación de leads", "Validación de ofertas"],
    problems: ["El tráfico llega pero no consulta", "La oferta no se entiende rápido", "El formulario queda perdido", "La página no mide acciones"],
    includes: ["Estrategia de oferta", "Estructura orientada a conversión", "Diseño a medida", "Desarrollo responsive", "Formulario o integración de contacto", "Setup preparado para medición"],
    cta: "Crear una landing →",
  },
  {
    title: "E-commerce de Alta Conversión",
    short: "Tiendas online pensadas para vender más y mejorar la experiencia de compra.",
    what:
      "Diseño y desarrollo de tiendas online con foco en claridad de producto, navegación, promociones, experiencia mobile y camino de compra.",
    forWhom: ["Tiendas Shopify", "Marcas DTC", "Catálogos online", "Negocios que venden por internet", "Stores que reciben tráfico pero no convierten bien"],
    problems: ["Productos difíciles de comparar", "Colecciones desordenadas", "Promociones poco claras", "Compra lenta o friccionada"],
    includes: ["Diseño de tienda online", "Páginas de producto optimizadas", "Mejoras en colecciones", "Secciones promocionales", "Experiencia mobile", "Optimización del camino de compra"],
    cta: "Mejorar mi e-commerce →",
  },
  {
    title: "Sitios Web para Empresas",
    short: "Webs profesionales para marcas que necesitan verse modernas, confiables y listas para crecer.",
    what:
      "Sitios institucionales y comerciales para empresas que necesitan explicar servicios, mostrar trayectoria y abrir un camino claro hacia la consulta.",
    forWhom: ["Empresas de servicios", "Consultoras", "Estudios profesionales", "Negocios locales", "Empresas en Uruguay y Argentina"],
    problems: ["La empresa se ve desactualizada", "Los servicios no se explican bien", "No hay estructura para crecer", "El contacto no está priorizado"],
    includes: ["Home", "Secciones de servicios", "Página institucional", "Equipo o trayectoria", "Formulario de contacto", "SEO básico", "Estructura escalable"],
    cta: "Crear mi sitio empresarial →",
  },
  {
    title: "Desarrollo de Apps",
    short: "Aplicaciones web y plataformas digitales a medida para necesidades reales de negocio.",
    what:
      "Herramientas digitales, portales y plataformas internas construidas alrededor de procesos concretos, no alrededor de funciones decorativas.",
    forWhom: ["Plataformas internas", "Dashboards", "Portales para clientes", "Herramientas de gestión", "MVPs digitales"],
    problems: ["Procesos manuales repetidos", "Datos dispersos", "Usuarios sin autoservicio", "MVPs que necesitan salir ordenados"],
    includes: ["Análisis funcional", "UX/UI", "Desarrollo web app", "Paneles o dashboards", "Integraciones", "Escalabilidad técnica"],
    cta: "Desarrollar una app →",
  },
  {
    title: "Soporte para E-commerce",
    short: "Acompañamiento técnico y estratégico para que tu tienda siga mejorando después del lanzamiento.",
    what:
      "Soporte continuo para tiendas online: mejoras técnicas, corrección de errores, integraciones, mantenimiento y optimización de conversión.",
    forWhom: ["Tiendas Shopify activas", "E-commerce con errores técnicos", "Marcas que necesitan mejoras constantes", "Equipos que quieren soporte externo", "Negocios que quieren optimizar conversión"],
    problems: ["Errores que frenan ventas", "Cambios que el equipo no puede implementar", "Apps mal integradas", "Mejoras pendientes que nunca salen"],
    includes: ["Corrección de errores", "Mejoras técnicas", "Ajustes de producto", "Integraciones", "Optimización de conversión", "Mantenimiento continuo"],
    cta: "Solicitar soporte →",
  },
];

export const projects = [
  {
    title: "Landing para campaña",
    service: "Landing Page",
    type: "Página de captación",
    did: "Estructura de mensaje, diseño visual, CTA principal y formulario.",
    problem: "El tráfico necesitaba una página alineada con una oferta concreta.",
    objective: "Convertir visitas de campaña en consultas calificadas.",
    deliverable: "Landing responsive lista para publicar y medir.",
  },
  {
    title: "E-commerce / Shopify",
    service: "E-commerce de Alta Conversión",
    type: "Tienda online",
    did: "Páginas de producto, colecciones, secciones promocionales y experiencia mobile.",
    problem: "La navegación y la presentación de producto no empujaban una decisión clara.",
    objective: "Mejorar claridad, navegación y camino de compra.",
    deliverable: "Sistema de secciones para tienda online y ajustes de conversión.",
  },
  {
    title: "Sitio web empresarial",
    service: "Sitio Web para Empresas",
    type: "Web institucional comercial",
    did: "Arquitectura web, servicios, presentación institucional y contacto.",
    problem: "La empresa necesitaba verse confiable y explicar mejor su oferta.",
    objective: "Transmitir confianza y generar consultas.",
    deliverable: "Sitio responsive con estructura escalable.",
  },
  {
    title: "MVP de plataforma",
    service: "Desarrollo de Apps",
    type: "Aplicación web",
    did: "UX/UI, flujo principal, panel inicial e integración base.",
    problem: "El negocio necesitaba validar una herramienta digital sin construir de más.",
    objective: "Lanzar una primera versión clara y usable.",
    deliverable: "Web app inicial preparada para iterar.",
  },
];

export const clientProjects = [
  {
    name: "Hemistion",
    url: "https://hemistion.com/",
    service: "Desarrollo",
    type: "Sitio web corporativo",
    image: "/assets/clients/hemistion.jpg",
    did: "Desarrollo del sitio web y puesta en producción de la experiencia.",
    objective: "Presentar una operación global con una web clara, navegable y sólida.",
    deliverable: "Sitio web desarrollado.",
  },
  {
    name: "Opertti Asociados",
    url: "https://operttiasociados.net/",
    service: "Desarrollo",
    type: "Sitio web profesional",
    image: "/assets/clients/opertti-asociados.jpg",
    did: "Desarrollo del sitio web institucional.",
    objective: "Ordenar la presencia digital de una firma profesional y facilitar el contacto.",
    deliverable: "Sitio web desarrollado.",
  },
  {
    name: "Growit UY",
    url: "https://growituy.com/",
    service: "E-commerce",
    type: "Tienda online",
    image: "/assets/clients/growituy.jpg",
    did: "Construcción y ajustes de experiencia e-commerce.",
    objective: "Mostrar productos, ordenar categorías y sostener una experiencia de compra clara.",
    deliverable: "E-commerce publicado.",
  },
  {
    name: "Cockpit UY",
    url: "https://cockpituy.com/",
    service: "E-commerce",
    type: "Tienda online",
    image: "/assets/clients/cockpit-uy.jpg",
    did: "Desarrollo e implementación de experiencia e-commerce.",
    objective: "Dar soporte digital a una tienda con navegación de productos y camino de compra.",
    deliverable: "E-commerce publicado.",
  },
  {
    name: "Zona Franca Colonia Suiza",
    url: "https://www.zonafrancacoloniasuiza.com/",
    service: "Sitio empresarial",
    type: "Sitio empresarial",
    image: "/assets/clients/zona-franca-colonia-suiza.jpg",
    did: "Desarrollo de sitio empresarial para comunicar ubicación, servicios y propuesta.",
    objective: "Construir una presencia institucional confiable para un proyecto empresarial.",
    deliverable: "Sitio web empresarial.",
  },
  {
    name: "JUV Activewear",
    url: "https://www.juv-activewear.co.il/",
    service: "Soporte e-commerce",
    type: "Soporte e-commerce",
    image: "/assets/clients/juv-activewear.jpg",
    did: "Soporte y mejoras sobre experiencia de tienda online.",
    objective: "Acompañar la operación de e-commerce con ajustes técnicos y de experiencia.",
    deliverable: "Soporte e-commerce.",
  },
];

export const processSteps = [
  {
    title: "Descubrimiento",
    copy: "Entendemos negocio, oferta, audiencia, objetivos y qué necesita lograr la web.",
  },
  {
    title: "Estructura",
    copy: "Mapeamos secciones, mensajes, CTAs y recorrido antes de diseñar.",
  },
  {
    title: "Diseño",
    copy: "Creamos un sistema visual a medida con layout, tipografía, motion y responsive.",
  },
  {
    title: "Desarrollo",
    copy: "Construimos con código limpio, performance en mente y experiencia mobile fluida.",
  },
  {
    title: "Lanzamiento",
    copy: "Testeamos, pulimos, publicamos y conectamos formularios o tracking.",
  },
  {
    title: "Mejora continua",
    copy: "Revisamos comportamiento, fricción y oportunidades de mejora cuando la web ya está viva.",
  },
];

export const contactEmail = "hello@buildhausstudio.com";
export const whatsappHref = "https://wa.me/AGREGAR_NUMERO_DE_WHATSAPP";
export const bookingHref = "#AGREGAR_LINK_DE_BOOKING";
