import Link from "next/link";
import { clientProjects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsPreview() {
  return (
    <section className="home-section projects-preview" id="proyectos-preview">
      <div className="home-shell">
        <div className="preview-head">
          <Reveal>
            <div className="home-label">03 — Clientes</div>
            <h2 className="home-head home-head--wide">Trabajo real para marcas que necesitaban publicar, vender o mejorar.</h2>
          </Reveal>
          <Reveal as="p" className="preview-intro" delay={0.08}>
            Sitios web, e-commerce y soporte para empresas reales. Mostramos qué hicimos, no porcentajes inventados.
          </Reveal>
        </div>

        <Reveal className="client-proof-strip" delay={0.08}>
          <span>6 proyectos reales</span>
          <span>Desarrollo · E-commerce · Soporte</span>
          <span>Uruguay + mercados externos</span>
        </Reveal>

        <div className="client-proof-grid">
          {clientProjects.map((project, index) => (
            <Reveal as="article" className="client-card" data-hover key={project.name} delay={index * 0.04}>
              <a href={project.url} target="_blank" rel="noreferrer" className="client-card__screen" aria-label={`Visitar ${project.name}`} data-hover>
                <img src={project.image} alt={`Captura del sitio web de ${project.name}`} loading="lazy" />
                <span>Ver sitio ↗</span>
              </a>
              <div className="client-card__body">
                <div className="client-card__meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.service}</span>
                </div>
                <h3>{project.name}</h3>
                <dl>
                  <dt>Tipo de proyecto</dt>
                  <dd>{project.type}</dd>
                  <dt>Qué hicimos</dt>
                  <dd>{project.did}</dd>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="client-proof-actions" delay={0.1}>
          <Link className="home-cta" href="/proyectos" data-hover>Ver proyectos →</Link>
          <Link className="home-cta" href="/contacto" data-hover>Contactanos →</Link>
        </Reveal>
      </div>
    </section>
  );
}
