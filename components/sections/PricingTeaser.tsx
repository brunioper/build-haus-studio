import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const pricingItems = [
  {
    type: "Landing Page",
    outcome: "Convertir tráfico en consultas o ventas.",
    includes: ["Estrategia de oferta", "Diseño a medida", "Formulario + medición", "10–15 días hábiles"],
  },
  {
    type: "E-commerce",
    outcome: "Tienda que presenta, convence y cierra.",
    includes: ["Diseño de tienda", "Páginas de producto", "Experiencia mobile", "Camino de compra optimizado"],
  },
  {
    type: "Sitio Empresarial",
    outcome: "Web que genera confianza y consultas.",
    includes: ["Arquitectura completa", "Servicios + contacto", "SEO básico", "Estructura escalable"],
  },
  {
    type: "App / Plataforma",
    outcome: "Herramienta digital construida para operar.",
    includes: ["Análisis funcional", "UX/UI completo", "Desarrollo web app", "Integraciones + escala"],
  },
];

export function PricingTeaser() {
  return (
    <section className="home-section pricing-teaser" id="inversion">
      <div className="home-shell">
        <div className="preview-head">
          <Reveal>
            <div className="home-label">05 — Inversión</div>
            <h2 className="home-head home-head--wide">Cada proyecto tiene su propio alcance y costo.</h2>
          </Reveal>
          <Reveal as="p" className="preview-intro" delay={0.08}>
            No publicamos tarifas fijas porque no construimos productos de catálogo. Te enviamos una propuesta con alcance, tiempo y costo real una vez que entendemos tu objetivo.
          </Reveal>
        </div>

        <div className="pricing-grid">
          {pricingItems.map((item, index) => (
            <Reveal className="pricing-card" key={item.type} delay={index * 0.06}>
              <div className="pricing-card__top">
                <span className="pricing-card__num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="pricing-card__type">{item.type}</h3>
                <p className="pricing-card__outcome">{item.outcome}</p>
              </div>
              <ul className="pricing-card__includes">
                {item.includes.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
              <Link href="/contacto" className="pricing-card__cta" data-hover>
                Consultar →
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="pricing-footer" delay={0.2}>
          <div className="pricing-footer__signal">
            <span>Brief gratuito</span>
            <span>Propuesta en 48 hs</span>
            <span>Sin compromiso</span>
          </div>
          <Link
            href="/contacto"
            className="contact-preview__button contact-preview__button--primary"
            data-hover
          >
            Hablemos de tu proyecto →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
