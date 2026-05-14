import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function HomeIntro() {
  return (
    <section className="home-section studio" id="inicio-positioning">
      <div className="home-shell home-grid">
        <Reveal>
          <div className="home-label">01 — Estudio</div>
          <h2 className="home-head home-head--wide">Webs que no solo se ven bien. Funcionan.</h2>
        </Reveal>
        <div className="home-copy">
          <Reveal as="p" delay={0.05}>
            Build Haus Studio diseña y desarrolla sitios web, landing pages, e-commerce y plataformas digitales para empresas que necesitan convertir visitas en consultas, ventas o clientes.
          </Reveal>
          <Reveal as="p" delay={0.1}>
            Trabajamos con empresas en Uruguay y Argentina desde una lógica simple: estrategia clara, diseño premium, código sólido y una experiencia pensada para que el usuario avance.
          </Reveal>
          <Reveal delay={0.15}>
            <Link className="home-cta" href="/servicios" data-hover>
              Ver servicios →
            </Link>
          </Reveal>
          <Reveal className="conversion-map" delay={0.18} aria-label="Mapa de conversión">
            <div className="conversion-map__meta">
              <span>Mapa comercial</span>
              <span>01 / 03</span>
            </div>
            <div className="conversion-map__steps">
              <span>Visita</span>
              <span>Claridad</span>
              <span>Contacto</span>
            </div>
            <div className="conversion-map__line" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
