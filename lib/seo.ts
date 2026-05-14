import type { Metadata } from "next";

export const siteUrl = "https://buildhausstudio.com";

export const homeMetadata: Metadata = {
  title: "Build Haus Studio — Diseño web en Uruguay y Argentina",
  description:
    "Estudio de diseño y desarrollo web en Montevideo, trabajando con empresas en Uruguay y Argentina. Creamos landing pages, e-commerce de alta conversión, sitios web empresariales, apps y soporte para tiendas online.",
  keywords: [
    "diseño web en Uruguay",
    "diseño web en Argentina",
    "diseño web en Montevideo",
    "diseño web en Buenos Aires",
    "desarrollo web",
    "landing pages",
    "e-commerce de alta conversión",
    "sitios web para empresas",
    "desarrollo de apps web",
    "soporte e-commerce",
    "Shopify",
    "páginas web que convierten",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Build Haus Studio",
  url: siteUrl,
  email: "hello@buildhausstudio.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montevideo",
    addressCountry: "Uruguay",
  },
  areaServed: ["Uruguay", "Argentina"],
};
