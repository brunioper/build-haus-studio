import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Agencia — Build Haus Studio",
  description:
    "Build Haus Studio es un estudio web basado en Montevideo, con presencia asociada en Argentina, para empresas que necesitan convertir mejor.",
};

export default function AgenciaPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <Reveal>
          <div className="home-label">Agencia</div>
          <h1>Un estudio web entre Montevideo y Argentina.</h1>
        </Reveal>
        <Reveal as="p" delay={0.08}>
          Build Haus Studio está basado en Montevideo y trabaja con empresas en Uruguay y Argentina. También contamos con presencia asociada en Argentina para acompañar proyectos y conversaciones comerciales del otro lado del río.
        </Reveal>
      </section>

      <section className="agency-grid">
        <Reveal className="agency-panel">
          <span>Cómo pensamos</span>
          <h2>Tu web tiene que explicar, convencer y convertir.</h2>
          <p>
            Si el usuario no entiende rápido qué ofrecés, por qué confiar y qué hacer después, la estética no alcanza. Diseñamos estructura, mensaje y experiencia para que cada sección empuje una decisión.
          </p>
        </Reveal>
        <Reveal className="agency-panel" delay={0.08}>
          <span>Cómo trabajamos</span>
          <h2>Menos relleno. Más estructura.</h2>
          <p>
            No hacemos páginas para llenar espacio. Cada bloque tiene una función: aclarar una objeción, mostrar una solución, ordenar una oferta o acercar al visitante al contacto, la compra o la reserva.
          </p>
        </Reveal>
      </section>

      <Reveal className="page-cta">
        <h2>Diseño con intención. Desarrollo con criterio.</h2>
        <Link href="/contacto" className="contact-preview__button contact-preview__button--primary" data-hover>
          Contactanos →
        </Link>
      </Reveal>
    </main>
  );
}
