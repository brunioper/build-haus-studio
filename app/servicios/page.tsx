import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios — Build Haus Studio",
  description:
    "Landing pages, e-commerce de alta conversión, sitios web para empresas, desarrollo de apps y soporte e-commerce para marcas en Uruguay y Argentina.",
};

export default function ServiciosPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <Reveal>
          <div className="home-label">Servicios</div>
          <h1>Diseño web para empresas que necesitan vender, captar consultas o lanzar mejor.</h1>
        </Reveal>
        <Reveal as="p" delay={0.08}>
          Desde Montevideo, trabajamos con marcas en Uruguay y Argentina para construir páginas web que explican mejor la oferta, cargan rápido y llevan al usuario hacia una acción concreta.
        </Reveal>
      </section>

      <section className="detail-stack" aria-label="Servicios de Build Haus Studio">
        {services.map((service, index) => (
          <Reveal as="article" className="service-detail" key={service.title} delay={index * 0.04}>
            <div className="service-detail__index">{String(index + 1).padStart(2, "0")}</div>
            <div className="service-detail__main">
              <h2>{service.title}</h2>
              <p className="service-detail__lead">{service.short}</p>
              <div className="service-detail__blueprint" aria-hidden="true">
                <span />
                <span />
                <span />
                <i />
              </div>
              <div className="service-detail__grid">
                <div>
                  <span>Qué es</span>
                  <p>{service.what}</p>
                </div>
                <div>
                  <span>Para quién es</span>
                  <ul>{service.forWhom.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <span>Problemas que resuelve</span>
                  <ul>{service.problems.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <span>Qué incluye</span>
                  <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
              <Link className="home-cta" href="/contacto" data-hover>
                {service.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
