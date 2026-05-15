import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { agenciaMetadata, breadcrumbSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  ...agenciaMetadata,
  openGraph: {
    title: agenciaMetadata.title as string,
    description: agenciaMetadata.description as string,
    url: `${siteUrl}/agencia`,
    locale: "es_UY",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Inicio", url: siteUrl },
  { name: "Agencia", url: `${siteUrl}/agencia` },
]);

export default function AgenciaPage() {
  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="page-hero">
        <Reveal>
          <div className="home-label">Agencia</div>
          <h1>Estrategia, diseño y desarrollo. Todo en un mismo estudio.</h1>
        </Reveal>
        <Reveal as="p" delay={0.08}>
          Build Haus Studio es un estudio digital basado en Montevideo con presencia en Argentina. Trabajamos con empresas que necesitan una web que explique bien, cargue rápido y convierta visitas en consultas, ventas o clientes.
        </Reveal>
      </section>

      <section className="agency-grid">
        <Reveal className="agency-panel">
          <span>Cómo pensamos</span>
          <h2>Primero la estrategia. Después la estética.</h2>
          <p>
            Si el usuario no entiende en segundos qué ofrecés, por qué confiar y qué hacer después, el diseño es decoración cara. Definimos estructura, mensaje y recorrido antes de abrir Figma o escribir código.
          </p>
        </Reveal>
        <Reveal className="agency-panel" delay={0.06}>
          <span>Cómo construimos</span>
          <h2>Código limpio, performance real, cero templates.</h2>
          <p>
            No usamos temas genéricos ni constructores lentos. Desarrollamos con Next.js, Tailwind y componentes a medida. Cada proyecto carga rápido, escala bien y es fácil de mantener sin depender de nosotros para siempre.
          </p>
        </Reveal>
        <Reveal className="agency-panel" delay={0.12}>
          <span>Qué entregamos</span>
          <h2>Un activo digital que trabaja por tu negocio.</h2>
          <p>
            No entregamos un archivo de Figma ni un link de WordPress. Entregamos un sitio publicado, medible y listo para recibir tráfico. Con documentación, accesos y soporte de lanzamiento incluidos en cada proyecto.
          </p>
        </Reveal>
        <Reveal className="agency-panel" delay={0.18}>
          <span>Con quién trabajamos</span>
          <h2>Empresas con un objetivo concreto y presupuesto para lograrlo.</h2>
          <p>
            No somos para todos. Trabajamos mejor con empresas que saben qué quieren lograr, tienen un producto o servicio claro y entienden que una buena web es una inversión, no un gasto.
          </p>
        </Reveal>
      </section>

      <Reveal className="page-cta">
        <h2>Diseño con intención. Desarrollo con criterio. Resultados medibles.</h2>
        <Link href="/contacto" className="contact-preview__button contact-preview__button--primary" data-hover>
          Hablemos de tu proyecto →
        </Link>
      </Reveal>
    </main>
  );
}
