import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="home-section contact-preview" id="contacto-preview">
      <div className="contact-preview__inner">
        <div>
          <Reveal as="h2" className="contact-preview__head">
            ¿Tu web actual está trabajando lo suficiente?
          </Reveal>
          <Reveal as="p" className="contact-preview__copy" delay={0.08}>
            Si necesitás una landing, un e-commerce, un sitio empresarial, una app o soporte para tu tienda, contanos qué querés construir.
          </Reveal>
        </div>
        <Reveal className="contact-preview__actions" delay={0.1}>
          <div className="contact-preview__signal" aria-hidden="true">
            <span>Brief</span>
            <span>Propuesta</span>
            <span>Sprint</span>
          </div>
          <Link className="contact-preview__button contact-preview__button--primary" href="/contacto" data-hover>
            Contactanos →
          </Link>
          <Link className="contact-preview__button" href="/servicios" data-hover>
            Ver servicios
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
