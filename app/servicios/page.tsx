import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data";
import { breadcrumbSchema, serviciosMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  ...serviciosMetadata,
  openGraph: {
    title: serviciosMetadata.title as string,
    description: serviciosMetadata.description as string,
    url: `${siteUrl}/servicios`,
    locale: "es_UY",
    type: "website",
  },
};

const jsonLd = [
  breadcrumbSchema([
    { name: "Inicio", url: siteUrl },
    { name: "Servicios", url: `${siteUrl}/servicios` },
  ]),
];

const serviceMeta: Record<string, { price: string; time: string; signal: string }> = {
  "Landing Pages":                  { price: "desde $7.900 UYU", time: "7 días hábiles", signal: "Conversión" },
  "E-commerce de Alta Conversión":  { price: "a consultar",      time: "a consultar",    signal: "Ventas"     },
  "Sitios Web para Empresas":       { price: "a consultar",      time: "a consultar",    signal: "Confianza"  },
  "Desarrollo de Apps":             { price: "a consultar",      time: "a consultar",    signal: "Operación"  },
  "Soporte para E-commerce":        { price: "a consultar",      time: "mensual",        signal: "Mejora"     },
};

function slug(title: string) {
  return title.toLowerCase().replace(/[^a-záéíóúüñ0-9\s]/gi, "").trim().replace(/\s+/g, "-");
}

export default function ServiciosPage() {
  return (
    <main className="page-shell">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ── Hero ── */}
      <section className="page-hero">
        <Reveal>
          <div className="home-label">Servicios</div>
          <h1>Diseño web para empresas que necesitan vender, captar consultas o lanzar mejor.</h1>
        </Reveal>
        <div>
          <Reveal as="p" delay={0.08}>
            Desde Montevideo, trabajamos con marcas en Uruguay y Argentina para construir páginas web que explican mejor la oferta, cargan rápido y llevan al usuario hacia una acción concreta.
          </Reveal>
          <Reveal className="svc-hero-stats" delay={0.16}>
            {[
              { num: "15+", label: "Proyectos" },
              { num: "5",   label: "Servicios"  },
              { num: "7d",  label: "Sprint"     },
              { num: "2",   label: "Mercados"   },
            ].map((s) => (
              <div key={s.label} className="svc-hero-stat">
                <span className="svc-hero-stat__num">{s.num}</span>
                <span className="svc-hero-stat__label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Quick-jump nav ── */}
      <nav className="services-jumper" aria-label="Ir a servicio">
        {services.map((service) => (
          <a key={service.title} href={`#${slug(service.title)}`} data-hover>
            {service.title}
          </a>
        ))}
      </nav>

      {/* ── Service detail cards ── */}
      <section className="detail-stack" aria-label="Servicios de Build Haus Studio">
        {services.map((service, index) => {
          const meta = serviceMeta[service.title];
          return (
            <Reveal
              as="article"
              id={slug(service.title)}
              className="service-detail"
              key={service.title}
              delay={index * 0.04}
            >
              <div className="service-detail__index">{String(index + 1).padStart(2, "0")}</div>
              <div className="service-detail__main">

                <div className="service-detail__header">
                  <div>
                    {meta && <div className="service-detail__signal">{meta.signal}</div>}
                    <h2>{service.title}</h2>
                  </div>
                  {meta && (
                    <div className="service-detail__pricing">
                      <span className="service-detail__price">{meta.price}</span>
                      <span className="service-detail__time">{meta.time}</span>
                    </div>
                  )}
                </div>

                <p className="service-detail__lead">{service.short}</p>

                <div className="service-detail__blueprint" aria-hidden="true">
                  <span /><span /><span /><i />
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
          );
        })}
      </section>

      {/* ── Sprint callout ── */}
      <Reveal className="sprint-card svc-sprint" data-hover>
        <div>
          <div className="home-label">Website Sprint</div>
          <h2>Estrategia, diseño, desarrollo y lanzamiento en un proceso enfocado.</h2>
        </div>
        <ul>
          <li>Landings, webs empresariales y rediseños enfocados.</li>
          <li>Tiempo estimado: 7 días hábiles según alcance.</li>
          <li>Inversión desde $7.900 UYU según alcance y objetivos.</li>
          <li>2 rondas de ajustes y soporte de lanzamiento incluidos.</li>
        </ul>
        <Link className="home-cta" href="/contacto" data-hover>
          Solicitar website sprint →
        </Link>
      </Reveal>

      {/* ── Bottom CTA ── */}
      <Reveal className="page-cta">
        <h2>¿Cuánto cuesta? Depende del alcance.</h2>
        <p className="page-cta__copy">
          No publicamos precios fijos porque cada proyecto es diferente. Contanos qué necesitás y te enviamos una propuesta con alcance, tiempo y costo real.
        </p>
        <div className="page-cta__actions">
          <Link href="/contacto" className="contact-preview__button contact-preview__button--primary" data-hover>
            Consultar inversión →
          </Link>
          <Link href="/proceso" className="contact-preview__button" data-hover>
            Ver proceso
          </Link>
        </div>
      </Reveal>

    </main>
  );
}
