import Link from "next/link";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsPreview() {
  return (
    <section className="home-section projects-preview" id="proyectos-preview">
      <div className="home-shell">
        <div className="preview-head">
          <Reveal>
            <div className="home-label">03 — Proyectos</div>
            <h2 className="home-head home-head--wide">Proyectos seleccionados, resultados reales.</h2>
          </Reveal>
          <Reveal as="p" className="preview-intro" delay={0.08}>
            Mostramos servicios realizados, problemas resueltos y mejoras implementadas. Sin métricas inventadas.
          </Reveal>
        </div>

        <div className="projects-preview-grid">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal as="article" className="project-preview-card" data-hover key={project.title} delay={index * 0.05}>
              <div className="project-preview-card__visual" aria-hidden="true">
                <span />
                <span />
                <span />
                <i />
              </div>
              <div>
                <div className="project-preview-card__meta">Servicio realizado</div>
                <h3>{project.title}</h3>
              </div>
              <dl>
                <dt>Servicio</dt>
                <dd>{project.service}</dd>
                <dt>Qué hicimos</dt>
                <dd>{project.did}</dd>
                <dt>Objetivo</dt>
                <dd>{project.objective}</dd>
              </dl>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link className="home-cta" href="/proyectos" data-hover>
            Ver proyectos →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
