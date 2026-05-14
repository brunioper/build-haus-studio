import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proceso — Build Haus Studio",
  description:
    "Proceso de estrategia, estructura, diseño, desarrollo, lanzamiento y mejora continua para sitios web en Uruguay y Argentina.",
};

export default function ProcesoPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <Reveal>
          <div className="home-label">Proceso</div>
          <h1>De idea desordenada a web publicada, sin vueltas eternas.</h1>
        </Reveal>
        <Reveal as="p" delay={0.08}>
          Una web clara no aparece por decorar pantallas. Primero se ordena el negocio, después el mensaje, después la experiencia y recién ahí el diseño y el código.
        </Reveal>
      </section>

      <section className="timeline-detail">
        <div className="timeline-detail__map" aria-hidden="true">
          <span>Brief</span>
          <span>Mapa</span>
          <span>Diseño</span>
          <span>Código</span>
          <span>Lanzamiento</span>
        </div>
        {processSteps.map((step, index) => (
          <Reveal as="article" className="timeline-detail__item" key={step.title} delay={index * 0.04}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step.title}</h2>
            <p>{step.copy}</p>
          </Reveal>
        ))}
      </section>

      <Reveal className="sprint-card" data-hover>
        <div>
          <div className="home-label">Website Sprint</div>
          <h2>Estrategia, diseño, desarrollo y lanzamiento en un proceso enfocado.</h2>
        </div>
        <ul>
          <li>Landings, webs empresariales y rediseños enfocados.</li>
          <li>Tiempo estimado: 10–15 días hábiles según alcance.</li>
          <li>Desde USD [completar precio].</li>
          <li>2 rondas de ajustes y soporte de lanzamiento.</li>
        </ul>
        <Link className="home-cta" href="/contacto" data-hover>
          Solicitar website sprint →
        </Link>
      </Reveal>
    </main>
  );
}
