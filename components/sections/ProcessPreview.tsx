import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const shortSteps = ["Entender", "Estructurar", "Diseñar", "Desarrollar y lanzar"];

export function ProcessPreview() {
  return (
    <section className="home-section process-preview" id="proceso-preview">
      <div className="home-shell process-preview__layout">
        <div>
          <Reveal>
            <div className="home-label">04 — Proceso</div>
            <h2 className="home-head home-head--wide">Un proceso claro para lanzar mejor.</h2>
          </Reveal>
          <Reveal as="p" className="process-preview__copy" delay={0.06}>
            No empezamos por decorar pantallas. Primero entendemos qué tiene que lograr la web, qué debe comunicar y qué acción queremos que tome el usuario.
          </Reveal>
          <Reveal delay={0.12}>
            <Link className="home-cta" href="/proceso" data-hover>
              Ver proceso →
            </Link>
          </Reveal>
        </div>
        <Reveal className="process-preview__steps" delay={0.08}>
          <span className="process-preview__rail" aria-hidden="true" />
          {shortSteps.map((step, index) => (
            <article className="process-preview__step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              <i aria-hidden="true" />
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
