import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="home-section contact-preview" id="contacto-preview">
      <div className="contact-preview__inner">
        <div>
          <Reveal as="h2" className="contact-preview__head">
            Tu próxima web empieza con una conversación.
          </Reveal>
          <Reveal as="p" className="contact-preview__copy" delay={0.08}>
            Contanos qué necesitás construir, mejorar o lanzar. Te respondemos con el próximo paso más claro, sin compromisos ni presupuestos inventados.
          </Reveal>
        </div>
        <Reveal className="contact-preview__actions" delay={0.1}>
          <div className="contact-preview__signal" aria-hidden="true">
            <span>Brief gratuito</span>
            <span>Propuesta en 48 hs</span>
            <span>Lanzamiento</span>
          </div>
          <Link className="contact-preview__button contact-preview__button--primary" href="/contacto" data-hover>
            Hablemos →
          </Link>
          <Link className="contact-preview__button" href="/servicios" data-hover>
            Ver servicios
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
