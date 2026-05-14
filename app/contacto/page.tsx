import type { Metadata } from "next";
import { bookingHref, contactEmail, whatsappHref } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contacto — Build Haus Studio",
  description:
    "Contactá a Build Haus Studio para landing pages, e-commerce, sitios web empresariales, apps o soporte para tiendas online.",
};

export default function ContactoPage() {
  return (
    <main className="page-shell contact-page">
      <section className="page-hero">
        <Reveal>
          <div className="home-label">Contacto</div>
          <h1>Contanos qué necesitás construir, corregir o lanzar.</h1>
        </Reveal>
        <Reveal as="p" delay={0.08}>
          Te respondemos con el próximo paso más claro. Solemos contestar dentro de las primeras 24 horas hábiles.
        </Reveal>
      </section>

      <section className="contact-layout">
        <Reveal className="contact-options">
          <a href={`mailto:${contactEmail}`} data-hover>Email — {contactEmail}</a>
          <a href={whatsappHref} data-hover>Contactanos por WhatsApp</a>
          <a href={bookingHref} data-hover>Agendar consulta</a>
        </Reveal>

        <Reveal as="form" className="contact-form" delay={0.08}>
          <label>
            Nombre
            <input name="nombre" type="text" autoComplete="name" required />
          </label>
          <label>
            Empresa
            <input name="empresa" type="text" autoComplete="organization" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Web actual
            <input name="web" type="url" inputMode="url" />
          </label>
          <label>
            ¿Qué necesitás?
            <select name="servicio" defaultValue="">
              <option value="" disabled>Seleccionar</option>
              <option>Landing page</option>
              <option>Sitio web empresarial</option>
              <option>Shopify / e-commerce</option>
              <option>Rediseño web</option>
              <option>Auditoría UX / conversión</option>
              <option>No estoy seguro todavía</option>
            </select>
          </label>
          <label>
            País
            <select name="pais" defaultValue="">
              <option value="" disabled>Seleccionar</option>
              <option>Uruguay</option>
              <option>Argentina</option>
              <option>Otro</option>
            </select>
          </label>
          <label className="contact-form__wide">
            Mensaje
            <textarea name="mensaje" rows={5} required />
          </label>
          <button className="contact-preview__button contact-preview__button--primary" type="submit" data-hover>
            Enviar solicitud →
          </button>
        </Reveal>
      </section>
    </main>
  );
}
