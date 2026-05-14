import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const serviceSignals = ["Captación", "Compra", "Confianza", "Operación", "Mejora"];

export function ServicesPreview() {
  return (
    <section className="home-section services-preview" id="servicios-preview">
      <div className="home-shell">
        <div className="preview-head">
          <Reveal>
            <div className="home-label">02 — Servicios</div>
            <h2 className="home-head">Qué construimos</h2>
          </Reveal>
          <Reveal as="p" className="preview-intro" delay={0.08}>
            Soluciones web pensadas para empresas que necesitan vender, captar consultas, lanzar mejor o mejorar su operación digital.
          </Reveal>
        </div>

        <div className="service-preview-grid">
          {services.map((service, index) => (
            <Reveal as="article" className="service-preview-card" data-hover key={service.title} delay={index * 0.04}>
              <span className="service-preview-card__num">{String(index + 1).padStart(2, "0")}</span>
              <div className="service-preview-card__schematic" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div>
                <span className="service-preview-card__signal">{serviceSignals[index]}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <Link href="/servicios" data-hover>
                  Ver servicio →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link className="home-cta" href="/servicios" data-hover>
            Explorar servicios →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
