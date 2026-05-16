import type { Metadata } from "next";
import { bookingHref, contactEmail, instagramHref } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { breadcrumbSchema, contactoMetadata, siteEmail, siteUrl } from "@/lib/seo";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  ...contactoMetadata,
  openGraph: {
    title: contactoMetadata.title as string,
    description: contactoMetadata.description as string,
    url: `${siteUrl}/contacto`,
    locale: "es_UY",
    type: "website",
  },
};

const jsonLd = [
  breadcrumbSchema([
    { name: "Inicio", url: siteUrl },
    { name: "Contacto", url: `${siteUrl}/contacto` },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto — Build Haus Studio",
    url: `${siteUrl}/contacto`,
    description: "Contactá a Build Haus Studio para diseño web en Uruguay o Argentina.",
    mainEntity: {
      "@type": "Organization",
      name: "Build Haus Studio",
      email: siteEmail,
      url: siteUrl,
      areaServed: ["Uruguay", "Argentina"],
    },
  },
];

export default function ContactoPage() {
  return (
    <main className="page-shell contact-page">
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="contact-split">
        <div className="contact-split__left">
          <Reveal>
            <div className="home-label">Contacto</div>
            <h1>Contanos qué necesitás construir, corregir o lanzar.</h1>
          </Reveal>
          <Reveal as="p" className="contact-split__sub" delay={0.06}>
            Te respondemos con el próximo paso más claro. Solemos contestar dentro de las primeras 24 horas hábiles.
          </Reveal>
          <Reveal className="contact-options" delay={0.1}>
            <a href={`mailto:${contactEmail}`} data-hover>Email — {contactEmail}</a>
            <a href={instagramHref} target="_blank" rel="noreferrer" data-hover>Instagram — @buildhaus.studio</a>
            <a href={bookingHref} target="_blank" rel="noreferrer" data-hover>Agendar consulta →</a>
          </Reveal>
        </div>

        <div className="contact-split__right">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
