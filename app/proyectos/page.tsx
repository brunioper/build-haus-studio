import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { clientProjects } from "@/lib/data";
import { breadcrumbSchema, proyectosMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  ...proyectosMetadata,
  openGraph: {
    title: proyectosMetadata.title as string,
    description: proyectosMetadata.description as string,
    url: `${siteUrl}/proyectos`,
    locale: "es_UY",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Inicio", url: siteUrl },
  { name: "Proyectos", url: `${siteUrl}/proyectos` },
]);

export default function ProyectosPage() {
  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="page-hero">
        <Reveal>
          <div className="home-label">Proyectos</div>
          <h1>Proyectos seleccionados, resultados reales.</h1>
        </Reveal>
        <Reveal as="p" delay={0.08}>
          Mostramos qué servicio se realizó, qué problema se resolvió y qué entregable quedó construido. Sin porcentajes inventados, sin logos falsos, sin testimonios fabricados.
        </Reveal>
      </section>

      <section className="project-list">
        {clientProjects.map((project, index) => (
          <Reveal as="article" className="project-detail-card" key={project.name} delay={index * 0.05} data-hover>
            <div className="project-detail-card__blueprint" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <a href={project.url} target="_blank" rel="noreferrer" className="project-detail-card__screen" data-hover>
              <img src={project.image} alt={`Captura del sitio web de ${project.name}`} loading="lazy" />
            </a>
            <div className="project-detail-card__head">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{project.name}</h2>
            </div>
            <dl>
              <dt>Servicio realizado</dt>
              <dd>{project.service}</dd>
              <dt>Tipo de proyecto</dt>
              <dd>{project.type}</dd>
              <dt>Qué hicimos</dt>
              <dd>{project.did}</dd>
              <dt>Objetivo del trabajo</dt>
              <dd>{project.objective}</dd>
              <dt>Entregable</dt>
              <dd>{project.deliverable}</dd>
            </dl>
          </Reveal>
        ))}
      </section>

      <Reveal className="page-cta">
        <h2>¿Querés construir algo con un objetivo claro?</h2>
        <Link href="/contacto" className="contact-preview__button contact-preview__button--primary" data-hover>
          Contactanos →
        </Link>
      </Reveal>
    </main>
  );
}
